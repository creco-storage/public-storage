(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2072:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(8301).Z)(n(9953)).default.createContext({});t.AmpStateContext=r},9460:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=s,t.default=void 0;var r=n(417).Z,o=n(8301).Z,a=(0,n(5349).Z)(n(9953)),u=o(n(9435)),i=n(2072),c=n(9661),f=n(9460);function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(9790);var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,o,u,i,c=t.inAmpMode;return e.reduce(l,[]).reverse().concat(s(c).reverse()).filter((n=new Set,o=new Set,u=new Set,i={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var a=e.key.slice(e.key.indexOf("$")+1);n.has(a)?t=!1:n.add(a)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var c=0,f=d.length;c<f;c++){var s=d[c];if(e.props.hasOwnProperty(s)){if("charSet"===s)u.has(s)?t=!1:u.add(s);else{var l=e.props[s],p=i[s]||new Set;("name"!==s||!r)&&p.has(l)?t=!1:(p.add(l),i[s]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=r({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:n})})}var h=function(e){var t=e.children,n=a.useContext(i.AmpStateContext),r=a.useContext(c.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:p,headManager:r,inAmpMode:f.isInAmpMode(n)},t)};t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9435:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,i=e.reduceComponentsToState;function c(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(i(t,e))}}return o&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),c()),a(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),a(function(){return n&&(n._pendingUpdate=c),function(){n&&(n._pendingUpdate=c)}}),u(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(5349).Z)(n(9953)),o=!1,a=o?function(){}:r.useLayoutEffect,u=o?function(){}:r.useEffect},1175:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(3574);function o(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(f){n(f);return}i.done?t(c):Promise.resolve(c).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function i(e){o(u,r,a,i,c,"next",e)}function c(e){o(u,r,a,i,c,"throw",e)}i(void 0)})}}var u=n(6189),i=n.n(u),c=n(1754),f=n.n(c),s=n(2818),l=n(9953);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function h(){return(h=a(i().mark(function e(){var t;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://app.divops.kr/github-api/api/user/info",{method:"GET",headers:p({},v())});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(){var e=localStorage.getItem("authorization");return null!=e?{Authorization:e}:{}}var y=n(2656);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var b=function(){var e,t,n,o,a=(0,l.useState)(!1),u=a[0],i=a[1],c=(n=(t=(0,l.useState)(null))[0],o=t[1],(0,l.useEffect)(function(){(function(){return h.apply(this,arguments)})().then(function(e){var t=e.data;null!=t&&o(t.login)})},[]),{user:n,clear:function(){o(null)}}),d=c.user,p=c.clear,v=(e=(0,s.useRouter)(),{resetQueryParam:function(t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e.query);delete n[t],e.replace({pathname:e.pathname,query:n})}}).resetQueryParam,b=(0,s.useRouter)();return((0,l.useEffect)(function(){if(b.isReady){var e=b.query.code;if(null==e||Array.isArray(e)){i(!1);return}i(!0),localStorage.setItem("authorization",e),v("code")}},[b]),u)?(0,y.tZ)("div",{children:"로그인 중"}):null!=d?(0,y.BX)("div",{children:[(0,y.BX)("h1",{children:["환영합니다, ",d,"님!"]}),(0,y.tZ)("button",{onClick:function(){(function(){O.apply(this,arguments)})(),p()},children:"로그아웃"})]}):(0,y.BX)("div",{children:[(0,y.tZ)(f(),{children:(0,y.tZ)("title",{children:"로그인"})}),(0,y.BX)("main",{children:[(0,y.tZ)("h1",{children:"로그인하기"}),(0,y.tZ)("button",{onClick:function(){location.assign("https://app.divops.kr/github-api/request?referrer=".concat(location.href))},children:"로그인"})]})]})};function O(){return(O=a(i().mark(function e(){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("authorization");case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}},522:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1175)}])},1754:function(e,t,n){e.exports=n(91)},2818:function(e,t,n){e.exports=n(53)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=522)}),_N_E=e.O()}]);