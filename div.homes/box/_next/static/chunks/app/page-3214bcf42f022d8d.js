(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8246:function(e,t,r){Promise.resolve().then(r.bind(r,6382))},6382:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return HomePage}});var n=r(1417),o=r(8366),c=r(1444),i=r(3833),a=r(3734),s=r(6709),u=r(1795),l=r(8718),p=r.n(l),d=r(1602),b=r(3016),f=r(2003),y=r(3805),j=r(7982),h=r(7535),g=r(3431);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function List(){var e,t=(0,n.useContext)(j.V),r=(0,d.useRouter)(),o=(0,d.useSearchParams)().get("category"),c=(0,y.ZT)(null!=o?o:"knowledge"),i=(0,u.Z)(c,2),a=i[0],l=i[1],x=(e=(0,s.Z)(p().mark(function _callee(e){var t;return p().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t={contents:e,priority:a.length,createdAt:Date.now()},n.prev=1,n.next=4,b.b.of(o).createItem(t);case 4:return n.next=6,new Promise(function(e){return setTimeout(e,1e3)});case 6:return n.next=8,l();case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),"Not Allowed"===n.t0.response.data.message&&r.push("/login");case 13:case"end":return n.stop()}},_callee,null,[[1,10]])})),function(t){return e.apply(this,arguments)});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("ul",{children:a.sort(function(e,t){var r,n;return(null!==(r=e.body.priority)&&void 0!==r?r:0)>(null!==(n=t.body.priority)&&void 0!==n?n:0)?-1:1}).map(function(e,t){var n,c;return(0,g.jsx)(f.d,{data:_objectSpread({id:e.id},e.body),viewButtons:{"⬆":(n=(0,s.Z)(p().mark(function _callee2(){var e,n,c,i;return p().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(t<=0)){s.next=2;break}return s.abrupt("return");case 2:return e=a[t],n=a[t-1],c=_objectSpread(_objectSpread({},e.body),{},{priority:n.body.priority}),i=_objectSpread(_objectSpread({},n.body),{},{priority:e.body.priority}),s.prev=6,s.next=9,b.b.of(o).updateItems([{id:e.id,body:c},{id:n.id,body:i}]);case 9:return s.next=11,l();case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(6),"Not Allowed"===s.t0.response.data.message&&r.push("/login");case 16:case"end":return s.stop()}},_callee2,null,[[6,13]])})),function(){return n.apply(this,arguments)}),"⬇":(c=(0,s.Z)(p().mark(function _callee3(){var e,n,c,i;return p().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(t>=a.length-1)){s.next=2;break}return s.abrupt("return");case 2:return e=a[t],n=a[t+1],c=_objectSpread(_objectSpread({},e.body),{},{priority:n.body.priority}),i=_objectSpread(_objectSpread({},n.body),{},{priority:e.body.priority}),s.prev=6,s.next=9,b.b.of(o).updateItems([{id:e.id,body:c},{id:n.id,body:i}]);case 9:return s.next=11,l();case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(6),"Not Allowed"===s.t0.response.data.message&&r.push("/login");case 16:case"end":return s.stop()}},_callee3,null,[[6,13]])})),function(){return c.apply(this,arguments)})},onClick:function(e){console.log(e),r.push("/detail?category=".concat(o,"&id=").concat(e.id))}},"".concat(e.id,"-").concat(t))})}),t?(0,g.jsx)(h.l,{onSubmit:x}):null]})}var x=r(3401),O=r.n(x),v=r(1115),w=r(5601),S=r(753);function Sidebar_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Sidebar_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Sidebar_ownKeys(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Sidebar_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Sidebar(){var e,t,r=(0,d.useRouter)(),o=(0,y.AV)(),c=(0,u.Z)(o,1)[0],i=(0,d.useSearchParams)().get("category"),l=(e=(0,s.Z)(p().mark(function _callee(e){var t,n,o;return p().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,v.b.getList();case 2:null!=(o=null===(t=Object.entries(c.sent))||void 0===t?void 0:null===(n=t[e-1])||void 0===n?void 0:n[1])&&r.replace("?category=".concat(o));case 5:case"end":return c.stop()}},_callee)})),function(t){return e.apply(this,arguments)});return(0,n.useEffect)(function(){null==i&&Object.entries(c).length>0&&r.replace("?category=".concat(Object.entries(c)[0][1]))},[i,c]),(0,S.J)(Sidebar_objectSpread({},Array(9).fill(0).reduce(function(e,t,r){return Sidebar_objectSpread(Sidebar_objectSpread({},e),{},(0,a.Z)({},r,function(){return l(r)}))},{}))),(0,g.jsx)("div",{style:{display:"inline-block"},children:(0,g.jsx)("ul",{children:(null!==(t=Object.entries(c))&&void 0!==t?t:[]).map(function(e){return(0,g.jsx)("li",{children:(0,g.jsx)(O(),{href:"/?category=".concat(e[1]),as:"/?category=".concat(e[1]),children:(0,g.jsx)(w.H,{style:{fontWeight:e[1]===i?"bold":"unset",textDecoration:e[1]===i?"underline":"unset",fontSize:"2rem",width:"100px"},children:e[0]})})},e[1])})})})}var HomePage=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.K,{size:60}),(0,g.jsxs)(i.K.Horizontal,{style:{gap:"100px",alignItems:"flex-start"},children:[(0,g.jsx)(i.K.Vertical,{style:{width:"120px"},children:(0,g.jsx)(Sidebar,{})}),(0,g.jsx)(i.K.Vertical,{children:(0,g.jsx)("main",{children:(0,g.jsx)(o.W,{width:720,children:(0,g.jsx)(n.Suspense,{children:(0,g.jsx)(List,{})})})})})]})]})}}},function(e){e.O(0,[175,660,127,401,261,433,166,744],function(){return e(e.s=8246)}),_N_E=e.O()}]);