(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{5055:function(t,e,n){"use strict";function asyncGeneratorStep(t,e,n,r,o,i,a){try{var u=t[i](a),l=u.value}catch(t){n(t);return}u.done?e(l):Promise.resolve(l).then(r,o)}n.r(e),n.d(e,{__N_SSG:function(){return c},default:function(){return _id_}});var r=n(3742),o=n.n(r),i=n(5710),a=n(7373),u=n(9297),l=n(8539),d=n(1874),DetailsPage=function(t){var e,n,r,c=t.post,s=(0,i.a)(["API.of().readItem",u.j,null==c?void 0:c.id],(e=o().mark(function _callee(){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.s6.of({category:u.j}).readItem(null==c?void 0:c.id);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_callee)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function _next(t){asyncGeneratorStep(i,r,o,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(i,r,o,_next,_throw,"throw",t)}_next(void 0)})}),{initialData:null}).data,f=(0,l.I)(null!==(n=null===(r=null!=s?s:{})||void 0===r?void 0:r.data)&&void 0!==n?n:c),p=f.body,_=f.category,v=f.date,h=f.title;return(0,d.jsxs)(a.Yp,{mainBackgroundColor:a.wL.Dark,subBackgroundColor:a.wL.DeepDark,fontColor:a.wL.SoftWhite,desktopPageWidth:"840px",children:[(0,d.jsx)("h4",{children:_}),(0,d.jsx)("p",{style:{fontSize:"1rem",color:a.wL.DeepDark},children:null==c?void 0:c.id}),(0,d.jsx)("p",{style:{fontSize:"1rem"},children:null==v?void 0:v.toLocaleString("ko-KR")}),(0,d.jsx)("h2",{style:{textDecoration:"underline",wordBreak:"keep-all"},children:h}),(0,d.jsx)(a.Ki,{size:20}),(0,d.jsx)(a.SO,{dangerouslySetInnerHTML:{__html:(0,a.pj)(p)}})]})},c=!0;function _id_(t){var e=t.post;return(0,d.jsx)(DetailsPage,{post:e})}},9297:function(t,e,n){"use strict";n.d(e,{j:function(){return r}});var r="ce62b77189108398c8655c33dbb608ee"},8539:function(t,e,n){"use strict";n.d(e,{I:function(){return parsePost}});var r=n(8921);function parsePost(t){if(null==t)return{};var e,n,o=null!==(e=null==t?void 0:t.body.contents.trim().split("\n"))&&void 0!==e?e:[],i=(0,r.Z)(o),a=i[0],u=i[1],l=i.slice(2),d=null!==(n=null==t?void 0:t.body.updatedAt)&&void 0!==n?n:null==t?void 0:t.body.createdAt,c=new Date(d);return{id:t.id,category:a,title:u,body:l.join("\n").trim(),createdAt:null==t?void 0:t.body.createdAt,timestamp:d,date:c}}},1476:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n(5055)}])}},function(t){t.O(0,[379,774,888,179],function(){return t(t.s=1476)}),_N_E=t.O()}]);