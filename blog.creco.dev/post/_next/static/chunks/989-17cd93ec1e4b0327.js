(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{709:function(e,t){"use strict";Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});let r=globalThis,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap,o=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&n.set(t,e))}return e}toString(){return this.cssText}},ut=e=>new o("string"==typeof e?e:e+"",void 0,s),$t=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),s=r.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=i.cssText,e.appendChild(t)}},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return ut(t)})(e):e,{is:a,defineProperty:u,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:f}=Object,g=globalThis,_=g.trustedTypes,m=_?_.emptyScript:"",y=g.reactiveElementPolyfillSupport,w=(e,t)=>e,S={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},K=(e,t)=>!a(e,t),A={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);let v=class v extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&u(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:s}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==i?void 0:i.call(this)},set(t){let n=null==i?void 0:i.call(this);s.call(this,t),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;let e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){let e=this.properties,t=[...c(e),...d(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach(e=>e(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$E_)||t.delete(e)}_$ES(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$E_)||e.forEach(e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$E_)||e.forEach(e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){var r;let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){let n=((null==(r=i.converter)?void 0:r.toAttribute)!==void 0?i.converter:S).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var r;let i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){let e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:(null==(r=e.converter)?void 0:r.fromAttribute)!==void 0?e.converter:S;this._$Em=s,this[s]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,i=!1,s){if(void 0!==e){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??K)(i?s:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let t=!1,r=this._$AL;try{(t=this.shouldUpdate(r))?(this.willUpdate(r),null==(e=this._$E_)||e.forEach(e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)}),this.update(r)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null==(t=this._$E_)||t.forEach(e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,null==y||y({ReactiveElement:v}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.2");let E=globalThis,P=E.trustedTypes,C=P?P.createPolicy("lit-html",{createHTML:e=>e}):void 0,U="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,I="?"+x,H=`<${I}>`,j=document,O=()=>j.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,G=Array.isArray,Et=e=>G(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),W=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,V=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,q=/"/g,Y=/^(?:script|style|textarea|title)$/i,Ct=(e,...t)=>({_$litType$:1,strings:e,values:t}),J=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),Q=new WeakMap,X=j.createTreeWalker(j,129);function lt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}let wt=(e,t)=>{let r=e.length-1,i=[],s,n=2===t?"<svg>":"",o=D;for(let t=0;t<r;t++){let r=e[t],l,a,u=-1,h=0;for(;h<r.length&&(o.lastIndex=h,null!==(a=o.exec(r)));)h=o.lastIndex,o===D?"!--"===a[1]?o=z:void 0!==a[1]?o=F:void 0!==a[2]?(Y.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=V):void 0!==a[3]&&(o=V):o===V?">"===a[0]?(o=s??D,u=-1):void 0===a[1]?u=-2:(u=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?V:'"'===a[3]?q:B):o===q||o===B?o=V:o===z||o===F?o=D:(o=V,s=void 0);let c=o===V&&e[t+1].startsWith("/>")?" ":"";n+=o===D?r+H:u>=0?(i.push(l),r.slice(0,u)+U+r.slice(u)+x+c):r+x+(-2===u?t:c)}return[lt(e,n+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};let R=class R{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,n=0,o=e.length-1,l=this.parts,[a,u]=wt(e,t);if(this.el=R.createElement(a,r),X.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=X.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(U)){let t=u[n++],r=i.getAttribute(e).split(x),o=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:o[2],strings:r,ctor:"."===o[1]?Pt:"?"===o[1]?Tt:"@"===o[1]?Ot:k}),i.removeAttribute(e)}else e.startsWith(x)&&(l.push({type:6,index:s}),i.removeAttribute(e));if(Y.test(i.tagName)){let e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=P?P.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],O()),X.nextNode(),l.push({type:2,index:++s});i.append(e[t],O())}}}else if(8===i.nodeType){if(i.data===I)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(x,e+1));)l.push({type:7,index:s}),e+=x.length-1}}s++}}static createElement(e,t){let r=j.createElement("template");return r.innerHTML=e,r}};function b(e,t,r=e,i){var s,n;if(t===J)return t;let o=void 0!==i?null==(s=r._$Co)?void 0:s[i]:r._$Cl,l=N(t)?void 0:t._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(e))._$AT(e,r,i),void 0!==i?(r._$Co??(r._$Co=[]))[i]=o:r._$Cl=o),void 0!==o&&(t=b(e,o._$AS(e,t.values),o,i)),t}let ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=((null==e?void 0:e.creationScope)??j).importNode(t,!0);X.currentNode=i;let s=X.nextNode(),n=0,o=0,l=r[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new M(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new Nt(s,this,e)),this._$AV.push(t),l=r[++o]}n!==(null==l?void 0:l.index)&&(s=X.nextNode(),n++)}return X.currentNode=j,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let M=class M{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&(null==e?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){N(e=b(this,e,t))?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Et(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Z&&N(this._$AH)?this._$AA.nextSibling.data=e:this.$(j.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=R.createElement(lt(i.h,i.h[0]),this.options)),i);if((null==(t=this._$AH)?void 0:t._$AD)===s)this._$AH.p(r);else{let e=new ee(s,this),t=e.u(this.options);e.p(r),this.$(t),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new R(e)),t}T(e){G(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let s of e)i===t.length?t.push(r=new M(this.k(O()),this.k(O()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for(null==(r=this._$AP)||r.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,s){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Z}_$AI(e,t=this,r,i){let s=this.strings,n=!1;if(void 0===s)(n=!N(e=b(this,e,t,0))||e!==this._$AH&&e!==J)&&(this._$AH=e);else{let i,o;let l=e;for(e=s[0],i=0;i<s.length-1;i++)(o=b(this,l[r+i],t,i))===J&&(o=this._$AH[i]),n||(n=!N(o)||o!==this._$AH[i]),o===Z?e=Z:e!==Z&&(e+=(o??"")+s[i+1]),this._$AH[i]=o}n&&!i&&this.O(e)}O(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let Pt=class Pt extends k{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Z?void 0:e}};let Tt=class Tt extends k{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}};let Ot=class Ot extends k{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){if((e=b(this,e,t,0)??Z)===J)return;let r=this._$AH,i=e===Z&&r!==Z||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==Z&&(r===Z||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}};let Nt=class Nt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){b(this,e)}};let et=E.litHtmlPolyfillSupport;null==et||et(R,M),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.1.0");let Rt=(e,t,r)=>{let i=(null==r?void 0:r.renderBefore)??t,s=i._$litPart$;if(void 0===s){let e=(null==r?void 0:r.renderBefore)??null;i._$litPart$=s=new M(t.insertBefore(O(),e),e,void 0,r??{})}return s._$AI(e),s},er=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return J}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */er._$litElement$=!0,er.finalized=!0,null==(eh=globalThis.litElementHydrateSupport)||eh.call(globalThis,{LitElement:er});let ei=globalThis.litElementPolyfillSupport;null==ei||ei({LitElement:er}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let es={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:K},xt=(e=es,t,r)=>{let{kind:i,metadata:s}=r,n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let s=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,s,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let s=this[i];t.call(this,r),this.requestUpdate(i,s,e)}}throw Error("Unsupported decorator location: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(e){return(t,r)=>"object"==typeof r?xt(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ht=e=>void 0===e.strings,en=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},T=(e,t)=>{var r;let i=e._$AN;if(void 0===i)return!1;for(let e of i)null==(r=e._$AO)||r.call(e,t,!1),T(e,t);return!0},L=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while((null==r?void 0:r.size)===0)},dt=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),zt(t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt(e){void 0!==this._$AN?(L(this),this._$AM=e,dt(this)):this._$AM=e}function Dt(e,t=!1,r=0){let i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)T(i[e],!1),L(i[e]);else null!=i&&(T(i,!1),L(i))}else T(this,e)}}let zt=e=>{2==e.type&&(e._$AP??(e._$AP=Dt),e._$AQ??(e._$AQ=Wt))};let Bt=class Bt extends en{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),dt(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?null==(r=this.reconnected)||r.call(this):null==(i=this.disconnected)||i.call(this)),t&&(T(this,e),L(this))}setValue(e){if(Ht(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;let jt=()=>new Vt;let Vt=class Vt{};let eo=new WeakMap,el=(eu=class extends Bt{render(e){return Z}update(e,[t]){var r;let i=t!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=t,this.ct=null==(r=e.options)?void 0:r.host,this.ot(this.lt=e.element)),Z}ot(e){if("function"==typeof this.G){let t=this.ct??globalThis,r=eo.get(t);void 0===r&&(r=new WeakMap,eo.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return"function"==typeof this.G?null==(e=eo.get(this.ct??globalThis))?void 0:e.get(this.G):null==(t=this.G)?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}},(...e)=>({_$litDirective$:eu,values:e}));var ea,eu,eh,ec=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,p=(e,t,r,i)=>{for(var s,n=i>1?void 0:i?ed(t,r):t,o=e.length-1;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&ec(t,r,n),n};t.GiscusWidget=class extends er{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=jt(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var e;return null==(e=this._iframeRef)?void 0:e.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(e){return`[giscus] An error occurred. Error message: "${e}".`}setupSession(){let e=location.href,t=new URL(e),r=localStorage.getItem(this.GISCUS_SESSION_KEY),i=t.searchParams.get("giscus")??"";if(this.__session="",i){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,t.searchParams.delete("giscus"),t.hash="",history.replaceState(void 0,document.title,t.toString());return}if(r)try{this.__session=JSON.parse(r)}catch(e){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==e?void 0:e.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(e){if(e.origin!==this._host)return;let{data:t}=e;if(!("object"==typeof t&&t.giscus))return;if(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),t.giscus.signOut){console.info("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!t.giscus.error)return;let r=t.giscus.error;if(r.includes("Bad credentials")||r.includes("Invalid state value")||r.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY)){console.warn(`${this._formatError(r)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(r)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(r.includes("Discussion not found")){console.warn(`[giscus] ${r}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(r)} ${this.ERROR_SUGGESTION}`)}sendMessage(e){var t;null!=(t=this.iframeRef)&&t.contentWindow&&this.hasLoaded&&this.iframeRef.contentWindow.postMessage({giscus:e},this._host)}updateConfig(){let e={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(e)}firstUpdated(){var e;null==(e=this.iframeRef)||e.addEventListener("load",()=>{var e;null==(e=this.iframeRef)||e.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(e,t,r){if(!this.hasUpdated||"host"===e){super.requestUpdate(e,t,r);return}this.updateConfig()}getMetaContent(e,t=!1){let r=t?`meta[property='og:${e}'],`:"",i=document.querySelector(r+`meta[name='${e}']`);return i?i.content:""}_getCleanedUrl(){let e=new URL(location.href);return e.searchParams.delete("giscus"),e.hash="",e}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping?this.term??"":""}getIframeSrc(){let e=this._getCleanedUrl().toString(),t=`${e}${this.id?"#"+this.id:""}`,r=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||e,s={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:r,backLink:i},n=this._host,o=this.lang?`/${this.lang}`:"",l=new URLSearchParams(s);return`${n}${o}/widget?${l.toString()}`}render(){return Ct`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${el(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},t.GiscusWidget.styles=((e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new o(r,e,s)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,p([$({reflect:!0})],t.GiscusWidget.prototype,"host",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"repo",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"repoId",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"category",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"categoryId",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"mapping",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"term",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"strict",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"reactionsEnabled",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"emitMetadata",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"inputPosition",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"theme",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"lang",2),p([$({reflect:!0})],t.GiscusWidget.prototype,"loading",2),t.GiscusWidget=p([(ea="giscus-widget",customElements.get(ea)?e=>e:(e,t)=>{void 0!==t?t.addInitializer(()=>{customElements.define(ea,e)}):customElements.define(ea,e)})],t.GiscusWidget)},6628:function(e,t,r){"use strict";let i=r(4995),s=r(6470);e.exports=function({id:e,host:t,repo:n,repoId:o,category:l,categoryId:a,mapping:u,term:h,strict:c,reactionsEnabled:d,emitMetadata:f,inputPosition:g,theme:_,lang:m,loading:y}){let[S,A]=s.useState(!1);return s.useEffect(()=>{S||(Promise.resolve().then(()=>r(709)),A(!0))},[]),S?i.jsx("giscus-widget",{id:e,host:t,repo:n,repoid:o,category:l,categoryid:a,mapping:u,term:h,strict:c,reactionsenabled:d,emitmetadata:f,inputposition:g,theme:_,lang:m,loading:y}):null}},440:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return createAsyncLocalStorage}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");let FakeAsyncLocalStorage=class FakeAsyncLocalStorage{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}};let i=globalThis.AsyncLocalStorage;function createAsyncLocalStorage(){return i?new i:new FakeAsyncLocalStorage}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},483:function(e,t,r){"use strict";function clientHookInServerComponentError(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return clientHookInServerComponentError}}),r(7553),r(6470),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4994:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return ReadonlyURLSearchParams},useSearchParams:function(){return useSearchParams},usePathname:function(){return usePathname},ServerInsertedHTMLContext:function(){return a.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return a.useServerInsertedHTML},useRouter:function(){return useRouter},useParams:function(){return useParams},useSelectedLayoutSegments:function(){return useSelectedLayoutSegments},useSelectedLayoutSegment:function(){return useSelectedLayoutSegment},redirect:function(){return u.redirect},permanentRedirect:function(){return u.permanentRedirect},RedirectType:function(){return u.RedirectType},notFound:function(){return h.notFound}});let i=r(6470),s=r(6103),n=r(1579),o=r(483),l=r(7203),a=r(9302),u=r(4177),h=r(1419),c=Symbol("internal for urlsearchparams readonly");function readonlyURLSearchParamsError(){return Error("ReadonlyURLSearchParams cannot be modified")}let ReadonlyURLSearchParams=class ReadonlyURLSearchParams{[Symbol.iterator](){return this[c][Symbol.iterator]()}append(){throw readonlyURLSearchParamsError()}delete(){throw readonlyURLSearchParamsError()}set(){throw readonlyURLSearchParamsError()}sort(){throw readonlyURLSearchParamsError()}constructor(e){this[c]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}};function useSearchParams(){(0,o.clientHookInServerComponentError)("useSearchParams");let e=(0,i.useContext)(n.SearchParamsContext),t=(0,i.useMemo)(()=>e?new ReadonlyURLSearchParams(e):null,[e]);return t}function usePathname(){return(0,o.clientHookInServerComponentError)("usePathname"),(0,i.useContext)(n.PathnameContext)}function useRouter(){(0,o.clientHookInServerComponentError)("useRouter");let e=(0,i.useContext)(s.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function useParams(){(0,o.clientHookInServerComponentError)("useParams");let e=(0,i.useContext)(s.GlobalLayoutRouterContext),t=(0,i.useContext)(n.PathParamsContext);return(0,i.useMemo)(()=>(null==e?void 0:e.tree)?function getSelectedParams(e,t){void 0===t&&(t={});let r=e[1];for(let e of Object.values(r)){let r=e[0],i=Array.isArray(r),s=i?r[1]:r;if(!s||s.startsWith("__PAGE__"))continue;let n=i&&("c"===r[2]||"oc"===r[2]);n?t[r[0]]=r[1].split("/"):i&&(t[r[0]]=r[1]),t=getSelectedParams(e,t)}return t}(e.tree):t,[null==e?void 0:e.tree,t])}function useSelectedLayoutSegments(e){void 0===e&&(e="children"),(0,o.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,i.useContext)(s.LayoutRouterContext);return function getSelectedLayoutSegmentPath(e,t,r,i){let s;if(void 0===r&&(r=!0),void 0===i&&(i=[]),r)s=e[1][t];else{var n;let t=e[1];s=null!=(n=t.children)?n:Object.values(t)[0]}if(!s)return i;let o=s[0],a=(0,l.getSegmentValue)(o);return!a||a.startsWith("__PAGE__")?i:(i.push(a),getSelectedLayoutSegmentPath(s,t,!1,i))}(t,e)}function useSelectedLayoutSegment(e){void 0===e&&(e="children"),(0,o.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=useSelectedLayoutSegments(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1419:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return notFound},isNotFoundError:function(){return isNotFoundError}});let r="NEXT_NOT_FOUND";function notFound(){let e=Error(r);throw e.digest=r,e}function isNotFoundError(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4177:function(e,t,r){"use strict";var i,s;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return i},getRedirectError:function(){return getRedirectError},redirect:function(){return redirect},permanentRedirect:function(){return permanentRedirect},isRedirectError:function(){return isRedirectError},getURLFromRedirectError:function(){return getURLFromRedirectError},getRedirectTypeFromError:function(){return getRedirectTypeFromError}});let n=r(5476),o="NEXT_REDIRECT";function getRedirectError(e,t,r){void 0===r&&(r=!1);let i=Error(o);i.digest=o+";"+t+";"+e+";"+r;let s=n.requestAsyncStorage.getStore();return s&&(i.mutableCookies=s.mutableCookies),i}function redirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!1)}function permanentRedirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!0)}function isRedirectError(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,i,s]=e.digest.split(";",4);return t===o&&("replace"===r||"push"===r)&&"string"==typeof i&&("true"===s||"false"===s)}function getURLFromRedirectError(e){return isRedirectError(e)?e.digest.split(";",3)[2]:null}function getRedirectTypeFromError(e){if(!isRedirectError(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(s=i||(i={})).push="push",s.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return s}});let i=r(440),s=(0,i.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7203:function(e,t){"use strict";function getSegmentValue(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return getSegmentValue}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9302:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return n},useServerInsertedHTML:function(){return useServerInsertedHTML}});let i=r(5905),s=i._(r(6470)),n=s.default.createContext(null);function useServerInsertedHTML(e){let t=(0,s.useContext)(n);t&&t(e)}},3523:function(e,t,r){e.exports=r(4994)},9334:function(e,t,r){"use strict";var i=r(6628);t.Z=i}}]);