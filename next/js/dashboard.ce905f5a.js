(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"0f82":function(t,e,r){},1703:function(t,e,r){"use strict";var s=r("7a23");const n=Object(s["h"])("span",{class:"mdc-button__ripple"},null,-1),a={class:"mdc-button__labbel"};function o(t,e,r,o,i,c){return Object(s["q"])(),Object(s["d"])("button",{class:t.className},[n,Object(s["h"])("span",a,[Object(s["w"])(t.$slots,"default")])],2)}var i=r("9ab4"),c=r("40ff"),d=r("1b40");class l extends d["d"]{get className(){let t="mdc-button";return this.outlined?t+=" mdc-button--outlined":this.raised&&(t+=" mdc-button--raised"),t}mounted(){this.ctrl=c["a"].attachTo(this.$el),this.ctrl.unbounded=!0}updated(){var t;null===(t=this.ctrl)||void 0===t||t.destroy(),this.ctrl=c["a"].attachTo(this.$el),this.ctrl.unbounded=!0}unmounted(){var t;null===(t=this.ctrl)||void 0===t||t.destroy()}}Object(i["c"])([Object(d["c"])(Boolean)],l.prototype,"outlined",void 0),Object(i["c"])([Object(d["c"])(Boolean)],l.prototype,"raised",void 0);r("ddb3");l.render=o;e["a"]=l},"1a78":function(t,e,r){"use strict";r("6db0")},2747:function(t,e,r){"use strict";r("b021")},3298:function(t,e,r){},"43e5":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var s={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},n={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function a(t){return Boolean(t.document)&&"function"===typeof t.document.createElement}function o(t,e){if(a(t)&&e in s){var r=t.document.createElement("div"),n=s[e],o=n.standard,i=n.prefixed,c=o in r.style;return c?o:i}return e}function i(t,e){if(a(t)&&e in n){var r=t.document.createElement("div"),s=n[e],o=s.standard,i=s.prefixed,c=s.cssProperty,d=c in r.style;return d?o:i}return e}},"6db0":function(t,e,r){},7277:function(t,e,r){"use strict";r.r(e);var s=r("7a23");const n={class:"dashboard"};function a(t,e,r,a,o,i){const c=Object(s["x"])("material-icon-button"),d=Object(s["x"])("material-top-app-bar"),l=Object(s["x"])("material-top-app-bar-adjust"),u=Object(s["x"])("status"),b=Object(s["x"])("highlight"),p=Object(s["x"])("gallery"),h=Object(s["x"])("scanners"),O=Object(s["x"])("reasons");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["h"])(d,{title:"Dashboard"},{default:Object(s["C"])(()=>[t.canRefresh?(Object(s["q"])(),Object(s["d"])(c,{key:0,icon:"redo",onClick:t.refresh},null,8,["onClick"])):Object(s["e"])("",!0),Object(s["h"])(c,{icon:"cog",onClick:t.openPreference},null,8,["onClick"])]),_:1}),Object(s["h"])(l),Object(s["h"])("main",n,[Object(s["h"])(u),t.$store.getters.empty?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])(b,{key:0})),t.$store.getters.empty?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])(p,{key:1})),t.$store.getters.empty?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])(h,{key:2})),t.$store.getters.empty?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])(O,{key:3}))])],64)}var o=r("9ab4"),i=r("ce1f"),c=r("6022"),d=r("0613"),l=r("81dd"),u=r("2281"),b=r("4892");const p={class:"status"},h={key:0,class:"progress"},O={key:1,class:"actions"},f=Object(s["g"])("Link Google Account"),m=Object(s["g"])("Manually Match"),j=Object(s["g"])("Charts");function g(t,e,r,n,a,o){const i=Object(s["x"])("material-linear-progress"),c=Object(s["x"])("material-button");return Object(s["q"])(),Object(s["d"])("div",p,[t.showProgress?(Object(s["q"])(),Object(s["d"])("div",h,[Object(s["h"])("div",null,Object(s["z"])(t.progressText),1),Object(s["h"])(i,{progress:t.$store.state.progress,determinate:t.progressDeterminate},null,8,["progress","determinate"])])):Object(s["e"])("",!0),t.showActions?(Object(s["q"])(),Object(s["d"])("div",O,[t.showLinkButton?(Object(s["q"])(),Object(s["d"])(c,{key:0,outlined:"",onClick:t.link},{default:Object(s["C"])(()=>[f]),_:1},8,["onClick"])):Object(s["e"])("",!0),t.showMatchButton?(Object(s["q"])(),Object(s["d"])(c,{key:1,outlined:"",onClick:t.match},{default:Object(s["C"])(()=>[m]),_:1},8,["onClick"])):Object(s["e"])("",!0),t.showChartsButton?(Object(s["q"])(),Object(s["d"])(c,{key:2,outlined:"",onClick:t.openCharts},{default:Object(s["C"])(()=>[j]),_:1},8,["onClick"])):Object(s["e"])("",!0)])):Object(s["e"])("",!0)])}var y=r("1703");const v={role:"progressbar",class:"mdc-linear-progress","aria-valuemin":"0","aria-valuemax":"1","aria-valuenow":"0"},A=Object(s["f"])('<div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div><div class="mdc-linear-progress__buffer-dots"></div></div><div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div><div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div>',3);function S(t,e,r,n,a,o){return Object(s["q"])(),Object(s["d"])("div",v,[A])}var C=r("8136"),_=r("43e5"),L=r("6689"),E={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},R={ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},x={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782},k=function(t){function e(r){var s=t.call(this,Object(o["a"])(Object(o["a"])({},e.defaultAdapter),r))||this;return s.observer=null,s}return Object(o["d"])(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return R},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.isDeterminate=!this.adapter.hasClass(E.INDETERMINATE_CLASS),this.adapter.addClass(E.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver((function(e){var r,s;if(!t.isDeterminate)try{for(var n=Object(o["f"])(e),a=n.next();!a.done;a=n.next()){var i=a.value;i.contentRect&&t.calculateAndSetDimensions(i.contentRect.width)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(s=n.return)&&s.call(n)}finally{if(r)throw r.error}}})),!this.isDeterminate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.isDeterminate=t,this.isDeterminate)return this.adapter.removeClass(E.INDETERMINATE_CLASS),this.adapter.setAttribute(R.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(R.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(R.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),void this.setBufferBarProgress(this.buffer);this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(E.INDETERMINATE_CLASS),this.adapter.removeAttribute(R.ARIA_VALUENOW),this.adapter.removeAttribute(R.ARIA_VALUEMAX),this.adapter.removeAttribute(R.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.getDeterminate=function(){return this.isDeterminate},e.prototype.setProgress=function(t){this.progress=t,this.isDeterminate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(R.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.isDeterminate&&this.setBufferBarProgress(t)},e.prototype.open=function(){this.adapter.removeClass(E.CLOSED_CLASS),this.adapter.removeClass(E.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.close=function(){this.adapter.addClass(E.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(E.CLOSED_CLASS)&&this.adapter.addClass(E.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(E.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(E.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var e="scaleX("+t+")",r="undefined"!==typeof window?Object(_["b"])(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(r,e)},e.prototype.setBufferBarProgress=function(t){var e=100*t+"%";this.adapter.setBufferBarStyle(R.FLEX_BASIS,e)},e.prototype.calculateAndSetDimensions=function(t){var e=t*x.PRIMARY_HALF,r=t*x.PRIMARY_FULL,s=t*x.SECONDARY_QUARTER,n=t*x.SECONDARY_HALF,a=t*x.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",e+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-e+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",r+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-a+"px"),this.restartAnimation()},e}(L["a"]),B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(o["d"])(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"determinate",{set:function(t){this.foundation.setDeterminate(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(t){this.foundation.setProgress(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{set:function(t){this.foundation.setBuffer(t)},enumerable:!0,configurable:!0}),e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(){this.foundation.close()},e.prototype.initialSyncWithDOM=function(){var t=this;this.root.addEventListener("transitionend",(function(){t.foundation.handleTransitionEnd()}))},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){t.root.classList.add(e)},forceLayout:function(){t.root.getBoundingClientRect()},setBufferBarStyle:function(e,r){var s=t.root.querySelector(k.strings.BUFFER_BAR_SELECTOR);s&&s.style.setProperty(e,r)},setPrimaryBarStyle:function(e,r){var s=t.root.querySelector(k.strings.PRIMARY_BAR_SELECTOR);s&&s.style.setProperty(e,r)},hasClass:function(e){return t.root.classList.contains(e)},removeAttribute:function(e){t.root.removeAttribute(e)},removeClass:function(e){t.root.classList.remove(e)},setAttribute:function(e,r){t.root.setAttribute(e,r)},setStyle:function(e,r){t.root.style.setProperty(e,r)},attachResizeObserver:function(e){var r=window.ResizeObserver;if(r){var s=new r(e);return s.observe(t.root),s}return null},getWidth:function(){return t.root.offsetWidth}};return new k(e)},e}(C["a"]),D=r("1b40");class I extends D["d"]{onProgressChanged(t,e){this.ctrl&&(this.ctrl.progress=t)}onDeterminateChanged(t,e){this.ctrl&&(this.ctrl.determinate=t)}mounted(){this.ctrl=B.attachTo(this.$el),this.ctrl.progress=this.progress,this.ctrl.determinate=this.determinate}unmounted(){var t,e;null===(t=this.ctrl)||void 0===t||t.close(),null===(e=this.ctrl)||void 0===e||e.destroy()}}Object(o["c"])([Object(D["c"])(Number)],I.prototype,"progress",void 0),Object(o["c"])([Object(D["c"])(Boolean)],I.prototype,"determinate",void 0),Object(o["c"])([Object(D["e"])("progress")],I.prototype,"onProgressChanged",null),Object(o["c"])([Object(D["e"])("determinate")],I.prototype,"onDeterminateChanged",null);r("2747");I.render=S;var w=I;let P=class extends i["b"]{get showProgress(){return this.$store.state.status===d["a"].Status.processingMails||(this.$store.state.status===d["a"].Status.syncing||!(!this.$store.getters.empty||!this.gapiLoaded))}get progressText(){return this.$store.state.status===d["a"].Status.processingMails?"Processing Mails":this.$store.state.status===d["a"].Status.syncing?"Syncing":this.$store.getters.empty&&this.gapiLoaded?"Loading Google API":""}get progressDeterminate(){return this.$store.state.status===d["a"].Status.processingMails}get showLinkButton(){return this.gapiLoaded&&!this.$store.state.gapiAuthed}get showMatchButton(){return this.$store.state.status===d["a"].Status.requestMatch}get showChartsButton(){return!this.$store.getters.empty}get showActions(){return this.showLinkButton||this.showMatchButton||this.showChartsButton}get idle(){return this.$store.state.status===d["a"].Status.idle}get gapiLoaded(){return this.$store.state.gapiLoaded}link(){c["a"].signIn()}match(){this.$router.push({path:"/match"})}openCharts(){this.$router.push({path:"/charts"})}};P=Object(o["c"])([Object(i["a"])({components:{MaterialButton:y["a"],MaterialIconButton:l["a"],MaterialLinearProgress:w}})],P);var M=P;r("8f51");M.render=g;var q=M;const N=Object(s["h"])("h2",null,"Hightlight",-1),$={class:"card-grid"};function T(t,e,r,n,a,o){const i=Object(s["x"])("dashboard-card");return Object(s["q"])(),Object(s["d"])(s["a"],null,[N,Object(s["h"])("div",$,[Object(s["h"])(i,{title:"All",icon:"arrow-up",count:t.$store.state.nominations.length,onClick:t.open},null,8,["count","onClick"]),(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["v"])(t.statuses,e=>(Object(s["q"])(),Object(s["d"])(i,{key:e.code,title:e.title,icon:e.icon,count:t.$store.getters.count(e.predicator),onClick:r=>t.open(e)},null,8,["title","icon","count","onClick"]))),128))])],64)}var F=r("ce89");const U={class:"content"},Y={class:"label"},W={class:"title"},V={class:"count"};function z(t,e,r,n,a,o){const i=Object(s["x"])("material-icon"),c=Object(s["x"])("material-card");return Object(s["q"])(),Object(s["d"])(c,{class:"dashboard-card"},{default:Object(s["C"])(()=>[Object(s["h"])("div",U,[Object(s["h"])("div",Y,[Object(s["h"])(i,{icon:t.icon,"fixed-width":""},null,8,["icon"]),Object(s["h"])("span",W,Object(s["z"])(t.title),1)]),Object(s["h"])("div",V,Object(s["z"])(t.count),1)])]),_:1})}var H=r("e3a9"),X=r("7e13");let G=class extends D["d"]{};Object(o["c"])([Object(D["c"])(String)],G.prototype,"icon",void 0),Object(o["c"])([Object(D["c"])(String)],G.prototype,"title",void 0),Object(o["c"])([Object(D["c"])(Number)],G.prototype,"count",void 0),G=Object(o["c"])([Object(D["b"])({components:{MaterialCard:H["a"],MaterialIcon:X["a"]}})],G);var J=G;r("d101");J.render=z;var Q=J;let K=class extends i["b"]{get statuses(){const t=[];for(const e of F["a"].status.values())t.push(e);return t}open(t){const e={path:"/list"};t&&(e.query={status:t.code}),this.$router.push(e)}};K=Object(o["c"])([Object(i["a"])({components:{DashboardCard:Q}})],K);var Z=K;Z.render=T;var tt=Z;const et=Object(s["h"])("h2",null,"Last 30 Days",-1),rt={class:"gallery"},st={class:"caption"};function nt(t,e,r,n,a,o){const i=Object(s["x"])("material-icon"),c=Object(s["x"])("material-card");return Object(s["q"])(),Object(s["d"])(s["a"],null,[et,Object(s["h"])("div",rt,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["v"])(t.nominations,e=>(Object(s["q"])(),Object(s["d"])("div",{key:e.id},[Object(s["h"])(c,{image:e.imageUrl,"square-image":"",onClick:r=>t.open(e.id)},{default:Object(s["C"])(()=>[Object(s["h"])("div",st,[Object(s["h"])(i,{icon:e.statusData.icon,"fixed-width":""},null,8,["icon"]),Object(s["h"])("span",null,Object(s["z"])(e.title),1)])]),_:2},1032,["image","onClick"])]))),128))])],64)}var at,ot=r("a7a0");let it=at=class extends i["b"]{get nominations(){return this.$store.state.nominations.filter(at.predicator).sort(ot["a"].comparatorByTime)}open(t){this.$router.push({path:"/details",query:{id:t}})}};it.datePast30Days=Date.now()-2592e6,it.predicator=t=>t.confirmedTime>at.datePast30Days||t.resultTime>at.datePast30Days,it=at=Object(o["c"])([Object(i["a"])({components:{MaterialCard:H["a"],MaterialIcon:X["a"]}})],it);var ct=it;r("af92");ct.render=nt;var dt=ct;const lt=Object(s["h"])("h2",null,"Scanners",-1),ut={class:"card-grid"};function bt(t,e,r,n,a,o){const i=Object(s["x"])("dashboard-card");return Object(s["q"])(),Object(s["d"])(s["a"],null,[lt,Object(s["h"])("div",ut,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["v"])(t.scanners,e=>(Object(s["q"])(),Object(s["d"])(i,{key:e.scanner.code,title:e.scanner.title,icon:"mobile-alt",count:e.count,onClick:r=>t.open(e.scanner)},null,8,["title","count","onClick"]))),128))])],64)}let pt=class extends i["b"]{get scanners(){const t=[];for(const e of F["a"].scanner.values()){if(e.code===F["a"].ScannerCode.Unknown)continue;const r=this.$store.getters.count(e.predicator);r<1||t.push({scanner:e,count:r})}return t}open(t){this.$router.push({path:"/list",query:{scanner:t.code}})}};pt=Object(o["c"])([Object(i["a"])({components:{DashboardCard:Q}})],pt);var ht=pt;ht.render=bt;var Ot=ht;const ft={class:"title-with-action"},mt=Object(s["h"])("span",null,"Reasons",-1),jt=Object(s["h"])("div",{class:"spacer"},null,-1),gt={class:"card-grid"};function yt(t,e,r,n,a,o){const i=Object(s["x"])("material-button"),c=Object(s["x"])("dashboard-card");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["h"])("h2",ft,[mt,jt,Object(s["h"])(i,{onClick:t.toggleMore},{default:Object(s["C"])(()=>[Object(s["g"])(Object(s["z"])(t.more?"Less":"More"),1)]),_:1},8,["onClick"])]),Object(s["h"])("div",gt,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["v"])(t.reasons,e=>(Object(s["q"])(),Object(s["d"])(c,{key:e.reason.code,title:e.reason.title,icon:e.reason.icon,count:e.count,onClick:r=>t.open(e.reason)},null,8,["title","icon","count","onClick"]))),128))])],64)}let vt=class extends i["b"]{constructor(){super(...arguments),this.more=!1}get reasons(){const t=[];for(const e of F["a"].reason.values()){const r=this.$store.getters.count(e.predicator);if(!(r<1)&&(t.push({reason:e,count:r}),!this.more&&t.length>3))break}return t}toggleMore(){this.more=!this.more}open(t){this.$router.push({path:"/list",query:{reason:t.code}})}};vt=Object(o["c"])([Object(i["a"])({components:{MaterialButton:y["a"],DashboardCard:Q}})],vt);var At=vt;r("7747");At.render=yt;var St=At;let Ct=class extends i["b"]{get canRefresh(){return this.$store.state.status===d["a"].Status.idle&&this.$store.state.gapiAuthed}refresh(){c["a"].refresh()}openPreference(){this.$router.push({path:"/preferences"})}};Ct=Object(o["c"])([Object(i["a"])({components:{MaterialTopAppBar:u["a"],MaterialTopAppBarAdjust:b["a"],MaterialIconButton:l["a"],Status:q,Highlight:tt,Gallery:dt,Scanners:Ot,Reasons:St}})],Ct);var _t=Ct;r("1a78");_t.render=a;e["default"]=_t},7597:function(t,e,r){},7747:function(t,e,r){"use strict";r("80a1")},"7e13":function(t,e,r){"use strict";var s=r("7a23");function n(t,e,r,n,a,o){const i=Object(s["x"])("material-icon-raw");return Object(s["q"])(),Object(s["d"])("i",{class:t.className},[Object(s["h"])(i,{icon:t.icon},null,8,["icon"])],2)}var a=r("9ab4"),o=r("1b40"),i=r("bd16");let c=class extends o["d"]{get className(){let t="fa";return this.fixedWidth&&(t+=" fa-fw"),t}};Object(a["c"])([Object(o["c"])(String)],c.prototype,"icon",void 0),Object(a["c"])([Object(o["c"])(Boolean)],c.prototype,"fixedWidth",void 0),c=Object(a["c"])([Object(o["b"])({components:{MaterialIconRaw:i["a"]}})],c);var d=c;d.render=n;e["a"]=d},"80a1":function(t,e,r){},"8e15":function(t,e,r){"use strict";r("0f82")},"8f51":function(t,e,r){"use strict";r("3298")},af92:function(t,e,r){"use strict";r("ccaa")},b021:function(t,e,r){},ccaa:function(t,e,r){},d101:function(t,e,r){"use strict";r("ee55")},ddb3:function(t,e,r){"use strict";r("7597")},e3a9:function(t,e,r){"use strict";var s=r("7a23");const n={class:"mdc-card mdc-card--outlined"},a={class:"mdc-card__primary-action"};function o(t,e,r,o,i,c){return Object(s["q"])(),Object(s["d"])("div",n,[Object(s["h"])("div",a,[t.image?(Object(s["q"])(),Object(s["d"])("div",{key:0,class:t.mediaClassName,style:t.mediaStyle},null,6)):Object(s["e"])("",!0),Object(s["w"])(t.$slots,"default")])])}var i=r("9ab4"),c=r("1b40");class d extends c["d"]{get mediaClassName(){return"mdc-card__media mdc-card__media--"+(this.squareImage?"square":"16-9")}get mediaStyle(){return this.image?`background-image: url("${this.image}")`:""}}Object(i["c"])([Object(c["c"])(String)],d.prototype,"image",void 0),Object(i["c"])([Object(c["c"])(Boolean)],d.prototype,"squareImage",void 0);r("8e15");d.render=o;e["a"]=d},ee55:function(t,e,r){}}]);
//# sourceMappingURL=dashboard.ce905f5a.js.map