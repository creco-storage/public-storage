"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{2090:function(t,e,n){n.d(e,{b:function(){return i}});var r=n(8719),a=n(5909),c=n.n(a),s=n(7946),i={of:function(t){var e;return{readList:(e=(0,r.Z)(c().mark(function e(){var n;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/api/gist/".concat(t,"/list"));case 2:return n=e.sent.data,e.abrupt("return",n.items);case 5:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)}),readItem:function(e){return u("/api/gist/".concat(t,"/").concat(e))},createItem:function(e){return d("/api/gist/".concat(t,"/create"),{contents:e})},updateItem:function(e,n){return d("/api/gist/".concat(t,"/").concat(e,"/modify"),{contents:n})},deleteItem:function(e){return d("/api/gist/".concat(t,"/").concat(e,"/delete"))}}}},o="https://app.divops.kr/github-api";function u(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark(function t(e){var n;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o).concat(e));case 2:return n=t.sent.data,t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(t,e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark(function t(e,n){var r;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.post("".concat(o).concat(e),n,{headers:{"Content-Type":"application/json"}});case 2:return r=t.sent.data,t.abrupt("return",r);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}i.of("work")},6583:function(t,e,n){n.d(e,{W:function(){return a}});var r=n(5491),a=function(t){var e=t.className,n=t.children,a=t.width;return(0,r.tZ)("div",{className:e,style:{margin:"0 auto",width:"".concat(void 0===a?720:a,"px")},children:n})}},9507:function(t,e,n){n.d(e,{d:function(){return g}});var r=n(2745),a=n(8801),c=n(5491);function s(t){var e=t.value;return(0,c.tZ)(c.HY,{children:t.cases[e]})}var i=n(9471),o=n(7616),u={name:"ygyqi8",styles:"border-radius:6px"};function l(t){var e=t.id,n=t.className,r=t.left,a=t.right;return(0,c.tZ)("li",{className:n,css:u,children:(0,c.BX)(o.K.Horizontal,{children:[r,a]})},e)}var d=n(4720),p={name:"1wdxicz",styles:"padding:6px;margin-bottom:12px;border:1px solid #efefef;box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},f={name:"j1tye4",styles:"align-item:flex-start"},x={name:"qztjqb",styles:"padding-top:5px;align-item:flex-start"},v={name:"1wdxicz",styles:"padding:6px;margin-bottom:12px;border:1px solid #efefef;box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.19) 0px 2px 5px 0px"},h={name:"100vxut",styles:"align-items:flex-start;border:white 1px solid;border-bottom:1px solid #c8c8c8"},m={name:"uk3a2s",styles:"align-items:flex-start;padding-top:5px"};function g(t){t.id;var e=t.data,n=t.viewButtons,o=t.editButtons,u=(0,a.useState)(e.contents),g=u[0],w=u[1],b=(0,a.useState)("view"),y=b[0],k=b[1];return(0,c.tZ)(s,{value:y,cases:{view:(0,c.tZ)(l,{css:p,left:(0,c.tZ)(i.K.View,{css:f,value:g}),right:Object.entries(n).map(function(t){var e=(0,r.Z)(t,2),n=e[0],a=e[1];return(0,c.tZ)(d.L,{css:x,onClick:function(){return a({text:g,setMode:k,setText:w})},children:n},n)})}),edit:null==o?null:(0,c.tZ)(l,{css:v,left:(0,c.tZ)(i.K,{css:h,value:g,setValue:w}),right:Object.entries(o).map(function(t){var e=(0,r.Z)(t,2),n=e[0],a=e[1];return(0,c.tZ)(d.L,{css:m,onClick:function(){return a({text:g,setMode:k,setText:w})},children:n},n)})})}})}},8070:function(t,e,n){n.d(e,{K:function(){return a}});var r=n(5491);function a(t){var e=t.size;return(0,r.tZ)("div",{style:{width:"100%",height:"".concat(e,"px")}})}},7616:function(t,e,n){n.d(e,{K:function(){return c}});var r=n(9052),a=n(5491),c={Horizontal:function(t){var e=t.children,n=t.className,c=t.align;return(0,a.tZ)("div",{className:n,css:(0,r.css)({display:"flex",justifyContent:"".concat(void 0===c?"center":c),alignItems:"center"},"",""),children:e})},Vertical:function(t){var e=t.children,n=t.className,c=t.align,s=void 0===c?"center":c;return(0,a.tZ)("div",{className:n,css:(0,r.css)({display:"flex",flexDirection:"column",alignItems:"".concat("right"===s?"end":"left"===s?"start":"center")},"",""),children:e})}}},9471:function(t,e,n){n.d(e,{K:function(){return s}});var r=n(9052),a=n(8645),c=n(5491);function s(t){var e=t.className,n=t.setValue,a=t.value,s=t.rows,i=t.cols;return(0,c.tZ)("textarea",{className:e,spellCheck:!1,css:(0,r.css)({resize:"none",width:"".concat(null==i?"100%":"auto"),fontSize:"1.6rem",wordBreak:"keep-all",whiteSpace:"pre-line",fontFamily:'"Noto Sans KR", sans-serif'},"",""),value:a,rows:null!=s?s:a.split("\n").length,cols:i,onChange:function(t){return n(t.target.value)}})}var i={name:"1cwazio",styles:"padding:3px"};s.View=function(t){var e=t.value;return null==e?null:(0,c.tZ)(a.H,{css:i,children:e.replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" style="color: blue; text-decoration: underline;">Link</a>')})}},8645:function(t,e,n){n.d(e,{H:function(){return c}});var r=n(5491),a={name:"1watsfl",styles:"width:100%;font-size:1.6rem;word-break:keep-all;white-space:pre-line"};function c(t){var e=t.className,n=t.children;return(0,r.tZ)("p",{className:e,css:a,dangerouslySetInnerHTML:{__html:"".concat(n)}})}},4720:function(t,e,n){n.d(e,{L:function(){return c}});var r=n(5491),a={name:"1y48t6p",styles:"border:unset;background:unset;word-break:keep-all;text-decoration:underline;cursor:pointer"};function c(t){var e=t.className,n=t.onClick,c=t.children;return(0,r.tZ)("button",{className:e,css:a,onClick:n,children:c})}},8347:function(t,e,n){n.d(e,{s:function(){return o}});var r=n(8719),a=n(5909),c=n.n(a),s=n(6970);n(8801);var i=n(2090);function o(t){var e=(0,s.a)(["fetchList",t],(0,r.Z)(c().mark(function e(){var n;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.of(t).readList();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)})),{initialData:[]});return[e.data,e.refetch,e.isLoading,e.isFetching]}}}]);