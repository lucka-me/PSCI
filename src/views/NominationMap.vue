<template>
<material-top-app-bar :title="title" navi-back/>
<material-top-app-bar-adjust/>
<main class="ignore-safe-area nomination-map">
    <div id="map-container"/>
</main>
</template>

<script lang="ts">
import { Vue, Options, Watch } from 'vue-property-decorator';
import 'mapbox-gl/dist/mapbox-gl.css';

import { dia } from '@/service/dia';
import { umi } from '@/service/umi';
import Nomination from '@/service/nomination';

import MaterialTopAppBar from '@/components/material/TopAppBar.vue';
import MaterialTopAppBarAdjust from '@/components/material/TopAppBarAdjust.vue';

import locales from './NominationMap.locales.json';

@Options({
    components: {
        MaterialTopAppBar, MaterialTopAppBarAdjust,
    },
    i18n: {
        messages: locales
    }
})
export default class NominationMap extends Vue {

    private ctrl?: mapboxgl.Map;

    get title(): string {
        return this.commonSense?.title ?? this.$t('all');
    }

    private get commonSense(): umi.CommonSense | null {
        if (this.$route.query.status && typeof(this.$route.query.status) === 'string') {
            const code = parseInt(this.$route.query.status);
            return umi.status.get(code) || null;
        }
        if (this.$route.query.reason && typeof(this.$route.query.reason) === 'string') {
            const code = parseInt(this.$route.query.reason);
            return umi.reason.get(code) || null;
        }
        if (this.$route.query.scanner && typeof(this.$route.query.scanner) === 'string') {
            const code = parseInt(this.$route.query.scanner);
            return umi.scanner.get(code) || null;
        }
        return null;
    }

    mounted() {
        import(
            /* webpackChunkName: 'mapbox' */
            'mapbox-gl'
        ).then((mapboxgl) => {
            this.ctrl = new mapboxgl.Map({
                container: 'map-container',
                accessToken: 'pk.eyJ1IjoibHVja2EtbWUiLCJhIjoiY2p2NDk5NmRvMHFreTQzbzduemM1MHV4cCJ9.7XGmxnEJRoCDr-i5BBmBfw',
                style: 'mapbox://styles/mapbox/outdoors-v11',
            });
            this.ctrl.addControl(new mapboxgl.NavigationControl());
            this.ctrl.addControl(new mapboxgl.FullscreenControl());
            this.ctrl.once('idle', () => {
                if (!this.ctrl) return;
                this.ctrl.resize();
                this.pourData();
            });
        });
    }

    private async pourData() {
        if (!this.ctrl) return;
        const nominations = await this.loadNominations();
        // Generate GeoJSON and get bounds
        const boundsNE = { lng: -181.0, lat: -91.0 };
        const boundsSW = { lng:  181.0, lat:  91.0 };
        const geoJSON: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
            type: 'FeatureCollection',
            features: nominations.map((nomination) => {
                const lngLat = nomination.lngLat!;
                if (lngLat.lng > boundsNE.lng) boundsNE.lng = lngLat.lng;
                if (lngLat.lng < boundsSW.lng) boundsSW.lng = lngLat.lng;
                if (lngLat.lat > boundsNE.lat) boundsNE.lat = lngLat.lat;
                if (lngLat.lat < boundsSW.lat) boundsSW.lat = lngLat.lat;
                return {
                    type: 'Feature',
                    properties: { title: nomination.title },
                    geometry: {
                        type: 'Point',
                        coordinates: [lngLat.lng, lngLat.lat],
                    }
                }
            }),
        };
        const id = 'nominations';
        const color = '#2578B5';
        const colorLight = '#63A7E7';

        // Add source and layers
        this.ctrl.addSource(id, {
            type: 'geojson',
            data: geoJSON,
            cluster: true,
        });
        this.ctrl.addLayer({
            id: `${id}-cluster`,
            type: 'circle',
            source: id,
            filter: ['has', 'point_count'],
            paint: {
                'circle-color': colorLight,
                'circle-opacity': 0.6,
                'circle-stroke-width': 4,
                'circle-stroke-color': color,
                'circle-radius': [
                    'step', ['get', 'point_count'],
                    20, 50,
                    30, 100,
                    40
                ]
            }
        });
        this.ctrl.addLayer({
            id: `${id}-count`,
            type: 'symbol',
            source: id,
            filter: ['has', 'point_count'],
            layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 12,
            },
            paint: {
                'text-color': '#000',
            }
        });
        this.ctrl.addLayer({
            id: `${id}-unclustered`,
            type: 'circle',
            source: id,
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': colorLight,
                'circle-radius': 5,
                'circle-stroke-width': 2,
                'circle-stroke-color': color
            }
        });

        // Set listener
        this.ctrl.on('click', `${id}-cluster`, event => {
            if (!this.ctrl || !event.features) return;
            const feature = event.features[0];
            const clusterId = feature.properties!.cluster_id;
            (this.ctrl.getSource(id) as mapboxgl.GeoJSONSource).getClusterExpansionZoom(
                clusterId,
                (err, zoom) => {
                    if (!this.ctrl || err) return;
                    this.ctrl.easeTo({
                        center: (feature.geometry as GeoJSON.Point).coordinates as [number, number],
                        zoom: zoom
                    });
                }
            );
        });

        this.ctrl.on('click', `${id}-unclustered`, event => {
            if (!this.ctrl || !event.features) return;
            const feature = event.features[0];
            const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];
            while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            import(
                /* webpackChunkName: 'mapbox' */
                'mapbox-gl'
            ).then((mapboxgl) => {
                if (!this.ctrl) return;
                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setText(feature.properties!.title)
                    .addTo(this.ctrl);
            });
        });

        // Fit the bounds
        if (boundsSW.lng > -181) {
            this.ctrl.fitBounds([boundsSW, boundsNE], { linear: true, padding: 16 });
        }
    }

    private async loadNominations() {
        const commonSense = this.commonSense;
        const raws = await dia.getAll(commonSense?.predicator);
        return raws.filter(raw => raw.lngLat).map(raw => Nomination.from(raw));
    }
}
</script>

<style lang="scss">
main.nomination-map {
    margin: 0;
    flex: 1;

    #map-container {
        width: 100%;
        height: 100%;

        // Adjust for safe area
        .mapboxgl-control-container {
            > .mapboxgl-ctrl-top-left, > .mapboxgl-ctrl-bottom-left {
                margin-left: env(safe-area-inset-left);
            }
            > .mapboxgl-ctrl-top-right, > .mapboxgl-ctrl-bottom-right {
                margin-right: env(safe-area-inset-right);
            }

            > .mapboxgl-ctrl-bottom-left, > .mapboxgl-ctrl-bottom-right {
                margin-bottom: env(safe-area-inset-bottom);
            }
        }
    }
}
</style>