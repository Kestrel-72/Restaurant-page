(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),c=n(667),d=n.n(c),s=new URL(n(455),n.b),l=i()(a()),u=d()(s);l.push([e.id,"html {\n   background: linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url("+u+");\n   background-attachment: fixed;\n   background-size: cover;\n   box-sizing: border-box;\n   font-size: 20px;\n}\n\nbody, html {\n   margin: 0;\n}\n\nheader {\n   display: flex;\n   align-items: center;\n   height: 80px;\n   background-color: black;\n   margin-bottom: 40px;\n   position: sticky;\n   top: 0;\n}\n\nheader nav {\n   width: 400px;\n   margin: 0 auto;\n}\n\nheader ul {\n   display: flex;\n   justify-content: space-between;\n   margin: 0;\n   padding: 0;\n   list-style: none;\n}\n\nheader button {\n   background-color: black;\n   border: none;\n   color: white;\n   font-size: 1rem;\n   cursor: pointer;\n}\n\n#content {\n   background-color: white;\n   width: fit-content;\n   padding: 20px;\n   border-radius: 20px;\n   margin: 0 auto;\n}\n\nh1 {\n   text-align: center;\n}\n\nh2, .customer {\n   margin: 0 0 0 50px;\n   font-weight: 600;\n}\n\n.hours-outer, .review-outer, .location-outer, .menu-item-outer {\n   border: 2px solid black;\n   border-radius: 20px;\n   margin: 20px 10px;\n   padding: 20px;\n   width: 600px;\n}\n\n.hours-outer > p, .location-outer > p {\n   text-align: center;\n}\n\n.menu-item-outer {\n   display: grid;\n   grid-template-columns: 1fr 1fr;\n   grid-template-rows: max-content max-content max-content;\n}\n\n.menu-item-outer .item-description {\n   grid-column: 1/3;\n}\n\n.menu-item-outer .item-price {\n   font-size: 1.5rem;\n   font-weight: 600;\n}\n\n.menu-item-outer .item-img {\n   grid-column: 2/3;\n   grid-row: 3/4;\n   border: 2px solid grey;\n   border-radius: 10px;\n   width: 300px;\n}\n\n.cafe-image {\n   width: 800px;\n   margin-bottom: 20px;\n   border-radius: 20px;\n}\n\n.contacts-info {\n   list-style: none;\n}\n\n.contacts-info, .contacts-h2 {\n   padding: 0;\n   margin: 0 0 20px 40px;\n}\n\n.contacts-info li {\n   display: flex;\n   align-items: center;\n   margin-bottom: 20px;\n}\n\n.contacts-info li span {\n   margin-right: 6px;\n}",""]);const m=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var m=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=a(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},455:(e,t,n)=>{e.exports=n.p+"4855c37a282158a26b61.webp"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=function(){let e=document.createElement("div");e.classList.add("hours-outer");let t=document.createElement("h2");t.textContent="Hours",e.append(t);const n=[{day:"Monday",time:"8am - 8pm"},{day:"Tuesday",time:"8am - 8pm"},{day:"Wednesday",time:"8am - 8pm"},{day:"Thursday",time:"8am - 8pm"},{day:"Friday",time:"8am - 8pm"},{day:"Saturday",time:"10am - 10pm"},{day:"Sunday",time:"10am - 10pm"}];for(let t=0;t<7;t++){let r=document.createElement("p");r.textContent=`${n[t].day}: ${n[t].time}`,e.append(r)}let r=document.createElement("div");r.classList.add("review-outer");let a=document.createElement("p");a.classList.add("review"),a.textContent="I love this restaurant! Best food in the country. This is exactly the kind of place that I like to return to again and again.";let o=document.createElement("p");o.classList.add("customer"),o.textContent="Viktor Barinov",r.append(a,o);let i=document.createElement("div");i.classList.add("location-outer");let c=document.createElement("h2");c.textContent="Address";let d=document.createElement("p");d.textContent="Tyumen, Gagarina Street 25",i.append(c,d);let s=document.querySelector("body"),l=document.createElement("div");l.id="content";let u=document.createElement("h1");u.textContent="Tasty Universe",l.append(u,e,r,i),s.append(l)},t=n.p+"f1a4adae8c24c8dd5eca.webp",r=n.p+"db804c19c9f2a33032ed.webp",a=n.p+"d758593dae2edf01bb00.jpg";var o=n(379),i=n.n(o),c=n(795),d=n.n(c),s=n(569),l=n.n(s),u=n(565),m=n.n(u),p=n(216),f=n.n(p),g=n(589),h=n.n(g),v=n(426),y={};y.styleTagTransform=h(),y.setAttributes=m(),y.insert=l().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=f(),i()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,e(),document.getElementById("home").addEventListener("click",(()=>{document.getElementById("content").remove(),e()})),document.getElementById("menu").addEventListener("click",(()=>{document.getElementById("content").remove(),function(){let e=[{name:"Carbonara",description:"A Roman pasta dish made with eggs, hard cheese, cured pork and black pepper.",price:"$5",image:t,alt:"Tasty carbonara"},{name:"Pizza",description:"Delicious pizza. Ham, cheese, tomatoes, mushrooms, greens.",price:"$10",image:r,alt:"Tasty pizza"}],n=document.createElement("div");n.id="content";let a=document.createElement("h1");a.textContent="Menu",n.append(a);for(let t=0;t<e.length;t++){let r=document.createElement("div");r.classList.add("menu-item-outer");let a=document.createElement("h2");a.textContent=e[t].name;let o=document.createElement("p");o.classList.add("item-description"),o.textContent=e[t].description;let i=document.createElement("p");i.classList.add("item-price"),i.textContent=e[t].price;let c=document.createElement("img");c.classList.add("item-img"),c.src=e[t].image,c.setAttribute("alt",e[t].alt),r.append(a,o,i,c),n.append(r)}document.querySelector("body").append(n)}()})),document.getElementById("contacts").addEventListener("click",(()=>{document.getElementById("content").remove(),function(){let e=document.createElement("div");e.id="content";let t=document.createElement("img");t.classList.add("cafe-image"),t.src=a,t.setAttribute("alt","Cafe Tasty Universe");let n=document.createElement("h2");n.classList.add("contacts-h2"),n.textContent="Contacts";let r=document.createElement("ul");r.classList.add("contacts-info");const o=[{icon:"call",value:"8-800-555-35-35"},{icon:"email",value:"totallyReal@email.com"}];for(let e=0;e<o.length;e++){let t=document.createElement("li");t.textContent=o[e].value;let n=document.createElement("span");n.classList.add("material-icons"),n.textContent=o[e].icon,t.prepend(n),r.append(t)}e.append(t,n,r),document.querySelector("body").append(e)}()}))})()})();