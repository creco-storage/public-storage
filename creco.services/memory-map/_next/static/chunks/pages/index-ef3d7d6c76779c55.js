(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6357:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ee}});var n=r(3574),c=r(4336),i=r(638),o=r(6189),a=r.n(o),s=r(2818),u=r(9953);function l(){var e=localStorage.getItem("authorization");return null!=e?{Authorization:e}:{}}var p=function(){return"localhost"===window.location.hostname?"https://app.divops.kr":"www.creco.services"===window.location.hostname?"https://app.divops.kr":void 0};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function h(e,t){return y.apply(this,arguments)}function y(){return(y=(0,c.Z)(a().mark(function e(t,r){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p(),"/github-api/api/resource/create"),{method:"POST",headers:f({"Content-Type":"application/json"},l()),body:JSON.stringify({model:"memory",resource:t,summary:r})});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var b=r(7226),v={name:"k5a42t",styles:"cursor:pointer;border:1px solid;margin:4px 0;padding:4px 6px;border-radius:6px;background-color:unset;&:hover{background:#c8c8c8;}"};function g(e){var t=e.className,r=e.children,n=e.onClick;return(0,b.tZ)("button",{css:v,onClick:n,className:t,children:r})}var m={name:"1ke7uei",styles:"min-height:200px;width:100%;resize:none;outline:none"},O={name:"2qga7i",styles:"text-align:right"};function w(e){var t=e.onSubmit,r=(0,u.useState)(""),n=r[0],i=r[1],o=(0,u.useState)(!1),s=o[0],l=o[1];return(0,b.BX)(P,{children:[(0,b.tZ)(j,{children:"\uD83D\uDCDD 메모리 기록하기"}),(0,b.tZ)("section",{children:(0,b.tZ)("textarea",{css:m,onChange:function(e){return i(e.target.value)},value:n})}),(0,b.tZ)("div",{css:O,children:(0,b.tZ)(g,{disabled:s,onClick:(0,c.Z)(a().mark(function e(){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,t({content:n},{content:n.split("\n")[0]});case 3:i(""),l(!1);case 5:case"end":return e.stop()}},e)})),children:s?"로딩":"작성"})})]})}var x={name:"acf2e7",styles:"padding:16px 0"},j=function(e){var t=e.children;return(0,b.tZ)("h3",{css:x,children:t})},Z={name:"19hd517",styles:"margin:0 auto;width:720px"},P=function(e){var t=e.children;return(0,b.tZ)("div",{css:Z,children:t})},k=r(101),D={name:"a07gmx",styles:"font-size:2rem"},S={name:"2qga7i",styles:"text-align:right"};function E(e){var t=e.content,r=e.created,n=e.onClick;return(0,b.BX)(C,{onClick:n,children:[(0,b.tZ)("div",{css:D,children:t}),(0,b.tZ)("div",{css:S,children:(0,b.tZ)("span",{children:new Date(r).toLocaleString()})})]})}var C=function(e){var t=e.children,r=e.onClick,n=(0,u.useState)(!1),c=n[0],i=n[1];return(0,b.tZ)("div",{onClick:r,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},css:(0,k.css)({width:"720px",margin:"32px auto",padding:"16px 24px 12px",cursor:"pointer",borderRadius:"10px",background:"".concat(c?"#c8c8c8":"unset"),boxShadow:"rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px"},"",""),children:t})},_=r(8213),N=r(265);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function q(){return B.apply(this,arguments)}function B(){return(B=(0,c.Z)(a().mark(function e(){var t;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p(),"/github-api/api/user/info"),{method:"GET",headers:z({},l())});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var M=function(){location.assign("".concat(p(),"/github-api/request?referrer=").concat(location.href))},R=["fetchUserInfo"];function T(){var e=(0,_.NL)(),t=(0,N.a)(R,q),r=t.data,n=t.refetch,c=function(){e.invalidateQueries(R),localStorage.removeItem("authorization"),n()};return[null==r?void 0:r.data,M,c]}T.key=R;var L={name:"1oaeivz",styles:"margin-right:8px"},I={name:"1oaeivz",styles:"margin-right:8px"};function A(){var e=T(),t=(0,i.Z)(e,3),r=t[0],n=t[1],c=t[2];return null==r?(0,b.BX)(F,{children:[(0,b.tZ)("div",{children:(0,b.tZ)("h2",{children:"MemoryMap"})}),(0,b.BX)(J.Row,{children:[(0,b.tZ)("h4",{css:L,children:"로그인하기"}),(0,b.tZ)(g,{onClick:n,children:"로그아웃"})]})]}):(0,b.BX)(F,{children:[(0,b.tZ)("div",{children:(0,b.tZ)("h2",{children:"MemoryMap"})}),(0,b.BX)(J.Row,{children:[(0,b.tZ)("h4",{css:I,children:"".concat(r.login)}),(0,b.tZ)(g,{onClick:c,children:"로그아웃"})]})]})}var Q={name:"tq074a",styles:"display:flex;flex-direction:row;align-items:center;justify-content:space-between"},G={name:"i5dt4",styles:"display:flex;flex-direction:column;align-items:center;justify-content:space-between"},J={Row:function(e){var t=e.children;return(0,b.tZ)("div",{children:t,css:Q})},Col:function(e){var t=e.children;return(0,b.tZ)("div",{children:t,css:G})}},U={name:"1v4yky5",styles:"padding:16px 0;display:flex;align-items:center;justify-content:space-between"},F=function(e){var t=e.children;return(0,b.tZ)("div",{css:U,children:t})};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function V(){return W.apply(this,arguments)}function W(){return(W=(0,c.Z)(a().mark(function e(){var t,r,n,c,i=arguments;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0===(r=(i.length>0&&void 0!==i[0]?i[0]:{}).pageNo)?1:r,e.next=3,fetch("".concat(p(),"/github-api/api/resource/readList?model=memory&pageNo=").concat(n),{method:"GET",headers:K({},l())});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ee=function(){var e,t,r,n,o,l,p=(0,s.useRouter)(),d=(0,u.useState)(!1),f=d[0],y=d[1],v=(r=T(),n=(0,i.Z)(r,1)[0],[l=(o=(0,N.a)(["fetchMemoryList",null==n?void 0:n.login],(0,c.Z)(a().mark(function e(){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((null==n?void 0:n.login)!=null){e.next=4;break}e.t0=[],e.next=7;break;case 4:return e.next=6,V();case 6:e.t0=e.sent.data;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e)})),{initialData:[]})).data,o.refetch]),g=(0,i.Z)(v,2),m=g[0],O=g[1],x=(e=(0,s.useRouter)(),{resetQueryParam:function(t){var r=$({},e.query);delete r[t],e.replace({pathname:e.pathname,query:r})}}).resetQueryParam;return((0,u.useEffect)(function(){if(p.isReady){var e=p.query.code;if(null==e||Array.isArray(e)){y(!1);return}y(!0),localStorage.setItem("authorization",e),x("code")}},[p]),f)?(0,b.tZ)("div",{children:"로그인 중"}):(0,b.BX)("div",{children:[(0,b.tZ)(A,{}),(0,b.tZ)(w,{onSubmit:(t=(0,c.Z)(a().mark(function e(t,r){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,r);case 2:return e.next=4,O();case 4:case"end":return e.stop()}},e)})),function(e,r){return t.apply(this,arguments)})}),(0,b.tZ)("br",{}),(0,b.tZ)(er,{children:m.map(function(e){return(0,b.tZ)(E,$({},e),e.id)})})]})},et={name:"19hd517",styles:"margin:0 auto;width:720px"},er=function(e){var t=e.children;return(0,b.tZ)("div",{css:et,children:t})}},522:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6357)}])}},function(e){e.O(0,[466,774,888,179],function(){return e(e.s=522)}),_N_E=e.O()}]);