(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7967:function(t,e,r){Promise.resolve().then(r.bind(r,5746))},1380:function(t,e,r){"use strict";r.d(e,{b:function(){return s}});var n,c=r(8719),o=r(5909),i=r.n(o),a=r(7946),s={of:function(t){var e;return{readList:(e=(0,c.Z)(i().mark(function e(){var r;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null==t||""===t||"undefined"===t)){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,l("/api/gist/".concat(t,"/list"));case 4:return r=e.sent.data,e.abrupt("return",r.items);case 7:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)}),readItem:function(e){return l("/api/gist/".concat(t,"/").concat(e))},createItem:function(e){return f("/api/gist/".concat(t,"/create"),{contents:e})},updateItem:function(e,r){return f("/api/gist/".concat(t,"/").concat(e,"/modify"),{contents:r})},updateItems:function(e){return f("/api/gist/".concat(t,"/list/modify"),{items:e})},deleteItem:function(e){return f("/api/gist/".concat(t,"/").concat(e,"/delete"))}}},getList:(n=(0,c.Z)(i().mark(function t(){var e;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l("/api/gist/category");case 2:return e=t.sent.data,t.abrupt("return",e);case 5:case"end":return t.stop()}},t)})),function(){return n.apply(this,arguments)})},u="https://app.divops.kr/github-api";function l(t){return p.apply(this,arguments)}function p(){return(p=(0,c.Z)(i().mark(function t(e){var r;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("".concat(u).concat(e));case 2:return r=t.sent.data,t.abrupt("return",r);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function f(t,e){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)(i().mark(function t(e,r){var n;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.post("".concat(u).concat(e),r,{headers:{"Content-Type":"application/json"}});case 2:return n=t.sent.data,t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}},6583:function(t,e,r){"use strict";r.d(e,{W:function(){return i}});var n=r(4477),c=r(4183);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var i=function(t){var e=t.className,r=t.children,i=t.width,a=t.style;return(0,c.jsx)("div",{className:e,style:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach(function(e){(0,n.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({margin:"0 auto",width:"".concat(void 0===i?720:i,"px")},null!=a?a:{}),children:r})}},8070:function(t,e,r){"use strict";r.d(e,{K:function(){return c}});var n=r(4183);function c(t){var e=t.size;return(0,n.jsx)("div",{style:{width:"100%",height:"".concat(e,"px")}})}},7616:function(t,e,r){"use strict";r.d(e,{K:function(){return a}});var n=r(4477),c=r(4183);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach(function(e){(0,n.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var a={Horizontal:function(t){var e=t.children,r=t.className,n=t.align,o=t.style;return(0,c.jsx)("div",{className:r,style:i({display:"flex",justifyContent:"".concat(void 0===n?"center":n),alignItems:"center"},null!=o?o:{}),children:e})},Vertical:function(t){var e=t.children,r=t.className,n=t.align,o=void 0===n?"center":n,a=t.style;return(0,c.jsx)("div",{className:r,style:i({display:"flex",flexDirection:"column",alignItems:"".concat("right"===o?"end":"left"===o?"start":"center")},null!=a?a:{}),children:e})}}},8645:function(t,e,r){"use strict";r.d(e,{H:function(){return i}});var n=r(4477),c=r(4183);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function i(t){var e=t.style,r=t.className,i=t.children;return(0,c.jsx)("p",{className:r,style:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach(function(e){(0,n.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({width:"100%",fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line"},null!=e?e:{}),dangerouslySetInnerHTML:{__html:"".concat(i)}})}},8347:function(t,e,r){"use strict";r.d(e,{J0:function(){return p},ZT:function(){return l}});var n=r(8719),c=r(2745),o=r(5909),i=r.n(o),a=r(6970),s=r(8801),u=r(1380);function l(t){var e,r=[(e=(0,a.a)(["fetchList",t],(0,n.Z)(i().mark(function e(){var r;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.of(t).readList();case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)})),{initialData:[]})).data,e.refetch,e.isLoading,e.isFetching],o=(0,c.Z)(r,4),l=o[0],p=o[1],f=o[2],d=o[3],y=(0,s.useState)([]),b=y[0],x=y[1];return(0,s.useEffect)(function(){var e,r,n;x(JSON.parse(null!==(e=null===(r=window)||void 0===r?void 0:null===(n=r.localStorage)||void 0===n?void 0:n.getItem("useFlashList-".concat(t)))&&void 0!==e?e:"[]"))},[]),(0,s.useEffect)(function(){var e,r;null==t||""===t||Array.isArray(t)||null==l||(null===(e=window)||void 0===e||null===(r=e.localStorage)||void 0===r||r.setItem("useFlashList-".concat(t),JSON.stringify(l)),x(l))},[l]),[b,p,f,d]}function p(){var t=(0,a.a)(["useCategoryList"],u.b.getList,{initialData:[]});return[t.data,t.refetch,t.isLoading,t.isFetching]}},5746:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return N}});var n=r(2745),c=r(5152),o=r(8801),i=r(6583),a=r(8070),s=r(7616),u=r(8347),l=r(8719),p=r(5909),f=r.n(p),d=r(1380),y=r(4477),b=r(8645),x=r(4183);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach(function(e){(0,y.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function g(t){var e=t.className,r=t.style,n=t.setValue,c=t.value,o=t.rows,i=t.cols;return(0,x.jsx)("textarea",{className:e,spellCheck:!1,style:v({resize:"none",width:"".concat(null==i?"100%":"auto"),fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line",fontFamily:'"Noto Sans KR", sans-serif'},null!=r?r:{}),value:c,rows:null!=o?o:c.split("\n").length,cols:i,onChange:function(t){return n(t.target.value)}})}function O(t){var e=t.defaultText,r=t.onSubmit,n=(0,o.useState)(null!=e?e:""),c=n[0],i=n[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{value:c,setValue:i,rows:Math.max(2,c.split("\n").length)}),(0,x.jsx)(a.K,{size:4}),(0,x.jsx)("button",{onClick:(0,l.Z)(f().mark(function t(){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i(""),t.next=3,r(c);case 3:case"end":return t.stop()}},t)})),style:{wordBreak:"keep-all"},children:"입력"})]})}function j(t){var e,r=t.category,c=(0,u.ZT)(r),o=(0,n.Z)(c,2),i=o[0],a=o[1];return(0,x.jsx)(O,{onSubmit:(e=(0,l.Z)(f().mark(function t(e){var n;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={contents:e,priority:i.length},t.next=3,d.b.of(r).createItem(n);case 3:return t.next=5,a();case 5:case"end":return t.stop()}},t)})),function(t){return e.apply(this,arguments)})})}function w(t){var e=t.value;return(0,x.jsx)(x.Fragment,{children:t.cases[e]})}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function P(t){var e=t.style,r=t.id,n=t.className,c=t.left,o=t.right;return(0,x.jsx)("li",{className:n,style:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach(function(e){(0,y.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({borderRadius:"6px"},null!=e?e:{}),children:(0,x.jsxs)(s.K.Horizontal,{children:[c,o]})},r)}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function S(t){var e=t.className,r=t.style,n=t.onClick,c=t.children;return(0,x.jsx)("button",{className:e,style:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach(function(e){(0,y.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({border:"unset",background:"unset",wordBreak:"keep-all",textDecoration:"underline",cursor:"pointer"},null!=r?r:{}),onClick:n,children:c})}function D(t){t.id;var e=t.data,r=t.viewButtons,c=t.editButtons,i=(0,o.useState)(e.contents),a=i[0],s=i[1],u=(0,o.useState)("view"),l=u[0],p=u[1];return(0,x.jsx)(w,{value:l,cases:{view:(0,x.jsx)(P,{style:{padding:"6px",marginBottom:"12px",border:"1px solid #efefef",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},left:(0,x.jsx)(g.View,{style:{alignItems:"flex-start"},value:a}),right:Object.entries(r).map(function(t){var e=(0,n.Z)(t,2),r=e[0],c=e[1];return(0,x.jsx)(S,{style:{paddingTop:"5px",alignItems:"flex-start"},onClick:function(){return c({text:a,setMode:p,setText:s})},children:r},r)})}),edit:null==c?null:(0,x.jsx)(P,{style:{padding:"6px",marginBottom:"12px",border:"1px solid #efefef",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},left:(0,x.jsx)(g,{style:{alignItems:"flex-start",border:"white 1px solid",borderBottom:"1px solid #c8c8c8"},value:a,setValue:s}),right:Object.entries(c).map(function(t){var e=(0,n.Z)(t,2),r=e[0],c=e[1];return(0,x.jsx)(S,{style:{alignItems:"flex-start",paddingTop:"5px"},onClick:function(){return c({text:a,setMode:p,setText:s})},children:r},r)})})}})}function Z(t){var e=t.category,r=(0,u.ZT)(e),c=(0,n.Z)(r,2),o=c[0],i=c[1];return(0,x.jsx)("ul",{children:o.sort(function(t,e){var r,n;return(null!==(r=t.body.priority)&&void 0!==r?r:0)>(null!==(n=e.body.priority)&&void 0!==n?n:0)?-1:1}).map(function(t,r){var n,c,a,s;return(0,x.jsx)(D,{id:t.id,data:t.body,viewButtons:{수정:function(t){return(0,t.setMode)("edit")},삭제:(n=(0,l.Z)(f().mark(function r(){return f().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.b.of(e).deleteItem(t.id);case 2:return r.next=4,new Promise(function(t){return setTimeout(t,1e3)});case 4:return r.next=6,i();case 6:case"end":return r.stop()}},r)})),function(){return n.apply(this,arguments)}),"⬆":(c=(0,l.Z)(f().mark(function t(){var n,c,a,s;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r<=0)){t.next=2;break}return t.abrupt("return");case 2:return n=o[r],c=o[r-1],a={contents:n.body.contents,priority:c.body.priority},s={contents:c.body.contents,priority:n.body.priority},t.next=8,d.b.of(e).updateItems([{id:n.id,body:a},{id:c.id,body:s}]);case 8:return t.next=10,i();case 10:case"end":return t.stop()}},t)})),function(){return c.apply(this,arguments)}),"⬇":(a=(0,l.Z)(f().mark(function t(){var n,c,a,s;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r>=o.length-1)){t.next=2;break}return t.abrupt("return");case 2:return n=o[r],c=o[r+1],a={contents:n.body.contents,priority:c.body.priority},s={contents:c.body.contents,priority:n.body.priority},t.next=8,d.b.of(e).updateItems([{id:n.id,body:a},{id:c.id,body:s}]);case 8:return t.next=10,i();case 10:case"end":return t.stop()}},t)})),function(){return a.apply(this,arguments)})},editButtons:{제출:(s=(0,l.Z)(f().mark(function r(n){var c,o,a;return f().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c=n.text,o=n.setMode,a={contents:c,priority:t.body.priority},r.next=4,d.b.of(e).updateItem(t.id,a);case 4:return r.next=6,i();case 6:o("view");case 7:case"end":return r.stop()}},r)})),function(t){return s.apply(this,arguments)}),취소:function(e){var r=e.setText,n=e.setMode;r(t.body.contents),n("view")}}},"".concat(t.id,"-").concat(r))})})}g.View=function(t){var e=t.value,r=t.style;return null==e?null:(0,x.jsx)(b.H,{style:v({padding:"3px"},null!=r?r:{}),children:e.replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" style="color: blue; text-decoration: underline;">Link</a>')})};var N=function(){var t=(0,u.J0)(),e=(0,n.Z)(t,1)[0],r=(0,c.useSearchParams)().get("category"),l=(0,c.useRouter)();return(0,o.useEffect)(function(){(null==r||""===r||"undefined"===r)&&l.push("/?category=".concat(Object.values(e)[0]))},[r,e]),(0,x.jsx)("main",{children:(0,x.jsxs)(i.W,{width:720,children:[(0,x.jsx)(s.K.Vertical,{align:"right",children:(0,x.jsx)(o.Suspense,{children:(0,x.jsx)(j,{category:r})})}),(0,x.jsx)(a.K,{size:20}),(0,x.jsx)(o.Suspense,{children:(0,x.jsx)(Z,{category:r})})]})})}}},function(t){t.O(0,[854,831,807,744],function(){return t(t.s=7967)}),_N_E=t.O()}]);