var DbbButton=function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";function d(t,n){Object.keys(n).forEach(function(e){t.style[e]=n[e]})}n.r(t);function o(e){document.querySelector(e).innerHTML='<button class="ac-bb-modal-button"><img class="ac-bb-modal-button-icon" src="https://github.com/appscode/static-assets/raw/master/images/products/bytebuilders/bytebuilders-512x512.png" alt width="40"/>Deploy with ByteBuilders</button>\n  <div class="ac-bb-modal">\n    <div class="ac-bb-modal-background"></div>\n    <div class="ac-bb-modal-content">\n      <div class="ac-bb-box">\n        <iframe class="ac-iframe" src="http://deploy.bb.test:5994/?product=kubedb&owner=system-admin" width="100%" ></iframe>\n      </div>\n    </div>\n    <button class="ac-bb-modal-close">X</button>\n  </div>';var t=document.querySelector(".ac-bb-modal-button"),n=document.querySelector(".ac-bb-modal-button-icon"),o=document.querySelector(".ac-bb-modal"),r=document.querySelector(".ac-bb-modal-background"),i=document.querySelector(".ac-bb-modal-content"),c=document.querySelector(".ac-bb-box"),a=document.querySelector(".ac-iframe"),l=Math.max(document.documentElement.clientHeight,window.innerHeight||0);a.style.height="calc(100vh - ".concat(.185*l,"px)");var u=document.querySelector(".ac-bb-modal-close");!function(t,r,i,c){t.addEventListener("mouseenter",function(e){e.preventDefault(),d(t,{cursor:"pointer"})}),t.addEventListener("mouseleave",function(e){e.preventDefault(),d(t,{cursor:"default"})}),t.addEventListener("click",function(e){e.preventDefault(),d(r,{display:"flex"});var t=i.getBoundingClientRect(),n=t.top,o=t.right;d(c,{top:"".concat(n+10,"px"),left:"".concat(o-47,"px")})}),c.addEventListener("click",function(e){e.preventDefault(),d(r,{display:"none"})}),document.addEventListener("keydown",function(e){e.preventDefault(),27===e.keyCode&&d(r,{display:"none"})})}(t,o,c,u),function(e,t,n,o,r,i,c){d(e,{backgroundColor:"#fff",border:"1px solid #003466",borderRadius:"4px",color:"#003466",padding:"10px 15px",minHeight:"65px",textAlign:"center",textDecoration:"none",fontWeight:"bold",display:"inline-block",fontSize:"20px"}),d(t,{verticalAlign:"middle",marginRight:"10px"}),d(n,{alignItems:"center",display:"none",flexDirection:"column",justifyContent:"center",overflow:"hidden",position:"fixed",zIndex:"40",width:"100%",height:"100%",top:"0",left:"0"}),d(o,{backgroundColor:"rgba(10,10,10,.86)",bottom:"0",left:"0",position:"absolute",right:"0",top:"0"}),d(r,{margin:"0 auto",maxHeight:"calc(100vh - 0px)",width:"60%",overflowY:"auto",overflowX:"hidden",position:"relative"}),d(i,{backgroundColor:"#fff",borderRadius:"6px",boxShadow:"0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",color:"#4a4a4a",display:"block"}),d(c,{position:"absolute",backgroundColor:"transparent",borderColor:"transparent",color:"#74818D",fontSize:"22px",cursor:"pointer"})}(t,n,o,r,i,c,u)}n.d(t,"initialize",function(){return o})}]);