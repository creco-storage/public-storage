(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6122:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(4793)}])},4793:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o.Z}});var o=n(817)},9229:function(t,e,n){"use strict";n.d(e,{i:function(){return Divider}});var o=n(4995);function Divider(){return(0,o.jsx)("hr",{style:{width:"100%",borderColor:"rgba(229, 231, 235, 0.5)",borderBottomWidth:1,transform:"scaleY(0.3)",borderRight:"0px"}})}},3730:function(t,e,n){"use strict";n.d(e,{h:function(){return Header}});var o=n(4995);function Header(t){let{children:e}=t;return(0,o.jsx)("div",{style:{paddingTop:"24px",paddingBottom:"24px"},children:e})}},9608:function(t,e,n){"use strict";n.d(e,{T:function(){return Logo}});var o=n(4995);function Logo(){return(0,o.jsx)("h1",{children:"Creco's Blog"})}},9514:function(t,e,n){"use strict";n.d(e,{E:function(){return o}});let o="blog-post"},5002:function(t,e,n){"use strict";n.d(e,{k:function(){return DetailsPage}});var o=n(4995),r=n(8564),i=n(3301),l=n.n(i),d=n(9229),a=n(3730),u=n(9608),s=n(3484),c=n(6470),v=n(9514);async function getMarkdown(t){let{data:e}=await s.Z.post("/api/markdown/render",{markdown:t});return e.data}var f=n(6957),g=n(9334),p=n(2392),h=n.n(p);let DetailsPage=t=>{var e,n;let{item:i}=t,s=null==i.body?function(t){let e=(0,r.ou)(v.E,t,{prefix:"/github-api/api/gist"}),[n,o]=(0,c.useState)(null);return(0,c.useEffect)(()=>{(async()=>{try{let t=null==e?void 0:e.data;if(null==t.body)return;t.body.markdown=await getMarkdown(t.body.contents),o(t)}catch(t){console.error(t)}})()},[e]),n}(i.id):i,{category:p,title:x,body:m}=(0,f.I)(s);return(0,o.jsxs)(r.Yp,{mainBackgroundColor:r.wL.Dark,subBackgroundColor:r.wL.DeepDark,fontColor:r.wL.SoftWhite,desktopPageWidth:"840px",children:[(0,o.jsx)(a.h,{children:(0,o.jsx)(u.T,{})}),(0,o.jsx)(r.Ki,{size:20}),(0,o.jsx)(l(),{children:(0,o.jsx)("title",{children:x})}),(0,o.jsx)("div",{style:{textAlign:"center"},children:(null===(e=i.body)||void 0===e?void 0:e.createdAt)!=null&&(0,o.jsxs)(o.Fragment,{children:[" ",(0,o.jsx)("time",{style:{color:"grey"},children:(0,f.Y)(new Date(null===(n=i.body)||void 0===n?void 0:n.createdAt))})," ",(0,o.jsx)("br",{})," "]})}),(0,o.jsx)(r.Ki,{size:10}),(0,o.jsx)("h3",{style:{textAlign:"center",textDecoration:"underline",wordBreak:"keep-all"},children:p}),(0,o.jsx)(r.Ki,{size:20}),(0,o.jsx)("h1",{style:{fontSize:"48px",textAlign:"center",textDecoration:"underline",wordBreak:"keep-all"},children:x}),(0,o.jsx)(r.Ki,{size:20}),(0,o.jsx)(d.i,{}),(0,o.jsx)(r.Ki,{size:60}),(0,o.jsx)(Post,{className:h().post,dangerouslySetInnerHTML:{__html:m}}),(0,o.jsx)(r.Ki,{size:60}),(0,o.jsx)(g.Z,{id:"comments",repo:"divopsor/blog.creco.dev-main",repoId:"R_kgDOK_YnUw",category:"General",categoryId:"DIC_kwDOK_YnU84Ch8Ry",mapping:"url",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:"preferred_color_scheme",lang:"ko",loading:"lazy",strict:"0"})]})},Post=t=>{let{className:e,...n}=t;return(0,o.jsx)("div",{...n,className:e,style:{fontSize:"1.6rem",wordBreak:"keep-all",...n.style}})}},817:function(t,e,n){"use strict";n.d(e,{Z:function(){return NotFoundPage}});var o=n(4995),r=n(3043),i=n(5002);function NotFoundPage(){var t;let e=(0,r.usePathname)(),[,n]=null!==(t=null==e?void 0:e.split("/"))&&void 0!==t?t:[];return(null==e?void 0:e.split("/").filter(t=>""!==t).length)===1&&e.startsWith("/")?(0,o.jsx)(i.k,{item:{id:n}}):(0,o.jsxs)(o.Fragment,{children:["404 page: ",e]})}},6957:function(t,e,n){"use strict";function formattedDateYYYYMMDD(t){let e=t.getUTCFullYear(),n=t.getUTCMonth()+1,o=t.getUTCDate();return"".concat(e,"-").concat(n<10?"0"+n:n,"-").concat(o<10?"0"+o:o)}function parsePost(t){var e,n,o,r,i,l,d,a,u,s,c,v;if(null==t)return{};let[f,g,...p]=null!==(c=null==t?void 0:null===(r=t.body)||void 0===r?void 0:null===(o=r.markdown)||void 0===o?void 0:null===(n=o.trim)||void 0===n?void 0:null===(e=(i=n.call(o)).split)||void 0===e?void 0:e.call(i,"<br>"))&&void 0!==c?c:[],h=null!==(v=null==t?void 0:null===(l=t.body)||void 0===l?void 0:l.updatedAt)&&void 0!==v?v:null==t?void 0:null===(d=t.body)||void 0===d?void 0:d.createdAt,x=function(t){let e=t.getUTCFullYear(),n=t.getUTCMonth()+1,o=t.getUTCDate(),r=t.getUTCHours(),i=t.getUTCMinutes(),l=t.getUTCSeconds();return"".concat(e,"년 ").concat(n,"월 ").concat(o,"일 ").concat(r,"시 ").concat(i,"분 ").concat(l,"초")}(new Date(h+324e5));return{id:t.id,category:f,title:g,body:null==p?void 0:null===(u=p.join("<br>"))||void 0===u?void 0:null===(a=u.trim)||void 0===a?void 0:a.call(u),createdAt:null==t?void 0:null===(s=t.body)||void 0===s?void 0:s.createdAt,timestamp:h,date:x}}n.d(e,{I:function(){return parsePost},Y:function(){return formattedDateYYYYMMDD}})},2392:function(t){t.exports={post:"DetailsPage_post__Ek2qM"}}},function(t){t.O(0,[822,774,888,179],function(){return t(t.s=6122)}),_N_E=t.O()}]);