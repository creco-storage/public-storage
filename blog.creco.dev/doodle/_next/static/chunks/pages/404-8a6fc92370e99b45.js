(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{4476:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return i.Z}});var i=e(6933)},2852:function(n,t,e){"use strict";e.d(t,{E:function(){return i}});var i="blog-doodle"},8236:function(n,t,e){"use strict";e.d(t,{k:function(){return DetailsPage}});var i=e(6230),o=e(390),l=e.n(o),d=e(2852),u=e(3983),r=e(4995),DetailsPage=function(n){var t,e,o,a,c,s,v=n.item,f=(t=v.id,(0,i.ou)(d.E,t));if((null===(e=null!==(o=null===(a=null!=f?f:{})||void 0===a?void 0:a.data)&&void 0!==o?o:v)||void 0===e?void 0:e.body)==null)return(0,r.jsx)(r.Fragment,{children:"404 Page"});var g=(0,u.j)(null!==(c=null===(s=null!=f?f:{})||void 0===s?void 0:s.data)&&void 0!==c?c:v),h=g.body,p=g.category,j=g.date,k=g.title;return(0,r.jsxs)(i.Yp,{mainBackgroundColor:i.wL.Dark,subBackgroundColor:i.wL.DeepDark,fontColor:i.wL.SoftWhite,desktopPageWidth:"840px",children:[(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:k})}),(0,r.jsx)("h4",{children:p}),(0,r.jsx)("p",{style:{fontSize:"1rem",color:i.wL.DeepDark},children:null==v?void 0:v.id}),(0,r.jsx)("p",{style:{fontSize:"1rem"},children:j}),(0,r.jsx)("h1",{style:{textDecoration:"underline",wordBreak:"keep-all"},children:k}),(0,r.jsx)(i.Ki,{size:20}),(0,r.jsx)(i.SO,{dangerouslySetInnerHTML:{__html:(0,i.pj)(h)}})]})}},6933:function(n,t,e){"use strict";e.d(t,{Z:function(){return NotFoundPage}});var i=e(6881),o=e(3949),l=e(8236),d=e(4995);function NotFoundPage(){var n,t=(0,o.usePathname)(),e=null!==(n=null==t?void 0:t.split("/"))&&void 0!==n?n:[],u=(0,i.Z)(e,2)[1];return(null==t?void 0:t.split("/").filter(function(n){return""!==n}).length)===1&&t.startsWith("/")?(0,d.jsx)(l.k,{item:{id:u}}):(0,d.jsxs)(d.Fragment,{children:["404 page: ",t]})}},3983:function(n,t,e){"use strict";e.d(t,{j:function(){return parsePs}});var i=e(7462);function parsePs(n){if(null==n)return{};var t,e,o,l,d,u,r,a,c,s,v,f,g,h,p,j,k,x,_,m=null!==(t=null==n?void 0:null===(e=n.body)||void 0===e?void 0:null===(o=e.contents)||void 0===o?void 0:null===(l=o.trim)||void 0===l?void 0:null===(d=(u=l.call(o)).split)||void 0===d?void 0:d.call(u,"\n"))&&void 0!==t?t:[],y=(0,i.Z)(m),w=y[0],b=y[1],C=y.slice(2),P=null!==(r=null==n?void 0:null===(a=n.body)||void 0===a?void 0:a.updatedAt)&&void 0!==r?r:null==n?void 0:null===(c=n.body)||void 0===c?void 0:c.createdAt,D=(h=(g=new Date(P+324e5)).getUTCFullYear(),p=g.getUTCMonth()+1,j=g.getUTCDate(),k=g.getUTCHours(),x=g.getUTCMinutes(),_=g.getUTCSeconds(),"".concat(h,"년 ").concat(p,"월 ").concat(j,"일 ").concat(k,"시 ").concat(x,"분 ").concat(_,"초"));return{id:n.id,category:w,title:b,body:null==C?void 0:null===(s=C.join("\n"))||void 0===s?void 0:null===(v=s.trim)||void 0===v?void 0:v.call(s),createdAt:null==n?void 0:null===(f=n.body)||void 0===f?void 0:f.createdAt,timestamp:P,date:D}}},518:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return e(4476)}])}},function(n){n.O(0,[832,774,888,179],function(){return n(n.s=518)}),_N_E=n.O()}]);