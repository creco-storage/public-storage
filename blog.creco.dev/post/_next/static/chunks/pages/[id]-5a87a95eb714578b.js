(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{1476:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n(7830)}])},7830:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l},default:function(){return __WEBPACK_DEFAULT_EXPORT__}});var o=n(4995),r=n(5002),i=n(817),l=!0;function __WEBPACK_DEFAULT_EXPORT__(t){let{item:e}=t;return null==e?(0,o.jsx)(i.Z,{}):(0,o.jsx)(r.k,{item:e})}},9229:function(t,e,n){"use strict";n.d(e,{i:function(){return Divider}});var o=n(4995);function Divider(){return(0,o.jsx)("hr",{style:{width:"100%",borderColor:"rgba(229, 231, 235, 0.5)",borderBottomWidth:1,transform:"scaleY(0.3)",borderRight:"0px"}})}},3730:function(t,e,n){"use strict";n.d(e,{h:function(){return Header}});var o=n(4995);function Header(t){let{children:e}=t;return(0,o.jsx)("div",{style:{paddingTop:"24px",paddingBottom:"24px"},children:e})}},9608:function(t,e,n){"use strict";n.d(e,{T:function(){return Logo}});var o=n(4995),r=n(8007),i=n.n(r),l=n(1528),a=n.n(l);function Logo(t){let{title:e="Creco's Blog",href:n}=t;return null==n?(0,o.jsx)("h1",{children:e}):(0,o.jsx)(i(),{href:n,className:a().logo,children:(0,o.jsx)("h1",{children:e})})}},9514:function(t,e,n){"use strict";n.d(e,{E:function(){return o}});let o="blog-post"},5002:function(t,e,n){"use strict";n.d(e,{k:function(){return DetailsPage}});var o=n(4995),r=n(8564),i=n(3301),l=n.n(i),a=n(9229),c=n(3730),d=n(9608),s=n(3484),u=n(6470),p=n(9514);async function getMarkdown(t){let{data:e}=await s.Z.post("/api/markdown/render",{markdown:t});return e.data}var g=n(6957),m=n(9334),v=n(2392),x=n.n(v);let DetailsPage=t=>{var e,n;let{item:i}=t,s=function(t){let e=(0,r.ou)(p.E,t,{prefix:"/github-api/api/gist"}),[n,o]=(0,u.useState)(null);return(0,u.useEffect)(()=>{(async()=>{try{let t=null==e?void 0:e.data;if(null==t.body)return;t.body.markdown=await getMarkdown(t.body.contents),o(t)}catch(t){console.error(t)}})()},[e]),n}(i.id),{category:v,title:f,body:_,thumbnail:h}=(0,g.I)(null!=s?s:i);return(0,o.jsx)(r.Yp,{mainBackgroundColor:r.wL.Dark,subBackgroundColor:r.wL.DeepDark,fontColor:r.wL.SoftWhite,desktopPageWidth:"1200px",children:(0,o.jsxs)("div",{style:{maxWidth:"840px",margin:"0 auto"},children:[(0,o.jsx)(c.h,{children:(0,o.jsx)(d.T,{href:"/"})}),(0,o.jsx)(r.Ki,{size:20}),(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:f}),(0,o.jsx)("meta",{property:"og:title",content:f},"title"),(0,o.jsx)("meta",{property:"og:description",content:null==_?void 0:_.split("<br>").slice(0,10).join("\n")},"description"),null!=h?(0,o.jsx)("meta",{property:"og:image",content:h},"image"):null,(0,o.jsx)("meta",{property:"og:url",content:"https://blog.creco.dev/post/".concat(i.id)},"url"),(0,o.jsx)("meta",{property:"og:type",content:"article"},"type"),(0,o.jsx)("meta",{property:"og:site_name",content:"Creco's Blog"},"site_name"),(0,o.jsx)("meta",{property:"og:locale",content:"ko_KR"},"locale"),(0,o.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter_card"),(0,o.jsx)("meta",{name:"twitter:site",content:"@CreatiCoding"},"twitter_site"),(0,o.jsx)("meta",{name:"twitter:creator",content:"@CreatiCoding"},"twitter_creator"),(0,o.jsx)("meta",{name:"twitter:title",content:f},"twitter_title"),(0,o.jsx)("meta",{name:"twitter:description",content:null==_?void 0:_.split("<br>").slice(0,10).join("\n")},"twitter_description"),null!=h?(0,o.jsx)("meta",{name:"twitter:image",content:h},"twitter_image"):null,(0,o.jsx)("meta",{name:"twitter:url",content:"https://blog.creco.dev/post/".concat(i.id)},"twitter_url")]}),(0,o.jsx)("div",{style:{textAlign:"center"},children:(null===(e=i.body)||void 0===e?void 0:e.createdAt)!=null&&(0,o.jsxs)(o.Fragment,{children:[" ",(0,o.jsx)("time",{style:{color:"grey"},children:(0,g.Y)(new Date(null===(n=i.body)||void 0===n?void 0:n.createdAt))})," ",(0,o.jsx)("br",{})," "]})}),(0,o.jsx)(r.Ki,{size:10}),(0,o.jsx)("h3",{style:{textAlign:"center",textDecoration:"underline",wordBreak:"keep-all"},children:v}),(0,o.jsx)(r.Ki,{size:20}),(0,o.jsx)("h1",{style:{fontSize:"48px",textAlign:"center",textDecoration:"underline",wordBreak:"keep-all"},children:f}),(0,o.jsx)(r.Ki,{size:20}),(0,o.jsx)(a.i,{}),(0,o.jsx)(Post,{className:x().post,dangerouslySetInnerHTML:{__html:_}}),(0,o.jsx)(r.Ki,{size:60}),(0,o.jsx)(m.Z,{id:"comments",repo:"divopsor/blog.creco.dev-main",repoId:"R_kgDOK_YnUw",category:"General",categoryId:"DIC_kwDOK_YnU84Ch8Ry",mapping:"url",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:"preferred_color_scheme",lang:"ko",loading:"lazy",strict:"0"})]})})},Post=t=>{let{className:e,...n}=t;return(0,o.jsx)("div",{...n,className:e,style:{fontSize:"1.6rem",wordBreak:"keep-all",...n.style}})}},817:function(t,e,n){"use strict";n.d(e,{Z:function(){return NotFoundPage}});var o=n(4995),r=n(3043),i=n(5002);function NotFoundPage(){var t;let e=(0,r.usePathname)(),[,n]=null!==(t=null==e?void 0:e.split("/"))&&void 0!==t?t:[];return(null==e?void 0:e.split("/").filter(t=>""!==t).length)===1&&e.startsWith("/")?(0,o.jsx)(i.k,{item:{id:n}}):(0,o.jsxs)(o.Fragment,{children:["404 page: ",e]})}},6957:function(t,e,n){"use strict";function formattedDateYYYYMMDD(t){let e=t.getUTCFullYear(),n=t.getUTCMonth()+1,o=t.getUTCDate();return"".concat(e,"-").concat(n<10?"0"+n:n,"-").concat(o<10?"0"+o:o)}function parsePost(t){var e,n,o,r,i,l,a,c,d,s,u,p,g,m;if(null==t)return{};let v=null!==(p=null==t?void 0:null===(e=t.body)||void 0===e?void 0:e.markdown)&&void 0!==p?p:null==t?void 0:null===(n=t.body)||void 0===n?void 0:n.contents,[x,f,..._]=null!==(g=null==v?void 0:null===(r=v.trim)||void 0===r?void 0:null===(o=(i=r.call(v)).split)||void 0===o?void 0:o.call(i,/<br>|\n/))&&void 0!==g?g:[],h=null!==(m=null==t?void 0:null===(l=t.body)||void 0===l?void 0:l.updatedAt)&&void 0!==m?m:null==t?void 0:null===(a=t.body)||void 0===a?void 0:a.createdAt,j=function(t){let e=t.getUTCFullYear(),n=t.getUTCMonth()+1,o=t.getUTCDate(),r=t.getUTCHours(),i=t.getUTCMinutes(),l=t.getUTCSeconds();return"".concat(e,"년 ").concat(n,"월 ").concat(o,"일 ").concat(r,"시 ").concat(i,"분 ").concat(l,"초")}(new Date(h+324e5));return{id:t.id,category:null==x?void 0:x.replace(/^<p>/,"").replace(/<\/p>$/,""),title:null==f?void 0:f.replace(/^<p>/,"").replace(/<\/p>$/,""),body:null==_?void 0:null===(d=_.join("<br>"))||void 0===d?void 0:null===(c=d.trim)||void 0===c?void 0:c.call(d),createdAt:null==t?void 0:null===(s=t.body)||void 0===s?void 0:s.createdAt,timestamp:h,date:j,thumbnail:function(t){if(!t)return null;let e=t.match(/!\[.*?\]\((.*?)\)/);return e?e[1]:null}(null==t?void 0:null===(u=t.body)||void 0===u?void 0:u.contents)}}n.d(e,{I:function(){return parsePost},Y:function(){return formattedDateYYYYMMDD}})},1528:function(t){t.exports={logo:"Logo_logo__hia7S"}},2392:function(t){t.exports={post:"DetailsPage_post__Ek2qM"}}},function(t){t.O(0,[7,822,774,888,179],function(){return t(t.s=1476)}),_N_E=t.O()}]);