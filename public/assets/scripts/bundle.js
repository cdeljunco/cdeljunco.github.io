!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(2),t.exports=n(1)},function(t,e,n){},function(t,e,n){"use strict";n.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,s=t=>"function"==typeof t&&i.has(t),a="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},r={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,u=new RegExp(`${c}|${d}`);class h{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],s=document.createTreeWalker(e.content,133,null,!1);let a=0,o=-1,r=0;const{strings:l,values:{length:d}}=t;for(;r<d;){const t=s.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)p(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=l[r],n=f.exec(e)[2],i=n.toLowerCase()+"$lit$",s=t.getAttribute(i);t.removeAttribute(i);const a=s.split(u);this.parts.push({type:"attribute",index:o,name:n,strings:a}),r+=a.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const i=t.parentNode,s=e.split(u),a=s.length-1;for(let e=0;e<a;e++){let n,a=s[e];if(""===a)n=m();else{const t=f.exec(a);null!==t&&p(t[2],"$lit$")&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(a)}i.insertBefore(n,t),this.parts.push({type:"node",index:++o})}""===s[a]?(i.insertBefore(m(),t),n.push(t)):t.data=s[a],r+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&o!==a||(o++,e.insertBefore(m(),t)),a=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(n.push(t),o--),r++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1}),r++}}else s.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const p=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},_=t=>-1!==t.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let s,o=0,r=0,l=i.nextNode();for(;o<n.length;)if(s=n[o],_(s)){for(;r<s.index;)r++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return a&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),v=` ${c} `;class y{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const a=f.exec(t);e+=null===a?t+(n?v:d):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+c}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==b&&(e=b.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const w=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new N(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let i="";for(let s=0;s<e;s++){i+=t[s];const e=n[s];if(void 0!==e){const t=e.value;if(w(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||w(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const n=new g(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)n=e[i],void 0===n&&(n=new E(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class V{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r}}class S extends k{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends N{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class j{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=I(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const I=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const M=new class{handleAttributeExpressions(t,e,n,i){const s=e[0];if("."===s){return new S(t,e.slice(1),n).parts}if("@"===s)return[new j(t,e.slice(1),i.eventContext)];if("?"===s)return[new V(t,e.slice(1),n)];return new k(t,e,n).parts}handleTextExpression(t){return new E(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function L(t){let e=P.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},P.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(c);return n=e.keyString.get(i),void 0===n&&(n=new h(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const P=new Map,C=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const O=(t,...e)=>new y(t,e,"html",M);var H;var $,B,F,z=O(H||($=['\n    <div class="page page--about" name="about">\n        <div class="card">\n            <h2 class="title card__title card__title--about">About</h2>\n            <img src="files/me.jpg" alt="Cay del Junco" class="portrait onMobile"> \n            <p class="card__body card__body--about">\n \n\tI am a science librarian currently pursuing a Masters of Information in Library and Information Science at the University of Toronto. </p>           \n\t    <p class="card__body card__body--about">\n\n               As a practicing librarian, my current interests lie in critical teaching methods for STEM librarianship; equitable models of open access scholarly publishing; and any kind of data analysis that keeps me connected with my computational roots (bibliometrics, collections analysis, etc.). As a researcher, I am broadly interested in power & politics in academic knowledge production and scholarly communication, especially in the natural sciences.</p>\n\n<p class="card__body card__body--about"> \nFrom 2021-23 I was the STEM and Data Education Librarian at Wesleyan University. I trained as a computational chemist and physicist with <a class="card__body__link card__body__link--about" href="http://vaikuntanathan-group.uchicago.edu/" target="_blank">Suri Vaikuntanathan</a> (2014-20), and did a postdoc in sociology with the <a class="card__body__link card__body__link--about" href="https://www.knowledgelab.org/" target="_blank">Knowledge Lab</a> (2020-21), both at the University of Chicago.</p>\n\n<p class="card__body card__body--about"> \nA small selection of my interests: techno music, labor organizing in higher education, swimming in lakes, anything cooperative, good nails, cycling, and cooking. Check the <a class="card__body__link card__body__link--about" href="#links" target="_blank">links</a> page for some non-academic things I\'ve written/edited/made.\n</p>\n<p class="card__body card__body--about">\nThis website was inspired by <a class="card__body__link card__body__link--about" href="https://www.brutalistwebsites.com/" target="_blank">brutalist web design</a>, especially <a class="card__body__link card__body__link--about" href="https://crevv.com/" target="_blank">crevv.com</a>, and built and designed by my friend  <a class="card__body__link card__body__link--about" href="https://www.hanna-jones.com/projects" target="_blank">Hanna Jones</a>, fellow techno enthusiast and web developer.\n</p>\n            <div class="contact onMobile">\n                <div class="contact__item">\n                    <img class="contact__icon" src="./public/assets/images/mail.svg" alt="email icon">\n                    <a class="contact__link" href="mailto:caydj@posteo.net">Email</a>\n                </div>\n               \x3c!-- <div class="contact__item"> --\x3e\n                \x3c!--   <img class="contact__icon" src="./public/assets/images/file-text.svg" alt="email icon"> --\x3e\n                \x3c!--    <a class="contact__link" href="./files/cv-cdj.pdf" download target="_blank">CV</a> --\x3e\n            </div>\n        </div>\n    </div>\n'],B||(B=$.slice(0)),H=Object.freeze(Object.defineProperties($,{raw:{value:Object.freeze(B)}}))));var W,R=O(F||(F=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n    <div class="page page--links" name="links">\n        <div class="card">\n            <h2 class="title card__title">Links</h2>\n            <div class="card__section">\n                <p class="card__body card__body--links">\n                   <a class="card__body__link" href="https://drive.google.com/file/d/1yqyZdaEDH9HQ98qkpcE-cA_eK7dMKwtY/view" target="_blank">Rave Ethics Zine</a>: Fun, safety, and ethical behavior -- the 3 rules of the rave. I contributed to this zine that was edited by my dear friend Char Hilgers. \n                </p>\n\t\t</div>\n\t     <div class="card__section">\n                <p class="card__body card__body--links">\n                   <a class="card__body__link" href="http://futureethics.net/" target="_blank">Future Ethics</a>: A label and zine born of Rave Ethics, run by my friends Char Hilgers and Bee Hill. I made the website and Char maintains it.\n                </p>            \n\t   </div>\n            <div class="card__section">\n                <p class="card__body card__body--links">\n                   <a class="card__body__link" href="http://dx.doi.org/10.6082/uchicago.2773" target="_blank">Burnout</a>: A collection of visual and written reflections on academia, travel, and climate change, by some amazing friends, colleagues, roommates, comrades, and one stranger from the internet. Edited with <a class="card__body__link" href="https://mgerbelli.github.io/website/" target="_blank">Mathilde Gerbelli-Gauthier</a>.\n                </p>\n\t   </div>\n\t    <div class="card__section">\n                <p class="card__body card__body--links">\n                   <a class="card__body__link" href="https://www.insidehighered.com/views/2022/04/05/raise-racist-scientific-history-science-papers-opinion" target="_blank">A Weighty Footnote</a>: I wrote this piece for Inside Higher Ed in reaction to an experience I had trying to include historical context in a physics paper. In it, I argue that history and politics belong in science papers.                \n\t\t   </p>\n\t   </div>\n\n        </div>\n    </div>\n'])));function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==q(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===q(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var U,D,G="about",J="links",Z=(K(W={},G,z),K(W,J,R),W),Q=function(t){var e=window.location.hash.slice(1).toLocaleLowerCase()||"/";!function(t,e){var n=document.querySelector(".".concat("active"));n&&n.classList.remove("active");var i=document.getElementById(t)||document.getElementById(e);i&&!i.classList.contains("active")&&i.classList.add("active")}(e,G),((t,e,n)=>{let i=C.get(e);void 0===i&&(o(e,e.firstChild),C.set(e,i=new E(Object.assign({templateFactory:L},n))),i.appendInto(e)),i.setValue(t),i.commit()})(Z[e]||Z[G],t)};U=document.getElementById("main"),D=function(){return Q(U)},window.addEventListener("hashchange",D),window.addEventListener("load",D)}]);