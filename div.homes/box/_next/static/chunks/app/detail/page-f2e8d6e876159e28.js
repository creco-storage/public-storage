(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{9881:function(e,t,n){Promise.resolve().then(n.bind(n,82))},82:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return DetailPage}});var r=n(4985),o=n(2918),i=n(2481),a=n(3734),c=n(6709),l=n(1795),s=n(8718),u=n.n(s),d=n(1602),p=n(1417),b=n(1115),f=n(8366),y=n(2003),h=n(1444),x=n(3833),g=n(6650),j=n(5601),m=n(4588),v=n(3805),w=n(7982),k=n(7535),_=n(3431);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var DetailPage=function(){var e,t,n,a,s,S,O,Z=(0,d.useRouter)(),P=(0,p.useContext)(w.V),K=(0,d.useSearchParams)(),D=K.get("category"),W=K.get("id"),A=(0,v.Wo)(null!=D?D:"knowledge",W),z=(0,l.Z)(A,2),C=z[0],I=z[1],N=(0,v.Wo)(null!=D?D:"knowledge",null==C?void 0:null===(a=C.body)||void 0===a?void 0:a.parentId),H=(0,l.Z)(N,1)[0],B=(0,v.ZT)(null!=D?D:"knowledge",W),E=(0,l.Z)(B,1)[0],V=(0,v.AV)(),L=(0,l.Z)(V,1)[0],F=null!==(s=Object.entries(null!=L?L:[]).find(function(e){return(null==e?void 0:e[1])===D}))&&void 0!==s?s:[],T=(0,l.Z)(F,2),R=T[0],q=T[1],G=(t=(0,c.Z)(u().mark(function _callee(e){var t;return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=_objectSpread(_objectSpread({},C.body),{},{contents:e,updatedAt:Date.now()}),n.next=4,b.b.of(D).updateItem(C.id,t);case 4:return n.next=6,I();case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),"Not Allowed"===n.t0.response.data.message&&Z.push("/login");case 11:case"end":return n.stop()}},_callee,null,[[0,8]])})),function(e){return t.apply(this,arguments)}),J=(n=(0,c.Z)(u().mark(function _callee2(e){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.b.of(D).createItem({contents:e,priority:E.length,updatedAt:Date.now(),parentId:W});case 3:return t.next=5,new Promise(function(e){return setTimeout(e,1e3)});case 5:return t.next=7,I();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),"Not Allowed"===t.t0.response.data.message&&Z.push("/login");case 12:case"end":return t.stop()}},_callee2,null,[[0,9]])})),function(e){return n.apply(this,arguments)});return null==C?(0,_.jsx)("main",{children:(0,_.jsx)(f.W,{width:720,children:""})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(h.K,{size:60}),(0,_.jsx)("main",{children:(0,_.jsxs)(f.W,{width:720,children:[(0,_.jsxs)(x.K.Horizontal,{align:"space-between",children:[(0,_.jsxs)(x.K.Vertical,{align:"left",children:[(0,_.jsxs)(x.K.Horizontal,{children:[(0,_.jsx)(j.H,{style:{fontWeight:"bold",fontSize:"16px",cursor:"pointer",textDecoration:"underline",marginBottom:"8px",width:"unset"},onClick:function(){Z.push("/?category=".concat(q))},children:R}),null!=H?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j.H,{style:{fontWeight:"bold",fontSize:"16px",marginBottom:"8px",marginLeft:"8px",width:"unset"},children:">"}),(0,_.jsx)(j.H,{style:{fontWeight:"bold",fontSize:"16px",cursor:"pointer",textDecoration:"underline",marginBottom:"8px",marginLeft:"8px",whiteSpace:"normal",display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical",overflow:"hidden"},onClick:function(){Z.push("/detail/?category=".concat(q,"&id=").concat(H.id))},children:null===(S=H.body.contents.split("\n"))||void 0===S?void 0:S[0]})]}):null]}),(0,_.jsx)(j.H,{style:{fontWeight:"bold",fontSize:"24px"},children:null===(O=C.body.contents.split("\n"))||void 0===O?void 0:O[0]})]}),(0,_.jsx)(x.K.Horizontal,{children:P?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(m.L,{onClick:(0,c.Z)(u().mark(function _callee3(){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.b.of(D).deleteItem(C.id);case 3:return e.next=5,new Promise(function(e){return setTimeout(e,1e3)});case 5:return e.next=7,I();case 7:if(!(null!=H)){e.next=10;break}return Z.push("/detail/?category=".concat(q,"&id=").concat(H.id)),e.abrupt("return");case 10:Z.push("/?category=".concat(D)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),"Not Allowed"===e.t0.response.data.message&&Z.push("/login");case 16:case"end":return e.stop()}},_callee3,null,[[0,13]])})),children:"삭제"})}):null})]}),(0,_.jsx)(g.K.View,{style:{alignItems:"flex-start"},value:(e=C.body.contents.split("\n"),(0,r.Z)(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||(0,i.Z)()).slice(1).join("\n")}),P?(0,_.jsx)(k.l,{openKey:"m",initialValue:C.body.contents,onSubmit:G}):null,P?(0,_.jsx)(k.l,{openKey:"k",onSubmit:J}):null,(0,_.jsx)("ul",{children:E.sort(function(e,t){var n,r;return(null!==(n=e.body.priority)&&void 0!==n?n:0)>(null!==(r=t.body.priority)&&void 0!==r?r:0)?-1:1}).map(function(e,t){var n,r;return(0,_.jsx)(y.d,{data:_objectSpread({id:e.id},e.body),onClick:function(){Z.push("/detail?category=".concat(D,"&id=").concat(e.id))},viewButtons:{"⬆":(n=(0,c.Z)(u().mark(function _callee4(){var e,n,r,o;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(t<=0)){i.next=2;break}return i.abrupt("return");case 2:return e=E[t],n=E[t-1],r=_objectSpread(_objectSpread({},e.body),{},{priority:n.body.priority}),o=_objectSpread(_objectSpread({},n.body),{},{priority:e.body.priority}),i.prev=6,i.next=9,b.b.of(D).updateItems([{id:e.id,body:r},{id:n.id,body:o}]);case 9:return i.next=11,I();case 11:i.next=16;break;case 13:i.prev=13,i.t0=i.catch(6),"Not Allowed"===i.t0.response.data.message&&Z.push("/login");case 16:case"end":return i.stop()}},_callee4,null,[[6,13]])})),function(){return n.apply(this,arguments)}),"⬇":(r=(0,c.Z)(u().mark(function _callee5(){var e,n,r,o;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(t>=E.length-1)){i.next=2;break}return i.abrupt("return");case 2:return e=E[t],n=E[t+1],r=_objectSpread(_objectSpread({},e.body),{},{priority:n.body.priority}),o=_objectSpread(_objectSpread({},n.body),{},{priority:e.body.priority}),i.prev=6,i.next=9,b.b.of(D).updateItems([{id:e.id,body:r},{id:n.id,body:o}]);case 9:return i.next=11,I();case 11:i.next=16;break;case 13:i.prev=13,i.t0=i.catch(6),"Not Allowed"===i.t0.response.data.message&&Z.push("/login");case 16:case"end":return i.stop()}},_callee5,null,[[6,13]])})),function(){return r.apply(this,arguments)})}},"".concat(e.id,"-").concat(t))})})]})})]})}}},function(e){e.O(0,[175,660,127,261,433,166,744],function(){return e(e.s=9881)}),_N_E=e.O()}]);