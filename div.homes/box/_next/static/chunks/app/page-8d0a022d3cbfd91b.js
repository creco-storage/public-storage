(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8555:function(e,t,r){Promise.resolve().then(r.bind(r,4256))},8268:function(e,t,r){"use strict";r.d(t,{K:function(){return p}});var n=r(6767),o=r(8861),c=r(1904),i=r(1213),s=["className","style","setValue","value","rows","cols","onFocus"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var l=(0,o.forwardRef)(function(e,t){var r=e.className,n=e.style,o=e.setValue,c=e.value,u=e.rows,l=e.cols,p=e.onFocus,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s);return(0,i.jsx)("textarea",a({ref:t,className:r,spellCheck:!1,style:a({resize:"none",width:"".concat(null==l?"100%":"auto"),fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line",fontFamily:'"Noto Sans KR", sans-serif'},null!=n?n:{}),value:c,rows:null!=u?u:c.split("\n").length,cols:l,onChange:function(e){return o(e.target.value)},onFocus:p},f))});l.displayName="TextArea";var p=Object.assign(l,{View:function(e){var t=e.value,r=e.style,n=e.onClick;return null==t?null:(0,i.jsx)(c.H,{style:a({padding:"3px"},null!=r?r:{}),onClick:n,children:t.replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" style="color: blue; text-decoration: underline;">Link</a>')})}})},2972:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(6767),o=r(1213);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){var t=e.className,r=e.style,i=e.onClick,s=e.children;return(0,o.jsx)("button",{className:t,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({border:"unset",background:"unset",wordBreak:"keep-all",textDecoration:"underline",cursor:"pointer"},null!=r?r:{}),onClick:i,children:s})}},6540:function(e,t,r){"use strict";r.d(t,{l:function(){return d}});var n=r(9208),o=r(9971),c=r.n(o),i=r(8861),s=r(3625),u=r(258),a=r(8268),l=r(1213),p=(0,i.forwardRef)(function(e,t){var r=e.style,n=e.defaultText,o=e.onFocus,c=e.placeholder,s=e.disabled,u=e.children,p=e.onClick,f=(0,i.useState)(null!=n?n:""),d=f[0],b=f[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.K,{ref:t,value:d,setValue:b,rows:Math.max(2,d.split("\n").length),style:r,onFocus:o,placeholder:c,disabled:void 0!==s&&s,onClick:p}),u]})}),f=r(6282);function d(e){var t,r=e.initialValue,o=e.onSubmit,a=(0,i.useRef)(null),d=(0,i.useState)(!1),b=d[0],y=d[1],h=function(){if(b){y(!1);return}y(!0),setTimeout(function(){var e;null===(e=a.current)||void 0===e||e.focus()},0)};return((0,f.J)({k:function(){return h()},Escape:function(){return y(!1)},Enter:(t=(0,n.Z)(c().mark(function e(){var t,r;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(r=null===(t=a.current)||void 0===t?void 0:t.value)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,o(r);case 5:y(!1);case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)})},[b]),b)?(0,l.jsx)(s.h,{children:(0,l.jsx)(u.W,{onClick:function(){y(!1)},width:720,style:{position:"fixed",backgroundColor:"#c8c8c8aa",top:0,left:0,width:"100vw",height:"100vh"},children:(0,l.jsx)("div",{style:{width:"720px",transform:"translate(-50%, -50%)",top:"50%",left:"50%",position:"relative"},children:(0,l.jsx)(p,{ref:a,onSubmit:o,defaultText:r,style:{backgroundColor:"#c8c8c8d0",border:"0px",outline:"none",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px",height:"200px",overflowY:"scroll"},onClick:function(e){null==e||e.preventDefault(),null==e||e.stopPropagation()}})})})}):null}},4256:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(8861),o=r(258),c=r(6767),i=r(9208),s=r(6195),u=r(9971),a=r.n(u),l=r(7505),p=r(7473),f=r(8268),d=r(3549),b=r(1213);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function h(e){var t=e.style,r=e.id,n=e.className,o=e.left,i=e.right,s=e.bottom;return(0,b.jsxs)("li",{className:n,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({borderRadius:"6px"},null!=t?t:{}),children:[(0,b.jsxs)(d.K.Horizontal,{style:{alignItems:"baseline",justifyContent:"space-between"},children:[o,i]}),s]},r)}var x=r(2972),O=r(5626);function v(e){var t=e.data,r=e.viewButtons,o=e.onClick,c=(0,n.useContext)(O.V);return(0,b.jsx)(h,{style:{padding:"6px",marginBottom:"12px",border:"1px solid #efefef",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},left:(0,b.jsx)(f.K.View,{style:{alignItems:"flex-start",cursor:"pointer"},value:t.contents.split("\n")[0],onClick:function(){null==o||o(t)}}),right:c?Object.entries(r).map(function(e){var t=(0,s.Z)(e,2),r=t[0],n=t[1];return(0,b.jsx)(x.L,{style:{paddingTop:"5px",alignItems:"flex-start"},onClick:function(){return n()},children:r},r)}):null,bottom:null})}var g=r(4989),j=r(6540);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function k(){var e,t=(0,n.useContext)(O.V),r=(0,l.useRouter)(),o=(0,l.useSearchParams)().get("category"),c=(0,g.ZT)(null!=o?o:"knowledge"),u=(0,s.Z)(c,2),f=u[0],d=u[1],y=(e=(0,i.Z)(a().mark(function e(t){var n;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={contents:t,priority:f.length,createdAt:Date.now()},e.prev=1,e.next=4,p.b.of(o).createItem(n);case 4:return e.next=6,new Promise(function(e){return setTimeout(e,1e3)});case 6:return e.next=8,d();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),"Not Allowed"===e.t0.response.data.message&&r.push("/login");case 13:case"end":return e.stop()}},e,null,[[1,10]])})),function(t){return e.apply(this,arguments)});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("ul",{children:f.sort(function(e,t){var r,n;return(null!==(r=e.body.priority)&&void 0!==r?r:0)>(null!==(n=t.body.priority)&&void 0!==n?n:0)?-1:1}).map(function(e,t){var n,c;return(0,b.jsx)(v,{data:m({id:e.id},e.body),viewButtons:{"⬆":(n=(0,i.Z)(a().mark(function e(){var n,c,i,s;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<=0)){e.next=2;break}return e.abrupt("return");case 2:return n=f[t],c=f[t-1],i=m(m({},n.body),{},{priority:c.body.priority}),s=m(m({},c.body),{},{priority:n.body.priority}),e.prev=6,e.next=9,p.b.of(o).updateItems([{id:n.id,body:i},{id:c.id,body:s}]);case 9:return e.next=11,d();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),"Not Allowed"===e.t0.response.data.message&&r.push("/login");case 16:case"end":return e.stop()}},e,null,[[6,13]])})),function(){return n.apply(this,arguments)}),"⬇":(c=(0,i.Z)(a().mark(function e(){var n,c,i,s;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t>=f.length-1)){e.next=2;break}return e.abrupt("return");case 2:return n=f[t],c=f[t+1],i=m(m({},n.body),{},{priority:c.body.priority}),s=m(m({},c.body),{},{priority:n.body.priority}),e.prev=6,e.next=9,p.b.of(o).updateItems([{id:n.id,body:i},{id:c.id,body:s}]);case 9:return e.next=11,d();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),"Not Allowed"===e.t0.response.data.message&&r.push("/login");case 16:case"end":return e.stop()}},e,null,[[6,13]])})),function(){return c.apply(this,arguments)})},onClick:function(e){console.log(e),r.push("/detail?category=".concat(o,"&id=").concat(e.id))}},"".concat(e.id,"-").concat(t))})}),t?(0,b.jsx)(j.l,{onSubmit:y}):null]})}var P=function(){return(0,b.jsx)("main",{children:(0,b.jsx)(o.W,{width:720,children:(0,b.jsx)(n.Suspense,{children:(0,b.jsx)(k,{})})})})}}},function(e){e.O(0,[527,99,809,636,795,744],function(){return e(e.s=8555)}),_N_E=e.O()}]);