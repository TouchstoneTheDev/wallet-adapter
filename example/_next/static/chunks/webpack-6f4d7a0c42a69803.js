!function(){"use strict";var t={},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={id:r,loaded:!1,exports:{}},i=!0;try{t[r].call(u.exports,u,u.exports,n),i=!1}finally{i&&delete e[r]}return u.loaded=!0,u.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,u){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],u=t[l][2];for(var f=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(f=!1,u<i&&(i=u));if(f){t.splice(l--,1);var a=o();void 0!==a&&(e=a)}}return e}u=u||0;for(var l=t.length;l>0&&t[l-1][2]>u;l--)t[l]=t[l-1];t[l]=[r,o,u]}}(),n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var u=Object.create(null);n.r(u);var i={};t=t||[null,e({}),e([]),e(e)];for(var f=2&o&&r;"object"==typeof f&&!~t.indexOf(f);f=e(f))Object.getOwnPropertyNames(f).forEach((function(t){i[t]=function(){return r[t]}}));return i.default=function(){return r},n.d(u,i),u}}(),n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},n.p="/wallet-adapter/example/_next/",function(){var t={272:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,u,i=r[0],f=r[1],c=r[2],a=0;if(i.some((function(e){return 0!==t[e]}))){for(o in f)n.o(f,o)&&(n.m[o]=f[o]);if(c)var l=c(n)}for(e&&e(r);a<i.length;a++)u=i[a],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(l)},r=self.webpackChunk_N_E=self.webpackChunk_N_E||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}()}();