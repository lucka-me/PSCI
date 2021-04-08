(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["preferences"],{"0d7f":function(e){e.exports=JSON.parse('{"version":"1.0.0","build":"1529"}')},"1dec":function(e){e.exports=JSON.parse('{"en":{"header":"General","queryAfterLatest":"Query After Latest","queryAfterLatestDesc":"Query mails received after the latest one"},"zh":{"header":"一般","queryAfterLatest":"仅查询最新邮件","queryAfterLatestDesc":"仅查询在当前最新邮件之后收到的邮件"}}')},"2ea4":function(e){e.exports=JSON.parse('{"en":{"header":"Data","importAction":"Import","exportAction":"Export","clearAction":"Clear","importNominations":"Import Nominations","importNominationsDesc":"Import nominations from JSON ile","importNominationsInform":"Imported {count} nominations","exportNominations":"Export Nominations","exportNominationsDesc":"Export nominations to JSON file","importWayfarer":"Import Wayfarer JSON","importWayfarerDesc":"Import JSON from https://wayfarer.nianticlabs.com/api/v1/vault/manage","importWayfarerPrompt":"Paste Wayfarer JSON","importWayfarerAlertParseError":"Unable to parse the JSON.","importWayfarerAlertDataInvalid":"The data is invalid.","importWayfarerInform":"Updated {count} nominations","clearNominations":"Clear Nominations","clearNominationsDesc":"Clear all nominations from local storage"},"zh":{"header":"数据","importAction":"导入","exportAction":"导出","clearAction":"清空","importNominations":"导入提名","importNominationsDesc":"从JSON文件中导入提名","importNominationsInform":"导入了{count}个提名。","exportNominations":"导出提名","exportNominationsDesc":"将提名导出至JSON文件","importWayfarer":"导入Wayfarer JSON","importWayfarerDesc":"导入来自 https://wayfarer.nianticlabs.com/api/v1/vault/manage 的JSON","importWayfarerPrompt":"粘贴Wayfarer JSON","importWayfarerAlertParseError":"无法解析JSON。","importWayfarerAlertDataInvalid":"数据不正确。","importWayfarerInform":"更新了{count}个提名。","clearNominations":"清空提名","clearNominationsDesc":"从本地存储中清空提名"}}')},"47b0":function(e,t,r){},8092:function(e){e.exports=JSON.parse('{"en":{"header":"Google","account":"Account","accountDesc":"Link / unlink Google Account","link":"Link","unlink":"Unlink","sync":"Sync Google Drive","syncDesc":"Sync with Google Drive when refresh","syncNow":"Sync Now","syncNowDesc":"Sync with Google Drive","syncNowAction":"Sync","uploadNow":"Upload Now","uploadNowDesc":"Upload data to Google Drive","uploadNowAction":"Upload","migrate":"Migrate","migrateDesc":"Migrate data from Potori before 0.8.0","loadingGAPI":"Loading Google API"},"zh":{"header":"Google","account":"账号","accountDesc":"连接/取消连接Google账号","link":"连接","unlink":"取消连接","sync":"同步Google硬盘","syncDesc":"刷新时同步Google硬盘","syncNow":"现在同步","syncNowDesc":"现在同步Google硬盘","syncNowAction":"同步","uploadNow":"现在上传","uploadNowDesc":"将数据上传至Google硬盘","uploadNowAction":"上传","migrate":"迁移","migrateDesc":"从0.8.0之前的Potori迁移数据","loadingGAPI":"正在加载Google API"}}')},"81e5":function(e){e.exports=JSON.parse('{"en":{"header":"Brainstorming","importAction":"Import","exportAction":"Export","clearAction":"Clear","autoQueryFirebase":"Automatically Query Firebase","autoQueryFirebaseDesc":"Query Firebase to get locations of nomination after processing mails","importDatabase":"Import Database","importDatabaseDesc":"Import records from JSON file","importDatabaseInform":"Imported {count} records.","exportDatabase":"Export Database","exportDatabaseDesc":"Export records to JSON file","exportDatabaseInform":"Exported {count} records.","clearDatabase":"Clear Database","clearDatabaseDesc":"Clear all records from local storage"},"zh":{"header":"Brainstorming","importAction":"导入","exportAction":"导出","clearAction":"清空","autoQueryFirebase":"自动查询Firebase","autoQueryFirebaseDesc":"处理邮件后自动查询Firebase以获取提名位置","importDatabase":"导入数据库","importDatabaseDesc":"从JSON文件中导入记录","importDatabaseInform":"导入了{count}条记录。","exportDatabase":"导出数据库","exportDatabaseDesc":"将记录导出至JSON文件","exportDatabaseInform":"导出了{count}条记录。","clearDatabase":"清空数据库","clearDatabaseDesc":"从本地存储中清空记录"}}')},"88f5":function(e,t,r){},"8a13":function(e,t,r){"use strict";r("47b0")},"9a23":function(e,t,r){"use strict";r("88f5")},a55d:function(e,t,r){"use strict";r.r(t);var o=r("7a23");const a={class:"preferences"},n=Object(o["i"])("hr",null,null,-1),c=Object(o["i"])("hr",null,null,-1),i=Object(o["i"])("hr",null,null,-1),s=Object(o["i"])("hr",null,null,-1);function l(e,t,r,l,u,b){const d=Object(o["A"])("material-top-app-bar"),p=Object(o["A"])("material-top-app-bar-adjust"),O=Object(o["A"])("general-preferences"),f=Object(o["A"])("google-preferences"),j=Object(o["A"])("data-preferences"),m=Object(o["A"])("brainstorming-preferences"),h=Object(o["A"])("about-preferences");return Object(o["t"])(),Object(o["e"])(o["a"],null,[Object(o["i"])(d,{title:e.$t("title"),"navi-back":""},null,8,["title"]),Object(o["i"])(p),Object(o["i"])("main",a,[Object(o["i"])(O),n,Object(o["i"])(f),c,Object(o["i"])(j),i,Object(o["i"])(m),s,Object(o["i"])(h)])],64)}var u=r("9ab4"),b=r("ce1f"),d=r("2281"),p=r("4892");function O(e,t,r,a,n,c){const i=Object(o["A"])("preference-row"),s=Object(o["A"])("material-button");return Object(o["t"])(),Object(o["e"])(o["a"],null,[Object(o["i"])("h2",null,Object(o["C"])(e.$t("header")),1),Object(o["i"])(i,{text:e.$t("appVersion"),desc:e.appVersion},null,8,["text","desc"]),Object(o["i"])(i,{text:e.$t("dataVersion"),desc:e.dataVersion},null,8,["text","desc"]),Object(o["i"])(i,{text:e.$t("document")},{default:Object(o["F"])(()=>[Object(o["i"])(s,{onClick:e.openDoc},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("openAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text"]),Object(o["i"])(i,{text:e.$t("privacy")},{default:Object(o["F"])(()=>[Object(o["i"])(s,{onClick:e.openPrivacy},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("openAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text"]),Object(o["i"])(i,{text:e.$t("telegram")},{default:Object(o["F"])(()=>[Object(o["i"])(s,{onClick:e.openTelegram},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("openAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text"]),Object(o["i"])(i,{text:e.$t("repository"),desc:e.$t("repositoryDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(s,{onClick:e.openRepo},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("openAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"]),e.hasErrors?(Object(o["t"])(),Object(o["e"])(i,{key:0,text:e.$t("exportErrors"),desc:e.$t("exportErrorsDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(s,{onClick:e.exportErrors},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("exportErrorsAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"])):Object(o["f"])("",!0)],64)}var f=r("42b4"),j=r("6022"),m=r("ce89"),h=r("8043"),y=r("0d7f"),g=r("1703");const C={class:"row"},v={class:"text"},x={key:0,class:"desc"},A={key:0,class:"spacer"},D={key:1,class:"action"};function k(e,t,r,a,n,c){return Object(o["t"])(),Object(o["e"])("div",C,[Object(o["i"])("div",v,[Object(o["i"])("span",null,Object(o["C"])(e.text),1),e.desc?(Object(o["t"])(),Object(o["e"])("span",x,Object(o["C"])(e.desc),1)):Object(o["f"])("",!0)]),e.$slots.default?(Object(o["t"])(),Object(o["e"])("div",A)):Object(o["f"])("",!0),e.$slots.default?(Object(o["t"])(),Object(o["e"])("div",D,[Object(o["z"])(e.$slots,"default")])):Object(o["f"])("",!0)])}var _=r("1b40");class N extends _["d"]{}Object(u["c"])([Object(_["c"])(String)],N.prototype,"text",void 0),Object(u["c"])([Object(_["c"])(String)],N.prototype,"desc",void 0);r("e723");N.render=k;var $=N,w=r("b44e");let E=class extends b["b"]{get appVersion(){return`${y.version} (${y.build})`}get dataVersion(){return m["a"].version}get hasErrors(){return j["b"].errors.length>0}openDoc(){window.open(this.$t("documentLink"),"_blank")}openPrivacy(){window.open(this.$t("privacyLink"),"_blank")}openTelegram(){window.open("https://t.me/potori","_blank")}openRepo(){window.open("https://github.com/lucka-me/potori","_blank")}exportErrors(){let e="";for(const t of j["b"].errors){let r=t.message;if("message"in t.error){const e=t.error;r=e.stack||e.message}e+=`[${t.filename}][${t.lineno}:${t.colno}]${r}\n`}h["a"].copy(e),f["a"].inform(this.$t("exportErrorsInform",{count:j["b"].errors.length}))}};E=Object(u["c"])([Object(b["a"])({components:{MaterialButton:g["a"],PreferenceRow:$},i18n:{messages:w}})],E);var S=E;S.render=O;var F=S;function I(e,t,r,a,n,c){const i=Object(o["A"])("material-switch"),s=Object(o["A"])("preference-row"),l=Object(o["A"])("material-button");return Object(o["t"])(),Object(o["e"])(o["a"],null,[Object(o["i"])("h2",null,Object(o["C"])(e.$t("header")),1),Object(o["i"])(s,{text:e.$t("autoQueryFirebase"),desc:e.$t("autoQueryFirebaseDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(i,{modelValue:e.autoQueryFirebase,"onUpdate:modelValue":t[1]||(t[1]=t=>e.autoQueryFirebase=t)},null,8,["modelValue"])]),_:1},8,["text","desc"]),Object(o["i"])(s,{text:e.$t("importDatabase"),desc:e.$t("importDatabaseDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(l,{onClick:e.importDatabase},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("importAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"]),Object(o["i"])(s,{text:e.$t("exportDatabase"),desc:e.$t("exportDatabaseDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(l,{onClick:e.exportDatabase},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("exportAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"]),Object(o["i"])(s,{text:e.$t("clearDatabase"),desc:e.$t("clearDatabaseDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(l,{onClick:e.clear},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("clearAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"])],64)}var P=r("ad8e"),L=r("b15b");const J={class:"mdc-switch"},V=Object(o["i"])("div",{class:"mdc-switch__track"},null,-1),R=Object(o["i"])("div",{class:"mdc-switch__thumb-underlay"},[Object(o["i"])("div",{class:"mdc-switch__thumb"}),Object(o["i"])("input",{type:"checkbox",class:"mdc-switch__native-control",role:"switch"})],-1);function W(e,t,r,a,n,c){return Object(o["t"])(),Object(o["e"])("div",J,[V,R])}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var G=function(e,t){return G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},G(e,t)};function T(e,t){function r(){this.constructor=e}G(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var Q=function(){return Q=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Q.apply(this,arguments)};function B(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,a,n=r.call(e),c=[];try{while((void 0===t||t-- >0)&&!(o=n.next()).done)c.push(o.value)}catch(i){a={error:i}}finally{try{o&&!o.done&&(r=n["return"])&&r.call(n)}finally{if(a)throw a.error}}return c}function q(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(B(arguments[t]));return e}var M=r("8136"),H=r("9373"),U=r("d87f"),z=r("40ff"),K=r("4303"),X=r("6689"),Y={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},Z={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},ee=function(e){function t(r){return e.call(this,Q(Q({},t.defaultAdapter),r))||this}return T(t,e),Object.defineProperty(t,"strings",{get:function(){return Z},enumerable:!0,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return Y},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!0,configurable:!0}),t.prototype.setChecked=function(e){this.adapter.setNativeControlChecked(e),this.updateAriaChecked_(e),this.updateCheckedStyling_(e)},t.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(Y.DISABLED):this.adapter.removeClass(Y.DISABLED)},t.prototype.handleChange=function(e){var t=e.target;this.updateAriaChecked_(t.checked),this.updateCheckedStyling_(t.checked)},t.prototype.updateCheckedStyling_=function(e){e?this.adapter.addClass(Y.CHECKED):this.adapter.removeClass(Y.CHECKED)},t.prototype.updateAriaChecked_=function(e){this.adapter.setNativeControlAttr(Z.ARIA_CHECKED_ATTR,""+!!e)},t}(X["a"]),te=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ripple_=t.createRipple_(),t}return T(t,e),t.attachTo=function(e){return new t(e)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.changeHandler_)},t.prototype.initialSyncWithDOM=function(){var e=this;this.changeHandler_=function(){for(var t,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return(t=e.foundation).handleChange.apply(t,q(r))},this.nativeControl_.addEventListener("change",this.changeHandler_),this.checked=this.checked},t.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(t){return e.root.classList.add(t)},removeClass:function(t){return e.root.classList.remove(t)},setNativeControlChecked:function(t){return e.nativeControl_.checked=t},setNativeControlDisabled:function(t){return e.nativeControl_.disabled=t},setNativeControlAttr:function(t,r){return e.nativeControl_.setAttribute(t,r)}};return new ee(t)},Object.defineProperty(t.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(e){this.foundation.setChecked(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(e){this.foundation.setDisabled(e)},enumerable:!0,configurable:!0}),t.prototype.createRipple_=function(){var e=this,t=ee.strings.RIPPLE_SURFACE_SELECTOR,r=this.root.querySelector(t),o=Q(Q({},z["a"].createAdapter(this)),{addClass:function(e){return r.classList.add(e)},computeBoundingRect:function(){return r.getBoundingClientRect()},deregisterInteractionHandler:function(t,r){e.nativeControl_.removeEventListener(t,r,Object(H["a"])())},isSurfaceActive:function(){return Object(U["c"])(e.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(t,r){e.nativeControl_.addEventListener(t,r,Object(H["a"])())},removeClass:function(e){r.classList.remove(e)},updateCssVariable:function(e,t){r.style.setProperty(e,t)}});return new z["a"](this.root,new K["a"](o))},Object.defineProperty(t.prototype,"nativeControl_",{get:function(){var e=ee.strings.NATIVE_CONTROL_SELECTOR;return this.root.querySelector(e)},enumerable:!0,configurable:!0}),t}(M["a"]);class re extends _["d"]{onValueChanged(e,t){this.ctrl&&(this.ctrl.checked=e)}mounted(){this.ctrl=te.attachTo(this.$el),this.ctrl.checked=this.value,this.ctrl.listen("change",this.changed)}unmounted(){var e;null===(e=this.ctrl)||void 0===e||e.destroy()}changed(){this.ctrl&&this.$emit("update:modelValue",this.ctrl.checked)}}Object(u["c"])([Object(_["a"])("modelValue",{type:Boolean,default:!1})],re.prototype,"value",void 0),Object(u["c"])([Object(_["e"])("value")],re.prototype,"onValueChanged",null);r("9a23");re.render=W;var oe=re,ae=r("81e5");let ne=class extends b["b"]{get autoQueryFirebase(){return L["a"].brainstorming.autoQueryFirebase()}set autoQueryFirebase(e){L["a"].brainstorming.setAutoQueryFirebase(e)}importDatabase(){return Object(u["b"])(this,void 0,void 0,(function*(){const e=yield P["a"].importDatabase();f["a"].inform(this.$t("importDatabaseInform",{count:e}))}))}exportDatabase(){return Object(u["b"])(this,void 0,void 0,(function*(){const e=yield P["a"].exportDatabase();f["a"].inform(this.$t("exportDatabaseInform",{count:e}))}))}clear(){P["a"].clear()}};ne=Object(u["c"])([Object(b["a"])({components:{MaterialButton:g["a"],MaterialSwitch:oe,PreferenceRow:$},i18n:{messages:ae}})],ne);var ce=ne;ce.render=I;var ie=ce;function se(e,t,r,a,n,c){const i=Object(o["A"])("material-button"),s=Object(o["A"])("preference-row");return Object(o["t"])(),Object(o["e"])(o["a"],null,[Object(o["i"])("h2",null,Object(o["C"])(e.$t("header")),1),e.idle?(Object(o["t"])(),Object(o["e"])(s,{key:0,text:e.$t("importNominations"),desc:e.$t("importNominationsDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(i,{onClick:e.importNominations},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("importAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"])):Object(o["f"])("",!0),e.idle?(Object(o["t"])(),Object(o["e"])(s,{key:1,text:e.$t("exportNominations"),desc:e.$t("exportNominationsDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(i,{onClick:e.exportNominations},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("exportAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"])):Object(o["f"])("",!0),e.idle?(Object(o["t"])(),Object(o["e"])(s,{key:2,text:e.$t("importWayfarer"),desc:e.$t("importWayfarerDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(i,{onClick:e.importWayfarerJSON},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("importAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"])):Object(o["f"])("",!0),e.idle?(Object(o["t"])(),Object(o["e"])(s,{key:3,text:e.$t("clearNominations"),desc:e.$t("clearNominationsDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(i,{onClick:e.clearNominations},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("clearAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"])):Object(o["f"])("",!0)],64)}var le=r("2e5e"),ue=r("2ea4");let be=class extends b["b"]{get idle(){return this.$store.state.service.status===j["b"].Status.idle}importNominations(){return Object(u["b"])(this,void 0,void 0,(function*(){const e=yield j["b"].importNominationsFile();f["a"].inform(this.$t("importNominationsInform",{count:e}))}))}exportNominations(){j["b"].exportNominationsFile()}importWayfarerJSON(){return Object(u["b"])(this,void 0,void 0,(function*(){const e=window.prompt(this.$t("importWayfarerPrompt"));if(!e)return;const t=yield j["b"].importWayfarerJSON(e);switch(t){case-1:f["a"].alert(this.$t("importWayfarerAlertParseError"));break;case-2:f["a"].alert(this.$t("importWayfarerAlertDataInvalid"));break;default:f["a"].inform(this.$t("importWayfarerInform",{count:t}));break}}))}clearNominations(){le["a"].clear()}};be=Object(u["c"])([Object(b["a"])({components:{MaterialButton:g["a"],PreferenceRow:$},i18n:{messages:ue}})],be);var de=be;de.render=se;var pe=de;function Oe(e,t,r,a,n,c){const i=Object(o["A"])("material-switch"),s=Object(o["A"])("preference-row");return Object(o["t"])(),Object(o["e"])(o["a"],null,[Object(o["i"])("h2",null,Object(o["C"])(e.$t("header")),1),Object(o["i"])(s,{text:e.$t("queryAfterLatest"),desc:e.$t("queryAfterLatestDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(i,{modelValue:e.queryAfterLatest,"onUpdate:modelValue":t[1]||(t[1]=t=>e.queryAfterLatest=t)},null,8,["modelValue"])]),_:1},8,["text","desc"])],64)}var fe=r("1dec");let je=class extends b["b"]{get queryAfterLatest(){return L["a"].general.queryAfterLatest()}set queryAfterLatest(e){L["a"].general.setQueryAfterLatest(e)}};je=Object(u["c"])([Object(b["a"])({components:{MaterialSwitch:oe,PreferenceRow:$},i18n:{messages:fe}})],je);var me=je;me.render=Oe;var he=me;function ye(e,t,r,a,n,c){const i=Object(o["A"])("material-button"),s=Object(o["A"])("preference-row"),l=Object(o["A"])("material-switch");return Object(o["t"])(),Object(o["e"])(o["a"],null,[Object(o["i"])("h2",null,Object(o["C"])(e.$t("header")),1),e.loaded?(Object(o["t"])(),Object(o["e"])(s,{key:0,text:e.$t("account"),desc:e.$t("accountDesc")},{default:Object(o["F"])(()=>[e.authed?(Object(o["t"])(),Object(o["e"])(i,{key:0,onClick:e.unlink},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("unlink")),1)]),_:1},8,["onClick"])):(Object(o["t"])(),Object(o["e"])(i,{key:1,onClick:e.link},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("link")),1)]),_:1},8,["onClick"]))]),_:1},8,["text","desc"])):Object(o["f"])("",!0),e.authed&&e.idle?(Object(o["t"])(),Object(o["e"])(s,{key:1,text:e.$t("sync"),desc:e.$t("syncDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(l,{modelValue:e.sync,"onUpdate:modelValue":t[1]||(t[1]=t=>e.sync=t)},null,8,["modelValue"])]),_:1},8,["text","desc"])):Object(o["f"])("",!0),e.authed&&e.idle?(Object(o["t"])(),Object(o["e"])(s,{key:2,text:e.$t("syncNow"),desc:e.$t("syncNowDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(i,{onClick:e.doSync},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("syncNowAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"])):Object(o["f"])("",!0),e.authed&&e.idle?(Object(o["t"])(),Object(o["e"])(s,{key:3,text:e.$t("uploadNow"),desc:e.$t("uploadNowDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(i,{onClick:e.upload},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("uploadNowAction")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"])):Object(o["f"])("",!0),e.authed&&e.idle?(Object(o["t"])(),Object(o["e"])(s,{key:4,text:e.$t("migrate"),desc:e.$t("migrateDesc")},{default:Object(o["F"])(()=>[Object(o["i"])(i,{onClick:e.migrate},{default:Object(o["F"])(()=>[Object(o["h"])(Object(o["C"])(e.$t("migrate")),1)]),_:1},8,["onClick"])]),_:1},8,["text","desc"])):Object(o["f"])("",!0),e.loaded?Object(o["f"])("",!0):(Object(o["t"])(),Object(o["e"])(s,{key:5,text:e.$t("loadingGAPI")},null,8,["text"]))],64)}var ge=r("8092");let Ce=class extends b["b"]{get loaded(){return this.$store.state.google.loaded}get authed(){return this.$store.state.google.authed}get idle(){return this.$store.state.service.status===j["b"].Status.idle}get sync(){return L["a"].google.sync()}set sync(e){L["a"].google.setSync(e)}link(){j["b"].signIn()}unlink(){j["b"].signOut()}doSync(){j["b"].sync()}upload(){j["b"].upload()}migrate(){j["b"].migrate(e=>{f["a"].inform(`Migrated ${e} nominations.`)})}};Ce=Object(u["c"])([Object(b["a"])({components:{MaterialButton:g["a"],MaterialSwitch:oe,PreferenceRow:$},i18n:{messages:ge}})],Ce);var ve=Ce;ve.render=ye;var xe=ve,Ae=r("f540");let De=class extends b["b"]{};De=Object(u["c"])([Object(b["a"])({components:{MaterialTopAppBar:d["a"],MaterialTopAppBarAdjust:p["a"],GeneralPreferences:he,GooglePreferences:xe,BrainstormingPreferences:ie,DataPreferences:pe,AboutPreferences:F},i18n:{messages:Ae}})],De);var ke=De;r("8a13");ke.render=l;t["default"]=ke},b44e:function(e){e.exports=JSON.parse('{"en":{"header":"About","openAction":"Open","appVersion":"App Version","dataVersion":"Data Version","document":"Document","documentLink":"/docs","privacy":"Privacy","privacyLink":"/docs/privacy","telegram":"Telegram Channel","repository":"Code Repository","repositoryDesc":"GitHub","exportErrors":"Export Errors","exportErrorsDesc":"Export errors logged in Potori to clipboard","exportErrorsAction":"Export","exportErrorsInform":"Exported {count} errors to clipboard."},"zh":{"header":"关于","openAction":"打开","appVersion":"应用版本","dataVersion":"数据版本","document":"文档","documentLink":"/docs/zh","privacy":"隐私","privacyLink":"/docs/zh/privacy","telegram":"Telegram频道","repository":"代码仓库","repositoryDesc":"GitHub","exportErrors":"导出错误","exportErrorsDesc":"将Potori中记录的错误导出至剪贴板","exportErrorsAction":"导出","exportErrorsInform":"已将{count}个错误导出至剪贴板。"}}')},e723:function(e,t,r){"use strict";r("e979")},e979:function(e,t,r){},f540:function(e){e.exports=JSON.parse('{"en":{"title":"Preferences"},"zh":{"title":"偏好设置"}}')}}]);
//# sourceMappingURL=preferences.e8c8fb31.js.map