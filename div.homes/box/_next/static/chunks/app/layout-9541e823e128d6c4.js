(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8682:function(e,n,t){Promise.resolve().then(t.bind(t,5086))},1380:function(e,n,t){"use strict";t.d(n,{b:function(){return s}});var r,i=t(8719),o=t(5909),c=t.n(o),a=t(7946),s={of:function(e){var n;return{readList:(n=(0,i.Z)(c().mark(function n(){var t;return c().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null==e||""===e||"undefined"===e)){n.next=2;break}return n.abrupt("return",[]);case 2:return n.next=4,l("/api/gist/".concat(e,"/list"));case 4:return t=n.sent.data,n.abrupt("return",t.items);case 7:case"end":return n.stop()}},n)})),function(){return n.apply(this,arguments)}),readItem:function(n){return l("/api/gist/".concat(e,"/").concat(n))},createItem:function(n){return d("/api/gist/".concat(e,"/create"),{contents:n})},updateItem:function(n,t){return d("/api/gist/".concat(e,"/").concat(n,"/modify"),{contents:t})},updateItems:function(n){return d("/api/gist/".concat(e,"/list/modify"),{items:n})},deleteItem:function(n){return d("/api/gist/".concat(e,"/").concat(n,"/delete"))}}},getList:(r=(0,i.Z)(c().mark(function e(){var n;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("/api/gist/category");case 2:return n=e.sent.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)})},u="https://app.divops.kr/github-api";function l(e){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)(c().mark(function e(n){var t;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat(u).concat(n));case 2:return t=e.sent.data,e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function d(e,n){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(c().mark(function e(n,t){var r;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post("".concat(u).concat(n),t,{headers:{"Content-Type":"application/json"}});case 2:return r=e.sent.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}},6583:function(e,n,t){"use strict";t.d(n,{W:function(){return c}});var r=t(4477),i=t(4183);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var c=function(e){var n=e.className,t=e.children,c=e.width,a=e.style;return(0,i.jsx)("div",{className:n,style:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({margin:"0 auto",width:"".concat(void 0===c?720:c,"px")},null!=a?a:{}),children:t})}},8070:function(e,n,t){"use strict";t.d(n,{K:function(){return i}});var r=t(4183);function i(e){var n=e.size;return(0,r.jsx)("div",{style:{width:"100%",height:"".concat(n,"px")}})}},7616:function(e,n,t){"use strict";t.d(n,{K:function(){return a}});var r=t(4477),i=t(4183);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var a={Horizontal:function(e){var n=e.children,t=e.className,r=e.align,o=e.style;return(0,i.jsx)("div",{className:t,style:c({display:"flex",justifyContent:"".concat(void 0===r?"center":r),alignItems:"center"},null!=o?o:{}),children:n})},Vertical:function(e){var n=e.children,t=e.className,r=e.align,o=void 0===r?"center":r,a=e.style;return(0,i.jsx)("div",{className:t,style:c({display:"flex",flexDirection:"column",alignItems:"".concat("right"===o?"end":"left"===o?"start":"center")},null!=a?a:{}),children:n})}}},8645:function(e,n,t){"use strict";t.d(n,{H:function(){return c}});var r=t(4477),i=t(4183);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function c(e){var n=e.style,t=e.className,c=e.children,a=e.onClick;return(0,i.jsx)("p",{className:t,style:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({width:"100%",fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line"},null!=n?n:{}),dangerouslySetInnerHTML:{__html:"".concat(c)},onClick:a})}},8347:function(e,n,t){"use strict";t.d(n,{AV:function(){return f},ZT:function(){return l}});var r=t(8719),i=t(2745),o=t(5909),c=t.n(o),a=t(6970),s=t(8801),u=t(1380);function l(e){var n,t=[(n=(0,a.a)(["fetchList",e],(0,r.Z)(c().mark(function n(){var t;return c().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=e){n.next=2;break}return n.abrupt("return",[]);case 2:return n.next=4,u.b.of(e).readList();case 4:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}},n)})),{initialData:[]})).data,n.refetch,n.isLoading,n.isFetching],o=(0,i.Z)(t,4),l=o[0],f=o[1],d=o[2],p=o[3],h=(0,s.useState)([]),b=h[0],g=h[1];return((0,s.useEffect)(function(){var n,t,r;null!=e&&g(JSON.parse(null!==(n=null===(t=window)||void 0===t?void 0:null===(r=t.localStorage)||void 0===r?void 0:r.getItem("useFlashList-".concat(e)))&&void 0!==n?n:"[]"))},[]),(0,s.useEffect)(function(){var n,t;null==e||""===e||Array.isArray(e)||null==l||(null===(n=window)||void 0===n||null===(t=n.localStorage)||void 0===t||t.setItem("useFlashList-".concat(e),JSON.stringify(l)),g(l))},[l]),null==e)?[[],function(){},!1,!1]:[b,f,d,p]}function f(){var e,n=[(e=(0,a.a)(["useCategoryList"],u.b.getList,{initialData:[]})).data,e.refetch,e.isLoading,e.isFetching],t=(0,i.Z)(n,4),r=t[0],o=t[1],c=t[2],l=t[3],f=(0,s.useState)([]),d=f[0],p=f[1];return(0,s.useEffect)(function(){var e,n,t;p(JSON.parse(null!==(e=null===(n=window)||void 0===n?void 0:null===(t=n.localStorage)||void 0===t?void 0:t.getItem("useFlashCategoryList"))&&void 0!==e?e:"[]"))},[]),(0,s.useEffect)(function(){var e,n;null!=r&&(null===(e=window)||void 0===e||null===(n=e.localStorage)||void 0===n||n.setItem("useFlashCategoryList",JSON.stringify(r)),p(r))},[r]),[d,o,c,l]}},5086:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var r=t(1970),i=t.n(r),o=t(4183);function c(){return(0,o.jsx)(i(),{href:"/",children:(0,o.jsx)("h1",{children:"My Box"})})}var a=t(6583),s=t(8070),u=t(3695),l=t(3083),f=t(8801);function d(e){var n=e.children,t=(0,f.useState)(new u.S)[0];return(0,o.jsx)(l.aH,{client:t,children:n})}var p=function(){return(0,o.jsx)("a",{href:"https://github.com/creaticoding",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("span",{style:{color:"gray",height:"1em",marginLeft:"0.5rem",outline:"none"},children:"@creaticoding. "})})};function h(e){var n=e.className;return(0,o.jsxs)("footer",{className:n,style:{padding:"2rem 0",textAlign:"center",margin:"0 auto"},children:[(0,o.jsx)(p,{}),(0,o.jsx)("span",{style:{color:"#0000004f"},children:"All rights reserved."})]})}var b=t(8251),g=t.n(b),y="\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\nh1, h2, h3, h4, h5, h6 {\n	margin: 0;\n	padding: 0;\n	vertical-align: baseline;\n}\n\nhtml, body, div, span, applet, object, iframe,\np, blockquote, pre, a, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n	margin: 0;\n	padding: 0;\n	border: 0;\n	font-size: 100%;\n	font: inherit;\n	vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n	display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nmenu, ol, ul {\n	list-style: none;\n}\nblockquote, q {\n	quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n	content: '';\n	content: none;\n}\ntable {\n	border-collapse: collapse;\n	border-spacing: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1 {\n  font-size: 3.6rem;\n  font-weight: bolder;\n}\n\nh2 {\n  font-size: 3.2rem;\n  font-weight: bolder;\n}\n\nh3 {\n  font-size: 2.4rem;\n  font-weight: bolder;\n}\nh4 {\n  font-size: 2rem;\n  font-weight: bolder;\n}\n\nh5 {\n  font-size: 1.4rem;\n  font-weight: bolder;\n}\nh6 {\n  font-size: 1rem;\n  font-weight: bolder;\n}\n\n:root {\n  /* NOTE: 1 rem을 10px 기준으로 처리하도록 함 */\n  font-size: 62.5%;\n}\n",m=function(){return(0,o.jsx)(g(),{id:y.__hash,children:y})},v=t(7616),j=t(2745),x=t(5152),O=t(8645),w=t(8347);function k(){var e,n=(0,w.AV)(),t=(0,j.Z)(n,1)[0],r=(0,x.useSearchParams)().get("category");return(0,o.jsx)("div",{style:{display:"inline-block"},children:(0,o.jsx)("ul",{children:(null!==(e=Object.entries(t))&&void 0!==e?e:[]).map(function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(i(),{href:"?category=".concat(e[1]),as:"?category=".concat(e[1]),children:(0,o.jsx)(O.H,{style:{fontWeight:e[1]===r?"bold":"unset",textDecoration:e[1]===r?"underline":"unset",fontSize:"2rem",width:"100px"},children:e[0]})})},e[1])})})})}function P(e){var n=e.children;return(0,o.jsxs)("html",{lang:"en",children:[(0,o.jsx)("body",{children:(0,o.jsxs)(a.W,{width:1200,children:[(0,o.jsx)(s.K,{size:20}),(0,o.jsx)(c,{}),(0,o.jsxs)(d,{children:[(0,o.jsx)(s.K,{size:60}),(0,o.jsxs)(v.K.Horizontal,{style:{gap:"100px",alignItems:"flex-start"},children:[(0,o.jsx)(v.K.Vertical,{style:{width:"120px"},children:(0,o.jsx)(k,{})}),(0,o.jsx)(v.K.Vertical,{children:n})]})]}),(0,o.jsx)(h,{})]})}),(0,o.jsx)(m,{})]})}}},function(e){e.O(0,[854,454,831,807,744],function(){return e(e.s=8682)}),_N_E=e.O()}]);