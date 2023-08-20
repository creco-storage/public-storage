"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[363],{5904:function(t,e,i){i.d(e,{NL:function(){return o},aH:function(){return u}});var s=i(8861);let n=s.createContext(void 0),r=s.createContext(!1);function a(t,e){return t||(e&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=n),window.ReactQueryClientContext):n)}let o=({context:t}={})=>{let e=s.useContext(a(t,s.useContext(r)));if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},u=({client:t,children:e,context:i,contextSharing:n=!1})=>{s.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);let o=a(i,n);return s.createElement(r.Provider,{value:!i&&n},s.createElement(o.Provider,{value:t},e))}},1435:function(t,e,i){i.d(e,{j:function(){return a}});var s=i(8641),n=i(1361);class r extends s.l{constructor(){super(),this.setup=t=>{if(!n.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),()=>{window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){let e=this.focused!==t;e&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach(({listener:t})=>{t()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let a=new r},9023:function(t,e,i){i.d(e,{V:function(){return n}});var s=i(1361);let n=function(){let t=[],e=0,i=t=>{t()},n=t=>{t()},r=n=>{e?t.push(n):(0,s.A4)(()=>{i(n)})},a=()=>{let e=t;t=[],e.length&&(0,s.A4)(()=>{n(()=>{e.forEach(t=>{i(t)})})})};return{batch:t=>{let i;e++;try{i=t()}finally{--e||a()}return i},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{i=t},setBatchNotifyFunction:t=>{n=t}}}()},47:function(t,e,i){i.d(e,{N:function(){return o}});var s=i(8641),n=i(1361);let r=["online","offline"];class a extends s.l{constructor(){super(),this.setup=t=>{if(!n.sk&&window.addEventListener){let e=()=>t();return r.forEach(t=>{window.addEventListener(t,e,!1)}),()=>{r.forEach(t=>{window.removeEventListener(t,e)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setOnline(t):this.onOnline()})}setOnline(t){let e=this.online!==t;e&&(this.online=t,this.onOnline())}onOnline(){this.listeners.forEach(({listener:t})=>{t()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let o=new a},1496:function(t,e,i){i.d(e,{S:function(){return v}});var s=i(1361);let n=console;var r=i(9023),a=i(626);class o{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,s.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:s.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class u extends o{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||n,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=s?s:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(t,e){let i=(0,s.oE)(this.state.data,t,this.options);return this.dispatch({data:i,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),i}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;let i=this.promise;return null==(e=this.retryer)||e.cancel(t),i?i.then(s.ZT).catch(s.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,s.Kp)(this.state.dataUpdatedAt,t)}onFocus(){var t;let e=this.observers.find(t=>t.shouldFetchOnWindowFocus());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}onOnline(){var t;let e=this.observers.find(t=>t.shouldFetchOnReconnect());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var i,n,r,o;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=e&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(r=this.retryer)||r.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}Array.isArray(this.options.queryKey);let u=(0,s.G9)(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},h=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{if(u)return this.abortSignalConsumed=!0,u.signal}})};h(l);let c={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};h(c),null==(i=this.options.behavior)||i.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(n=c.fetchOptions)?void 0:n.meta))&&this.dispatch({type:"fetch",meta:null==(o=c.fetchOptions)?void 0:o.meta});let d=t=>{if((0,a.DV)(t)&&t.silent||this.dispatch({type:"error",error:t}),!(0,a.DV)(t)){var e,i,s,n;null==(e=(i=this.cache.config).onError)||e.call(i,t,this),null==(s=(n=this.cache.config).onSettled)||s.call(n,this.state.data,t,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,a.Mz)({fn:c.fetchFn,abort:null==u?void 0:u.abort.bind(u),onSuccess:t=>{var e,i,s,n;if(void 0===t){d(Error(this.queryHash+" data is undefined"));return}this.setData(t),null==(e=(i=this.cache.config).onSuccess)||e.call(i,t,this),null==(s=(n=this.cache.config).onSettled)||s.call(n,t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:d,onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){this.state=(e=>{var i,s;switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(i=t.meta)?i:null,fetchStatus:(0,a.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!=(s=t.dataUpdatedAt)?s:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let n=t.error;if((0,a.DV)(n)&&n.revert&&this.revertState)return{...this.revertState};return{...e,error:n,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),r.V.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}var l=i(8641);class h extends l.l{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,i){var n;let r=e.queryKey,a=null!=(n=e.queryHash)?n:(0,s.Rm)(r,e),o=this.get(a);return o||(o=new u({cache:this,logger:t.getLogger(),queryKey:r,queryHash:a,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(r)}),this.add(o)),o}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){let e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter(e=>e!==t),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){r.V.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){let[i]=(0,s.I6)(t,e);return void 0===i.exact&&(i.exact=!0),this.queries.find(t=>(0,s._x)(i,t))}findAll(t,e){let[i]=(0,s.I6)(t,e);return Object.keys(i).length>0?this.queries.filter(t=>(0,s._x)(i,t)):this.queries}notify(t){r.V.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}onFocus(){r.V.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){r.V.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class c extends o{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||n,this.observers=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return null!=(t=null==(e=this.retryer)?void 0:e.continue())?t:this.execute()}async execute(){var t,e,i,s,n,r,o,u,l,h,c,d,f,y,p,v,m,b,g,C;let q="loading"===this.state.status;try{if(!q){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(h=this.mutationCache.config).onMutate)?void 0:l.call(h,this.state.variables,this));let t=await (null==(c=(d=this.options).onMutate)?void 0:c.call(d,this.state.variables));t!==this.state.context&&this.dispatch({type:"loading",context:t,variables:this.state.variables})}let f=await (()=>{var t;return this.retryer=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(t=(e=this.mutationCache.config).onSuccess)?void 0:t.call(e,f,this.state.variables,this.state.context,this)),await (null==(i=(s=this.options).onSuccess)?void 0:i.call(s,f,this.state.variables,this.state.context)),await (null==(n=(r=this.mutationCache.config).onSettled)?void 0:n.call(r,f,null,this.state.variables,this.state.context,this)),await (null==(o=(u=this.options).onSettled)?void 0:o.call(u,f,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:f}),f}catch(t){try{throw await (null==(f=(y=this.mutationCache.config).onError)?void 0:f.call(y,t,this.state.variables,this.state.context,this)),await (null==(p=(v=this.options).onError)?void 0:p.call(v,t,this.state.variables,this.state.context)),await (null==(m=(b=this.mutationCache.config).onSettled)?void 0:m.call(b,void 0,t,this.state.variables,this.state.context,this)),await (null==(g=(C=this.options).onSettled)?void 0:g.call(C,void 0,t,this.state.variables,this.state.context)),t}finally{this.dispatch({type:"error",error:t})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.Kw)(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),r.V.batch(()=>{this.observers.forEach(e=>{e.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}class d extends l.l{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,i){let s=new c({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:i,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0});return this.add(s),s}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){r.V.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return void 0===t.exact&&(t.exact=!0),this.mutations.find(e=>(0,s.X7)(t,e))}findAll(t){return this.mutations.filter(e=>(0,s.X7)(t,e))}notify(t){r.V.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}resumePausedMutations(){var t;return this.resuming=(null!=(t=this.resuming)?t:Promise.resolve()).then(()=>{let t=this.mutations.filter(t=>t.state.isPaused);return r.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(s.ZT)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}var f=i(1435),y=i(47);function p(t,e){return null==t.getNextPageParam?void 0:t.getNextPageParam(e[e.length-1],e)}class v{constructor(t={}){this.queryCache=t.queryCache||new h,this.mutationCache=t.mutationCache||new d,this.logger=t.logger||n,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=f.j.subscribe(()=>{f.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=y.N.subscribe(()=>{y.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,e;this.mountCount--,0===this.mountCount&&(null==(t=this.unsubscribeFocus)||t.call(this),this.unsubscribeFocus=void 0,null==(e=this.unsubscribeOnline)||e.call(this),this.unsubscribeOnline=void 0)}isFetching(t,e){let[i]=(0,s.I6)(t,e);return i.fetchStatus="fetching",this.queryCache.findAll(i).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state.data}ensureQueryData(t,e,i){let n=(0,s._v)(t,e,i),r=this.getQueryData(n.queryKey);return r?Promise.resolve(r):this.fetchQuery(n)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>{let i=e.data;return[t,i]})}setQueryData(t,e,i){let n=this.queryCache.find(t),r=null==n?void 0:n.state.data,a=(0,s.SE)(e,r);if(void 0===a)return;let o=(0,s._v)(t),u=this.defaultQueryOptions(o);return this.queryCache.build(this,u).setData(a,{...i,manual:!0})}setQueriesData(t,e,i){return r.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state}removeQueries(t,e){let[i]=(0,s.I6)(t,e),n=this.queryCache;r.V.batch(()=>{n.findAll(i).forEach(t=>{n.remove(t)})})}resetQueries(t,e,i){let[n,a]=(0,s.I6)(t,e,i),o=this.queryCache,u={type:"active",...n};return r.V.batch(()=>(o.findAll(n).forEach(t=>{t.reset()}),this.refetchQueries(u,a)))}cancelQueries(t,e,i){let[n,a={}]=(0,s.I6)(t,e,i);void 0===a.revert&&(a.revert=!0);let o=r.V.batch(()=>this.queryCache.findAll(n).map(t=>t.cancel(a)));return Promise.all(o).then(s.ZT).catch(s.ZT)}invalidateQueries(t,e,i){let[n,a]=(0,s.I6)(t,e,i);return r.V.batch(()=>{var t,e;if(this.queryCache.findAll(n).forEach(t=>{t.invalidate()}),"none"===n.refetchType)return Promise.resolve();let i={...n,type:null!=(t=null!=(e=n.refetchType)?e:n.type)?t:"active"};return this.refetchQueries(i,a)})}refetchQueries(t,e,i){let[n,a]=(0,s.I6)(t,e,i),o=r.V.batch(()=>this.queryCache.findAll(n).filter(t=>!t.isDisabled()).map(t=>{var e;return t.fetch(void 0,{...a,cancelRefetch:null==(e=null==a?void 0:a.cancelRefetch)||e,meta:{refetchPage:n.refetchPage}})})),u=Promise.all(o).then(s.ZT);return null!=a&&a.throwOnError||(u=u.catch(s.ZT)),u}fetchQuery(t,e,i){let n=(0,s._v)(t,e,i),r=this.defaultQueryOptions(n);void 0===r.retry&&(r.retry=!1);let a=this.queryCache.build(this,r);return a.isStaleByTime(r.staleTime)?a.fetch(r):Promise.resolve(a.state.data)}prefetchQuery(t,e,i){return this.fetchQuery(t,e,i).then(s.ZT).catch(s.ZT)}fetchInfiniteQuery(t,e,i){let n=(0,s._v)(t,e,i);return n.behavior={onFetch:t=>{t.fetchFn=()=>{var e,i,s,n,r,a,o;let u;let l=null==(e=t.fetchOptions)?void 0:null==(i=e.meta)?void 0:i.refetchPage,h=null==(s=t.fetchOptions)?void 0:null==(n=s.meta)?void 0:n.fetchMore,c=null==h?void 0:h.pageParam,d=(null==h?void 0:h.direction)==="forward",f=(null==h?void 0:h.direction)==="backward",y=(null==(r=t.state.data)?void 0:r.pages)||[],v=(null==(a=t.state.data)?void 0:a.pageParams)||[],m=v,b=!1,g=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{var e,i;return null!=(e=t.signal)&&e.aborted?b=!0:null==(i=t.signal)||i.addEventListener("abort",()=>{b=!0}),t.signal}})},C=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),q=(t,e,i,s)=>(m=s?[e,...m]:[...m,e],s?[i,...t]:[...t,i]),O=(e,i,s,n)=>{if(b)return Promise.reject("Cancelled");if(void 0===s&&!i&&e.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:s,meta:t.options.meta};g(r);let a=C(r),o=Promise.resolve(a).then(t=>q(e,s,t,n));return o};if(y.length){if(d){let e=void 0!==c,i=e?c:p(t.options,y);u=O(y,e,i)}else if(f){let e=void 0!==c,i=e?c:null==(o=t.options).getPreviousPageParam?void 0:o.getPreviousPageParam(y[0],y);u=O(y,e,i,!0)}else{m=[];let e=void 0===t.options.getNextPageParam,i=!l||!y[0]||l(y[0],0,y);u=i?O([],e,v[0]):Promise.resolve(q([],v[0],y[0]));for(let i=1;i<y.length;i++)u=u.then(s=>{let n=!l||!y[i]||l(y[i],i,y);if(n){let n=e?v[i]:p(t.options,s);return O(s,e,n)}return Promise.resolve(q(s,v[i],y[i]))})}}else u=O([]);let w=u.then(t=>({pages:t,pageParams:m}));return w}}},this.fetchQuery(n)}prefetchInfiniteQuery(t,e,i){return this.fetchInfiniteQuery(t,e,i).then(s.ZT).catch(s.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){let i=this.queryDefaults.find(e=>(0,s.yF)(t)===(0,s.yF)(e.queryKey));i?i.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;let e=this.queryDefaults.find(e=>(0,s.to)(t,e.queryKey));return null==e?void 0:e.defaultOptions}setMutationDefaults(t,e){let i=this.mutationDefaults.find(e=>(0,s.yF)(t)===(0,s.yF)(e.mutationKey));i?i.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;let e=this.mutationDefaults.find(e=>(0,s.to)(t,e.mutationKey));return null==e?void 0:e.defaultOptions}defaultQueryOptions(t){if(null!=t&&t._defaulted)return t;let e={...this.defaultOptions.queries,...this.getQueryDefaults(null==t?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=(0,s.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.useErrorBoundary&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return null!=t&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==t?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}},626:function(t,e,i){i.d(e,{DV:function(){return l},Kw:function(){return o},Mz:function(){return h}});var s=i(1435),n=i(47),r=i(1361);function a(t){return Math.min(1e3*2**t,3e4)}function o(t){return(null!=t?t:"online")!=="online"||n.N.isOnline()}class u{constructor(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent}}function l(t){return t instanceof u}function h(t){let e,i,l,h=!1,c=0,d=!1,f=new Promise((t,e)=>{i=t,l=e}),y=()=>!s.j.isFocused()||"always"!==t.networkMode&&!n.N.isOnline(),p=s=>{d||(d=!0,null==t.onSuccess||t.onSuccess(s),null==e||e(),i(s))},v=i=>{d||(d=!0,null==t.onError||t.onError(i),null==e||e(),l(i))},m=()=>new Promise(i=>{e=t=>{let e=d||!y();return e&&i(t),e},null==t.onPause||t.onPause()}).then(()=>{e=void 0,d||null==t.onContinue||t.onContinue()}),b=()=>{let e;if(!d){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(p).catch(e=>{var i,s;if(d)return;let n=null!=(i=t.retry)?i:3,o=null!=(s=t.retryDelay)?s:a,u="function"==typeof o?o(c,e):o,l=!0===n||"number"==typeof n&&c<n||"function"==typeof n&&n(c,e);if(h||!l){v(e);return}c++,null==t.onFail||t.onFail(c,e),(0,r.Gh)(u).then(()=>{if(y())return m()}).then(()=>{h?v(e):b()})})}};return o(t.networkMode)?b():m().then(b),{promise:f,cancel:e=>{d||(v(new u(e)),null==t.abort||t.abort())},continue:()=>{let t=null==e?void 0:e();return t?f:Promise.resolve()},cancelRetry:()=>{h=!0},continueRetry:()=>{h=!1}}}},8641:function(t,e,i){i.d(e,{l:function(){return s}});class s{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){let e={listener:t};return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},1361:function(t,e,i){i.d(e,{A4:function(){return O},G9:function(){return w},Gh:function(){return q},I6:function(){return l},Kp:function(){return o},PN:function(){return a},Rm:function(){return d},SE:function(){return r},VS:function(){return v},X7:function(){return c},ZT:function(){return n},_v:function(){return u},_x:function(){return h},oE:function(){return P},sk:function(){return s},to:function(){return y},yF:function(){return f}});let s="undefined"==typeof window||"Deno"in window;function n(){}function r(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function o(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e,i){return C(t)?"function"==typeof e?{...i,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function l(t,e,i){return C(t)?[{...e,queryKey:t},i]:[t||{},e]}function h(t,e){let{type:i="all",exact:s,fetchStatus:n,predicate:r,queryKey:a,stale:o}=t;if(C(a)){if(s){if(e.queryHash!==d(a,e.options))return!1}else{if(!p(e.queryKey,a))return!1}}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(void 0===n||n===e.state.fetchStatus)&&(!r||!!r(e))}function c(t,e){let{exact:i,fetching:s,predicate:n,mutationKey:r}=t;if(C(r)){if(!e.options.mutationKey)return!1;if(i){if(f(e.options.mutationKey)!==f(r))return!1}else{if(!p(e.options.mutationKey,r))return!1}}return("boolean"!=typeof s||"loading"===e.state.status===s)&&(!n||!!n(e))}function d(t,e){let i=(null==e?void 0:e.queryKeyHashFn)||f;return i(t)}function f(t){return JSON.stringify(t,(t,e)=>b(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function y(t,e){return p(t,e)}function p(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!p(t[i],e[i]))}function v(t,e){if(t&&!e||e&&!t)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function m(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function b(t){if(!g(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(g(i)&&i.hasOwnProperty("isPrototypeOf"))}function g(t){return"[object Object]"===Object.prototype.toString.call(t)}function C(t){return Array.isArray(t)}function q(t){return new Promise(e=>{setTimeout(e,t)})}function O(t){q(0).then(t)}function w(){if("function"==typeof AbortController)return new AbortController}function P(t,e,i){return null!=i.isDataEqual&&i.isDataEqual(t,e)?t:"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?function t(e,i){if(e===i)return e;let s=m(e)&&m(i);if(s||b(e)&&b(i)){let n=s?e.length:Object.keys(e).length,r=s?i:Object.keys(i),a=r.length,o=s?[]:{},u=0;for(let n=0;n<a;n++){let a=s?n:r[n];o[a]=t(e[a],i[a]),o[a]===e[a]&&u++}return n===a&&u===n?e:o}return i}(t,e):e}}}]);