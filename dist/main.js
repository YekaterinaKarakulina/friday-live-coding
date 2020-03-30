!function(t){var e={};function o(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);class s{constructor({id:t,title:e,urlToImage:o,tags:s,...a}){this.id=t,this.title=e,this.urlToImage=o,this.tags=s}generateArticle(){let t="",e=document.createElement("article");return e.className="strategy block-shadowed",e.setAttribute("data-id",this.id),this.urlToImage&&(t+=`<img class="strategy__image" src=${this.urlToImage} alt="strategy">`),(this.title||this.tags)&&(t+='<div class="strategy__content">',this.title&&(t+=`<h3 class="strategy__name" src=${this.title}></h3>`),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.map(e=>{t+=`<span class="tag tag_colored">${e}</span>`}),t+="</div>"),t+="</div>"),e.innerHTML=t,e}}class a{constructor(t){this.classes=t,this.modal="",this.modalContent="",this.modalCloseBtn="",this.overlay=""}buildModal(t){this.overlay=this.createDomNode(this.overlay,"div","overlay","overlay_modal"),this.modal=this.createDomNode(this.modal,"div","modal",this.classes),this.modalContent=this.createDomNode(this.modalContent,"div","modal__content"),this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"span","modal__close-button"),this.modalCloseBtn.innerHTML='<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg>',this.setContent(t),this.appendModalElements(),this.bindEvents(),this.openModal()}createDomNode(t,e,...o){return(t=document.createElement(e)).classList.add(...o),t}setContent(t){"string"==typeof t?this.modalContent.innerHTML=t:(this.modalContent.innerHTML="",this.modalContent.appendChild(t))}appendModalElements(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}bindEvents(){this.modalCloseBtn.addEventListener("click",this.closeModal),this.overlay.addEventListener("click",this.closeModal)}openModal(){document.body.append(this.overlay)}closeModal(t){let e=t.target.classList;(e.contains("overlay")||e.contains("modal__close-button"))&&document.querySelector(".overlay").remove()}}const n=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.jpg",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.jpg",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"}];window.onload=function(){console.log("hello"),n&&u(),i(),m()};const i=()=>{document.querySelector(".strategies__tags").addEventListener("click",t=>{if(t.target.classList.contains("tag")){let e=t.target;r(),l(e),"All"===e.innerText?d():c(e.innerText)}})},r=()=>{document.querySelectorAll(".strategies__tags > .tag").forEach(t=>{t.classList.remove("tag_selected"),t.classList.add("tag_bordered")})},l=t=>{t.classList.add("tag_selected"),t.classList.remove("tag_bordered")},d=()=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach(t=>{t.classList.remove("strategy_hidden")})},c=t=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach(e=>{e.classList.add("strategy_hidden"),e.querySelectorAll(".tag").forEach(o=>{o.innerText===t&&e.classList.remove("strategy_hidden")})})},u=()=>{let t=h();g(n).forEach(e=>{t.append(e.generateArticle())})},h=()=>{const t=document.querySelector(".strategy-wrapper");return t.innerHTML="",t},g=t=>{let e=[];return t.forEach(t=>{e.push(new s(t))}),e},m=()=>{document.querySelector(".tools__button .button").addEventListener("click",()=>{y()})},y=()=>{f("test content for tools modal")},f=t=>{new a("tools-modal").buildModal(t)}}]);