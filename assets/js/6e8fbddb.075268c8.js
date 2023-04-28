"use strict";(self.webpackChunkfeed_docs=self.webpackChunkfeed_docs||[]).push([[18],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},933:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(5697),o=n.n(r),i={editedBy:"editedBy_t81w",block:"block_jsl5",label:"label_ynlq",value:"value_H8Hf"},l={name:o().string.isRequired,updated:o().string,date:o().string.isRequired},s=function(e){var t=e.name,n=e.updated,r=e.date;return a.createElement("div",{className:i.editedBy},a.createElement("div",{className:i.block+" "+(r?"":i.single)},a.createElement("span",{className:i.label},"Author"),a.createElement("span",{className:i.value},t)),n?a.createElement("div",{className:i.block+" "+(r?i.double:"")},a.createElement("span",{className:i.label},"Updated by"),a.createElement("span",{className:i.value},n)):null,a.createElement("div",{className:i.block+" "+(r?i.double:"")},a.createElement("span",{className:i.label},"On"),a.createElement("span",{className:i.value},r)))};s.propTypes=l,s.defaultProps={updated:""};var c=s},2221:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(933),l=["components"],s={id:"contribute",title:"Contributing",sidebar_label:"Contributing"},c=void 0,d={unversionedId:"welcome/contribute",id:"welcome/contribute",title:"Contributing",description:"You can skip to Steps, if you already know the basics.",source:"@site/docs/welcome/contribute.md",sourceDirName:"welcome",slug:"/welcome/contribute",permalink:"/feed-docs/docs/welcome/contribute",draft:!1,editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/welcome/contribute.md",tags:[],version:"current",frontMatter:{id:"contribute",title:"Contributing",sidebar_label:"Contributing"},sidebar:"docs",previous:{title:"Introduction",permalink:"/feed-docs/docs/welcome/intro"},next:{title:"Style Guide",permalink:"/feed-docs/docs/welcome/style-guide"}},u={},p=[{value:"Docusauras alpha version*",id:"docusauras-alpha-version",level:2},{value:"Folders",id:"folders",level:2},{value:"Sidebar.js",id:"sidebarjs",level:2},{value:"Last author",id:"last-author",level:2},{value:"Merge request",id:"merge-request",level:2}],m={toc:p},f="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can skip to ",(0,o.kt)("a",{parentName:"p",href:"#sidebarjs"},"Steps"),", if you already know the basics."),(0,o.kt)("h2",{id:"docusauras-alpha-version"},"Docusauras alpha version","*"),(0,o.kt)("p",null,"We have built this portal with the excellent documentation tool called Docusaurus. We are using ",(0,o.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"version 2-alpha"),". We will merge newer upgrades and fixes release by the Docusaurus team periodically."),(0,o.kt)("p",null,"In order to contribute, you don't need to understand how Docusaurus works. However, if you are interested in it or wish to start another project, you can start with the ",(0,o.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/creating-pages"},"Guides")," sections."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Please make sure you read the version 2 documentation and not version 1.")),(0,o.kt)("h2",{id:"folders"},"Folders"),(0,o.kt)("p",null,"The docs reside in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/doc/**/*")," folder. In order to avoid duplications, we have grouped the docs inside various folders, which are as listed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/welcome/*.md")," - Welcome and get started"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/css/*.md")," - Cascading Style Sheets"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/js/*.md")," - JavaScript"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/react/*.md")," - React"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/angular/*.md")," - Angular"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/node/*.md")," - Node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/react-native/*.md")," - React Native")),(0,o.kt)("p",null,"For example, if you wish to add a ",(0,o.kt)("strong",{parentName:"p"},"coding standard")," for React, you can create the file under ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/react/coding-standards.md"),"."),(0,o.kt)("h2",{id:"sidebarjs"},"Sidebar.js"),(0,o.kt)("p",null,"Once you create the doc, you will have to reference it in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/feedpm/feed-docs/blob/main/sidebars.js"},(0,o.kt)("inlineCode",{parentName:"a"},"~/sidebar.js")),", under the correct section. You will also need to follow a few naming conventions and Markdown meta details:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You should follow ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/11273282/whats-the-name-for-hyphen-separated-case"},"kebab-case")," for naming the files."),(0,o.kt)("li",{parentName:"ol"},"Make sure you also use the same name as the id of the doc. That's the YAML details on all doc files, between ",(0,o.kt)("inlineCode",{parentName:"li"},"---"),"."),(0,o.kt)("li",{parentName:"ol"},"Reference the doc's id in ",(0,o.kt)("inlineCode",{parentName:"li"},"~/sidebar.js")," like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"<folder-name>/<file-name>"),"."),(0,o.kt)("li",{parentName:"ol"},"You will have to add the same inside ",(0,o.kt)("inlineCode",{parentName:"li"},"items")," if the doc comes under a subsection.")),(0,o.kt)("p",null,"Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nCSS: [\n  'css/intro',\n  'css/coding-guidelines',\n  {\n    type: 'category',\n    label: 'Trainings',\n    items: ['css/understanding-display'],\n  },\n  {\n    type: 'category',\n    label: 'Reusable components',\n    items: ['css/tailwind'],\n  },\n  'css/tools',\n],\n...\n")),(0,o.kt)("h2",{id:"last-author"},"Last author"),(0,o.kt)("p",null,"Each doc imports the ",(0,o.kt)("inlineCode",{parentName:"p"},'<EditedBy name="<author-name>" date="dd/mm/YYYY" />')," component and uses it at the end. This component keeps track of the last author."),(0,o.kt)("p",null,"If you make a change, you will have to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," with your name and current date. You will also have to do the same when creating a new doc."),(0,o.kt)("h2",{id:"merge-request"},"Merge request"),(0,o.kt)("p",null,"You can create a new branch from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," to start working on a new change. Once completed, you can raise a merge request against ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),". Please assign your respective approvers."),(0,o.kt)("p",null,"The approvers will review your changes. If everything is good, they will approve your contribution."),(0,o.kt)(i.Z,{name:"Vijay dev",date:"24/02/2020",mdxType:"EditedBy"}))}h.isMDXComponent=!0}}]);