(()=>{"use strict";var e,n,t,r,o,a,i,s,c,l,u,d,p,f,v={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'/* CSS Reset */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: "Italiana", Arial, Helvetica, sans-serif;\n}\n\n\n#header {\n    font-family: "Italianno";\n    font-size: 6rem;\n    padding: 1rem 0;\n    vertical-align: baseline;\n}\n\n#tab-group {\n    display: flex;\n    font-size: 2rem;\n    font-weight: bold;\n    gap: 3rem;\n    justify-content: center;\n    padding: 1rem;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 2.5rem;\n}\n\n#header,\n#tab-group,\n#footer {\n    background-color: black;\n    color: white;\n    text-align: center;\n}',""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},m={};function h(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return v[e](t,t.exports,h),t.exports}h.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return h.d(n,{a:n}),n},h.d=(e,n)=>{for(var t in n)h.o(n,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},h.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),h.nc=void 0,e=h(379),n=h.n(e),t=h(795),r=h.n(t),o=h(569),a=h.n(o),i=h(565),s=h.n(i),c=h(216),l=h.n(c),u=h(589),d=h.n(u),p=h(426),(f={}).styleTagTransform=d(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,console.log("Main is working!"),document.body.appendChild(function(){const e=document.createElement("div");return e.innerHTML="Mama Mia's!!!!!!!!!",e.classList.add("hello"),e}())})();