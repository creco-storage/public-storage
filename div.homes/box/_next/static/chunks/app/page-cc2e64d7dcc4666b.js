(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8246:function(e,t,r){Promise.resolve().then(r.bind(r,6382))},6382:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return HomePage}});var n=r(1417),c=r(8366),o=r(1444),i=r(3833),a=r(3734),s=r(6709),u=r(1795),l=r(8718),p=r.n(l),d=r(1602),b=r(3016),f=r(2003),y=r(3805),j=r(7982),h=r(7535),x=r(3431);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function List(){var e,t=(0,n.useContext)(j.V),r=(0,d.useRouter)(),c=(0,d.useSearchParams)().get("category"),o=(0,y.ZT)(null!=c?c:"knowledge"),i=(0,u.Z)(o,2),a=i[0],l=i[1],g=(e=(0,s.Z)(p().mark(function _callee(e){var t;return p().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t={contents:e,priority:a.length,createdAt:Date.now()},n.prev=1,n.next=4,b.b.of(c).createItem(t);case 4:return n.next=6,new Promise(function(e){return setTimeout(e,1e3)});case 6:return n.next=8,l();case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),"Not Allowed"===n.t0.response.data.message&&r.push("/login");case 13:case"end":return n.stop()}},_callee,null,[[1,10]])})),function(t){return e.apply(this,arguments)});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("ul",{children:a.sort(function(e,t){var r,n;return(null!==(r=e.body.priority)&&void 0!==r?r:0)>(null!==(n=t.body.priority)&&void 0!==n?n:0)?-1:1}).map(function(e,t){var n,o;return(0,x.jsx)(f.d,{data:_objectSpread({id:e.id},e.body),viewButtons:{"⬆":(n=(0,s.Z)(p().mark(function _callee2(){var e,n,o,i;return p().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(t<=0)){s.next=2;break}return s.abrupt("return");case 2:return e=a[t],n=a[t-1],o=_objectSpread(_objectSpread({},e.body),{},{priority:n.body.priority}),i=_objectSpread(_objectSpread({},n.body),{},{priority:e.body.priority}),s.prev=6,s.next=9,b.b.of(c).updateItems([{id:e.id,body:o},{id:n.id,body:i}]);case 9:return s.next=11,l();case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(6),"Not Allowed"===s.t0.response.data.message&&r.push("/login");case 16:case"end":return s.stop()}},_callee2,null,[[6,13]])})),function(){return n.apply(this,arguments)}),"⬇":(o=(0,s.Z)(p().mark(function _callee3(){var e,n,o,i;return p().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(t>=a.length-1)){s.next=2;break}return s.abrupt("return");case 2:return e=a[t],n=a[t+1],o=_objectSpread(_objectSpread({},e.body),{},{priority:n.body.priority}),i=_objectSpread(_objectSpread({},n.body),{},{priority:e.body.priority}),s.prev=6,s.next=9,b.b.of(c).updateItems([{id:e.id,body:o},{id:n.id,body:i}]);case 9:return s.next=11,l();case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(6),"Not Allowed"===s.t0.response.data.message&&r.push("/login");case 16:case"end":return s.stop()}},_callee3,null,[[6,13]])})),function(){return o.apply(this,arguments)})},onClick:function(e){r.push("/detail?category=".concat(c,"&id=").concat(e.id))}},"".concat(e.id,"-").concat(t))})}),t?(0,x.jsx)(h.l,{onSubmit:g}):null]})}var g=r(3401),O=r.n(g),v=r(1115),w=r(5601),S=r(753);function Sidebar_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Sidebar_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Sidebar_ownKeys(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Sidebar_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Sidebar(){var e,t,r=(0,d.useRouter)(),c=(0,y.AV)(),o=(0,u.Z)(c,1)[0],i=(0,d.useSearchParams)().get("category"),l=(e=(0,s.Z)(p().mark(function _callee(e){var t,n,c;return p().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,v.b.getList();case 2:null!=(c=null===(t=Object.entries(o.sent))||void 0===t?void 0:null===(n=t[e-1])||void 0===n?void 0:n[1])&&r.replace("?category=".concat(c));case 5:case"end":return o.stop()}},_callee)})),function(t){return e.apply(this,arguments)});return(0,n.useEffect)(function(){null==i&&Object.entries(o).length>0&&r.replace("?category=".concat(Object.entries(o)[0][1]))},[i,o]),(0,S.J)(Sidebar_objectSpread({},Array(9).fill(0).reduce(function(e,t,r){return Sidebar_objectSpread(Sidebar_objectSpread({},e),{},(0,a.Z)({},r,function(){return l(r)}))},{}))),(0,x.jsx)("div",{style:{display:"inline-block"},children:(0,x.jsx)("ul",{children:(null!==(t=Object.entries(o))&&void 0!==t?t:[]).map(function(e){return(0,x.jsx)("li",{children:(0,x.jsx)(O(),{href:"/?category=".concat(e[1]),as:"/?category=".concat(e[1]),children:(0,x.jsx)(w.H,{as:"span",style:{fontWeight:e[1]===i?"bold":"unset",textDecoration:e[1]===i?"underline":"unset",fontSize:"2rem",width:"100px"},children:e[0]})})},e[1])})})})}var HomePage=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.K,{size:60}),(0,x.jsxs)(i.K.Horizontal,{style:{gap:"100px",alignItems:"flex-start"},children:[(0,x.jsx)(i.K.Vertical,{style:{width:"120px"},children:(0,x.jsx)(Sidebar,{})}),(0,x.jsx)(i.K.Vertical,{children:(0,x.jsx)("main",{children:(0,x.jsx)(c.W,{width:720,children:(0,x.jsx)(n.Suspense,{children:(0,x.jsx)(List,{})})})})})]})]})}}},function(e){e.O(0,[175,660,127,401,261,433,166,744],function(){return e(e.s=8246)}),_N_E=e.O()}]);