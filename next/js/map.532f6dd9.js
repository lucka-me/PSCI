(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["map"],{"0587":function(t,e,r){},"4af0":function(t,e,r){"use strict";r.r(e);var n=r("7a23");const o=Object(n["g"])("main",{class:"ignore-safe-area nomination-map"},[Object(n["g"])("div",{id:"map-container"})],-1);function i(t,e,r,i,a,s){const l=Object(n["w"])("material-top-app-bar"),c=Object(n["w"])("material-top-app-bar-adjust");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(l,{title:t.title,"navi-back":""},null,8,["title"]),Object(n["g"])(c),o],64)}var a=r("9ab4"),s=r("ce1f"),l=(r("ac6d"),r("ce89")),c=r("2281"),u=r("4892");let p=class extends s["b"]{get title(){var t,e;return null!==(e=null===(t=this.commonSense)||void 0===t?void 0:t.title)&&void 0!==e?e:"All"}get nominations(){let t=this.$store.state.nominations.filter(t=>t.lngLat);const e=this.commonSense;return e&&(t=t.filter(e.predicator)),t}get commonSense(){if(this.$route.query.status&&"string"===typeof this.$route.query.status){const t=parseInt(this.$route.query.status);return l["a"].status.get(t)||null}if(this.$route.query.reason&&"string"===typeof this.$route.query.reason){const t=parseInt(this.$route.query.reason);return l["a"].reason.get(t)||null}if(this.$route.query.scanner&&"string"===typeof this.$route.query.scanner){const t=parseInt(this.$route.query.scanner);return l["a"].scanner.get(t)||null}return null}mounted(){r.e("mapbox").then(r.t.bind(null,"e192",7)).then(t=>{this.ctrl=new t.Map({container:"map-container",accessToken:"pk.eyJ1IjoibHVja2EtbWUiLCJhIjoiY2p2NDk5NmRvMHFreTQzbzduemM1MHV4cCJ9.7XGmxnEJRoCDr-i5BBmBfw",style:"mapbox://styles/mapbox/outdoors-v11"}),this.ctrl.addControl(new t.NavigationControl),this.ctrl.addControl(new t.FullscreenControl),this.ctrl.once("idle",()=>{this.ctrl&&(this.ctrl.resize(),this.pourData())})})}pourData(){if(!this.ctrl)return;const t=this.nominations,e={lng:-181,lat:-91},n={lng:181,lat:91},o={type:"FeatureCollection",features:t.map(t=>{const r=t.lngLat;return r.lng>e.lng&&(e.lng=r.lng),r.lng<n.lng&&(n.lng=r.lng),r.lat>e.lat&&(e.lat=r.lat),r.lat<n.lat&&(n.lat=r.lat),{type:"Feature",properties:{title:t.title},geometry:{type:"Point",coordinates:[r.lng,r.lat]}}})},i="nominations",a="#2578B5",s="#004D85";this.ctrl.addSource(i,{type:"geojson",data:o,cluster:!0}),this.ctrl.addLayer({id:i+"-cluster",type:"circle",source:i,filter:["has","point_count"],paint:{"circle-color":a,"circle-opacity":.6,"circle-stroke-width":4,"circle-stroke-color":s,"circle-radius":["step",["get","point_count"],20,50,30,100,40]}}),this.ctrl.addLayer({id:i+"-count",type:"symbol",source:i,filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12},paint:{"text-color":"#000"}}),this.ctrl.addLayer({id:i+"-unclustered",type:"circle",source:i,filter:["!",["has","point_count"]],paint:{"circle-color":a,"circle-radius":5,"circle-stroke-width":2,"circle-stroke-color":s}}),this.ctrl.on("click",i+"-cluster",t=>{if(!this.ctrl||!t.features)return;const e=t.features[0],r=e.properties.cluster_id;this.ctrl.getSource(i).getClusterExpansionZoom(r,(t,r)=>{this.ctrl&&!t&&this.ctrl.easeTo({center:e.geometry.coordinates,zoom:r})})}),this.ctrl.on("click",i+"-unclustered",t=>{if(!this.ctrl||!t.features)return;const e=t.features[0],n=e.geometry.coordinates;while(Math.abs(t.lngLat.lng-n[0])>180)n[0]+=t.lngLat.lng>n[0]?360:-360;r.e("mapbox").then(r.t.bind(null,"e192",7)).then(t=>{this.ctrl&&(new t.Popup).setLngLat(n).setText(e.properties.title).addTo(this.ctrl)})}),n.lng>-181&&this.ctrl.fitBounds([n,e],{linear:!0,padding:16})}};p=Object(a["b"])([Object(s["a"])({components:{MaterialTopAppBar:c["a"],MaterialTopAppBarAdjust:u["a"]}})],p);var d=p;r("639f");d.render=i;e["default"]=d},"639f":function(t,e,r){"use strict";r("0587")}}]);
//# sourceMappingURL=map.532f6dd9.js.map