try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ebca82bb-b45c-4611-90f2-252c63fa019a",e._sentryDebugIdIdentifier="sentry-dbid-ebca82bb-b45c-4611-90f2-252c63fa019a")}catch(e){}(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{644:(e,t,l)=>{"use strict";l.d(t,{PostsPage:()=>E});var n=l(9245);l(5257);var r=l(3884),i=l(3420),o=l(8443),a=l(7923),s=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,l)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,f=(e,t)=>{for(var l in t||(t={}))b.call(t,l)&&h(e,l,t[l]);if(u)for(var l of u(t))m.call(t,l)&&h(e,l,t[l]);return e},p=(e,t)=>d(e,c(t)),x=(e,t)=>{var l={};for(var n in e)b.call(e,n)&&0>t.indexOf(n)&&(l[n]=e[n]);if(null!=e&&u)for(var n of u(e))0>t.indexOf(n)&&m.call(e,n)&&(l[n]=e[n]);return l},g=(e,t,l)=>new Promise((n,r)=>{var i=e=>{try{a(l.next(e))}catch(e){r(e)}},o=e=>{try{a(l.throw(e))}catch(e){r(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,o);a((l=l.apply(e,t)).next())});function v(e){return g(this,null,function*(){let{data:t}=yield r.A.get(e);return t})}var y={of:({category:e,prefix:t="/github-api/api/gist"})=>({readList:()=>g(void 0,null,function*(){if(null==e||""===e||"undefined"===e)return[];let{data:l}=yield v(`${t}/${e}/list`);return l.items}),readItem:l=>v(`${t}/${e}/${l}`),getList:()=>g(void 0,null,function*(){let{data:e}=yield v(`${t}/category`);return e})})};function w(e){let{width:t}=function(){let[e,t]=useState({width:void 0});return useEffect(()=>{let e=()=>{t({width:window.innerWidth})};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}(),[l,n]=useState2(void 0);return useEffect2(()=>{let t=document.querySelector(e);null!=t&&n(t.computedStyleMap().get("display").value)},[t]),{display:l}}var j=`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/
h1, h2, h3, h4, h5, h6 {
	margin: 0;
	padding: 0;
	vertical-align: baseline;
}

html, body, div, span, applet, object, iframe,
p, blockquote, pre, a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
	display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
menu, ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1 {
  font-size: 3.6rem;
  font-weight: bolder;
}

h2 {
  font-size: 3.2rem;
  font-weight: bolder;
}

h3 {
  font-size: 2.4rem;
  font-weight: bolder;
}

h4 {
  font-size: 2rem;
  font-weight: bolder;
}

h5 {
  font-size: 1.6rem;
  font-weight: bolder;
}

h6 {
  font-size: 1.2rem;
  font-weight: bolder;
}

:root {
  /* NOTE: 1 rem\uC744 10px \uAE30\uC900\uC73C\uB85C \uCC98\uB9AC\uD558\uB3C4\uB85D \uD568 */
  font-size: 62.5%;
}

html {
  background-color: #2B2B29;
}

@media (max-width: 520px) {
  .mobile-ui {
    display: block;
  }
  .desktop-ui {
    display: none;
  }
  .clickable {
    text-decoration: unset;
    cursor: unset;
  }
}

@media (min-width: 521px) {
  .mobile-ui {
    display: none;
  }
  .desktop-ui {
    display: block;
  }
  .clickable:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

bold {
  font-weight: bold;
}
`,N=new i.E;function k({children:e,queryClient:t=N}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Ht,{client:t,children:e}),(0,n.jsx)("div",{className:"mobile-ui",style:{width:0,height:0}}),(0,n.jsx)("div",{className:"desktop-ui",style:{width:0,height:0}})]})}k.Heads=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0, viewport-fit=cover",name:"viewport"}),(0,n.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"})]})},k.GlobalCss=j;var C=new Map,D=l(3885);let E=()=>{let e=function(){var e;return(null!=(e=function(e,{prefix:t}={prefix:"/github-api/api/gist"}){let{data:l}=(0,a.I)(["API.of().readList",e],()=>g(this,null,function*(){return y.of({category:e,prefix:t}).readList()}),{initialData:null});return l}("blog-post"))?e:[]).map(D.a)}();return e.sort((e,t)=>(null==e?void 0:e.createdAt)==null||(null==t?void 0:t.createdAt)==null?0:e.createdAt>t.createdAt?-1:1),(0,n.jsx)("div",{className:"bg-[#2B2B29] min-h-screen text-[#DEDEDD] text-base",children:(0,n.jsx)("div",{className:"desktop-ui flex justify-center bg-[#232323] min-h-screen text-[#DEDEDD]",children:(0,n.jsx)("div",{className:"bg-[#2B2B29] max-w-[1200px] w-full px-16 py-6 shadow-[0_0_4px_20px_#2B2B29]",children:(0,n.jsxs)("div",{className:"max-w-[840px] mx-auto",children:[(0,n.jsx)("div",{className:"py-6",children:(0,n.jsx)("a",{href:"https://blog.creco.dev",className:"hover:text-white",children:(0,n.jsx)("h1",{className:"text-[3.6rem] font-extrabold",children:"Creco's Blog"})})}),(0,n.jsx)("div",{className:"h-5"}),(0,n.jsx)("p",{className:"text-[6rem] font-extrabold",children:"Posts"}),(0,n.jsx)("div",{className:"h-[14px]"}),(0,n.jsx)("p",{className:"text-[2rem] text-gray-500",children:"Creco"}),(0,n.jsx)("div",{className:"h-5"}),(0,n.jsx)("hr",{className:"w-full border-t border-gray-200/50 scale-y-[0.3]"}),(0,n.jsx)("ul",{children:e.map(e=>(0,n.jsx)("li",{className:"w-full border-b border-gray-200/50 py-12",children:(0,n.jsxs)("a",{href:"/post/".concat(e.id,"/"),className:"hover:underline text-[1.6rem]",children:[(0,n.jsx)("time",{className:"text-gray-500",children:e.date}),(0,n.jsx)("div",{className:"h-1"}),(0,n.jsx)("span",{className:"block text-[1.2rem]",children:e.category}),(0,n.jsx)("h3",{className:"mt-1 text-[2.4rem] font-extrabold",children:e.title}),e.description&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"h-2"}),(0,n.jsx)("span",{className:"block text-gray-500",children:e.description})]}),(0,n.jsx)("div",{className:"h-5"}),(0,n.jsx)("p",{className:"text-[#0ea5e9]",children:"Read more →"})]})},e.id))})]})})})})}},3885:(e,t,l)=>{"use strict";l.d(t,{a:()=>i,u:()=>r});var n=l(3884);async function r(e){let{data:t}=await n.A.post("/api/markdown/render",{markdown:e});return t.data}function i(e){var t,l,n,r,i,o,a,s,d,c,u,b,m,h,f,p;if(null==e)return null;let x=null!=(m=null==e||null==(t=e.body)?void 0:t.markdown)?m:null==e||null==(l=e.body)?void 0:l.contents,[g,v,...y]=null!=(h=null==x||null==(r=x.trim)||null==(n=(i=r.call(x)).split)?void 0:n.call(i,/<br>|\n/))?h:[],w=null!=(f=null==e||null==(o=e.body)?void 0:o.updatedAt)?f:null==e||null==(a=e.body)?void 0:a.createdAt,j=function(e){let t=e.getUTCFullYear(),l=e.getUTCMonth()+1,n=e.getUTCDate(),r=e.getUTCHours(),i=e.getUTCMinutes(),o=e.getUTCSeconds();return"".concat(t,"년 ").concat(l,"월 ").concat(n,"일 ").concat(r,"시 ").concat(i,"분 ").concat(o,"초")}(new Date(w+324e5));return{id:e.id,category:null==g?void 0:g.replace(/^<p>/,"").replace(/<\/p>$/,""),title:null==v?void 0:v.replace(/^<p>/,"").replace(/<\/p>$/,""),body:null==y||null==(d=y.join("<br>"))||null==(s=d.trim)?void 0:s.call(d),createdAt:null==e||null==(c=e.body)?void 0:c.createdAt,timestamp:w,date:j,thumbnail:function(e){if(!e)return null;let t=e.match(/!\[.*?\]\((.*?)\)/);return t?t[1]:null}(null==e||null==(u=e.body)?void 0:u.contents),description:(p=null==e||null==(b=e.body)?void 0:b.contents)&&p.split(/\n/).filter(e=>e.length>0)[2]||null}}},6148:(e,t,l)=>{Promise.resolve().then(l.bind(l,644))}},e=>{var t=t=>e(e.s=t);e.O(0,[914,392,420,846,653,358],()=>t(6148)),_N_E=e.O()}]);