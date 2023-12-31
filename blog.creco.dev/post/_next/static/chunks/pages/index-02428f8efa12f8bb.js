(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7104:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return f}});var r,n,o="refresh",u="navigate",i="restore",a="server-patch",l="prefetch",c="fast-refresh",f="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},701:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(6576),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3176:function(e,t,r){"use strict";var n=r(9826),o=r(6617),u=r(1853),i=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});var a=r(7553)._(r(9953)),l=r(6384),c=r(1875),f=r(8107),s=r(4779),d=r(5363),p=r(5796),v=r(7975),y=r(4585),b=r(701),h=r(5286),g=r(7104),_=new Set;function prefetch(e,t,r,n,o,u){if(u||(0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(_.has(i))return;_.add(i)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function formatStringOrUrl(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}var m=a.default.forwardRef(function(e,t){var r,n,f=e.href,_=e.as,m=e.children,O=e.prefetch,j=void 0===O?null:O,P=e.passHref,A=e.replace,E=e.shallow,C=e.scroll,S=e.locale,T=e.onClick,k=e.onMouseEnter,w=e.onTouchStart,I=e.legacyBehavior,M=void 0!==I&&I,x=u(e,i);r=m,M&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));var R=a.default.useContext(p.RouterContext),L=a.default.useContext(v.AppRouterContext),N=null!=R?R:L,D=!R,H=!1!==j,K=null===j?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,U=a.default.useMemo(function(){if(!R){var e=formatStringOrUrl(f);return{href:e,as:_?formatStringOrUrl(_):e}}var t=o((0,l.resolveHref)(R,f,!0),2),r=t[0],n=t[1];return{href:r,as:_?(0,l.resolveHref)(R,_):n||r}},[R,f,_]),Z=U.href,F=U.as,z=a.default.useRef(Z),B=a.default.useRef(F);M&&(n=a.default.Children.only(r));var W=M?n&&"object"==typeof n&&n.ref:t,G=o((0,y.useIntersection)({rootMargin:"200px"}),3),V=G[0],Y=G[1],X=G[2],q=a.default.useCallback(function(e){(B.current!==F||z.current!==Z)&&(X(),B.current=F,z.current=Z),V(e),W&&("function"==typeof W?W(e):"object"==typeof W&&(W.current=e))},[F,W,Z,X,V]);a.default.useEffect(function(){N&&Y&&H&&prefetch(N,Z,F,{locale:S},{kind:K},D)},[F,Z,Y,S,H,null==R?void 0:R.locale,N,D,K]);var $={ref:q,onClick:function(e){M||"function"!=typeof T||T(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,o,u,i,l,f,s){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((d=e.currentTarget.getAttribute("target"))&&"_self"!==d||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!f&&!(0,c.isLocalURL)(r)))){e.preventDefault();var d,navigate=function(){var e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:l,scroll:e}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};f?a.default.startTransition(navigate):navigate()}}(e,N,Z,F,A,E,C,S,D,H)},onMouseEnter:function(e){M||"function"!=typeof k||k(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(H||!D)&&prefetch(N,Z,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:K},D)},onTouchStart:function(e){M||"function"!=typeof w||w(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(H||!D)&&prefetch(N,Z,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:K},D)}};if((0,s.isAbsoluteUrl)(F))$.href=F;else if(!M||P||"a"===n.type&&!("href"in n.props)){var J=void 0!==S?S:null==R?void 0:R.locale,Q=(null==R?void 0:R.isLocaleDomain)&&(0,b.getDomainLocale)(F,J,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);$.href=Q||(0,h.addBasePath)((0,d.addLocale)(F,J,null==R?void 0:R.defaultLocale))}return M?a.default.cloneElement(n,$):a.default.createElement("a",_objectSpread(_objectSpread({},x),$),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4585:function(e,t,r){"use strict";var n=r(6617);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});var o=r(9953),u=r(1583),i="function"==typeof IntersectionObserver,a=new Map,l=[];function useIntersection(e){var t=e.rootRef,r=e.rootMargin,c=e.disabled||!i,f=n((0,o.useState)(!1),2),s=f[0],d=f[1],p=(0,o.useRef)(null),v=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(i){if(!c&&!s){var e,n,o,f,v=p.current;if(v&&v.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=a.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),a.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(f=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(f.delete(v),o.unobserve(v),0===f.size){o.disconnect(),a.delete(n);var e=l.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&l.splice(e,1)}}}}else if(!s){var y=(0,u.requestIdleCallback)(function(){return d(!0)});return function(){return(0,u.cancelIdleCallback)(y)}}},[c,r,t,s,p.current]),[v,s,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5288:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c},default:function(){return HomePage}});var n=r(5934),o=r(9297),u=r(8539),i=r(8007),a=r.n(i),l=r(1874),HomePage=function(e){var t,r,i=(t=e.list,(null!==(r=(0,n.g0)(o.E))&&void 0!==r?r:t).map(u.I));return i.sort(function(e,t){return e.createdAt>t.createdAt?-1:1}),(0,l.jsxs)(n.Yp,{mainBackgroundColor:n.wL.Dark,subBackgroundColor:n.wL.DeepDark,fontColor:n.wL.SoftWhite,desktopPageWidth:"840px",children:[(0,l.jsx)(n.Ki,{size:12}),(0,l.jsx)("h1",{children:"Creco's post"}),(0,l.jsx)(n.Ki,{size:60}),(0,l.jsx)("ul",{children:i.map(function(e){return(0,l.jsx)("li",{style:{marginBottom:"48px"},children:(0,l.jsxs)(a(),{href:"/".concat(e.id),className:"clickable",style:{fontSize:"1.6rem",textDecoration:"unset"},children:[(0,l.jsx)("span",{style:{lineHeight:"100%",fontSize:"1.2rem"},children:e.category}),(0,l.jsx)("h3",{children:e.title}),(0,l.jsx)(n.Ki,{size:4}),(0,l.jsx)("span",{style:{lineHeight:"100%",color:n.wL.SoftGrey},children:e.body.split("\n")[0]})]})},e.id)})})]})},c=!0},9297:function(e,t,r){"use strict";r.d(t,{E:function(){return n}});var n="blog-post"},8539:function(e,t,r){"use strict";r.d(t,{I:function(){return parsePost}});var n=r(4434);function parsePost(e){if(null==e)return{};var t,r,o,u,i,a,l,c,f,s,d,p,v,y,b,h,g,_,m,O=null!==(t=null==e?void 0:null===(r=e.body)||void 0===r?void 0:null===(o=r.contents)||void 0===o?void 0:null===(u=o.trim)||void 0===u?void 0:null===(i=(a=u.call(o)).split)||void 0===i?void 0:i.call(a,"\n"))&&void 0!==t?t:[],j=(0,n.Z)(O),P=j[0],A=j[1],E=j.slice(2),C=null!==(l=null==e?void 0:null===(c=e.body)||void 0===c?void 0:c.updatedAt)&&void 0!==l?l:null==e?void 0:null===(f=e.body)||void 0===f?void 0:f.createdAt,S=(y=(v=new Date(C)).getFullYear(),b=v.getMonth()+1,h=v.getDay()+1,g=v.getHours(),_=v.getMinutes(),m=v.getSeconds(),"".concat(y,"년 ").concat(b,"월 ").concat(h,"일 ").concat(g,"시 ").concat(_,"분 ").concat(m,"초"));return{id:e.id,category:P,title:A,body:null==E?void 0:null===(s=E.join("\n"))||void 0===s?void 0:null===(d=s.trim)||void 0===d?void 0:d.call(s),createdAt:null==e?void 0:null===(p=e.body)||void 0===p?void 0:p.createdAt,timestamp:C,date:S}}},7994:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5288)}])},8007:function(e,t,r){e.exports=r(3176)},8084:function(e,t,r){"use strict";function _arrayWithHoles(e){if(Array.isArray(e))return e}r.d(t,{Z:function(){return _arrayWithHoles}})},8713:function(e,t,r){"use strict";function _nonIterableRest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:function(){return _nonIterableRest}})},4434:function(e,t,r){"use strict";r.d(t,{Z:function(){return _toArray}});var n=r(8084),o=r(3138),u=r(8713);function _toArray(e){return(0,n.Z)(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||(0,u.Z)()}},3138:function(e,t,r){"use strict";function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}r.d(t,{Z:function(){return _unsupportedIterableToArray}})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7994)}),_N_E=e.O()}]);