(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{548:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return X}});var n=r(1002),o=r(5604),i=r(1785),a=r.n(i),c=r(1387),u=r.n(c),l=r(9953),s=r(5262),d=r(2700),f=r(9568);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var p=r(6494),g=s.GitHubOAuthSdk.of({baseUrl:"https://app.divops.kr/github-api",getAuthorization:function(){var e=localStorage.getItem("authorization");if(null==e||""===e)throw Error("Authorization is null. (".concat(e,")"));return e}}),b=null!=p.env.NEXT_PUBLIC_IS_LOCAL,v=b?{fetchUser:function(){return{data:{login:"CreatiCoding"}}},loginUser:function(){}}:g.UserAPI,m=b?{create:function(e){var t,r=e.resource,n=e.summary,o=JSON.parse(null!==(t=localStorage.getItem("TEST_GtdTodoAPI_LIST"))&&void 0!==t?t:"[]");localStorage.setItem("TEST_GtdTodoAPI_LIST",JSON.stringify([].concat((0,f.Z)(o),[{resource:r,summary:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(t){(0,d.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({id:function(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,o=0;o<20;o++)t+=r.charAt(Math.floor(Math.random()*n));return t}(20)},n)}])))},delete:function(e){var t,r=e.id,n=JSON.parse(null!==(t=localStorage.getItem("TEST_GtdTodoAPI_LIST"))&&void 0!==t?t:"[]");localStorage.setItem("TEST_GtdTodoAPI_LIST",JSON.stringify((0,f.Z)(n.filter(function(e){return e.summary.id!==r}))))},readList:function(){var e;return{data:JSON.parse(null!==(e=localStorage.getItem("TEST_GtdTodoAPI_LIST"))&&void 0!==e?e:"[]").map(function(e){return e.summary})}}}:g.ResourceAPI.of({model:"gtd-todo"}),y=r(4531),O=r(230),w=r(7048);function k(e){var t=e.size;return(0,w.tZ)("div",{css:(0,O.css)("width:100%;height:",t,"px;","")})}var S={Horizontal:function(e){var t=e.children,r=e.className,n=e.align;return(0,w.tZ)("div",{className:r,css:(0,O.css)("display:flex;justify-content:",void 0===n?"center":n,";align-items:center;",""),children:t})},Vertical:function(e){var t=e.children,r=e.className,n=e.align,o=void 0===n?"center":n;return(0,w.tZ)("div",{className:r,css:(0,O.css)("display:flex;flex-direction:column;align-items:","right"===o?"end":"left"===o?"start":"center",";",""),children:t})}},P=r(1446),Z=r(73),T=["UserKey"];function x(){var e=(0,l.useState)(!0),t=e[0],r=e[1],n=(0,P.NL)();(0,l.useEffect)(function(){var e=setTimeout(function(){return r(!1)},200);return function(){return clearTimeout(e)}},[]);var o=(0,Z.a)([].concat(T,[t]),v.fetchUser,{refetchOnMount:!0,refetchOnReconnect:!0,refetchOnWindowFocus:!0}),i=o.data,a=o.refetch,c=function(){n.invalidateQueries(T),localStorage.removeItem("authorization"),a()};return{data:null==i?void 0:i.data,isLoading:t,login:v.loginUser,logout:c}}x.key=T;var _={name:"1xaqboo",styles:"border:unset;background:unset;word-break:keep-all;text-decoration:underline;cursor:pointer;:hover{color:blue;}"},j={name:"1xaqboo",styles:"border:unset;background:unset;word-break:keep-all;text-decoration:underline;cursor:pointer;:hover{color:blue;}"},I={name:"nkt64x",styles:"margin-right:10px"};function E(){var e,t=x(),r=t.data,n=t.login,o=t.logout;return(0,w.BX)(S.Horizontal,{align:"space-between",children:[(0,w.tZ)("h1",{children:"Getting Things Done"}),(0,w.BX)(S.Horizontal,{align:"right",children:[(0,w.tZ)("h4",{css:I,children:null!==(e=null==r?void 0:r.login)&&void 0!==e?e:"guest"}),null==r?(0,w.tZ)("button",{onClick:n,css:j,children:"로그인"}):(0,w.tZ)("button",{onClick:function(){o(),u().reload()},css:_,children:"로그아웃"})]})]})}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var N={of:function(e){if("todo"===e)return m}},L={name:"1xaqboo",styles:"border:unset;background:unset;word-break:keep-all;text-decoration:underline;cursor:pointer;:hover{color:blue;}"},A={name:"1watsfl",styles:"width:100%;font-size:1.6rem;word-break:keep-all;white-space:pre-line"},C={name:"255c6r",styles:"word-break:keep-all"},D={name:"vvvkso",styles:"word-break:keep-all;resize:none;width:100%;outline:none!important;:focus{background-color:#f0f0f0;}"},X=function(){var e,t,r,i,u,s,f,h,p=(0,c.useRouter)(),g=(0,l.useState)(!1),b=g[0],v=g[1],O=(t=(0,c.useRouter)(),{resetQueryParam:function(e){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach(function(t){(0,d.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t.query);delete r[e],t.replace({pathname:t.pathname,query:r})}}).resetQueryParam,P=x(),T=P.isLoading,_=P.data;P.login,P.logout;var j=(r="todo",i=x().data,s=(u=(0,Z.a)(["fetchList",null==i?void 0:i.login,r],(0,n.Z)(a().mark(function e(){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((null==i?void 0:i.login)!=null){e.next=4;break}e.t0=[],e.next=7;break;case 4:return e.next=6,N.of(r).readList();case 6:e.t0=e.sent.data;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e)})),{initialData:[]})).data,f=u.refetch,[s,f,h=u.isLoading,u.isFetching]),I=(0,o.Z)(j,2),X=I[0],U=I[1],B=(0,l.useState)(),G=B[0],q=B[1];return((0,l.useEffect)(function(){if(p.isReady){var e=p.query.code;if(null==e||Array.isArray(e)){v(!1);return}v(!0),localStorage.setItem("authorization",e),O("code")}},[p]),b||T)?(0,w.tZ)("div",{children:"로그인 중"}):(0,w.BX)("main",{children:[(0,w.tZ)(k,{size:10}),(0,w.tZ)(E,{}),(0,w.tZ)(k,{size:30}),null==_?(0,w.tZ)(w.HY,{}):(0,w.BX)(y.W,{width:720,children:[(0,w.BX)(S.Vertical,{align:"right",children:[(0,w.tZ)("textarea",{spellCheck:!1,css:D,rows:Math.max(null!==(e=null==G?void 0:G.split("\n").length)&&void 0!==e?e:0,2),value:G,onChange:function(e){return q(e.target.value)}}),(0,w.tZ)(k,{size:4}),(0,w.tZ)("button",{onClick:(0,n.Z)(a().mark(function e(){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.create({resource:{},summary:{contents:G}});case 2:return q(""),e.next=5,U();case 5:case"end":return e.stop()}},e)})),css:C,children:"입력"})]}),(0,w.tZ)(k,{size:20}),(0,w.tZ)("ul",{children:X.map(function(e){return(0,w.tZ)("li",{children:(0,w.BX)(S.Horizontal,{children:[(0,w.tZ)("p",{css:A,children:e.contents}),(0,w.tZ)("button",{css:L,onClick:(0,n.Z)(a().mark(function t(){return a().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.delete({id:e.id});case 2:return t.next=4,U();case 4:case"end":return t.stop()}},t)})),children:"삭제"})]})},e.id)})})]})]})}},9638:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(548)}])}},function(e){e.O(0,[930,774,888,179],function(){return e(e.s=9638)}),_N_E=e.O()}]);