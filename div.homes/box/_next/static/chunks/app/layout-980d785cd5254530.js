(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2130:function(n,e,t){Promise.resolve().then(t.bind(t,9641))},6093:function(n,e,t){"use strict";t.d(e,{b:function(){return s}});var r,i=t(1988),o=t(5171),c=t.n(o),a=t(7946),s={of:function(n){var e;return{readList:(e=(0,i.Z)(c().mark(function e(){var t;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null==n||""===n||"undefined"===n)){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,u("/api/gist/".concat(n,"/list"));case 4:return t=e.sent.data,e.abrupt("return",t.items);case 7:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)}),readItem:function(e){return u("/api/gist/".concat(n,"/").concat(e))},createItem:function(e){return f("/api/gist/".concat(n,"/create"),{contents:e})},updateItem:function(e,t){return f("/api/gist/".concat(n,"/").concat(e,"/modify"),{contents:t})},updateItems:function(e){return f("/api/gist/".concat(n,"/list/modify"),{items:e})},deleteItem:function(e){return f("/api/gist/".concat(n,"/").concat(e,"/delete"))}}},getList:(r=(0,i.Z)(c().mark(function n(){var e;return c().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u("/api/gist/category");case 2:return e=n.sent.data,n.abrupt("return",e);case 5:case"end":return n.stop()}},n)})),function(){return r.apply(this,arguments)})};function u(n){return l.apply(this,arguments)}function l(){return(l=(0,i.Z)(c().mark(function n(e){var t;return c().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat("").concat(e));case 2:return t=n.sent.data,n.abrupt("return",t);case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}function f(n,e){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(c().mark(function n(e,t){var r;return c().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("".concat("").concat(e),t,{headers:{"Content-Type":"application/json"}});case 2:return r=n.sent.data,n.abrupt("return",r);case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}},6001:function(n,e,t){"use strict";t.d(e,{b:function(){return r.b}});var r=t(6093)},4313:function(n,e,t){"use strict";t.d(e,{W:function(){return c}});var r=t(8807),i=t(7881);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}var c=function(n){var e=n.className,t=n.children,c=n.width,a=n.style;return(0,i.jsx)("div",{className:e,style:function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach(function(e){(0,r.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({margin:"0 auto",width:"".concat(void 0===c?720:c,"px")},null!=a?a:{}),children:t})}},5248:function(n,e,t){"use strict";t.d(e,{K:function(){return i}});var r=t(7881);function i(n){var e=n.size;return(0,r.jsx)("div",{style:{width:"100%",height:"".concat(e,"px")}})}},3171:function(n,e,t){"use strict";t.d(e,{K:function(){return a}});var r=t(8807),i=t(7881);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach(function(e){(0,r.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var a={Horizontal:function(n){var e=n.children,t=n.className,r=n.align,o=n.style;return(0,i.jsx)("div",{className:t,style:c({display:"flex",justifyContent:"".concat(void 0===r?"center":r),alignItems:"center"},null!=o?o:{}),children:e})},Vertical:function(n){var e=n.children,t=n.className,r=n.align,o=void 0===r?"center":r,a=n.style;return(0,i.jsx)("div",{className:t,style:c({display:"flex",flexDirection:"column",alignItems:"".concat("right"===o?"end":"left"===o?"start":"center")},null!=a?a:{}),children:e})}}},6504:function(n,e,t){"use strict";t.d(e,{H:function(){return c}});var r=t(8807),i=t(7881);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function c(n){var e=n.style,t=n.className,c=n.children,a=n.onClick;return(0,i.jsx)("p",{className:t,style:function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach(function(e){(0,r.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({width:"100%",fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line"},null!=e?e:{}),dangerouslySetInnerHTML:{__html:"".concat(c)},onClick:a})}},9714:function(n,e,t){"use strict";t.d(e,{AV:function(){return f},ZT:function(){return l}});var r=t(1988),i=t(4378),o=t(5171),c=t.n(o),a=t(6970),s=t(5322),u=t(6001);function l(n){var e,t=[(e=(0,a.a)(["fetchList",n],(0,r.Z)(c().mark(function e(){var t;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,u.b.of(n).readList();case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}},e)})),{initialData:[]})).data,e.refetch,e.isLoading,e.isFetching],o=(0,i.Z)(t,4),l=o[0],f=o[1],d=o[2],p=o[3],h=(0,s.useState)([]),b=h[0],g=h[1];return((0,s.useEffect)(function(){var e,t,r;null!=n&&g(JSON.parse(null!==(e=null===(t=window)||void 0===t?void 0:null===(r=t.localStorage)||void 0===r?void 0:r.getItem("useFlashList-".concat(n)))&&void 0!==e?e:"[]"))},[]),(0,s.useEffect)(function(){var e,t;null==n||""===n||Array.isArray(n)||null==l||(null===(e=window)||void 0===e||null===(t=e.localStorage)||void 0===t||t.setItem("useFlashList-".concat(n),JSON.stringify(l)),g(l))},[l]),null==n)?[[],function(){},!1,!1]:[b,f,d,p]}function f(){var n,e=[(n=(0,a.a)(["useCategoryList"],u.b.getList,{initialData:{}})).data,n.refetch,n.isLoading,n.isFetching],t=(0,i.Z)(e,4),r=t[0],o=t[1],c=t[2],l=t[3],f=(0,s.useState)({}),d=f[0],p=f[1];return(0,s.useEffect)(function(){var n,e,t;p(JSON.parse(null!==(n=null===(e=window)||void 0===e?void 0:null===(t=e.localStorage)||void 0===t?void 0:t.getItem("useFlashCategoryList"))&&void 0!==n?n:"{}"))},[]),(0,s.useEffect)(function(){var n,e;null!=r&&(null===(n=window)||void 0===n||null===(e=n.localStorage)||void 0===e||e.setItem("useFlashCategoryList",JSON.stringify(r)),p(r))},[r]),[d,o,c,l]}},8337:function(n,e,t){"use strict";t.d(e,{J:function(){return i}});var r=t(5322);function i(n){(0,r.useEffect)(function(){var e=function(e){Object.keys(n).includes("".concat(e.key))&&e.metaKey&&null!=n["".concat(e.key)]&&(n["".concat(e.key)](),e.preventDefault())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[])}},9641:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return z}});var r=t(4313),i=t(5248),o=t(3695),c=t(3083),a=t(5322),s=t(7881);function u(n){var e=n.children,t=(0,a.useState)(new o.S)[0];return(0,s.jsx)(c.aH,{client:t,children:e})}var l=function(){return(0,s.jsx)("a",{href:"https://github.com/creaticoding",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("span",{style:{color:"gray",height:"1em",marginLeft:"0.5rem",outline:"none"},children:"@creaticoding. "})})};function f(n){var e=n.className;return(0,s.jsxs)("footer",{className:e,style:{padding:"2rem 0",textAlign:"center",margin:"0 auto"},children:[(0,s.jsx)(l,{}),(0,s.jsx)("span",{style:{color:"#0000004f"},children:"All rights reserved."})]})}var d=t(8056),p=t.n(d),h="\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\nh1, h2, h3, h4, h5, h6 {\n	margin: 0;\n	padding: 0;\n	vertical-align: baseline;\n}\n\nhtml, body, div, span, applet, object, iframe,\np, blockquote, pre, a, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n	margin: 0;\n	padding: 0;\n	border: 0;\n	font-size: 100%;\n	font: inherit;\n	vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n	display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nmenu, ol, ul {\n	list-style: none;\n}\nblockquote, q {\n	quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n	content: '';\n	content: none;\n}\ntable {\n	border-collapse: collapse;\n	border-spacing: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1 {\n  font-size: 3.6rem;\n  font-weight: bolder;\n}\n\nh2 {\n  font-size: 3.2rem;\n  font-weight: bolder;\n}\n\nh3 {\n  font-size: 2.4rem;\n  font-weight: bolder;\n}\nh4 {\n  font-size: 2rem;\n  font-weight: bolder;\n}\n\nh5 {\n  font-size: 1.4rem;\n  font-weight: bolder;\n}\nh6 {\n  font-size: 1rem;\n  font-weight: bolder;\n}\n\n:root {\n  /* NOTE: 1 rem을 10px 기준으로 처리하도록 함 */\n  font-size: 62.5%;\n}\n",b=function(){return(0,s.jsx)(p(),{id:h.__hash,children:h})},g=t(3171),y=t(1988),v=t(4378),m=t(5171),j=t.n(m),w=t(8342),x=t.n(w),O=t(5581),k=t(6093),P=t(6504),S=t(9714),D=t(8337);function L(){var n,e,t=(0,O.useRouter)(),r=(0,S.AV)(),i=(0,v.Z)(r,1)[0],o=(0,O.useSearchParams)().get("category"),c=(n=(0,y.Z)(j().mark(function n(e){var r;return j().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.b.getList();case 2:r=n.sent,t.replace("?category=".concat(Object.entries(r)[e-1][1]));case 4:case"end":return n.stop()}},n)})),function(e){return n.apply(this,arguments)});return(0,a.useEffect)(function(){null==o&&Object.entries(i).length>0&&t.replace("?category=".concat(Object.entries(i)[0][1]))},[o,i]),(0,D.J)({1:function(){return c(1)},2:function(){return c(2)},3:function(){return c(3)},4:function(){return c(4)}}),(0,s.jsx)("div",{style:{display:"inline-block"},children:(0,s.jsx)("ul",{children:(null!==(e=Object.entries(i))&&void 0!==e?e:[]).map(function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(x(),{href:"/?category=".concat(n[1]),as:"/?category=".concat(n[1]),children:(0,s.jsx)(P.H,{style:{fontWeight:n[1]===o?"bold":"unset",textDecoration:n[1]===o?"underline":"unset",fontSize:"2rem",width:"100px"},children:n[0]})})},n[1])})})})}var E=t(3307);function N(){var n=(0,O.useRouter)();return(0,s.jsx)(E.h,{children:(0,s.jsx)("div",{style:{cursor:"pointer",height:"48px"},onClick:function(){n.push("/")},children:(0,s.jsx)("span",{style:{fontSize:"36px",fontFamily:"monospace"},children:"\uD83D\uDCE6 div.homes/box"})})})}function z(n){var e=n.children;return(0,s.jsxs)("html",{lang:"ko",children:[(0,s.jsx)("body",{children:(0,s.jsxs)(r.W,{width:1200,children:[(0,s.jsx)(N,{}),(0,s.jsxs)(u,{children:[(0,s.jsx)(i.K,{size:60}),(0,s.jsxs)(g.K.Horizontal,{style:{gap:"100px",alignItems:"flex-start"},children:[(0,s.jsx)(g.K.Vertical,{style:{width:"120px"},children:(0,s.jsx)(L,{})}),(0,s.jsx)(g.K.Vertical,{children:e})]})]}),(0,s.jsx)(f,{})]})}),(0,s.jsx)(b,{})]})}}},function(n){n.O(0,[389,844,240,264,927,744],function(){return n(n.s=2130)}),_N_E=n.O()}]);