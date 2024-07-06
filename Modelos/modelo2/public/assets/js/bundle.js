(()=>{"use strict";var n={958:(n,e,r)=>{r.d(e,{A:()=>c});var t=r(354),o=r.n(t),a=r(314),i=r.n(a)()(o());i.push([n.id,":root{\n    --colorDefault: rgb(17, 86, 102);\n}\n\n*{\n    padding: 0;\n    margin: 0;\n    outline: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    background-color: var(--colorDefault);\n    height: 100vh;\n    width: 100vw;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.container{\n    background-color: white;\n    height: 100vh;\n    width: 50vw;\n    font-size: 2rem;\n    padding: 2rem 2rem;\n    border-radius: 2%;\n    font-weight: bold;\n    text-align: center;\n}\n.content{\n    height: 50vh;\n    border: solid red;\n}\n.cabecalho{\n    height: 12.5vh;\n    border: solid;\n}\n.rodape{\n    height: 12.5vh;\n    border: solid blue;\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,YAAY;IACZ,yCAAyC;IACzC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,cAAc;IACd,aAAa;AACjB;AACA;IACI,cAAc;IACd,kBAAkB;AACtB",sourcesContent:[":root{\r\n    --colorDefault: rgb(17, 86, 102);\r\n}\r\n\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    outline: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    background-color: var(--colorDefault);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.container{\r\n    background-color: white;\r\n    height: 100vh;\r\n    width: 50vw;\r\n    font-size: 2rem;\r\n    padding: 2rem 2rem;\r\n    border-radius: 2%;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n.content{\r\n    height: 50vh;\r\n    border: solid red;\r\n}\r\n.cabecalho{\r\n    height: 12.5vh;\r\n    border: solid;\r\n}\r\n.rodape{\r\n    height: 12.5vh;\r\n    border: solid blue;\r\n}\r\n"],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<n.length;A++){var u=[].concat(n[A]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},354:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],A=t.base?s[0]+t.base:s[0],u=a[A]||0,d="".concat(A," ").concat(u);a[A]=u+1;var l=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var p=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),A=0;A<a.length;A++){var u=r(a[A]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;var t=r(72),o=r.n(t),a=r(825),i=r.n(a),c=r(659),s=r.n(c),A=r(56),u=r.n(A),d=r(540),l=r.n(d),f=r(113),p=r.n(f),h=r(958),v={};v.styleTagTransform=p(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals})();
//# sourceMappingURL=bundle.js.map