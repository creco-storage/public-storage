(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7967:function(e,t,r){Promise.resolve().then(r.bind(r,5746))},1380:function(e,t,r){"use strict";r.d(t,{b:function(){return s}});var n,o=r(8719),i=r(5909),c=r.n(i),a=r(7946),s={of:function(e){var t;return{readList:(t=(0,o.Z)(c().mark(function t(){var r;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null==e||""===e||"undefined"===e)){t.next=2;break}return t.abrupt("return",[]);case 2:return t.next=4,l("/api/gist/".concat(e,"/list"));case 4:return r=t.sent.data,t.abrupt("return",r.items);case 7:case"end":return t.stop()}},t)})),function(){return t.apply(this,arguments)}),readItem:function(t){return l("/api/gist/".concat(e,"/").concat(t))},createItem:function(t){return f("/api/gist/".concat(e,"/create"),{contents:t})},updateItem:function(t,r){return f("/api/gist/".concat(e,"/").concat(t,"/modify"),{contents:r})},updateItems:function(t){return f("/api/gist/".concat(e,"/list/modify"),{items:t})},deleteItem:function(t){return f("/api/gist/".concat(e,"/").concat(t,"/delete"))}}},getList:(n=(0,o.Z)(c().mark(function e(){var t;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("/api/gist/category");case 2:return t=e.sent.data,e.abrupt("return",t);case 5:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)})},u="https://app.divops.kr/github-api";function l(e){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)(c().mark(function e(t){var r;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat(u).concat(t));case 2:return r=e.sent.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function f(e,t){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)(c().mark(function e(t,r){var n;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post("".concat(u).concat(t),r,{headers:{"Content-Type":"application/json"}});case 2:return n=e.sent.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}},6583:function(e,t,r){"use strict";r.d(t,{W:function(){return c}});var n=r(4477),o=r(4183);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var c=function(e){var t=e.className,r=e.children,c=e.width,a=e.style;return(0,o.jsx)("div",{className:t,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({margin:"0 auto",width:"".concat(void 0===c?720:c,"px")},null!=a?a:{}),children:r})}},8070:function(e,t,r){"use strict";r.d(t,{K:function(){return o}});var n=r(4183);function o(e){var t=e.size;return(0,n.jsx)("div",{style:{width:"100%",height:"".concat(t,"px")}})}},7616:function(e,t,r){"use strict";r.d(t,{K:function(){return a}});var n=r(4477),o=r(4183);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var a={Horizontal:function(e){var t=e.children,r=e.className,n=e.align,i=e.style;return(0,o.jsx)("div",{className:r,style:c({display:"flex",justifyContent:"".concat(void 0===n?"center":n),alignItems:"center"},null!=i?i:{}),children:t})},Vertical:function(e){var t=e.children,r=e.className,n=e.align,i=void 0===n?"center":n,a=e.style;return(0,o.jsx)("div",{className:r,style:c({display:"flex",flexDirection:"column",alignItems:"".concat("right"===i?"end":"left"===i?"start":"center")},null!=a?a:{}),children:t})}}},8645:function(e,t,r){"use strict";r.d(t,{H:function(){return c}});var n=r(4477),o=r(4183);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){var t=e.style,r=e.className,c=e.children,a=e.onClick;return(0,o.jsx)("p",{className:r,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({width:"100%",fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line"},null!=t?t:{}),dangerouslySetInnerHTML:{__html:"".concat(c)},onClick:a})}},8347:function(e,t,r){"use strict";r.d(t,{AV:function(){return p},ZT:function(){return l}});var n=r(8719),o=r(2745),i=r(5909),c=r.n(i),a=r(6970),s=r(8801),u=r(1380);function l(e){var t,r=[(t=(0,a.a)(["fetchList",e],(0,n.Z)(c().mark(function t(){var r;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e){t.next=2;break}return t.abrupt("return",[]);case 2:return t.next=4,u.b.of(e).readList();case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t)})),{initialData:[]})).data,t.refetch,t.isLoading,t.isFetching],i=(0,o.Z)(r,4),l=i[0],p=i[1],f=i[2],d=i[3],b=(0,s.useState)([]),y=b[0],x=b[1];return((0,s.useEffect)(function(){var t,r,n;null!=e&&x(JSON.parse(null!==(t=null===(r=window)||void 0===r?void 0:null===(n=r.localStorage)||void 0===n?void 0:n.getItem("useFlashList-".concat(e)))&&void 0!==t?t:"[]"))},[]),(0,s.useEffect)(function(){var t,r;null==e||""===e||Array.isArray(e)||null==l||(null===(t=window)||void 0===t||null===(r=t.localStorage)||void 0===r||r.setItem("useFlashList-".concat(e),JSON.stringify(l)),x(l))},[l]),null==e)?[[],function(){},!1,!1]:[y,p,f,d]}function p(){var e,t=[(e=(0,a.a)(["useCategoryList"],u.b.getList,{initialData:[]})).data,e.refetch,e.isLoading,e.isFetching],r=(0,o.Z)(t,4),n=r[0],i=r[1],c=r[2],l=r[3],p=(0,s.useState)([]),f=p[0],d=p[1];return(0,s.useEffect)(function(){var e,t,r;d(JSON.parse(null!==(e=null===(t=window)||void 0===t?void 0:null===(r=t.localStorage)||void 0===r?void 0:r.getItem("useFlashCategoryList"))&&void 0!==e?e:"[]"))},[]),(0,s.useEffect)(function(){var e,t;null!=n&&(null===(e=window)||void 0===e||null===(t=e.localStorage)||void 0===t||t.setItem("useFlashCategoryList",JSON.stringify(n)),d(n))},[n]),[f,i,c,l]}},5746:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(8801),o=r(6583),i=r(8070),c=r(7616),a=r(8719),s=r(2745),u=r(5909),l=r.n(u),p=r(5152),f=r(1380),d=r(4477),b=r(8645),y=r(4183);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,d.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function v(e){var t=e.className,r=e.style,n=e.setValue,o=e.value,i=e.rows,c=e.cols;return(0,y.jsx)("textarea",{className:t,spellCheck:!1,style:g({resize:"none",width:"".concat(null==c?"100%":"auto"),fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line",fontFamily:'"Noto Sans KR", sans-serif'},null!=r?r:{}),value:o,rows:null!=i?i:o.split("\n").length,cols:c,onChange:function(e){return n(e.target.value)}})}function h(e){var t=e.defaultText,r=e.onSubmit,o=(0,n.useState)(null!=t?t:""),c=o[0],s=o[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v,{value:c,setValue:s,rows:Math.max(2,c.split("\n").length)}),(0,y.jsx)(i.K,{size:4}),(0,y.jsx)("button",{onClick:(0,a.Z)(l().mark(function e(){return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),e.next=3,r(c);case 3:case"end":return e.stop()}},e)})),style:{wordBreak:"keep-all"},children:"입력"})]})}v.View=function(e){var t=e.value,r=e.style,n=e.onClick;return null==t?null:(0,y.jsx)(b.H,{style:g({padding:"3px"},null!=r?r:{}),onClick:n,children:t.replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" style="color: blue; text-decoration: underline;">Link</a>')})};var O=r(8347);function j(){var e,t=(0,p.useSearchParams)().get("category"),r=(0,O.ZT)(null!=t?t:"work"),n=(0,s.Z)(r,2),o=n[0],i=n[1];return(0,y.jsx)(h,{onSubmit:(e=(0,a.Z)(l().mark(function e(r){var n;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={contents:r,priority:o.length,createdAt:Date.now()},e.next=3,f.b.of(t).createItem(n);case 3:return e.next=5,i();case 5:case"end":return e.stop()}},e)})),function(t){return e.apply(this,arguments)})})}function w(e){var t=e.value;return(0,y.jsx)(y.Fragment,{children:e.cases[t]})}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){var t=e.style,r=e.id,n=e.className,o=e.left,i=e.right,a=e.bottom;return(0,y.jsxs)("li",{className:n,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,d.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({borderRadius:"6px"},null!=t?t:{}),children:[(0,y.jsxs)(c.K.Horizontal,{style:{alignItems:"baseline",justifyContent:"space-between"},children:[(0,y.jsx)(c.K.Horizontal,{style:{alignItems:"baseline"},children:o}),(0,y.jsx)(c.K.Horizontal,{style:{alignItems:"baseline"},children:i})]}),a]},r)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function S(e){var t=e.className,r=e.style,n=e.onClick,o=e.children;return(0,y.jsx)("button",{className:t,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach(function(t){(0,d.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({border:"unset",background:"unset",wordBreak:"keep-all",textDecoration:"underline",cursor:"pointer"},null!=r?r:{}),onClick:n,children:o})}function D(e){e.id;var t,r=e.data,o=e.viewButtons,i=e.editButtons,a=(0,n.useState)(r.contents),u=a[0],l=a[1],p=(0,n.useState)("view"),f=p[0],d=p[1];return(0,y.jsx)(w,{value:f,cases:{detail:(0,y.jsx)(P,{style:{backgroundColor:"gainsboro",padding:"6px",marginBottom:"12px",border:"1px solid #efefef",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},left:(0,y.jsx)(v.View,{style:{alignItems:"flex-start"},value:u}),right:Object.entries(o).map(function(e){var t=(0,s.Z)(e,2),r=t[0],n=t[1];return(0,y.jsx)(S,{style:{paddingTop:"5px",alignItems:"flex-start"},onClick:function(){return n({text:u,setMode:d,setText:l})},children:r},r)}),bottom:(0,y.jsxs)(c.K.Horizontal,{style:{},children:[(0,y.jsx)(v.View,{style:{textAlign:"left",fontSize:"1rem",cursor:"pointer",width:"50px",fontWeight:"bold",textDecoration:"underline"},value:"▲ 접기",onClick:function(){return d("view")}}),(0,y.jsx)(v.View,{style:{textAlign:"right",fontSize:"1rem"},value:new Date(null!==(t=r.updatedAt)&&void 0!==t?t:r.createdAt).toLocaleString()})]})}),view:(0,y.jsx)(P,{style:{padding:"6px",marginBottom:"12px",border:"1px solid #efefef",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},left:(0,y.jsx)(v.View,{style:{alignItems:"flex-start",cursor:"pointer"},value:u.split("\n")[0],onClick:function(){d("detail")}}),right:Object.entries(o).map(function(e){var t=(0,s.Z)(e,2),r=t[0],n=t[1];return(0,y.jsx)(S,{style:{paddingTop:"5px",alignItems:"flex-start"},onClick:function(){return n({text:u,setMode:d,setText:l})},children:r},r)}),bottom:null}),edit:null==i?null:(0,y.jsx)(P,{style:{padding:"6px",marginBottom:"12px",border:"1px solid #efefef",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},left:(0,y.jsx)(v,{style:{alignItems:"flex-start",border:"white 1px solid",borderBottom:"1px solid #c8c8c8"},value:u,setValue:l}),right:Object.entries(i).map(function(e){var t=(0,s.Z)(e,2),r=t[0],n=t[1];return(0,y.jsx)(S,{style:{alignItems:"flex-start",paddingTop:"5px"},onClick:function(){return n({text:u,setMode:d,setText:l})},children:r},r)})})}})}function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach(function(t){(0,d.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function C(){var e=(0,p.useSearchParams)().get("category"),t=(0,O.ZT)(null!=e?e:"work"),r=(0,s.Z)(t,2),n=r[0],o=r[1];return(0,y.jsx)("ul",{children:n.sort(function(e,t){var r,n;return(null!==(r=e.body.priority)&&void 0!==r?r:0)>(null!==(n=t.body.priority)&&void 0!==n?n:0)?-1:1}).map(function(t,r){var i,c,s,u;return(0,y.jsx)(D,{id:t.id,data:t.body,viewButtons:{수정:function(e){return(0,e.setMode)("edit")},삭제:(i=(0,a.Z)(l().mark(function r(){return l().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.b.of(e).deleteItem(t.id);case 2:return r.next=4,new Promise(function(e){return setTimeout(e,1e3)});case 4:return r.next=6,o();case 6:case"end":return r.stop()}},r)})),function(){return i.apply(this,arguments)}),"⬆":(c=(0,a.Z)(l().mark(function t(){var i,c,a,s;return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r<=0)){t.next=2;break}return t.abrupt("return");case 2:return i=n[r],c=n[r-1],a=I(I({},i.body),{},{priority:c.body.priority}),s=I(I({},c.body),{},{priority:i.body.priority}),t.next=8,f.b.of(e).updateItems([{id:i.id,body:a},{id:c.id,body:s}]);case 8:return t.next=10,o();case 10:case"end":return t.stop()}},t)})),function(){return c.apply(this,arguments)}),"⬇":(s=(0,a.Z)(l().mark(function t(){var i,c,a,s;return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r>=n.length-1)){t.next=2;break}return t.abrupt("return");case 2:return i=n[r],c=n[r+1],a=I(I({},i.body),{},{priority:c.body.priority}),s=I(I({},c.body),{},{priority:i.body.priority}),t.next=8,f.b.of(e).updateItems([{id:i.id,body:a},{id:c.id,body:s}]);case 8:return t.next=10,o();case 10:case"end":return t.stop()}},t)})),function(){return s.apply(this,arguments)})},editButtons:{제출:(u=(0,a.Z)(l().mark(function r(n){var i,c,a;return l().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=n.text,c=n.setMode,a=I(I({},t.body),{},{contents:i,updatedAt:Date.now()}),r.next=4,f.b.of(e).updateItem(t.id,a);case 4:return r.next=6,o();case 6:c("view");case 7:case"end":return r.stop()}},r)})),function(e){return u.apply(this,arguments)}),취소:function(e){var r=e.setText,n=e.setMode;r(t.body.contents),n("view")}}},"".concat(t.id,"-").concat(r))})})}var N=function(){return(0,y.jsx)("main",{children:(0,y.jsxs)(o.W,{width:720,children:[(0,y.jsx)(c.K.Vertical,{align:"right",children:(0,y.jsx)(n.Suspense,{children:(0,y.jsx)(j,{})})}),(0,y.jsx)(i.K,{size:20}),(0,y.jsx)(n.Suspense,{children:(0,y.jsx)(C,{})})]})})}}},function(e){e.O(0,[854,831,807,744],function(){return e(e.s=7967)}),_N_E=e.O()}]);