if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,d,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const f={uri:location.origin+s.slice(1)};return Promise.all(d.map(s=>{switch(s){case"exports":return i;case"module":return f;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-a3b7f982"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/assets/fa-solid-900.eot",revision:"8ac3167427b1d5d2967646bd8f7a0587"},{url:"/assets/fa-solid-900.svg",revision:"664de3932dd6291b4b8a8c0ddbcb4c61"},{url:"/assets/fa-solid-900.ttf",revision:"205f07b3883c484f27f40d21a92950d4"},{url:"/assets/fa-solid-900.woff",revision:"4451e1d86df7491dd874f2c41eee1053"},{url:"/assets/fa-solid-900.woff2",revision:"8e1ed89b6ccb8ce41faf5cb672677105"},{url:"/assets/icon_180x180.png",revision:"d38df88b9355ad60f9196b5940bb3ec5"},{url:"/assets/icon_512x512.png",revision:"69e5d687a15896da5e7bb8268f848ae9"},{url:"/css/modules-async.d28db3173de461606bae.css",revision:"0015ec602e8c92416181b97c36096b86"},{url:"/css/ui-async.48fbb41e6b96e10ff558.css",revision:"f798a2b7f2de3c353dd22c09544fe4eb"},{url:"/css/ui.64c4d28b52cd6004926e.css",revision:"e349f06f70e818ae79ec02f7b5b894d1"},{url:"/icon.png",revision:"f7a7af2217b5358388f7137959befd45"},{url:"/index.html",revision:"d1f5dec344097c70ba60537aaf654745"},{url:"/lib/data.717ee1d05f129ffe3b49.bundle.js",revision:"2aff6221172ad9a29f054656bd3e6875"},{url:"/lib/mdc-async.a436f1accea1fc28cbaa.bundle.js",revision:"d94dcfb6ba6f0f4ea044882100a34d3a"},{url:"/lib/mdc-async.a436f1accea1fc28cbaa.bundle.js.LICENSE.txt",revision:"433f2527027f9e6a03e4fc5baafac36a"},{url:"/lib/mdc.d22d9096eae954476e2c.bundle.js",revision:"4b67f5b63cf1e88178a1ef6e19524643"},{url:"/lib/mdc.d22d9096eae954476e2c.bundle.js.LICENSE.txt",revision:"3869a60dd547f81fbffb56f012a861ec"},{url:"/lib/modules-async.9721bf114021ea86a366.bundle.js",revision:"99302da9b03106c5c2c2974d7d7b4738"},{url:"/lib/modules-async.9721bf114021ea86a366.bundle.js.LICENSE.txt",revision:"a3acba3dc9d601aec64b24175de3162d"},{url:"/lib/modules.a9a43f727da554fb80a9.bundle.js",revision:"78ba3bba485d7157402141cc1d9b8785"},{url:"/lib/modules.a9a43f727da554fb80a9.bundle.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/lib/potori.edfdb1f99daf21222301.js",revision:"f1f31ee34145f6660cc34c6d20e49e5e"},{url:"/lib/service.e477665c1e224883b90e.bundle.js",revision:"5ac02e286e1cd0de4a4b651d6a2c8ed1"},{url:"/lib/ui-async.7420c0180a15d9f79d92.bundle.js",revision:"8be657647efd9b8c41b93515c5c0c4f0"},{url:"/lib/ui.32697f5d3e011fab19c2.bundle.js",revision:"10da962dbd3804bf53f240d3f77596f0"},{url:"/manifest.webmanifest",revision:"f649adab17500d96086ae516110a63bb"},{url:"https://apis.google.com/js/api.js",revision:null},{url:"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap",revision:null}],{}),e.cleanupOutdatedCaches()}));
