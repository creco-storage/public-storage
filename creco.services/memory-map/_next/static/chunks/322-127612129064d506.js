(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{2921:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2916:function(e,t,r){"use strict";var n=r(7332);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(8301).Z,o=r(4123).Z,i=s(r(9953)),u=r(5950),a=r(7707),l=r(8048),c=r(2512),h=r(9860),f=r(2921),d=r(3364),p={};function v(e,t,r,n){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,r,n)).catch(function(e){});var s=n&&void 0!==n.locale?n.locale:e&&e.locale;p[t+"%"+r+(s?"%"+s:"")]=!0}}var y=i.default.forwardRef(function(e,t){var r,s,y=e.href,R=e.as,b=e.children,m=e.prefetch,g=e.passHref,S=e.replace,C=e.shallow,E=e.scroll,O=e.locale,I=e.onClick,x=e.onMouseEnter,Q=e.onTouchStart,T=e.legacyBehavior,w=void 0===T?!0!==Boolean(!1):T,M=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,w&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));var L=!1!==m,_=i.default.useContext(l.RouterContext),k=i.default.useContext(c.AppRouterContext);k&&(_=k);var U=i.default.useMemo(function(){var e=u.resolveHref(_,y,!0),t=n(e,2),r=t[0],s=t[1];return{href:r,as:R?u.resolveHref(_,R):s||r}},[_,y,R]),j=U.href,P=U.as,F=i.default.useRef(j),A=i.default.useRef(P);w&&(s=i.default.Children.only(r));var D=w?s&&"object"==typeof s&&s.ref:t,B=n(h.useIntersection({rootMargin:"200px"}),3),K=B[0],V=B[1],N=B[2],q=i.default.useCallback(function(e){(A.current!==P||F.current!==j)&&(N(),A.current=P,F.current=j),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[P,D,j,N,K]);i.default.useEffect(function(){var e=V&&L&&u.isLocalURL(j),t=void 0!==O?O:_&&_.locale,r=p[j+"%"+P+(t?"%"+t:"")];e&&!r&&v(_,j,P,{locale:t})},[P,j,V,O,L,_]);var Z={ref:q,onClick:function(e){w||"function"!=typeof I||I(e),w&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,t,r,n,s,o,a,l,c,h){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(f=e).currentTarget.target)||"_self"===d)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&u.isLocalURL(r)){e.preventDefault();var f,d,p=function(){"beforePopState"in t?t[s?"replace":"push"](r,n,{shallow:o,locale:l,scroll:a}):t[s?"replace":"push"](r,{forceOptimisticNavigation:!h})};c?i.default.startTransition(p):p()}}(e,_,j,P,S,C,E,O,Boolean(k),L)},onMouseEnter:function(e){w||"function"!=typeof x||x(e),w&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),!(!L&&k)&&u.isLocalURL(j)&&v(_,j,P,{priority:!0})},onTouchStart:function(e){w||"function"!=typeof Q||Q(e),w&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),!(!L&&k)&&u.isLocalURL(j)&&v(_,j,P,{priority:!0})}};if(!w||g||"a"===s.type&&!("href"in s.props)){var H=void 0!==O?O:_&&_.locale,z=_&&_.isLocaleDomain&&f.getDomainLocale(P,H,_.locales,_.domainLocales);Z.href=z||d.addBasePath(a.addLocale(P,H,_&&_.defaultLocale))}return w?i.default.cloneElement(s,Z):i.default.createElement("a",Object.assign({},M,Z),r)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9860:function(e,t,r){"use strict";var n=r(7332);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,l=e.disabled||!i,c=n(s.useState(!1),2),h=c[0],f=c[1],d=n(s.useState(null),2),p=d[0],v=d[1];return s.useEffect(function(){if(i){if(!l&&!h&&p&&p.tagName){var e,n,s,c,d,v,y;return n=function(e){return e&&f(e)},d=(c=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=a.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=u.get(n)))return t;var s=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=s.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:s},a.push(r),u.set(r,t),t}(s={root:null==t?void 0:t.current,rootMargin:r})).id,v=c.observer,(y=c.elements).set(p,n),v.observe(p),function(){if(y.delete(p),v.unobserve(p),0===y.size){v.disconnect(),u.delete(d);var e=a.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&a.splice(e,1)}}}}else if(!h){var R=o.requestIdleCallback(function(){return f(!0)});return function(){return o.cancelIdleCallback(R)}}},[p,l,r,t,h]),[v,h,s.useCallback(function(){f(!1)},[])]};var s=r(9953),o=r(1041),i="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2512:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(8301).Z)(r(9953)),s=n.default.createContext(null);t.AppRouterContext=s;var o=n.default.createContext(null);t.LayoutRouterContext=o;var i=n.default.createContext(null);t.GlobalLayoutRouterContext=i;var u=n.default.createContext(null);t.TemplateContext=u},4979:function(e,t,r){e.exports=r(2916)},2818:function(e,t,r){e.exports=r(53)},3103:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n=r(9953),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,i=n.useEffect,u=n.useLayoutEffect,a=n.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!s(e,r)}catch(n){return!0}}function c(e,t){return t()}var h="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?c:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),s=n[0].inst,c=n[1];return u(function(){s.value=r,s.getSnapshot=t,l(s)&&c({inst:s})},[e,r,t]),i(function(){return l(s)&&c({inst:s}),e(function(){l(s)&&c({inst:s})})},[e]),a(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:h},3051:function(e,t,r){"use strict";e.exports=r(3103)},3757:function(e,t,r){"use strict";r.d(t,{a:function(){return w}});var n=r(5117),s=r(437),o=r(8905),i=r(2288),u=r(6142);class a extends i.l{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.length&&(this.currentQuery.addObserver(this),l(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return c(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return c(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,n.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let o=this.hasListeners();o&&h(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(t),o&&(this.currentQuery!==s||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let i=this.computeRefetchInterval();o&&(this.currentQuery!==s||this.options.enabled!==r.enabled||i!==this.currentRefetchInterval)&&this.updateRefetchInterval(i)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(n.ZT)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),n.sk||this.currentResult.isStale||!(0,n.PN)(this.options.staleTime))return;let e=(0,n.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!n.sk&&!1!==this.options.enabled&&(0,n.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||o.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r=this.currentQuery,s=this.options,o=this.currentResult,i=this.currentResultState,a=this.currentResultOptions,c=e!==r,d=c?e.state:this.currentQueryInitialState,p=c?this.currentResult:this.previousQueryResult,{state:v}=e,{dataUpdatedAt:y,error:R,errorUpdatedAt:b,fetchStatus:m,status:g}=v,S=!1,C=!1,E;if(t._optimisticResults){let O=this.hasListeners(),I=!O&&l(e,t),x=O&&h(e,r,t,s);(I||x)&&(m=(0,u.Kw)(e.options.networkMode)?"fetching":"paused",y||(g="loading")),"isRestoring"===t._optimisticResults&&(m="idle")}if(t.keepPreviousData&&!v.dataUpdatedAt&&null!=p&&p.isSuccess&&"error"!==g)E=p.data,y=p.dataUpdatedAt,g=p.status,S=!0;else if(t.select&&void 0!==v.data){if(o&&v.data===(null==i?void 0:i.data)&&t.select===this.selectFn)E=this.selectResult;else try{this.selectFn=t.select,E=t.select(v.data),E=(0,n.oE)(null==o?void 0:o.data,E,t),this.selectResult=E,this.selectError=null}catch(Q){this.selectError=Q}}else E=v.data;if(void 0!==t.placeholderData&&void 0===E&&"loading"===g){let T;if(null!=o&&o.isPlaceholderData&&t.placeholderData===(null==a?void 0:a.placeholderData))T=o.data;else if(T="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==T)try{T=t.select(T),this.selectError=null}catch(w){this.selectError=w}void 0!==T&&(g="success",E=(0,n.oE)(null==o?void 0:o.data,T,t),C=!0)}this.selectError&&(R=this.selectError,E=this.selectResult,b=Date.now(),g="error");let M="fetching"===m,L="loading"===g,_="error"===g,k={status:g,fetchStatus:m,isLoading:L,isSuccess:"success"===g,isError:_,isInitialLoading:L&&M,data:E,dataUpdatedAt:y,error:R,errorUpdatedAt:b,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>d.dataUpdateCount||v.errorUpdateCount>d.errorUpdateCount,isFetching:M,isRefetching:M&&!L,isLoadingError:_&&0===v.dataUpdatedAt,isPaused:"paused"===m,isPlaceholderData:C,isPreviousData:S,isRefetchError:_&&0!==v.dataUpdatedAt,isStale:f(e,t),refetch:this.refetch,remove:this.remove};return k}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,n.VS)(r,t))return;this.currentResult=r;let s={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options;if("all"===e||!e&&!this.trackedProps.size)return!0;let r=new Set(null!=e?e:this.trackedProps);return this.options.useErrorBoundary&&r.add("error"),Object.keys(this.currentResult).some(e=>{let n=this.currentResult[e]!==t[e];return n&&r.has(e)})})()&&(s.listeners=!0),this.notify({...s,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,u.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){s.V.batch(()=>{var t,r,n,s,o,i,u,a;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(n=(s=this.options).onSettled)||n.call(s,this.currentResult.data,null)):e.onError&&(null==(o=(i=this.options).onError)||o.call(i,this.currentResult.error),null==(u=(a=this.options).onSettled)||u.call(a,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(e=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function l(e,t){var r,n;return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&c(e,t,t.refetchOnMount)}function c(e,t,r){if(!1!==t.enabled){let n="function"==typeof r?r(e):r;return"always"===n||!1!==n&&f(e,t)}return!1}function h(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&f(e,r)}function f(e,t){return e.isStaleByTime(t.staleTime)}var d=r(9953),p=r(3051);let v=p.useSyncExternalStore,y,R=d.createContext((y=!1,{clearReset(){y=!1},reset(){y=!0},isReset:()=>y})),b=()=>d.useContext(R);var m=r(8414);let g=d.createContext(!1),S=()=>d.useContext(g);g.Provider;let C=(e,t)=>{(e.suspense||e.useErrorBoundary)&&!t.isReset()&&(e.retryOnMount=!1)},E=e=>{d.useEffect(()=>{e.clearReset()},[e])},O=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:n})=>{var s,o;return e.isError&&!t.isReset()&&!e.isFetching&&(o=[e.error,n],"function"==typeof r?r(...o):!!r)},I=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},x=(e,t)=>e.isLoading&&e.isFetching&&!t,Q=(e,t,r)=>(null==e?void 0:e.suspense)&&x(t,r),T=(e,t,r)=>t.fetchOptimistic(e).then(({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)}).catch(t=>{r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)});function w(e,t,r){let o=(0,n._v)(e,t,r);return function(e,t){let r=(0,m.NL)({context:e.context}),n=S(),o=b(),i=r.defaultQueryOptions(e);i._optimisticResults=n?"isRestoring":"optimistic",i.onError&&(i.onError=s.V.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=s.V.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=s.V.batchCalls(i.onSettled)),I(i),C(i,o),E(o);let[u]=d.useState(()=>new t(r,i)),a=u.getOptimisticResult(i);if(v(d.useCallback(e=>n?()=>void 0:u.subscribe(s.V.batchCalls(e)),[u,n]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),d.useEffect(()=>{u.setOptions(i,{listeners:!1})},[i,u]),Q(i,a,n))throw T(i,u,o);if(O({result:a,errorResetBoundary:o,useErrorBoundary:i.useErrorBoundary,query:u.getCurrentQuery()}))throw a.error;return i.notifyOnChangeProps?a:u.trackResult(a)}(o,a)}},4336:function(e,t,r){"use strict";function n(e,t,r,n,s,o,i){try{var u=e[o](i),a=u.value}catch(l){r(l);return}u.done?t(a):Promise.resolve(a).then(n,s)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(s,o){var i=e.apply(t,r);function u(e){n(i,s,o,u,a,"next",e)}function a(e){n(i,s,o,u,a,"throw",e)}u(void 0)})}}r.d(t,{Z:function(){return s}})},638:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var o=[],i=!0,u=!1;try{for(s=s.call(e);!(i=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(a){u=!0,n=a}finally{try{i||null==s.return||s.return()}finally{if(u)throw n}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return s}})}}]);