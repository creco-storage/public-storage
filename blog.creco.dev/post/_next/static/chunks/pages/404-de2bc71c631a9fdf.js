(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{9820:function(n,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i.Z}});var i=l(4650)},9297:function(n,t,l){"use strict";l.d(t,{E:function(){return i}});var i="blog-post"},4014:function(n,t,l){"use strict";l.d(t,{k:function(){return DetailsPage}});var i=l(4154),o=l(9297),e=l(8539),r=l(1874),DetailsPage=function(n){var t,l,u,d,a,c,s=n.item,v=(t=s.id,(0,i.ou)(o.E,t));if((null===(l=null!==(u=null===(d=null!=v?v:{})||void 0===d?void 0:d.data)&&void 0!==u?u:s)||void 0===l?void 0:l.body)==null)return(0,r.jsx)(r.Fragment,{children:"404 Page"});var f=(0,e.I)(null!==(a=null===(c=null!=v?v:{})||void 0===c?void 0:c.data)&&void 0!==a?a:s),p=f.body,h=f.category,y=f.date,g=f.title;return(0,r.jsxs)(i.Yp,{mainBackgroundColor:i.wL.Dark,subBackgroundColor:i.wL.DeepDark,fontColor:i.wL.SoftWhite,desktopPageWidth:"840px",children:[(0,r.jsx)("h4",{children:h}),(0,r.jsx)("p",{style:{fontSize:"1rem",color:i.wL.DeepDark},children:s.id}),(0,r.jsx)("p",{style:{fontSize:"1rem"},children:null==y?void 0:y.toLocaleString("ko-KR")}),(0,r.jsx)("h2",{style:{textDecoration:"underline",wordBreak:"keep-all"},children:g}),(0,r.jsx)(i.Ki,{size:20}),(0,r.jsx)(i.SO,{dangerouslySetInnerHTML:{__html:(0,i.pj)(p)}})]})}},4650:function(n,t,l){"use strict";l.d(t,{Z:function(){return NotFoundPage}});var i=l(8084),o=l(3138),e=l(8713),r=l(3043),u=l(4014),d=l(1874);function NotFoundPage(){var n,t,l=(0,r.usePathname)(),a=(n=null!==(t=null==l?void 0:l.split("/"))&&void 0!==t?t:[],(0,i.Z)(n)||function(n,t){var l,i,o=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=o){var e=[],r=!0,u=!1;try{for(o=o.call(n);!(r=(l=o.next()).done)&&(e.push(l.value),!t||e.length!==t);r=!0);}catch(n){u=!0,i=n}finally{try{r||null==o.return||o.return()}finally{if(u)throw i}}return e}}(n,2)||(0,o.Z)(n,2)||(0,e.Z)())[1];return(null==l?void 0:l.split("/").filter(function(n){return""!==n}).length)===1&&l.startsWith("/")?(0,d.jsx)(u.k,{item:{id:a}}):(0,d.jsxs)(d.Fragment,{children:["404 page: ",l]})}},8539:function(n,t,l){"use strict";l.d(t,{I:function(){return parsePost}});var i=l(4434);function parsePost(n){if(null==n)return{};var t,l,o,e,r,u,d,a,c,s,v,f,p=null!==(t=null==n?void 0:null===(l=n.body)||void 0===l?void 0:null===(o=l.contents)||void 0===o?void 0:null===(e=o.trim)||void 0===e?void 0:null===(r=(u=e.call(o)).split)||void 0===r?void 0:r.call(u,"\n"))&&void 0!==t?t:[],h=(0,i.Z)(p),y=h[0],g=h[1],k=h.slice(2),m=null!==(d=null==n?void 0:null===(a=n.body)||void 0===a?void 0:a.updatedAt)&&void 0!==d?d:null==n?void 0:null===(c=n.body)||void 0===c?void 0:c.createdAt,_=new Date(m);return{id:n.id,category:y,title:g,body:null==k?void 0:null===(s=k.join("\n"))||void 0===s?void 0:null===(v=s.trim)||void 0===v?void 0:v.call(s),createdAt:null==n?void 0:null===(f=n.body)||void 0===f?void 0:f.createdAt,timestamp:m,date:_}}},6122:function(n,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return l(9820)}])}},function(n){n.O(0,[245,774,888,179],function(){return n(n.s=6122)}),_N_E=n.O()}]);