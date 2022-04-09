"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[942],{417:function(e,t,r){var n=r(7294),a=r(4839),o=r(5697);function i(e){return e.split(/\s+/)}function l(e){return e.children?n.Children.only(e.children):null}l.displayName="BodyClassName",l.cache=[],l.propTypes={className:o.string.isRequired},e.exports=a((function(e){return e.map((function(e){return e.className})).filter((function(e,t,r){return r.indexOf(e)===t})).join(" ")}),(function(e){var t=i(document.body.className).filter((function(e){return-1===l.cache.indexOf(e)})),r=i(e);l.cache=r,document.body.className=t.concat(r).join(" ").trim()}))(l)},3219:function(e,t){function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||o(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(e);if(!Number.isNaN(t.valueOf()))return t;var a=String(e).match(/\d+/g);if(null==a||a.length<=2)return t;var i=a.map((function(e){return parseInt(e)})),l=function(e){if(Array.isArray(e))return e}(m=i)||o(m)||n(m)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=l[0],u=l[1],f=l.slice(2),s=[c,u-1].concat(r(f));return new Date(Date.UTC.apply(Date,r(s)));var m}},1881:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return e+" "+(1!==e?t+"s":t)+" "+r}},2503:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=function(e){var t=e.date,r=e.formatter,n=void 0===r?o.default:r,c=e.component,u=void 0===c?"time":c,s=e.live,d=void 0===s||s,y=e.minPeriod,w=void 0===y?0:y,E=e.maxPeriod,j=void 0===E?h:E,N=e.title,S=e.now,M=void 0===S?function(){return Date.now()}:S,P=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,l),k=(I=p((0,a.useState)(0),2),I[0],x=I[1],(0,a.useCallback)((function(){x((function(e){return e+1}))}),[]));var I,x;(0,a.useEffect)((function(){if(d){var e;return function r(n){var a=(0,i.default)(t).valueOf();if(a){var o=M(),l=Math.round(Math.abs(o-a)/1e3),c=l<60?1e3:l<b?6e4:l<v?36e5:6048e5,u=Math.min(Math.max(c,1e3*w),1e3*j);u&&(e&&clearTimeout(e),e=setTimeout(r,u)),n||k()}else console.warn("[react-timeago] Invalid Date provided")}(!0),function(){clearTimeout(e)}}}),[t,k,d,j,w,M]);var A=u,D=(0,i.default)(t).valueOf();if(!D)return null;var _=M(),T=Math.round(Math.abs(_-D)/1e3),C=D<_?"ago":"from now",U=p(T<60?[Math.round(T),"second"]:T<b?[Math.round(T/60),"minute"]:T<v?[Math.round(T/b),"hour"]:T<h?[Math.round(T/v),"day"]:T<g?[Math.round(T/h),"week"]:T<O?[Math.round(T/g),"month"]:[Math.round(T/O),"year"],2),Z=U[0],R=U[1],W=void 0===N?"string"==typeof t?t:(0,i.default)(t).toISOString().substr(0,16).replace("T"," "):N,L="time"===A?m(m({},P),{},{dateTime:(0,i.default)(t).toISOString()}):P,$=o.default.bind(null,Z,R,C);return a.createElement(A,f({},L,{title:W}),n(Z,R,C,D,$,M))};var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,r&&r.set(e,a);return a}(r(7294)),o=c(r(1881)),i=c(r(3219)),l=["date","formatter","component","live","minPeriod","maxPeriod","title","now"];function c(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=3600,v=86400,h=7*v,g=30*v,O=365*v},2376:function(e,t,r){var n=r(7294),a=r(1597),o=r(2503);t.Z=function(e){var t=e.node,r=t.excerpt,i=t.frontmatter;return[n.createElement("div",{key:"sample",className:"sample animated fadeIn"},n.createElement("div",{className:"container"},n.createElement("div",{className:"title animated fadeInUp"},n.createElement(a.Link,{to:i.path},n.createElement("h1",null,i.title))),n.createElement("div",{className:"sidebar text-right meta"},n.createElement("div",{className:"published animated fadeInUp"},n.createElement("strong",null,"Published"),n.createElement(o.Z,{date:i.date,className:"timeago"})),n.createElement("span",{className:"separator animated fadeInUp"},"//"),n.createElement("div",{className:"tags animated fadeInUp"},n.createElement("strong",null,"Tags"),i.tags.map((function(e,t){return n.createElement(a.Link,{key:t,to:"/tag/"+e},e)})))))),n.createElement("article",{key:"article",className:"excerpt animated fadeIn post tag-f tag-fable tag-vscode"},n.createElement("div",{className:"container"},n.createElement("p",null,r,"…")))]}},6602:function(e,t,r){r.r(t);var n=r(7294),a=r(3317),o=r(262),i=r(417),l=r.n(i),c=r(2376),u=function(e){var t=e.tag,r=e.total;return n.createElement("header",{className:"animated fadeIn"},n.createElement("div",{className:"container","data-stellar-ratio":"0.75"},n.createElement("div",{className:"title animated fadeInUp"},n.createElement("h1",null,t),n.createElement("div",{className:"share"},"Share this on ",n.createElement("a",{id:"twitter",href:"http://twitter.com/share?text="+t+" on &amp;url=http://blog.nojaf.com/tag/"+t+"/"},n.createElement("i",{className:"fa nojaf-share-icon fa-twitter"})))),n.createElement("div",{className:"sidebar text-right meta"},n.createElement("div",{className:"published animated fadeInUp"},n.createElement("strong",null,r," articles")))))};t.default=function(e){var t=e.pageContext,r=e.data,i=e.location,f=t.tag,s=r.allMarkdownRemark.totalCount,m=r.site.siteMetadata.title,d=r.allMarkdownRemark.edges;return n.createElement(l(),{className:"tag-template tag-"+f},n.createElement(a.Z,{location:i,title:m},n.createElement(o.Z,{title:f,keywords:["blog","blog.nojaf.com"]}),n.createElement("div",{className:"main"},n.createElement(u,{total:s,tag:f}),d.map((function(e,t){return n.createElement(c.Z,Object.assign({key:"preview-"+t},e))})))))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-30afd902004b443599e2.js.map