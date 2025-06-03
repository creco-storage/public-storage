(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{790:(e,t,r)=>{"use strict";var s=r(5257),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=s.useState,l=s.useEffect,o=s.useLayoutEffect,a=s.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),s=n({inst:{value:r,getSnapshot:t}}),i=s[0].inst,c=s[1];return o(function(){i.value=r,i.getSnapshot=t,u(i)&&c({inst:i})},[e,r,t]),l(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),a(r),r};t.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:c},3885:(e,t,r)=>{"use strict";r.d(t,{a:()=>n,u:()=>i});var s=r(3884);async function i(e){let{data:t}=await s.A.post("/api/markdown/render",{markdown:e});return t.data}function n(e){var t,r,s,i,n,l,o,a,u,c,h,d,p,f,m,v;if(null==e)return null;let b=null!=(p=null==e||null==(t=e.body)?void 0:t.markdown)?p:null==e||null==(r=e.body)?void 0:r.contents,[y,g,...x]=null!=(f=null==b||null==(i=b.trim)||null==(s=(n=i.call(b)).split)?void 0:s.call(n,/<br>|\n/))?f:[],R=null!=(m=null==e||null==(l=e.body)?void 0:l.updatedAt)?m:null==e||null==(o=e.body)?void 0:o.createdAt,w=function(e){let t=e.getUTCFullYear(),r=e.getUTCMonth()+1,s=e.getUTCDate(),i=e.getUTCHours(),n=e.getUTCMinutes(),l=e.getUTCSeconds();return"".concat(t,"년 ").concat(r,"월 ").concat(s,"일 ").concat(i,"시 ").concat(n,"분 ").concat(l,"초")}(new Date(R+324e5));return{id:e.id,category:null==y?void 0:y.replace(/^<p>/,"").replace(/<\/p>$/,""),title:null==g?void 0:g.replace(/^<p>/,"").replace(/<\/p>$/,""),body:null==x||null==(u=x.join("<br>"))||null==(a=u.trim)?void 0:a.call(u),createdAt:null==e||null==(c=e.body)?void 0:c.createdAt,timestamp:R,date:w,thumbnail:function(e){if(!e)return null;let t=e.match(/!\[.*?\]\((.*?)\)/);return t?t[1]:null}(null==e||null==(h=e.body)?void 0:h.contents),description:(v=null==e||null==(d=e.body)?void 0:d.contents)&&v.split(/\n/).filter(e=>e.length>0)[2]||null}}},6148:(e,t,r)=>{Promise.resolve().then(r.bind(r,7900))},7899:(e,t,r)=>{"use strict";e.exports=r(790)},7900:(e,t,r)=>{"use strict";r.d(t,{PostsPage:()=>V});var s=r(9245),i=r(5257),n=r(3884),l=r(3420),o=r(8443),a=r(3580),u=r(187),c=r(4678),h=r(5292),d=r(9444);class p extends h.Q{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),f(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return m(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return m(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,a.f8)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let i=this.hasListeners();i&&v(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(t),i&&(this.currentQuery!==s||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let n=this.computeRefetchInterval();i&&(this.currentQuery!==s||this.options.enabled!==r.enabled||n!==this.currentRefetchInterval)&&this.updateRefetchInterval(n)}getOptimisticResult(e){var t,r,s;let i=this.client.getQueryCache().build(this.client,e),n=this.createResult(i,e);return t=this,r=n,(s=e).keepPreviousData||(void 0!==s.placeholderData?!r.isPlaceholderData:(0,a.f8)(t.getCurrentResult(),r))||(this.currentResult=n,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),n}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(a.lQ)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),a.S$||this.currentResult.isStale||!(0,a.gn)(this.options.staleTime))return;let e=(0,a.j3)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!a.S$&&!1!==this.options.enabled&&(0,a.gn)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||c.m.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r,s=this.currentQuery,i=this.options,n=this.currentResult,l=this.currentResultState,o=this.currentResultOptions,u=e!==s,c=u?e.state:this.currentQueryInitialState,h=u?this.currentResult:this.previousQueryResult,{state:p}=e,{dataUpdatedAt:m,error:y,errorUpdatedAt:g,fetchStatus:x,status:R}=p,w=!1,S=!1;if(t._optimisticResults){let r=this.hasListeners(),n=!r&&f(e,t),l=r&&v(e,s,t,i);(n||l)&&(x=(0,d.v_)(e.options.networkMode)?"fetching":"paused",m||(R="loading")),"isRestoring"===t._optimisticResults&&(x="idle")}if(t.keepPreviousData&&!p.dataUpdatedAt&&null!=h&&h.isSuccess&&"error"!==R)r=h.data,m=h.dataUpdatedAt,R=h.status,w=!0;else if(t.select&&void 0!==p.data)if(n&&p.data===(null==l?void 0:l.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(p.data),r=(0,a.pl)(null==n?void 0:n.data,r,t),this.selectResult=r,this.selectError=null}catch(e){this.selectError=e}else r=p.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===R){let e;if(null!=n&&n.isPlaceholderData&&t.placeholderData===(null==o?void 0:o.placeholderData))e=n.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(R="success",r=(0,a.pl)(null==n?void 0:n.data,e,t),S=!0)}this.selectError&&(y=this.selectError,r=this.selectResult,g=Date.now(),R="error");let j="fetching"===x,C="loading"===R,E="error"===R;return{status:R,fetchStatus:x,isLoading:C,isSuccess:"success"===R,isError:E,isInitialLoading:C&&j,data:r,dataUpdatedAt:m,error:y,errorUpdatedAt:g,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>c.dataUpdateCount||p.errorUpdateCount>c.errorUpdateCount,isFetching:j,isRefetching:j&&!C,isLoadingError:E&&0===p.dataUpdatedAt,isPaused:"paused"===x,isPlaceholderData:S,isPreviousData:w,isRefetchError:E&&0!==p.dataUpdatedAt,isStale:b(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,a.f8)(r,t))return;this.currentResult=r;let s={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.trackedProps.size)return!0;let s=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&s.add("error"),Object.keys(this.currentResult).some(e=>this.currentResult[e]!==t[e]&&s.has(e))})()&&(s.listeners=!0),this.notify({...s,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,d.wm)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){u.j.batch(()=>{var t,r,s,i,n,l,o,a;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(s=(i=this.options).onSettled)||s.call(i,this.currentResult.data,null)):e.onError&&(null==(n=(l=this.options).onError)||n.call(l,this.currentResult.error),null==(o=(a=this.options).onSettled)||o.call(a,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function f(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&("error"!==e.state.status||!1!==t.retryOnMount)||e.state.dataUpdatedAt>0&&m(e,t,t.refetchOnMount)}function m(e,t,r){if(!1!==t.enabled){let s="function"==typeof r?r(e):r;return"always"===s||!1!==s&&b(e,t)}return!1}function v(e,t,r,s){return!1!==r.enabled&&(e!==t||!1===s.enabled)&&(!r.suspense||"error"!==e.state.status)&&b(e,r)}function b(e,t){return e.isStaleByTime(t.staleTime)}let y=r(7899).useSyncExternalStore,g=i.createContext(function(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}()),x=()=>i.useContext(g),R=i.createContext(!1),w=()=>i.useContext(R);R.Provider;let S=(e,t)=>{(e.suspense||e.useErrorBoundary)&&!t.isReset()&&(e.retryOnMount=!1)},j=e=>{i.useEffect(()=>{e.clearReset()},[e])},C=e=>{let{result:t,errorResetBoundary:r,useErrorBoundary:s,query:i}=e;return t.isError&&!r.isReset()&&!t.isFetching&&function(e,t){return"function"==typeof e?e(...t):!!e}(s,[t.error,i])},E=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},O=(e,t)=>e.isLoading&&e.isFetching&&!t,Q=(e,t,r)=>(null==e?void 0:e.suspense)&&O(t,r),k=(e,t,r)=>t.fetchOptimistic(e).then(({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)}).catch(t=>{r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)});var I=Object.defineProperty,T=Object.defineProperties,N=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))U.call(t,r)&&F(e,r,t[r]);if(D)for(var r of D(t))P.call(t,r)&&F(e,r,t[r]);return e},B=(e,t)=>T(e,N(t)),L=(e,t)=>{var r={};for(var s in e)U.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&D)for(var s of D(e))0>t.indexOf(s)&&P.call(e,s)&&(r[s]=e[s]);return r},q=(e,t,r)=>new Promise((s,i)=>{var n=e=>{try{o(r.next(e))}catch(e){i(e)}},l=e=>{try{o(r.throw(e))}catch(e){i(e)}},o=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,l);o((r=r.apply(e,t)).next())});function _(e){return q(this,null,function*(){let{data:t}=yield n.A.get(e);return t})}var z={of:({category:e,prefix:t="/github-api/api/gist"})=>({readList:()=>q(void 0,null,function*(){if(null==e||""===e||"undefined"===e)return[];let{data:r}=yield _(`${t}/${e}/list`);return r.items}),readItem:r=>_(`${t}/${e}/${r}`),getList:()=>q(void 0,null,function*(){let{data:e}=yield _(`${t}/category`);return e})})};function M(e){let{width:t}=function(){let[e,t]=useState({width:void 0});return useEffect(()=>{let e=()=>{t({width:window.innerWidth})};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}(),[r,s]=useState2(void 0);return useEffect2(()=>{let t=document.querySelector(e);null!=t&&s(t.computedStyleMap().get("display").value)},[t]),{display:r}}var $=`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/
h1, h2, h3, h4, h5, h6 {
	margin: 0;
	padding: 0;
	vertical-align: baseline;
}

html, body, div, span, applet, object, iframe,
p, blockquote, pre, a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
	display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
menu, ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1 {
  font-size: 3.6rem;
  font-weight: bolder;
}

h2 {
  font-size: 3.2rem;
  font-weight: bolder;
}

h3 {
  font-size: 2.4rem;
  font-weight: bolder;
}

h4 {
  font-size: 2rem;
  font-weight: bolder;
}

h5 {
  font-size: 1.6rem;
  font-weight: bolder;
}

h6 {
  font-size: 1.2rem;
  font-weight: bolder;
}

:root {
  /* NOTE: 1 rem\uC744 10px \uAE30\uC900\uC73C\uB85C \uCC98\uB9AC\uD558\uB3C4\uB85D \uD568 */
  font-size: 62.5%;
}

html {
  background-color: #2B2B29;
}

@media (max-width: 520px) {
  .mobile-ui {
    display: block;
  }
  .desktop-ui {
    display: none;
  }
  .clickable {
    text-decoration: unset;
    cursor: unset;
  }
}

@media (min-width: 521px) {
  .mobile-ui {
    display: none;
  }
  .desktop-ui {
    display: block;
  }
  .clickable:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

bold {
  font-weight: bold;
}
`,H=new l.E;function K({children:e,queryClient:t=H}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Ht,{client:t,children:e}),(0,s.jsx)("div",{className:"mobile-ui",style:{width:0,height:0}}),(0,s.jsx)("div",{className:"desktop-ui",style:{width:0,height:0}})]})}K.Heads=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0, viewport-fit=cover",name:"viewport"}),(0,s.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"})]})},K.GlobalCss=$;var W=new Map,G=r(3885);let V=()=>{let e=function(){var e;return(null!=(e=function(e,{prefix:t}={prefix:"/github-api/api/gist"}){var r,s,n;let{data:l}=(r=["API.of().readList",e],s=()=>q(this,null,function*(){return z.of({category:e,prefix:t}).readList()}),n={initialData:null},function(e,t){let r=(0,o.jE)({context:e.context}),s=w(),n=x(),l=r.defaultQueryOptions(e);l._optimisticResults=s?"isRestoring":"optimistic",l.onError&&(l.onError=u.j.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=u.j.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=u.j.batchCalls(l.onSettled)),E(l),S(l,n),j(n);let[a]=i.useState(()=>new t(r,l)),c=a.getOptimisticResult(l);if(y(i.useCallback(e=>{let t=s?()=>void 0:a.subscribe(u.j.batchCalls(e));return a.updateResult(),t},[a,s]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),i.useEffect(()=>{a.setOptions(l,{listeners:!1})},[l,a]),Q(l,c,s))throw k(l,a,n);if(C({result:c,errorResetBoundary:n,useErrorBoundary:l.useErrorBoundary,query:a.getCurrentQuery()}))throw c.error;return l.notifyOnChangeProps?c:a.trackResult(c)}((0,a.vh)(r,s,n),p));return l}("blog-post"))?e:[]).map(G.a)}();return e.sort((e,t)=>(null==e?void 0:e.createdAt)==null||(null==t?void 0:t.createdAt)==null?0:e.createdAt>t.createdAt?-1:1),(0,s.jsx)("div",{className:"bg-[#2B2B29] min-h-screen text-[#DEDEDD] text-base",children:(0,s.jsx)("div",{className:"desktop-ui flex justify-center bg-[#232323] min-h-screen text-[#DEDEDD]",children:(0,s.jsx)("div",{className:"bg-[#2B2B29] max-w-[1200px] w-full px-16 py-6 shadow-[0_0_4px_20px_#2B2B29]",children:(0,s.jsxs)("div",{className:"max-w-[840px] mx-auto",children:[(0,s.jsx)("div",{className:"py-6",children:(0,s.jsx)("a",{href:"https://blog.creco.dev",className:"hover:text-white",children:(0,s.jsx)("h1",{className:"text-[3.6rem] font-extrabold",children:"Creco's Blog"})})}),(0,s.jsx)("div",{className:"h-5"}),(0,s.jsx)("p",{className:"text-[6rem] font-extrabold",children:"Posts"}),(0,s.jsx)("div",{className:"h-[14px]"}),(0,s.jsx)("p",{className:"text-[2rem] text-gray-500",children:"Creco"}),(0,s.jsx)("div",{className:"h-5"}),(0,s.jsx)("hr",{className:"w-full border-t border-gray-200/50 scale-y-[0.3]"}),(0,s.jsx)("ul",{children:e.map(e=>(0,s.jsx)("li",{className:"w-full border-b border-gray-200/50 py-12",children:(0,s.jsxs)("a",{href:"/post/".concat(e.id,"/"),className:"hover:underline text-[1.6rem]",children:[(0,s.jsx)("time",{className:"text-gray-500",children:e.date}),(0,s.jsx)("div",{className:"h-1"}),(0,s.jsx)("span",{className:"block text-[1.2rem]",children:e.category}),(0,s.jsx)("h3",{className:"mt-1 text-[2.4rem] font-extrabold",children:e.title}),e.description&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"h-2"}),(0,s.jsx)("span",{className:"block text-gray-500",children:e.description})]}),(0,s.jsx)("div",{className:"h-5"}),(0,s.jsx)("p",{className:"text-[#0ea5e9]",children:"Read more →"})]})},e.id))})]})})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[884,428,846,722,358],()=>t(6148)),_N_E=e.O()}]);