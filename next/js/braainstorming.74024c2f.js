(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["braainstorming"],{"3c79":function(t,e,a){"use strict";a("e7f2")},"88b2":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const r={key:0,class:"brainstorming"},s={key:0,class:"progress"},i=Object(n["h"])("div",null,"Updating Brainstorming",-1);function c(t,e,a,c,o,d){const l=Object(n["x"])("material-icon-button"),b=Object(n["x"])("material-top-app-bar"),p=Object(n["x"])("material-top-app-bar-adjust"),u=Object(n["x"])("material-linear-progress");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(b,{title:"Brainstorming","navi-back":""},{default:Object(n["C"])(()=>[t.canUpdate?(Object(n["q"])(),Object(n["d"])(l,{key:0,icon:"redo",onClick:t.update},null,8,["onClick"])):Object(n["e"])("",!0)]),_:1}),Object(n["h"])(p),t.$store.getters.empty?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("main",r,[t.updating?(Object(n["q"])(),Object(n["d"])("div",s,[i,Object(n["h"])(u,{progress:t.$store.state.progress,determinate:""},null,8,["progress"])])):Object(n["e"])("",!0)]))],64)}var o=a("9ab4"),d=a("9b4a"),l=(a("cadc"),a("ce1f")),b=a("0613"),p=a("81dd"),u=a("ea0e"),j=a("2281"),g=a("4892"),O=a("6022"),m=a("42b4");let f=class extends l["b"]{get canUpdate(){return!this.$store.getters.empty&&this.$store.state.status===b["a"].Status.idle}created(){d["e"].register(d["a"],d["c"],d["i"],d["l"],d["b"],d["f"],d["h"],d["d"],d["j"],d["k"],d["m"],d["n"],d["g"]),d["e"].defaults.maintainAspectRatio=!1,d["e"].defaults.plugins.legend.labels.boxWidth=10,d["e"].defaults.plugins.tooltip.intersect=!1,d["e"].defaults.elements.line.tension=.1}get updating(){return this.$store.state.status===b["a"].Status.queryingBrainstorming}update(){return Object(o["b"])(this,void 0,void 0,(function*(){const t=yield O["a"].updateBrainstorming();m["a"].inform(`Updated ${t} records`)}))}};f=Object(o["c"])([Object(l["a"])({components:{MaterialTopAppBar:j["a"],MaterialTopAppBarAdjust:g["a"],MaterialIconButton:p["a"],MaterialLinearProgress:u["a"]}})],f);var h=f;a("3c79");h.render=c;e["default"]=h},e7f2:function(t,e,a){}}]);
//# sourceMappingURL=braainstorming.74024c2f.js.map