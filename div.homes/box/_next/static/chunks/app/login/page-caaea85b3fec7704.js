(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{1165:function(e,t,r){Promise.resolve().then(r.bind(r,9239))},6583:function(e,t,r){"use strict";r.d(t,{W:function(){return s}});var n=r(4477),c=r(4183);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var s=function(e){var t=e.className,r=e.children,s=e.width,o=e.style;return(0,c.jsx)("div",{className:t,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({margin:"0 auto",width:"".concat(void 0===s?720:s,"px")},null!=o?o:{}),children:r})}},7616:function(e,t,r){"use strict";r.d(t,{K:function(){return o}});var n=r(4477),c=r(4183);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var o={Horizontal:function(e){var t=e.children,r=e.className,n=e.align,i=e.style;return(0,c.jsx)("div",{className:r,style:s({display:"flex",justifyContent:"".concat(void 0===n?"center":n),alignItems:"center"},null!=i?i:{}),children:t})},Vertical:function(e){var t=e.children,r=e.className,n=e.align,i=void 0===n?"center":n,o=e.style;return(0,c.jsx)("div",{className:r,style:s({display:"flex",flexDirection:"column",alignItems:"".concat("right"===i?"end":"left"===i?"start":"center")},null!=o?o:{}),children:t})}}},9239:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(8719),c=r(5909),i=r.n(c),s=r(7946),o=r(5152),a=r(8801),u=r(6583),l=r(7616),f=r(4183);function p(){var e=(0,o.useRouter)(),t=(0,a.useState)(),r=t[0],c=t[1],p=(0,a.useState)(),d=p[0],O=p[1];return(0,f.jsx)("main",{children:(0,f.jsx)(u.W,{width:720,children:(0,f.jsx)(l.K.Vertical,{align:"center",children:(0,f.jsxs)(l.K.Vertical,{align:"right",children:[(0,f.jsx)("input",{type:"text",id:"id",value:r,onChange:function(e){return c(e.target.value)}}),(0,f.jsx)("br",{}),(0,f.jsx)("input",{type:"password",id:"password",value:d,onChange:function(e){return O(e.target.value)}}),(0,f.jsx)("br",{}),(0,f.jsx)("button",{onClick:(0,n.Z)(i().mark(function t(){return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.post("/api/gist/login",{id:r,password:d});case 2:e.back();case 3:case"end":return t.stop()}},t)})),children:"로그인"})]})})})})}}},function(e){e.O(0,[457,831,807,744],function(){return e(e.s=1165)}),_N_E=e.O()}]);