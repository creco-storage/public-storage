(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{5508:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return l},default:function(){return __WEBPACK_DEFAULT_EXPORT__}});var i=e(4014),o=e(6500),r=e(4995),l=!0;function __WEBPACK_DEFAULT_EXPORT__(t){var n=t.item;return null==n?(0,r.jsx)(o.Z,{}):(0,r.jsx)(i.k,{item:n})}},2609:function(t,n,e){"use strict";e.d(n,{i:function(){return Divider}});var i=e(4995);function Divider(){return(0,i.jsx)("hr",{style:{width:"100%",borderColor:"rgba(229, 231, 235, 0.5)",borderBottomWidth:1,transform:"scaleY(0.3)",borderRight:"0px"}})}},342:function(t,n,e){"use strict";e.d(n,{h:function(){return Header}});var i=e(4995);function Header(t){var n=t.children;return(0,i.jsx)("div",{style:{paddingTop:"24px",paddingBottom:"24px"},children:n})}},7461:function(t,n,e){"use strict";e.d(n,{T:function(){return Logo}});var i=e(4995);function Logo(){return(0,i.jsx)("h1",{children:"Creco's Blog"})}},9297:function(t,n,e){"use strict";e.d(n,{E:function(){return i}});var i="blog-post"},4014:function(t,n,e){"use strict";e.d(n,{k:function(){return DetailsPage}});var i=e(1654),o=e(3301),r=e.n(o),l=e(2609),d=e(342),u=e(7461),c=e(9297),a=e(8539),s=e(9334),v=e(4995),DetailsPage=function(t){var n,e,o,g,f,x,h,p,_=t.item,j=(n=_.id,(0,i.ou)(c.E,n));if((null===(e=null!==(o=null===(g=null!=j?j:{})||void 0===g?void 0:g.data)&&void 0!==o?o:_)||void 0===e?void 0:e.body)==null)return(0,v.jsx)(v.Fragment,{children:"404 Page"});var m=(0,a.I)(null!==(f=null===(x=null!=j?j:{})||void 0===x?void 0:x.data)&&void 0!==f?f:_),y=m.body,D=m.category,b=(m.date,m.title);return(0,v.jsxs)(i.Yp,{mainBackgroundColor:i.wL.Dark,subBackgroundColor:i.wL.DeepDark,fontColor:i.wL.SoftWhite,desktopPageWidth:"840px",children:[(0,v.jsx)(d.h,{children:(0,v.jsx)(u.T,{})}),(0,v.jsx)(i.Ki,{size:20}),(0,v.jsx)(r(),{children:(0,v.jsx)("title",{children:b})}),(0,v.jsx)("div",{style:{textAlign:"center"},children:(null===(h=_.body)||void 0===h?void 0:h.createdAt)!=null&&(0,v.jsxs)(v.Fragment,{children:[" ",(0,v.jsx)("time",{style:{color:"grey"},children:(0,a.Y)(new Date(null===(p=_.body)||void 0===p?void 0:p.createdAt))})," ",(0,v.jsx)("br",{})," "]})}),(0,v.jsx)(i.Ki,{size:10}),(0,v.jsx)("h3",{style:{textAlign:"center",textDecoration:"underline",wordBreak:"keep-all"},children:D}),(0,v.jsx)(i.Ki,{size:20}),(0,v.jsx)("h1",{style:{fontSize:"48px",textAlign:"center",textDecoration:"underline",wordBreak:"keep-all"},children:b}),(0,v.jsx)(i.Ki,{size:20}),(0,v.jsx)(l.i,{}),(0,v.jsx)(i.Ki,{size:60}),(0,v.jsx)(i.SO,{style:{textIndent:"0px"},dangerouslySetInnerHTML:{__html:(0,i.pj)(y)}}),(0,v.jsx)(i.Ki,{size:60}),(0,v.jsx)(s.Z,{id:"comments",repo:"divopsor/blog.creco.dev-main",repoId:"R_kgDOK_YnUw",category:"General",categoryId:"DIC_kwDOK_YnU84Ch8Ry",mapping:"url",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:"preferred_color_scheme",lang:"ko",loading:"lazy",strict:"0"})]})}},6500:function(t,n,e){"use strict";e.d(n,{Z:function(){return NotFoundPage}});var i=e(838),o=e(3043),r=e(4014),l=e(4995);function NotFoundPage(){var t,n=(0,o.usePathname)(),e=null!==(t=null==n?void 0:n.split("/"))&&void 0!==t?t:[],d=(0,i.Z)(e,2)[1];return(null==n?void 0:n.split("/").filter(function(t){return""!==t}).length)===1&&n.startsWith("/")?(0,l.jsx)(r.k,{item:{id:d}}):(0,l.jsxs)(l.Fragment,{children:["404 page: ",n]})}},8539:function(t,n,e){"use strict";e.d(n,{I:function(){return parsePost},Y:function(){return formattedDateYYYYMMDD}});var i=e(4434);function formattedDateYYYYMMDD(t){var n=t.getUTCFullYear(),e=t.getUTCMonth()+1,i=t.getUTCDate();return"".concat(n,"-").concat(e<10?"0"+e:e,"-").concat(i<10?"0"+i:i)}function parsePost(t){if(null==t)return{};var n,e,o,r,l,d,u,c,a,s,v,g,f,x,h,p,_,j,m,y=null!==(n=null==t?void 0:null===(e=t.body)||void 0===e?void 0:null===(o=e.contents)||void 0===o?void 0:null===(r=o.trim)||void 0===r?void 0:null===(l=(d=r.call(o)).split)||void 0===l?void 0:l.call(d,"\n"))&&void 0!==n?n:[],D=(0,i.Z)(y),b=D[0],C=D[1],k=D.slice(2),T=null!==(u=null==t?void 0:null===(c=t.body)||void 0===c?void 0:c.updatedAt)&&void 0!==u?u:null==t?void 0:null===(a=t.body)||void 0===a?void 0:a.createdAt,w=(x=(f=new Date(T+324e5)).getUTCFullYear(),h=f.getUTCMonth()+1,p=f.getUTCDate(),_=f.getUTCHours(),j=f.getUTCMinutes(),m=f.getUTCSeconds(),"".concat(x,"년 ").concat(h,"월 ").concat(p,"일 ").concat(_,"시 ").concat(j,"분 ").concat(m,"초"));return{id:t.id,category:b,title:C,body:null==k?void 0:null===(s=k.join("\n"))||void 0===s?void 0:null===(v=s.trim)||void 0===v?void 0:v.call(s),createdAt:null==t?void 0:null===(g=t.body)||void 0===g?void 0:g.createdAt,timestamp:T,date:w}}},1476:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return e(5508)}])}},function(t){t.O(0,[234,774,888,179],function(){return t(t.s=1476)}),_N_E=t.O()}]);