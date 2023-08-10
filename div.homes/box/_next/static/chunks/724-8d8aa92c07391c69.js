"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{2090:function(e,t,r){r.d(t,{b:function(){return i}});var n=r(8719),c=r(5909),o=r.n(c),a=r(7946),i={of:function(e){var t;return{readList:(t=(0,n.Z)(o().mark(function t(){var r;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("/api/gist/".concat(e,"/list"));case 2:return r=t.sent.data,t.abrupt("return",r.items);case 5:case"end":return t.stop()}},t)})),function(){return t.apply(this,arguments)}),readItem:function(t){return u("/api/gist/".concat(e,"/").concat(t))},createItem:function(t){return p("/api/gist/".concat(e,"/create"),{contents:t})},updateItem:function(t,r){return p("/api/gist/".concat(e,"/").concat(t,"/modify"),{contents:r})},updateItems:function(t){return p("/api/gist/".concat(e,"/list/modify"),{items:t})},deleteItem:function(t){return p("/api/gist/".concat(e,"/").concat(t,"/delete"))}}}},s="https://app.divops.kr/github-api";function u(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark(function e(t){var r;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat(s).concat(t));case 2:return r=e.sent.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(e,t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark(function e(t,r){var n;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post("".concat(s).concat(t),r,{headers:{"Content-Type":"application/json"}});case 2:return n=e.sent.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}i.of("work")},6583:function(e,t,r){r.d(t,{W:function(){return a}});var n=r(4477),c=r(4183);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var a=function(e){var t=e.className,r=e.children,a=e.width,i=e.style;return(0,c.jsx)("div",{className:t,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({margin:"0 auto",width:"".concat(void 0===a?720:a,"px")},null!=i?i:{}),children:r})}},9507:function(e,t,r){r.d(t,{d:function(){return d}});var n=r(2745),c=r(8801),o=r(4183);function a(e){var t=e.value;return(0,o.jsx)(o.Fragment,{children:e.cases[t]})}var i=r(9471),s=r(4477),u=r(7616);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){var t=e.style,r=e.id,n=e.className,c=e.left,a=e.right;return(0,o.jsx)("li",{className:n,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({borderRadius:"6px"},null!=t?t:{}),children:(0,o.jsxs)(u.K.Horizontal,{children:[c,a]})},r)}var f=r(4720);function d(e){e.id;var t=e.data,r=e.viewButtons,s=e.editButtons,u=(0,c.useState)(t.contents),l=u[0],d=u[1],b=(0,c.useState)("view"),y=b[0],O=b[1];return(0,o.jsx)(a,{value:y,cases:{view:(0,o.jsx)(p,{style:{padding:"6px",marginBottom:"12px",border:"1px solid #efefef",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},left:(0,o.jsx)(i.K.View,{style:{alignItems:"flex-start"},value:l}),right:Object.entries(r).map(function(e){var t=(0,n.Z)(e,2),r=t[0],c=t[1];return(0,o.jsx)(f.L,{style:{paddingTop:"5px",alignItems:"flex-start"},onClick:function(){return c({text:l,setMode:O,setText:d})},children:r},r)})}),edit:null==s?null:(0,o.jsx)(p,{style:{padding:"6px",marginBottom:"12px",border:"1px solid #efefef",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},left:(0,o.jsx)(i.K,{style:{alignItems:"flex-start",border:"white 1px solid",borderBottom:"1px solid #c8c8c8"},value:l,setValue:d}),right:Object.entries(s).map(function(e){var t=(0,n.Z)(e,2),r=t[0],c=t[1];return(0,o.jsx)(f.L,{style:{alignItems:"flex-start",paddingTop:"5px"},onClick:function(){return c({text:l,setMode:O,setText:d})},children:r},r)})})}})}},8070:function(e,t,r){r.d(t,{K:function(){return c}});var n=r(4183);function c(e){var t=e.size;return(0,n.jsx)("div",{style:{width:"100%",height:"".concat(t,"px")}})}},7616:function(e,t,r){r.d(t,{K:function(){return c}});var n=r(4183),c={Horizontal:function(e){var t=e.children,r=e.className,c=e.align;return(0,n.jsx)("div",{className:r,style:{display:"flex",justifyContent:"".concat(void 0===c?"center":c),alignItems:"center"},children:t})},Vertical:function(e){var t=e.children,r=e.className,c=e.align,o=void 0===c?"center":c;return(0,n.jsx)("div",{className:r,style:{display:"flex",flexDirection:"column",alignItems:"".concat("right"===o?"end":"left"===o?"start":"center")},children:t})}}},9471:function(e,t,r){r.d(t,{K:function(){return s}});var n=r(4477),c=r(8645),o=r(4183);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e){var t=e.className,r=e.style,n=e.setValue,c=e.value,a=e.rows,s=e.cols;return(0,o.jsx)("textarea",{className:t,spellCheck:!1,style:i({resize:"none",width:"".concat(null==s?"100%":"auto"),fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line",fontFamily:'"Noto Sans KR", sans-serif'},null!=r?r:{}),value:c,rows:null!=a?a:c.split("\n").length,cols:s,onChange:function(e){return n(e.target.value)}})}s.View=function(e){var t=e.value,r=e.style;return null==t?null:(0,o.jsx)(c.H,{style:i({padding:"3px"},null!=r?r:{}),children:t.replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" style="color: blue; text-decoration: underline;">Link</a>')})}},8645:function(e,t,r){r.d(t,{H:function(){return a}});var n=r(4477),c=r(4183);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){var t=e.style,r=e.className,a=e.children;return(0,c.jsx)("p",{className:r,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({width:"100%",fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line"},null!=t?t:{}),dangerouslySetInnerHTML:{__html:"".concat(a)}})}},4720:function(e,t,r){r.d(t,{L:function(){return a}});var n=r(4477),c=r(4183);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){var t=e.className,r=e.style,a=e.onClick,i=e.children;return(0,c.jsx)("button",{className:t,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({border:"unset",background:"unset",wordBreak:"keep-all",textDecoration:"underline",cursor:"pointer"},null!=r?r:{}),onClick:a,children:i})}},8347:function(e,t,r){r.d(t,{s:function(){return s}});var n=r(8719),c=r(5909),o=r.n(c),a=r(6970);r(8801);var i=r(2090);function s(e){var t=(0,a.a)(["fetchList",e],(0,n.Z)(o().mark(function t(){var r;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.of(e).readList();case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t)})),{initialData:[]});return[t.data,t.refetch,t.isLoading,t.isFetching]}}}]);