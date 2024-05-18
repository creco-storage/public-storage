(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{9820:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return i.Z}});var i=e(6500)},2609:function(t,n,e){"use strict";e.d(n,{i:function(){return Divider}});var i=e(4995);function Divider(){return(0,i.jsx)("hr",{style:{width:"100%",borderColor:"rgba(229, 231, 235, 0.5)",borderBottomWidth:1,transform:"scaleY(0.3)",borderRight:"0px"}})}},342:function(t,n,e){"use strict";e.d(n,{h:function(){return Header}});var i=e(4995);function Header(t){var n=t.children;return(0,i.jsx)("div",{style:{paddingTop:"24px",paddingBottom:"24px"},children:n})}},7461:function(t,n,e){"use strict";e.d(n,{T:function(){return Logo}});var i=e(4995);function Logo(){return(0,i.jsx)("h1",{children:"Creco's Blog"})}},9297:function(t,n,e){"use strict";e.d(n,{E:function(){return i}});var i="blog-post"},4014:function(t,n,e){"use strict";e.d(n,{k:function(){return DetailsPage}});var i=e(8571),o=e(3301),r=e.n(o),l=e(2609),d=e(342),u=e(7461),c=e(9297),a=e(8539),s=e(4995),DetailsPage=function(t){var n,e,o,v,f,g,x,h,p=t.item,j=(n=p.id,(0,i.ou)(c.E,n));if((null===(e=null!==(o=null===(v=null!=j?j:{})||void 0===v?void 0:v.data)&&void 0!==o?o:p)||void 0===e?void 0:e.body)==null)return(0,s.jsx)(s.Fragment,{children:"404 Page"});var y=(0,a.I)(null!==(f=null===(g=null!=j?j:{})||void 0===g?void 0:g.data)&&void 0!==f?f:p),D=y.body,b=y.category,m=(y.date,y.title);return(0,s.jsxs)(i.Yp,{mainBackgroundColor:i.wL.Dark,subBackgroundColor:i.wL.DeepDark,fontColor:i.wL.SoftWhite,desktopPageWidth:"840px",children:[(0,s.jsx)(d.h,{children:(0,s.jsx)(u.T,{})}),(0,s.jsx)(i.Ki,{size:20}),(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:m})}),(0,s.jsx)("div",{style:{textAlign:"center"},children:(null===(x=p.body)||void 0===x?void 0:x.createdAt)!=null&&(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("time",{style:{color:"grey"},children:(0,a.Y)(new Date(null===(h=p.body)||void 0===h?void 0:h.createdAt))})," ",(0,s.jsx)("br",{})," "]})}),(0,s.jsx)(i.Ki,{size:10}),(0,s.jsx)("h3",{style:{textAlign:"center",textDecoration:"underline",wordBreak:"keep-all"},children:b}),(0,s.jsx)(i.Ki,{size:20}),(0,s.jsx)("h1",{style:{fontSize:"48px",textAlign:"center",textDecoration:"underline",wordBreak:"keep-all"},children:m}),(0,s.jsx)(i.Ki,{size:20}),(0,s.jsx)(l.i,{}),(0,s.jsx)(i.Ki,{size:60}),(0,s.jsx)(i.SO,{style:{textIndent:"0px"},dangerouslySetInnerHTML:{__html:(0,i.pj)(D)}})]})}},6500:function(t,n,e){"use strict";e.d(n,{Z:function(){return NotFoundPage}});var i=e(838),o=e(3043),r=e(4014),l=e(4995);function NotFoundPage(){var t,n=(0,o.usePathname)(),e=null!==(t=null==n?void 0:n.split("/"))&&void 0!==t?t:[],d=(0,i.Z)(e,2)[1];return(null==n?void 0:n.split("/").filter(function(t){return""!==t}).length)===1&&n.startsWith("/")?(0,l.jsx)(r.k,{item:{id:d}}):(0,l.jsxs)(l.Fragment,{children:["404 page: ",n]})}},8539:function(t,n,e){"use strict";e.d(n,{I:function(){return parsePost},Y:function(){return formattedDateYYYYMMDD}});var i=e(4434);function formattedDateYYYYMMDD(t){var n=t.getUTCFullYear(),e=t.getUTCMonth()+1,i=t.getUTCDate();return"".concat(n,"-").concat(e<10?"0"+e:e,"-").concat(i<10?"0"+i:i)}function parsePost(t){if(null==t)return{};var n,e,o,r,l,d,u,c,a,s,v,f,g,x,h,p,j,y,D,b=null!==(n=null==t?void 0:null===(e=t.body)||void 0===e?void 0:null===(o=e.contents)||void 0===o?void 0:null===(r=o.trim)||void 0===r?void 0:null===(l=(d=r.call(o)).split)||void 0===l?void 0:l.call(d,"\n"))&&void 0!==n?n:[],m=(0,i.Z)(b),C=m[0],k=m[1],T=m.slice(2),w=null!==(u=null==t?void 0:null===(c=t.body)||void 0===c?void 0:c.updatedAt)&&void 0!==u?u:null==t?void 0:null===(a=t.body)||void 0===a?void 0:a.createdAt,Y=(x=(g=new Date(w+324e5)).getUTCFullYear(),h=g.getUTCMonth()+1,p=g.getUTCDate(),j=g.getUTCHours(),y=g.getUTCMinutes(),D=g.getUTCSeconds(),"".concat(x,"년 ").concat(h,"월 ").concat(p,"일 ").concat(j,"시 ").concat(y,"분 ").concat(D,"초"));return{id:t.id,category:C,title:k,body:null==T?void 0:null===(s=T.join("\n"))||void 0===s?void 0:null===(v=s.trim)||void 0===v?void 0:v.call(s),createdAt:null==t?void 0:null===(f=t.body)||void 0===f?void 0:f.createdAt,timestamp:w,date:Y}}},6122:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return e(9820)}])}},function(t){t.O(0,[168,774,888,179],function(){return t(t.s=6122)}),_N_E=t.O()}]);