if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return d[e]||(s=new Promise(async s=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=s}else importScripts(e),s()})),s.then(()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]})},s=(s,d)=>{Promise.all(s.map(e)).then(e=>d(1===e.length?e[0]:e))},d={require:Promise.resolve(s)};self.define=(s,c,i)=>{d[s]||(d[s]=Promise.resolve().then(()=>{let d={};const b={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return d;case"module":return b;default:return e(s)}})).then(e=>{const s=i(...e);return d.default||(d.default=s),d})}))}}define("./sw.js",["./workbox-a3b7f982"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/assets/fa-solid-900.eot",revision:"8ac3167427b1d5d2967646bd8f7a0587"},{url:"/assets/fa-solid-900.svg",revision:"664de3932dd6291b4b8a8c0ddbcb4c61"},{url:"/assets/fa-solid-900.ttf",revision:"205f07b3883c484f27f40d21a92950d4"},{url:"/assets/fa-solid-900.woff",revision:"4451e1d86df7491dd874f2c41eee1053"},{url:"/assets/fa-solid-900.woff2",revision:"8e1ed89b6ccb8ce41faf5cb672677105"},{url:"/assets/icon_180x180.png",revision:"d38df88b9355ad60f9196b5940bb3ec5"},{url:"/assets/icon_512x512.png",revision:"69e5d687a15896da5e7bb8268f848ae9"},{url:"/css/modules-async.d28db3173de461606bae.css",revision:"0015ec602e8c92416181b97c36096b86"},{url:"/css/ui-async.48fbb41e6b96e10ff558.css",revision:"f798a2b7f2de3c353dd22c09544fe4eb"},{url:"/css/ui.207f7b6d98d6cf0573bc.css",revision:"350a071a2ab96b08fd9c54c8369752e0"},{url:"/icon.png",revision:"f7a7af2217b5358388f7137959befd45"},{url:"/index.html",revision:"716e338297cbc2ffaabbfa8308a47940"},{url:"/lib/data.4116c949453bfc62f258.bundle.js",revision:"5e0dc6fbfade31ba8f3a020863e6fbe2"},{url:"/lib/mdc-async.c2ab0dd94d6af92b5cc6.bundle.js",revision:"47dae4234637c2ff615473cc2093f5f0"},{url:"/lib/mdc-async.c2ab0dd94d6af92b5cc6.bundle.js.LICENSE.txt",revision:"433f2527027f9e6a03e4fc5baafac36a"},{url:"/lib/mdc.b7c9e72eb15d2b6d0e35.bundle.js",revision:"3588010c16210475b1b4a4b15e61923b"},{url:"/lib/mdc.b7c9e72eb15d2b6d0e35.bundle.js.LICENSE.txt",revision:"3869a60dd547f81fbffb56f012a861ec"},{url:"/lib/modules-async.bb0cff1eeb065227aeb5.bundle.js",revision:"ca3c00ece5d501fcc0f1f9472848e983"},{url:"/lib/modules-async.bb0cff1eeb065227aeb5.bundle.js.LICENSE.txt",revision:"a3acba3dc9d601aec64b24175de3162d"},{url:"/lib/modules.c454ecae6bdb8a60b073.bundle.js",revision:"9c4526af1b0de7fd209df32e52c01e54"},{url:"/lib/modules.c454ecae6bdb8a60b073.bundle.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/lib/potori.220edf03aa4975dfcf7b.js",revision:"3c671177732b930d9ffc9f96257c9213"},{url:"/lib/service.61736f11cd323d48db58.bundle.js",revision:"e02d7ca0a1b88fa57b106ca3656efdd5"},{url:"/lib/ui-async.1cc8f449d450f35590fd.bundle.js",revision:"6cfd565241a54cedadae37c48778df40"},{url:"/lib/ui.dcd5ca65dc1e8a254250.bundle.js",revision:"18c4a3d1a4719f11ba48cbbf2fb0eade"},{url:"/manifest.webmanifest",revision:"f649adab17500d96086ae516110a63bb"},{url:"https://apis.google.com/js/api.js",revision:null},{url:"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap",revision:null}],{}),e.cleanupOutdatedCaches()}));
