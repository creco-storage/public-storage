(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{2354:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return y},default:function(){return _id_}});var n=r(887);function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}var a=r(5469),o=r(3742),i=r.n(o),c=r(5710),u=r(457),l=r(4011),s=r(8057),p=r(7266),f=r(9297),d=r(1874);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return DetailsPage_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return DetailsPage_arrayLikeToArray(e,t)}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,F=function(){};return{s:F,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:F}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function DetailsPage_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var DetailsPage=function(e){var t,r,n,o,y,b=e.post,h=u.j,v=(0,c.a)(["API.of().readItem",h,null==b?void 0:b.id],(0,a.Z)(i().mark(function _callee(){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.b.of(h).readItem(null==b?void 0:b.id);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},_callee)})),{initialData:null}).data,m=null!==(r=null===(n=null!=v?v:{})||void 0===n?void 0:n.data)&&void 0!==r?r:b,g=function(e){if(Array.isArray(e))return e}(t=null!==(o=null==m?void 0:m.body.contents.trim().split("\n"))&&void 0!==o?o:[])||_iterableToArray(t)||_unsupportedIterableToArray(t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),w=g[0],j=g.slice(1),_=new Date(null!==(y=null==m?void 0:m.body.updatedAt)&&void 0!==y?y:null==m?void 0:m.body.createdAt);return(0,d.jsxs)(s.T3,{children:[(0,d.jsx)("p",{style:{fontSize:"10px",color:f.w.DeepDark},children:null==b?void 0:b.id}),(0,d.jsx)("p",{children:_.toLocaleString("ko-KR",{timeZone:"UTC"})}),(0,d.jsx)("h2",{style:{textDecoration:"underline"},children:w}),(0,d.jsx)(p.K,{size:20}),(0,d.jsx)(Post,{dangerouslySetInnerHTML:{__html:function(e){var t,r=[],n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.startsWith("https://")&&a.endsWith(".jpg")){var o=a.split(",");r.push('\n        <div style="text-align: center; display: flex; width: 100%; justify-content: space-evenly; flex-wrap: wrap; gap: 20px;">\n          '.concat(o.map(function(e){return'<img src="'.concat(e,'" style="max-height: 400px; max-width: 100%" />')}).join(""),"\n        </div>\n      "))}else{var i,c,u=/!?\[([^\]]*)\]\(([^\)]+)\)/gm,l=(i=a.matchAll(u),function(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(i)||_iterableToArray(i)||_unsupportedIterableToArray(i)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=_createForOfIteratorHelper(l);try{for(s.s();!(c=s.n()).done;){var p=c.value;a=a.replace(p[0],'<a style="color: skyblue" href="'.concat(p[2],'" target="_blank">').concat(p[1],"</a>"))}}catch(e){s.e(e)}finally{s.f()}r.push(a)}}}catch(e){n.e(e)}finally{n.f()}return r.join("\n")}(j)}})]})},Post=function(e){return(0,d.jsx)("div",_objectSpread(_objectSpread({},e),{},{className:null==e.className?"Post":"Post ".concat(e.className),style:_objectSpread({fontSize:"1.6rem",whiteSpace:"pre-wrap",wordBreak:"keep-all"},e.style)}))},y=!0;function _id_(e){var t=e.post;return(0,d.jsx)(DetailsPage,{post:t})}},457:function(e,t,r){"use strict";r.d(t,{j:function(){return n}});var n="ce62b77189108398c8655c33dbb608ee"},4011:function(e,t,r){"use strict";r.d(t,{b:function(){return u}});var n,a=r(5469),o=r(3742),i=r.n(o),c=r(9629),u={of:function(e){var t;return{readList:(t=(0,a.Z)(i().mark(function _callee(){var t;return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(null==e||""===e||"undefined"===e)){r.next=2;break}return r.abrupt("return",[]);case 2:return r.next=4,get("/api/gist/".concat(e,"/list"));case 4:return t=r.sent.data,r.abrupt("return",t.items);case 7:case"end":return r.stop()}},_callee)})),function(){return t.apply(this,arguments)}),readItem:function(t){return get("/api/gist/".concat(e,"/").concat(t))}}},getList:(n=(0,a.Z)(i().mark(function _callee2(){var e;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,get("/api/gist/category");case 2:return e=t.sent.data,t.abrupt("return",e);case 5:case"end":return t.stop()}},_callee2)})),function(){return n.apply(this,arguments)})};function get(e){return _get.apply(this,arguments)}function _get(){return(_get=(0,a.Z)(i().mark(function _callee3(e){var t;return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("".concat("").concat(e));case 2:return t=r.sent.data,r.abrupt("return",t);case 5:case"end":return r.stop()}},_callee3)}))).apply(this,arguments)}},8057:function(e,t,r){"use strict";r.d(t,{T3:function(){return Page}});var n=r(469),a=r(887),o=r(9953),i=r(9297),c=r(1874),u=["children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Page=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(MobilePage,_objectSpread({},e)),(0,c.jsx)(DesktopPage,_objectSpread({},e))]})},MobilePage=function(e){var t=useWindowSize().width,r=(0,o.useState)(!1),n=r[0],a=r[1];return((0,o.useEffect)(function(){var e=document.querySelector(".mobile-ui");null!=e&&a("none"===e.computedStyleMap().get("display").value)},[t]),n)?null:(0,c.jsx)("div",_objectSpread(_objectSpread({},e),{},{className:null==e.className?"mobile-ui":"mobile-ui ".concat(e.className),style:_objectSpread({backgroundColor:i.w.Dark,minHeight:"100vh",color:i.w.SoftWhite,fontSize:"1.6rem",padding:"16px"},e.style)}))},DesktopPage=function(e){var t=useWindowSize().width,r=(0,o.useState)(!1),a=r[0],l=r[1],s=e.children,p=(0,n.Z)(e,u);return((0,o.useEffect)(function(){var e=document.querySelector(".desktop-ui");null!=e&&l("none"===e.computedStyleMap().get("display").value)},[t]),a)?null:(0,c.jsx)("div",_objectSpread(_objectSpread({},p),{},{className:null==p.className?"desktop-ui":"desktop-ui ".concat(p.className),style:_objectSpread({backgroundColor:i.w.DeepDark,minHeight:"100vh",color:i.w.SoftWhite,fontSize:"1.6rem"},p.style),children:(0,c.jsx)("div",{style:{backgroundColor:i.w.Dark,minHeight:"100vh",maxWidth:"1024px",padding:"16px 32px",boxShadow:"0px 0px 4px 20px ".concat(i.w.Dark),fontSize:"1.6rem",margin:"0 auto"},children:s})}))};function useWindowSize(){var e=(0,o.useState)({width:void 0}),t=e[0],r=e[1];return(0,o.useEffect)(function(){function handleResize(){r({width:window.innerWidth})}return window.addEventListener("resize",handleResize),handleResize(),function(){return window.removeEventListener("resize",handleResize)}},[]),t}},7266:function(e,t,r){"use strict";r.d(t,{K:function(){return Spacing}});var n=r(1874);function Spacing(e){var t=e.size;return(0,n.jsx)("div",{style:{width:"100%",height:"".concat(t,"px")}})}},1476:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return r(2354)}])}},function(e){e.O(0,[365,774,888,179],function(){return e(e.s=1476)}),_N_E=e.O()}]);