(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],d=0,u=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,i=1;i<s.length;i++){var o=s[i];0!==a[o]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},i={app:0},a={app:0},r=[];function o(e){return c.p+"js/"+({"dashboard~details~list~match~preferences":"dashboard~details~list~match~preferences",dashboard:"dashboard",details:"details",list:"list",match:"match",preferences:"preferences",mapbox:"mapbox"}[e]||e)+"."+{"dashboard~details~list~match~preferences":"f04f3d75",dashboard:"5ab1586a",details:"ea6ff126",list:"620693d8",match:"2189d49e",preferences:"a36e19c3",mapbox:"2dcfe6ae"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={"dashboard~details~list~match~preferences":1,dashboard:1,details:1,list:1,preferences:1};i[e]?t.push(i[e]):0!==i[e]&&s[e]&&t.push(i[e]=new Promise((function(t,s){for(var n="css/"+({"dashboard~details~list~match~preferences":"dashboard~details~list~match~preferences",dashboard:"dashboard",details:"details",list:"list",match:"match",preferences:"preferences",mapbox:"mapbox"}[e]||e)+"."+{"dashboard~details~list~match~preferences":"7eed8b5f",dashboard:"b5205fe1",details:"ab42edfc",list:"6a9f041e",match:"31d6cfe0",preferences:"2bbb92e5",mapbox:"31d6cfe0"}[e]+".css",a=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===a))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],d=l.getAttribute("data-href");if(d===n||d===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[e],h.parentNode.removeChild(h),s(r)},h.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){i[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,s){n=a[e]=[t,s]}));t.push(n[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(h);var s=a[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,s[1](u)}a[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/next/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var h=d;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"0613":function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var n,i=s("5502");(function(e){let t;(function(e){e[e["idle"]=0]="idle",e[e["processingMails"]=1]="processingMails",e[e["requestMatch"]=2]="requestMatch",e[e["syncing"]=3]="syncing"})(t=e.Status||(e.Status={}))})(n||(n={})),t["b"]=Object(i["a"])({state:{status:n.Status.idle,gapiLoaded:!1,gapiAuthed:!1,nominations:[]},getters:{empty(e){return e.nominations.length<1},count:e=>t=>e.nominations.filter(t).length},mutations:{setStatus(e,t){e.status=t},gapiLoaded(e){e.gapiLoaded=!0},setGAPIAuthed(e,t){e.gapiAuthed=t},setNominations(e,t){e.nominations=t}},actions:{},modules:{}})},6022:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));var n=s("0613");class i{constructor(){this.events={authStatusChanged:()=>{},error:()=>{}}}init(){navigator.onLine&&gapi.load("client:auth2",()=>this.initClient())}initClient(){gapi.client.init({apiKey:"AIzaSyCqIaS8UizqjWrIKm5zV3_S8EffCWjKR-A",clientId:"361295761775-qshg0f5buh495dhubp4v5bignk7i5dh1.apps.googleusercontent.com",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest","https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],scope:["https://www.googleapis.com/auth/gmail.readonly","https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive.appdata"].join(" ")}).then(()=>{gapi.auth2.getAuthInstance().isSignedIn.listen(this.events.authStatusChanged),this.events.authStatusChanged(this.signedIn)},this.events.error)}get signedIn(){return navigator.onLine&&gapi.auth2.getAuthInstance().isSignedIn.get()}get accessToken(){return gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token}signIn(){gapi.auth2.getAuthInstance().signIn()}signOut(){gapi.auth2.getAuthInstance().signOut()}}class a{constructor(){this.ids=new Map}download(e,t){const s=n=>{if(n.length<1)return void t();const i=n[0].id;gapi.client.drive.files.get({fileId:i,alt:"media"}).then(a=>{t(a.result)?(gapi.client.drive.files.delete({fileId:i}),n.splice(0,1),s(n)):this.ids.set(e,i)})};gapi.client.drive.files.list({q:`name = '${e}'`,pageSize:10,spaces:a.folder,fields:"files(id)"}).then(e=>{const n=e.result.files;n?s(n):t()})}upload(e,t,s,n,i){let r="",o="";const c={name:e,mimeType:t};this.ids.has(e)?(o="PATCH",r=`https://www.googleapis.com/upload/drive/v3/files/${this.ids.get(e)}?uploadType=multipart`):(o="POST",r="https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",c.parents=[a.folder]);const l=new FormData;l.append("metadata",new Blob([JSON.stringify(c)],{type:t})),l.append("file",s);const d="Bearer "+n;fetch(r,{method:o,headers:new Headers({Authorization:d}),body:l}).then(e=>e.json()).then(t=>{t&&t.id?(this.ids.set(e,t.id),i(!0)):i(!1,t.message)}).catch(()=>i(!1))}}a.folder="appDataFolder";class r{constructor(){this.auth=new i,this.drive=new a}init(e){const t=document.createElement("script");t.src="https://apis.google.com/js/api.js",t.defer=!0,t.async=!0,t.onload=e,document.head.append(t)}}var o,c=s("ce89"),l=s("a7a0");(function(e){function t(e,t,a){const r=new l["a"];r.status=t,t===c["a"].StatusCode.Pending?(r.confirmedTime=parseInt(e.internalDate),r.confirmationMailId=e.id):(r.resultTime=parseInt(e.internalDate),r.resultMailId=e.id);for(const s of e.payload.headers)if("Subject"===s.name){const e=s.value.match(/[:：](.+)/);e&&e.length>1&&(r.title=e[1]);break}for(const o of e.payload.parts){if("1"!==o.partId)continue;const e=i(o.body.data),d=e.match(/googleusercontent\.com\/([0-9a-zA-Z\-\_]+)/);d&&d.length>1&&(r.image=d[1],r.id=l["a"].parseId(r.image)),a===c["a"].ScannerCode.Redacted&&t!==c["a"].StatusCode.Pending&&(r.lngLat=n(e)),t===c["a"].StatusCode.Rejected&&(r.status=c["a"].StatusCode.Rejected,r.reasons=s(e,a));break}return r}function s(e,t){const s=e.match(/(\n|\r|.)+?\-NianticOps/);if(!s||s.length<1)return[];const n=s[0],i=[];for(const[a,r]of c["a"].reason){const e=r.keywords.get(t);if(e)for(const t of e){const e=n.search(t);if(!(e<0)){i.push([e,a]);break}}}return i.sort((e,t)=>e[0]>t[0]?1:-1).map(e=>e[1])}function n(e){const t=e.match(/www\.ingress\.com\/intel\?ll\=([\.\d]+),([\.\d]+)/);if(t&&!(t.length<3))return{lng:parseFloat(t[2]),lat:parseFloat(t[1])}}function i(e){return unescape(decodeURIComponent(escape(window.atob(e.replace(/\-/g,"+").replace(/\_/g,"/")))))}e.parse=t})(o||(o={}));class d{constructor(){this.total=0,this.finished=0}clear(){this.total=0,this.finished=0}get left(){return this.finished<this.total}get percent(){return 0===this.total?0:this.finished/this.total}}class u{constructor(){this.lists=new d,this.messages=new d,this.onBuffer=()=>{},this.onProgress=()=>{},this.onFinish=()=>{}}clear(){this.lists.clear(),this.messages.clear()}addList(){this.lists.total+=1}finishList(e){this.lists.finished+=1,this.messages.total+=e,this.onBuffer(this.lists.percent),this.left||this.onFinish()}finishMessage(){this.messages.finished+=1,this.lists.left||(this.onProgress(this.messages.percent),this.left||this.onFinish())}get left(){return this.lists.left||this.messages.left}}class h{constructor(){this.ignoreMailIds=[],this.nominations=[],this.progress=new u,this.events={alert:()=>{},finish:()=>{},buffer:()=>{},progress:()=>{}}}init(){this.progress.onBuffer=e=>{this.events.buffer(e)},this.progress.onProgress=e=>{this.events.progress(e)},this.progress.onFinish=()=>{this.events.finish(this.nominations)}}start(e){this.nominations=e.map(e=>e),this.progress.lists.clear(),this.progress.messages.clear(),this.ignoreMailIds=this.nominations.flatMap(e=>e.resultMailId.length>0?[e.confirmationMailId,e.resultMailId]:[e.confirmationMailId]);for(const t of c["a"].status.values())for(const e of t.queries.keys())this.queryList(t.code,e)}queryList(e,t){this.progress.addList();const s=h.getListRequest(void 0,e,t);s.execute(s=>{this.handleListRequest(s,[],e,t)})}static getListRequest(e,t,s){return gapi.client.gmail.users.messages.list({userId:"me",q:c["a"].status.get(t).queries.get(s),pageToken:e})}handleListRequest(e,t,s,n){if(e.result.messages&&t.push(...e.result.messages),e.result.nextPageToken){const i=h.getListRequest(e.result.nextPageToken,s,n);i.execute(e=>{this.handleListRequest(e,t,s,n)})}else{for(let e=t.length-1;e>=0;e--)for(const s of this.ignoreMailIds)if(t[e].id===s){t.splice(e,1);break}this.queryMessages(t,s,n)}}queryMessages(e,t,s){this.progress.finishList(e.length);for(const n of e)n.id&&gapi.client.gmail.users.messages.get({userId:"me",id:n.id,format:"full",metadataHeaders:"Subject"}).execute(e=>{const n=e.result;try{const e=o.parse(n,t,s);this.nominations.push(e)}catch(i){let e="";for(const t of n.payload.headers)if("Subject"===t.name){e=t.value;break}let a=i;if("message"in i){const e=i;a=e.stack||e.message}this.events.alert(`message:service.mari.reportParserError ${e} [${t}:${s}]${a}`)}this.progress.finishMessage()})}}var m,g=s("b15b");(function(e){let t;(function(e){e["nominations"]="nominations.json",e["legacy"]="potori.json"})(t||(t={}));const s="application/json",i=new r,a=new h;let o;function d(e){o=e,C(),i.init(()=>{i.auth.events.authStatusChanged=e=>{o.commit("setGAPIAuthed",e),o.commit("gapiLoaded")},i.auth.init(),a.events.finish=e=>{k(e)},a.init()})}function u(){i.auth.signIn()}function m(){i.auth.signOut()}function p(){g["a"].google.sync()?A(t.nominations,()=>{I()}):I()}function f(){A(t.nominations,()=>{w(()=>{})})}function w(e){T(n["a"].Status.syncing);const a=j();i.drive.upload(t.nominations,s,a,i.auth.accessToken,(t,s)=>{T(n["a"].Status.idle),e(t,s)})}function b(){A(t.legacy,e=>{})}function y(){const e=document.createElement("input");e.type="file",e.accept="json",e.hidden=!0,e.addEventListener("change",()=>{if(setTimeout(()=>{e.remove()},1e3),!e.files||e.files.length<1)return;const t=e.files[0],s=new FileReader;s.onload=()=>{if("string"===typeof s.result)try{const e=JSON.parse(s.result);F(e)}catch(e){}},s.readAsText(t)},!1),document.body.append(e),e.click()}function v(){const e=document.createElement("a");e.href=URL.createObjectURL(j()),e.download=t.nominations,e.hidden=!0,document.body.append(e),e.click(),e.remove()}function S(){o.commit("setNominations",[]),L()}function I(){T(n["a"].Status.processingMails),a.start(o.state.nominations)}function k(e){const t=[],s=e.reduce((e,s)=>{if(s.id.length<1)return t.push(s),e;let n=!1;for(const t of e)if(t.merge(s)){n=!0;break}return n||e.push(s),e},new Array);t.length>0?P(t,s):g["a"].google.sync()?w(()=>{M(s)}):M(s)}function P(t,s){const i=s.filter(c["a"].status.get(c["a"].StatusCode.Pending).predicator),a=[];for(const e of t){const t=e.scanner!==c["a"].ScannerCode.Unknown,s=i.filter(s=>s.title===e.title&&(!(s.confirmedTime>=e.resultTime)&&(!t||s.scanner===c["a"].ScannerCode.Unknown||s.scanner===s.scanner)));s.length<1||a.push({target:e,candidates:s,selected:""})}a.length<1?M(s):(e.matchData.packs=a,e.matchData.callback=()=>{for(const t of e.matchData.packs)if(!(t.selected.length<1)){for(const e of t.candidates)if(e.id===t.selected){t.target.image=e.image,t.target.id=e.id;break}if(!(t.target.id.length<1))for(const e of s)e.merge(t.target)}e.matchData.packs=[],e.matchData.callback=()=>{},M(s)},T(n["a"].Status.requestMatch))}function M(e){o.commit("setNominations",e),L(),T(n["a"].Status.idle)}function T(e){T(e)}function A(e,t){T(n["a"].Status.syncing),i.drive.download(e,e=>{if(!e)return t(0),!1;try{const s=F(e);t(s)}catch(s){return!0}return!1})}function F(e){let t=0;try{const s=e.map(e=>l["a"].parse(e)),n=o.state.nominations.map(e=>e);for(const e of s){let s=!1;for(const i of n)if(s=i.merge(e),s){t+=1;break}s||n.push(e)}o.commit("setNominations",n),L()}catch(s){t=0}return t}function j(){const e=o.state.nominations.map(e=>e.json);return new Blob([JSON.stringify(e,null,4)],{type:s})}function C(){const e=localStorage.getItem("potori.nominations");if(e)try{const t=JSON.parse(e),s=t.map(e=>l["a"].parse(e));o.commit("setNominations",s)}catch(t){}}function L(){localStorage.setItem("potori.nominations",JSON.stringify(o.state.nominations.map(e=>e.json)))}e.matchData={packs:[],callback:()=>{}},e.init=d,e.signIn=u,e.signOut=m,e.refresh=p,e.sync=f,e.upload=w,e.migrate=b,e.importNominationsFile=y,e.exportNominationsFile=v,e.clearNominations=S})(m||(m={}))},a7a0:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var n=s("ce89");const i="service.nomination",a={day:i+".day",missing:i+".missing",messageParseErrorMissingId:`message:${i}.parseErrorMissingId`,messageParseErrorMissingTitle:`message:${i}.parseErrorMissingTitle`,messageParseErrorMissingImage:`message:${i}.parseErrorMissingImage`,messageParseErrorInvalidId:`message:${i}.parseErrorInvalidId`,messageParseErrorInvalidImage:`message:${i}.parseErrorInvalidImage`};class r{constructor(){this.id="",this.title="",this.image="",this.scanner=n["a"].ScannerCode.Unknown,this.status=n["a"].StatusCode.Pending,this.reasons=[],this.confirmedTime=0,this.confirmationMailId="",this.resultTime=0,this.resultMailId="",this.lngLat=void 0}get imageUrl(){return"https://lh3.googleusercontent.com/"+this.image}get intelUrl(){return this.lngLat?`https://intel.ingress.com/intel?ll=${this.lngLat.lat},${this.lngLat.lng}&z=18`:"https://intel.ingress.com/intel"}get bsUrl(){return"https://brainstorming.azurewebsites.net/watermeter.html#"+this.id}get scannerData(){return n["a"].scanner.get(this.scanner)}get statusData(){return n["a"].status.get(this.status)}get reasonsData(){return this.reasons.map(e=>n["a"].reason.get(e))}get restoreTime(){return this.confirmedTime+12096e5}get json(){let e={id:this.id,title:this.title,image:this.image,status:this.status,confirmedTime:this.confirmedTime/1e3,confirmationMailId:this.confirmationMailId};return this.scanner!=n["a"].ScannerCode.Unknown&&(e.scanner=this.scanner),this.reasons.length>0&&(e.reasons=this.reasons),this.resultTime&&(e.resultTime=this.resultTime/1e3),this.resultMailId&&(e.resultMailId=this.resultMailId),this.lngLat&&(e.lngLat={lng:this.lngLat.lng,lat:this.lngLat.lat}),e}merge(e){return this.id===e.id&&(this.status===n["a"].StatusCode.Pending?(this.title=e.title,this.status=e.status,this.reasons=e.reasons,this.resultTime=e.resultTime,this.resultMailId=e.resultMailId):(this.confirmedTime=e.confirmedTime,this.confirmationMailId=e.confirmationMailId),this.lngLat||(this.lngLat=e.lngLat),!0)}static parse(e){if(!e.id)throw new Error(a.messageParseErrorMissingId);if(!e.title)throw new Error(a.messageParseErrorMissingTitle);if(!e.image)throw new Error(a.messageParseErrorMissingImage);const t=e.image.replace("\r","");if(!/^[a-zA-Z0-9]+$/.test(e.id))throw new Error(a.messageParseErrorInvalidId);if(!/^[0-9a-zA-Z\-\_]+$/.test(t))throw new Error(a.messageParseErrorInvalidImage);const s=new r;if(s.id=e.id,s.title=e.title,s.image=t,e.scanner&&(s.scanner=e.scanner),e.status===n["a"].StatusCode.Pending?s.status=n["a"].StatusCode.Pending:e.status===n["a"].StatusCode.Accepted?s.status=n["a"].StatusCode.Accepted:(s.status=n["a"].StatusCode.Rejected,e.status!==n["a"].Reason.undeclared&&n["a"].reason.has(e.status)&&s.reasons.push(e.status)),e.reasons)for(const i of e.reasons)n["a"].reason.has(i)&&!s.reasons.includes(i)&&s.reasons.push(i);return s.confirmedTime=e.confirmedTime>r.timestampSecondBound?e.confirmedTime:1e3*e.confirmedTime,s.confirmationMailId=e.confirmationMailId,e.resultTime&&(s.resultTime=e.resultTime>r.timestampSecondBound?e.resultTime:1e3*e.resultTime),e.resultMailId&&(s.resultMailId=e.resultMailId),e.lngLat&&(s.lngLat={lng:e.lngLat.lng,lat:e.lngLat.lat}),s}static parseId(e){return e.replace(/[^a-zA-Z0-9]/g,"").slice(-10).toLowerCase()}}r.timestampSecondBound=1e12,r.comparatorByTime=(e,t)=>{const s=e.resultTime?e.resultTime:e.confirmedTime,n=t.resultTime?t.resultTime:t.confirmedTime;return s<n?1:-1}},b15b:function(e,t,s){"use strict";var n;s.d(t,"a",(function(){return n})),function(e){function t(e,t){localStorage.setItem(e,JSON.stringify(t))}function s(e,t){const s=localStorage.getItem(e);return null!==s?JSON.parse(s):t}let n;e.set=t,e.get=s,function(t){const s="potori.pref.google.sync";function n(){return e.get(s,!1)}function i(t){e.set(s,t)}t.sync=n,t.setSync=i}(n=e.google||(e.google={}))}(n||(n={}))},c65b:function(e,t,s){"use strict";s("f4a7")},cd49:function(e,t,s){"use strict";s.r(t);var n=s("7a23");function i(e,t){const s=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])(s)}s("c65b");const a={};a.render=i;var r=a,o=s("6c02");const c=[{path:"/",name:"Dashboard",component:()=>Promise.all([s.e("dashboard~details~list~match~preferences"),s.e("dashboard")]).then(s.bind(null,"7277"))},{path:"/list",name:"List",component:()=>Promise.all([s.e("dashboard~details~list~match~preferences"),s.e("list")]).then(s.bind(null,"46b1"))},{path:"/details",name:"Details",component:()=>Promise.all([s.e("dashboard~details~list~match~preferences"),s.e("details")]).then(s.bind(null,"069a"))},{path:"/preferences",name:"Preferences",component:()=>Promise.all([s.e("dashboard~details~list~match~preferences"),s.e("preferences")]).then(s.bind(null,"a55d"))},{path:"/match",name:"Match",component:()=>Promise.all([s.e("dashboard~details~list~match~preferences"),s.e("match")]).then(s.bind(null,"e21b"))}],l=Object(o["a"])({history:Object(o["b"])("/next/"),routes:c});var d=l,u=s("0613"),h=s("6022");h["a"].init(u["b"]),Object(n["c"])(r).use(u["b"]).use(d).mount("#app")},ce89:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var n,i=s("eded");(function(e){let t,s;(function(e){e[e["Unknown"]=0]="Unknown",e[e["Redacted"]=1]="Redacted",e[e["Prime"]=2]="Prime"})(t=e.ScannerCode||(e.ScannerCode={}));class n{constructor(e,t){this.code=e,this.title=t,this.predicator=e=>e.scanner===this.code}}e.Scanner=n,function(e){e[e["Pending"]=0]="Pending",e[e["Accepted"]=1]="Accepted",e[e["Rejected"]=101]="Rejected"}(s=e.StatusCode||(e.StatusCode={}));class a{constructor(e,t,s,n){this.code=e,this.title=t,this.icon=s,this.queries=n,this.predicator=e=>e.status===this.code}}e.Status=a;class r{constructor(e,t,n,i,a){this.code=e,this.title=t,this.icon=n,this.color=i,this.keywords=a,e===r.undeclared?this.predicator=e=>e.status===s.Rejected&&e.reasons.length<1:this.predicator=t=>t.status===s.Rejected&&t.reasons.indexOf(e)>-1}}r.undeclared=101,r.duplicated=102,r.close=103,e.Reason=r,e.scanner=i.scanners.reduce((e,t)=>{const s=new n(t.code,t.title);return e.set(s.code,s),e},new Map),e.status=i.statuses.reduce((e,t)=>{const s=new a(t.code,t.title,t.iconFA,t.queries.reduce((e,t)=>(e.set(t.scanner,t.query),e),new Map));return e.set(s.code,s),e},new Map),e.reason=i.reasons.reduce((e,t)=>{const s=new r(t.code,t.title,t.iconFA,t.color,t.keywords.reduce((e,t)=>(e.set(t.scanner,t.keywords),e),new Map));return e.set(s.code,s),e},new Map)})(n||(n={}))},eded:function(e){e.exports=JSON.parse('{"version":"9","scanners":[{"code":0,"title":"Unknown"},{"code":1,"title":"Redacted"},{"code":2,"title":"Prime"}],"statuses":[{"code":0,"title":"data.pending","iconFA":"","iconSF":"clock","queries":[{"scanner":1,"query":"from:ingress-support@nianticlabs.com Portal submission confirmation -edit -photo"},{"scanner":2,"query":"from:nominations@portals.ingress.com subject:(\\"能量塔提交確認\\" OR \\"Portal申請の受領確認\\" OR \\"Portal submission confirmation\\") -AP"}]},{"code":1,"title":"data.accepted","iconFA":"","iconSF":"checkmark.circle","queries":[{"scanner":1,"query":"from:ingress-support@nianticlabs.com Portal review complete now available -edit -photo"},{"scanner":2,"query":"from:nominations@portals.ingress.com Intel Map AP"}]},{"code":101,"title":"data.rejected","iconFA":"","iconSF":"xmark.circle","queries":[{"scanner":1,"query":"from:ingress-support@nianticlabs.com Portal review complete reviewed -edit -photo"},{"scanner":2,"query":"from:nominations@portals.ingress.com subject:(\\"能量塔審查完畢\\" OR \\"Portal審査の完了\\" OR \\"Portal review complete\\") -AP"}]}],"reasons":[{"code":101,"title":"data.undeclared","iconFA":"","iconSF":"xmark.circle","color":"#B0373C","keywords":[]},{"code":102,"title":"data.duplicated","iconFA":"","iconSF":"doc.on.doc","color":"#5E90B8","keywords":[{"scanner":1,"keywords":["duplicate of either an existing Portal"]},{"scanner":2,"keywords":["duplicate of an existing Portal"]}]},{"code":103,"title":"data.close","iconFA":"","iconSF":"ruler","color":"#009345","keywords":[{"scanner":1,"keywords":["too close to an existing Portal"]},{"scanner":2,"keywords":["能量塔過近","too close to"]}]},{"code":226,"title":"data.criteriaCriteria","iconFA":"","iconSF":"xmark.octagon","color":"#B80233","keywords":[{"scanner":2,"keywords":["meet acceptance criteria"]}]},{"code":236,"title":"data.criteriaNatural","iconFA":"","iconSF":"leaf","color":"#5F8FAD","keywords":[{"scanner":2,"keywords":["be a natural feature"]}]},{"code":246,"title":"data.criteriaTemporary","iconFA":"","iconSF":"circle.dashed","color":"#647372","keywords":[{"scanner":2,"keywords":["seasonal display"]}]},{"code":281,"title":"data.criteriaGeneric","iconFA":"","iconSF":"shippingbox","color":"#F0C649","keywords":[{"scanner":2,"keywords":["generic store"]}]},{"code":331,"title":"data.locationMismatched","iconFA":"","iconSF":"mappin.slash","color":"#C28282","keywords":[{"scanner":2,"keywords":["accurately reflects the submitted"]}]},{"code":346,"title":"data.locationPrivate","iconFA":"","iconSF":"lock","color":"#5A4C4C","keywords":[{"scanner":2,"keywords":["private residential"]}]},{"code":426,"title":"data.photoPlate","iconFA":"","iconSF":"car","color":"#004DB5","keywords":[{"scanner":2,"keywords":["license plate"]}]},{"code":431,"title":"data.photoQuality","iconFA":"","iconSF":"photo","color":"#5A715F","keywords":[{"scanner":2,"keywords":["Photo is low quality"]}]}]}')},f4a7:function(e,t,s){}});
//# sourceMappingURL=app.009e5449.js.map