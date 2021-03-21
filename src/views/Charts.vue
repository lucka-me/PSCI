<template>
<material-top-app-bar title="Charts" navi-back/>
<material-top-app-bar-adjust/>
<main class="charts">
    <div class="grid grid--1-1">
        <status-chart/>
        <reasons-chart/>
    </div>
    <count-by-month-chart/>
    <div class="grid grid--2-1">
        <interval-chart/>
        <quotas-chart/>
    </div>
</main>
</template>

<script lang="ts">
import {
    Chart,
    ArcElement, BarElement, LineElement, PointElement,
    BarController, DoughnutController, LineController,
    CategoryScale, LogarithmicScale, LinearScale, TimeScale,
    Tooltip, Legend
} from 'chart.js';
import 'chartjs-adapter-luxon';
import { Vue, Options } from 'vue-class-component';

import MaterialTopAppBar from '@/components/material/TopAppBar.vue';
import MaterialTopAppBarAdjust from '@/components/material/TopAppBarAdjust.vue';
import CountByMonthChart from '@/components/charts/CountByMonth.vue';
import IntervalChart from '@/components/charts/Interval.vue';
import QuotasChart from '@/components/charts/Quotas.vue';
import ReasonsChart from '@/components/charts/Reasons.vue';
import StatusChart from '@/components/charts/Status.vue';

@Options({
    components: {
        MaterialTopAppBar, MaterialTopAppBarAdjust,
        StatusChart, ReasonsChart,
        CountByMonthChart,
        IntervalChart, QuotasChart
    },
})
export default class Charts extends Vue {

    created() {
        Chart.register(
            ArcElement, BarElement, LineElement, PointElement,
            BarController, DoughnutController, LineController,
            CategoryScale, LinearScale, LogarithmicScale, TimeScale,
            Tooltip, Legend
        );
        Chart.defaults.maintainAspectRatio = false;
        Chart.defaults.plugins.legend!.labels.boxWidth = 10;
        Chart.defaults.plugins.tooltip!.intersect = false;
        Chart.defaults.elements.line!.tension = 0.1;
    }
}
</script>

<style lang="scss">
.charts {
    padding: 1rem;

    > div:not(:first-child) {
        margin-block-start: 0.6rem;
    }

    > .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.6rem;

        @media screen and (min-width: 600px) {
            &--1-1 {
                grid-template-columns: 1fr 1fr;
            }

            &--2-1 {
                grid-template-columns: 2fr 1fr;
            }
        }
    }
}
</style>