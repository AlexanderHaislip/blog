(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7pXE":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),s=t("Wbzz");a.a=function(e){var a=e.skip,t=e.total,n=Math.ceil(t/5),l=a/5+1,c=l!==n,i=1!==l;return r.a.createElement("nav",{className:"pagination",role:"navigation"},i&&r.a.createElement(s.Link,{to:2===l?"/":"/page/"+(l-1),className:"newer-posts"},r.a.createElement("span",{"aria-hidden":"true"},"←")," Newer Posts"),r.a.createElement("span",{className:"page-number"},"Page "+l+" of "+n),c&&r.a.createElement(s.Link,{to:"/page/"+(l+1),className:"older-posts"},"Older Posts ",r.a.createElement("span",{"aria-hidden":"true"},"→")))}},B9Dr:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),s=t("Wbzz"),l=t("LlRK"),c=t.n(l);a.a=function(e){var a=e.node,t=a.excerpt,n=a.frontmatter;return[r.a.createElement("div",{key:"sample",className:"sample animated fadeIn"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title animated fadeInUp"},r.a.createElement(s.Link,{to:n.path},r.a.createElement("h1",null,n.title))),r.a.createElement("div",{className:"sidebar text-right meta"},r.a.createElement("div",{className:"published animated fadeInUp"},r.a.createElement("strong",null,"Published"),r.a.createElement(c.a,{date:n.date,className:"timeago"})),r.a.createElement("span",{className:"separator animated fadeInUp"},"//"),r.a.createElement("div",{className:"tags animated fadeInUp"},r.a.createElement("strong",null,"Tags"),n.tags.map((function(e,a){return r.a.createElement(s.Link,{key:a,to:"/tag/"+e},e)})))))),r.a.createElement("article",{key:"article",className:"excerpt animated fadeIn post tag-f tag-fable tag-vscode"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,t,"…")))]}},"tJ/O":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p})),t.d(a,"blogListQuery",(function(){return d}));t("E5k/");var n=t("q1tI"),r=t.n(n),s=t("7oih"),l=t("vrFN"),c=t("bb4b"),i=t.n(c),o=t("B9Dr"),m=t("7pXE");var p=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,a=this.props.data.allMarkdownRemark.edges;return r.a.createElement(i.a,{className:"paged archive-template"},r.a.createElement(s.a,{location:this.props.location,title:e},r.a.createElement(l.a,{title:"Page",keywords:["blog","blog.nojaf.com"]}),r.a.createElement("div",{className:"main"},a.map((function(e,a){return r.a.createElement(o.a,Object.assign({key:"preview-"+a},e))})),r.a.createElement(m.a,{total:this.props.data.allMarkdownRemark.totalCount,skip:this.props.pageContext.skip}))))},n}(r.a.Component),d="182289170"}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-bb1779ec0e0e7c3d56b4.js.map