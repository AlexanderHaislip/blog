"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[205],{417:function(e,t,r){var n=r(7294),a=r(4839),o=r(5697);function l(e){return e.split(/\s+/)}function i(e){return e.children?n.Children.only(e.children):null}i.displayName="BodyClassName",i.cache=[],i.propTypes={className:o.string.isRequired},e.exports=a((function(e){return e.map((function(e){return e.className})).filter((function(e,t,r){return r.indexOf(e)===t})).join(" ")}),(function(e){var t=l(document.body.className).filter((function(e){return-1===i.cache.indexOf(e)})),r=l(e);i.cache=r,document.body.className=t.concat(r).join(" ").trim()}))(i)},3219:function(e,t){function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||o(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(e);if(!Number.isNaN(t.valueOf()))return t;var a=String(e).match(/\d+/g);if(null==a||a.length<=2)return t;var l=a.map((function(e){return parseInt(e)})),i=function(e){if(Array.isArray(e))return e}(m=l)||o(m)||n(m)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=i[0],u=i[1],f=i.slice(2),s=[c,u-1].concat(r(f));return new Date(Date.UTC.apply(Date,r(s)));var m}},1881:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return e+" "+(1!==e?t+"s":t)+" "+r}},2503:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=function(e){var t=e.date,r=e.formatter,n=void 0===r?o.default:r,c=e.component,u=void 0===c?"time":c,s=e.live,d=void 0===s||s,h=e.minPeriod,w=void 0===h?0:h,j=e.maxPeriod,O=void 0===j?v:j,I=e.title,S=e.now,P=void 0===S?function(){return Date.now()}:S,A=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,i),M=(N=p((0,a.useState)(0),2),N[0],k=N[1],(0,a.useCallback)((function(){k((function(e){return e+1}))}),[]));var N,k;(0,a.useEffect)((function(){if(d){var e;return function r(n){var a=(0,l.default)(t).valueOf();if(a){var o=P(),i=Math.round(Math.abs(o-a)/1e3),c=i<60?1e3:i<b?6e4:i<y?36e5:6048e5,u=Math.min(Math.max(c,1e3*w),1e3*O);u&&(e&&clearTimeout(e),e=setTimeout(r,u)),n||M()}else console.warn("[react-timeago] Invalid Date provided")}(!0),function(){clearTimeout(e)}}}),[t,M,d,O,w,P]);var x=u,D=(0,l.default)(t).valueOf();if(!D)return null;var T=P(),_=Math.round(Math.abs(T-D)/1e3),C=D<T?"ago":"from now",U=p(_<60?[Math.round(_),"second"]:_<b?[Math.round(_/60),"minute"]:_<y?[Math.round(_/b),"hour"]:_<v?[Math.round(_/y),"day"]:_<g?[Math.round(_/v),"week"]:_<E?[Math.round(_/g),"month"]:[Math.round(_/E),"year"],2),F=U[0],Z=U[1],R=void 0===I?"string"==typeof t?t:(0,l.default)(t).toISOString().substr(0,16).replace("T"," "):I,W="time"===x?m(m({},A),{},{dateTime:(0,l.default)(t).toISOString()}):A,q=o.default.bind(null,F,Z,C);return a.createElement(x,f({},W,{title:R}),n(F,Z,C,D,q,P))};var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(7294)),o=c(r(1881)),l=c(r(3219)),i=["date","formatter","component","live","minPeriod","maxPeriod","title","now"];function c(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=3600,y=86400,v=7*y,g=30*y,E=365*y},7190:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(7294),a=r(417),o=r.n(a),l=r(3317),i=r(262),c=r(2503),u=r.p+"static/about-7dc79bdb060a32148a8883bdf07c37e2.jpg",f=function(e){return n.createElement(o(),{className:"post-template page-template page"},n.createElement(l.Z,{location:e.location,title:"About blog.nojaf.com"},n.createElement(i.Z,{title:"About blog.nojaf.com",keywords:["blog","blog.nojaf.com"]}),n.createElement("div",{className:"main"},n.createElement("header",{className:"animated fadeIn",style:{backgroundImage:"url("+u+")"}},n.createElement("div",{className:"container","data-stellar-ratio":"0.75"},n.createElement("div",{className:"title animated fadeInUp"},n.createElement("h1",null,"About nojaf.com"),n.createElement("div",{className:"share"},"Share this on"," ",n.createElement("a",{id:"twitter",href:"http://twitter.com/share?text=About%20nojaf.com&url=http://blog.nojaf.com/about-nojaf-com/"},n.createElement("i",{className:"fa nojaf-share-icon fa-twitter"})))),n.createElement("div",{className:"sidebar text-right meta"},n.createElement("div",{className:"published animated fadeInUp"},n.createElement("strong",null,"Last Updated"),n.createElement(c.Z,{date:"2019-01-04",className:"timeago"}))))),n.createElement("article",{className:"animated fadeIn post page"},n.createElement("div",{className:"container"},n.createElement("h2",{id:"florianverdonck"},"Florian Verdonck"),n.createElement("p",null,"I'm an eccentric ",n.createElement("strong",null,"developer")," with ambitions and a progressive mindset. I'm into functional programming and have a strong affinity for the web."),n.createElement("h2",{id:"talesonnojafcom"},"Tales on nojaf.com"),n.createElement("p",null,"As a ",n.createElement("strong",null,"software craftsman")," I frequently come across new technologies and interesting things about code."," ",n.createElement("br",null),"And every once in a while, I try to blog about my adventures."),n.createElement("h2",null,"Open-source adventures"),n.createElement("p",null,"Over the years, I've been involved in the ",n.createElement("strong",null,"F# community")," and I have contributed to numerous projects. In 2018 I became the maintainer of the ",n.createElement("a",{href:"https://github.com/fsprojects/fantomas"},"Fantomas project"),n.createElement("br",null)),n.createElement("p",null,"If you like what I do, you could consider ",n.createElement("a",{href:"https://github.com/sponsors/nojaf"},"sponsoring")," me to show your support."),n.createElement("h2",{id:"thingsthatarecoolnow"},"Things that are cool now ;)"),n.createElement("p",null,"I'd like to give you some links and buzzwords of stuff I'm looking into at the moment:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"https://facebook.github.io/react"},"React js")),n.createElement("li",null,n.createElement("a",{href:"http://www.asp.net/vnext"},"ASP NET Core")),n.createElement("li",null,n.createElement("a",{href:"https://www.jetbrains.com/rider"},"Rider")),n.createElement("li",null,n.createElement("a",{href:"http://fsharp.org"},"F#")),n.createElement("li",null,n.createElement("a",{href:"https://github.com/giraffe-fsharp/Giraffe"},"Giraffe")),n.createElement("li",null,n.createElement("a",{href:"http://fable.io"},"Fable")),n.createElement("li",null,n.createElement("a",{href:"https://fable-elmish.github.io/elmish"},"Elmish")),n.createElement("li",null,n.createElement("a",{href:"http://bulma.io"},"Bulma")),n.createElement("li",null,n.createElement("a",{href:"http://elm-lang.org"},"Elm"))),n.createElement("p",null,"Disclaimer: the opinions expressed herein are my own personal opinions and do not represent my employer's view in any way."))))))}}}]);
//# sourceMappingURL=component---src-pages-about-nojaf-com-js-0be0790ab1ff6c72eefb.js.map