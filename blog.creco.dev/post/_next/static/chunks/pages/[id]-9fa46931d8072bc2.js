(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{9038:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return _id_}});var r=n(5469),o=n(3742),i=n.n(o),l=n(5710),u=n(7373),d=n(9297),a=n(8539),c=n(1874),DetailsPage=function(e){var t,n,o=e.post,s=(0,l.a)(["API.of().readItem",d.j,null==o?void 0:o.id],(0,r.Z)(i().mark(function _callee(){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.s6.of({category:d.j}).readItem(null==o?void 0:o.id);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},_callee)})),{initialData:null}).data,f=(0,a.I)(null!==(t=null===(n=null!=s?s:{})||void 0===n?void 0:n.data)&&void 0!==t?t:o),p=f.body,_=f.category,v=f.date,h=f.title;return(0,c.jsxs)(u.Yp,{mainBackgroundColor:u.wL.Dark,subBackgroundColor:u.wL.DeepDark,fontColor:u.wL.SoftWhite,desktopPageWidth:"840px",children:[(0,c.jsx)("h4",{children:_}),(0,c.jsx)("p",{style:{fontSize:"1rem",color:u.wL.DeepDark},children:null==o?void 0:o.id}),(0,c.jsx)("p",{style:{fontSize:"1rem"},children:null==v?void 0:v.toLocaleString("ko-KR")}),(0,c.jsx)("h2",{style:{textDecoration:"underline",wordBreak:"keep-all"},children:h}),(0,c.jsx)(u.Ki,{size:20}),(0,c.jsx)(u.SO,{dangerouslySetInnerHTML:{__html:(0,u.pj)(p)}})]})},s=!0;function _id_(e){var t=e.post;return(0,c.jsx)(DetailsPage,{post:t})}},9297:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});var r="ce62b77189108398c8655c33dbb608ee"},8539:function(e,t,n){"use strict";n.d(t,{I:function(){return parsePost}});var r=n(8921);function parsePost(e){if(null==e)return{};var t,n,o=null!==(t=null==e?void 0:e.body.contents.trim().split("\n"))&&void 0!==t?t:[],i=(0,r.Z)(o),l=i[0],u=i[1],d=i.slice(2),a=null!==(n=null==e?void 0:e.body.updatedAt)&&void 0!==n?n:null==e?void 0:e.body.createdAt,c=new Date(a);return{id:e.id,category:l,title:u,body:d.join("\n").trim(),createdAt:null==e?void 0:e.body.createdAt,timestamp:a,date:c}}},1476:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n(9038)}])}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=1476)}),_N_E=e.O()}]);