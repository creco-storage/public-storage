(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5288:function(n,o,t){"use strict";t.r(o),t.d(o,{__N_SSG:function(){return d},default:function(){return HomePage}});var i=t(3043),e=t(5174),l=t(9297),r=t(8539),u=t(1874),HomePage=function(n){var o,t=n.posts,d=(0,i.useRouter)(),s=(null!==(o=(0,e.g0)(l.E))&&void 0!==o?o:t).map(r.I);return s.sort(function(n,o){return n.createdAt>o.createdAt?-1:1}),(0,u.jsxs)(e.Yp,{mainBackgroundColor:e.wL.Dark,subBackgroundColor:e.wL.DeepDark,fontColor:e.wL.SoftWhite,desktopPageWidth:"840px",children:[(0,u.jsx)(e.Ki,{size:12}),(0,u.jsx)("h1",{children:"Creco's post"}),(0,u.jsx)(e.Ki,{size:60}),(0,u.jsx)("ul",{children:s.map(function(n){return(0,u.jsxs)("li",{className:"clickable",style:{fontSize:"1.6rem",margin:"0 0 48px",textDecoration:"unset"},onClick:function(){d.push("/".concat(n.id))},children:[(0,u.jsx)("span",{style:{fontSize:"1.2rem"},children:n.category}),(0,u.jsx)("h3",{children:n.title}),(0,u.jsx)(e.Ki,{size:4}),(0,u.jsx)("span",{style:{color:e.wL.SoftGrey},children:n.body.split("\n")[0]})]},n.id)})})]})},d=!0},9297:function(n,o,t){"use strict";t.d(o,{E:function(){return i}});var i="blog-post"},8539:function(n,o,t){"use strict";t.d(o,{I:function(){return parsePost}});var i=t(4434);function parsePost(n){if(null==n)return{};var o,t,e,l,r,u,d,s,c,a,v,f,p=null!==(o=null==n?void 0:null===(t=n.body)||void 0===t?void 0:null===(e=t.contents)||void 0===e?void 0:null===(l=e.trim)||void 0===l?void 0:null===(r=(u=l.call(e)).split)||void 0===r?void 0:r.call(u,"\n"))&&void 0!==o?o:[],h=(0,i.Z)(p),_=h[0],m=h[1],x=h.slice(2),y=null!==(d=null==n?void 0:null===(s=n.body)||void 0===s?void 0:s.updatedAt)&&void 0!==d?d:null==n?void 0:null===(c=n.body)||void 0===c?void 0:c.createdAt,b=new Date(y);return{id:n.id,category:_,title:m,body:null==x?void 0:null===(a=x.join("\n"))||void 0===a?void 0:null===(v=a.trim)||void 0===v?void 0:v.call(a),createdAt:null==n?void 0:null===(f=n.body)||void 0===f?void 0:f.createdAt,timestamp:y,date:b}}},7994:function(n,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5288)}])}},function(n){n.O(0,[245,774,888,179],function(){return n(n.s=7994)}),_N_E=n.O()}]);