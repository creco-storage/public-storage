(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(8301).Z)(n(9953)).default.createContext({});t.AmpStateContext=r},8118:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},5152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var r=n(417).Z,a=n(8301).Z,u=(0,n(5349).Z)(n(9953)),o=a(n(6909)),d=n(39),i=n(7131),c=n(8118);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(7583);var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,a,o,d,i=t.inAmpMode;return e.reduce(f,[]).reverse().concat(l(i).reverse()).filter((n=new Set,a=new Set,o=new Set,d={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var u=e.key.slice(e.key.indexOf("$")+1);n.has(u)?t=!1:n.add(u)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var i=0,c=s.length;i<c;i++){var l=s[i];if(e.props.hasOwnProperty(l)){if("charSet"===l)o.has(l)?t=!1:o.add(l);else{var f=e.props[l],p=d[l]||new Set;("name"!==l||!r)&&p.has(f)?t=!1:(p.add(f),d[l]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!i&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=r({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,u.default.cloneElement(e,a)}return u.default.cloneElement(e,{key:n})})}var h=function(e){var t=e.children,n=u.useContext(d.AmpStateContext),r=u.useContext(i.HeadManagerContext);return u.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:c.isInAmpMode(n)},t)};t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,d=e.reduceComponentsToState;function i(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(d(t,e))}}return a&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),i()),u(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),u(function(){return n&&(n._pendingUpdate=i),function(){n&&(n._pendingUpdate=i)}}),o(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(5349).Z)(n(9953)),a=!1,u=a?function(){}:r.useLayoutEffect,o=a?function(){}:r.useEffect},5054:function(e,t,n){"use strict";n.r(t);var r=n(6593),a=n.n(r),u=n(5617),o=function(){return(0,u.BX)("div",{children:[(0,u.tZ)(a(),{children:(0,u.tZ)("title",{children:"Hello world!"})}),(0,u.tZ)("main",{children:(0,u.tZ)("h1",{children:"hello world!!!!"})})]})};t.default=o},5633:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5054)}])},6593:function(e,t,n){e.exports=n(5152)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5633)}),_N_E=e.O()}]);