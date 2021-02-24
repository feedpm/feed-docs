(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(158)),i=a(159),c={id:"contribute",title:"Contributing",sidebar_label:"Contributing"},l={unversionedId:"welcome/contribute",id:"welcome/contribute",isDocsHomePage:!1,title:"Contributing",description:"You can skip to Steps, if you already know the basics.",source:"@site/docs/welcome/contribute.md",slug:"/welcome/contribute",permalink:"/docs/welcome/contribute",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/welcome/contribute.md",version:"current",sidebar_label:"Contributing",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/welcome/intro"},next:{title:"Style Guide",permalink:"/docs/welcome/style-guide"}},s=[{value:"Docusauras alpha version*",id:"docusauras-alpha-version",children:[]},{value:"Folders",id:"folders",children:[]},{value:"Sidebar.js",id:"sidebarjs",children:[]},{value:"Last author",id:"last-author",children:[]},{value:"Merge request",id:"merge-request",children:[]}],d={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can skip to ",Object(o.b)("a",{parentName:"p",href:"#sidebarjs"},"Steps"),", if you already know the basics."),Object(o.b)("h2",{id:"docusauras-alpha-version"},"Docusauras alpha version","*"),Object(o.b)("p",null,"We have built this portal with the excellent documentation tool called Docusaurus. We are using ",Object(o.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"version 2-alpha"),". We will merge newer upgrades and fixes release by the Docusaurus team periodically."),Object(o.b)("p",null,"In order to contribute, you don't need to understand how Docusaurus works. However, if you are interested in it or wish to start another project, you can start with the ",Object(o.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/creating-pages"},"Guides")," sections."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Please make sure you read the version 2 documentation and not version 1."))),Object(o.b)("h2",{id:"folders"},"Folders"),Object(o.b)("p",null,"The docs reside in the ",Object(o.b)("inlineCode",{parentName:"p"},"/doc/**/*")," folder. In order to avoid duplications, we have grouped the docs inside various folders, which are as listed below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/welcome/*.md")," - Welcome and get started"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/css/*.md")," - Cascading Style Sheets"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/js/*.md")," - JavaScript"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/react/*.md")," - React"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/angular/*.md")," - Angular"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/node/*.md")," - Node"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/react-native/*.md")," - React Native")),Object(o.b)("p",null,"For example, if you wish to add a ",Object(o.b)("strong",{parentName:"p"},"coding standard")," for React, you can create the file under ",Object(o.b)("inlineCode",{parentName:"p"},"/docs/react/coding-standards.md"),"."),Object(o.b)("h2",{id:"sidebarjs"},"Sidebar.js"),Object(o.b)("p",null,"Once you create the doc, you will have to reference it in ",Object(o.b)("a",{parentName:"p",href:"https://code.qburst.com/vijay/feed-docs/-/blob/develop/sidebars.js"},Object(o.b)("inlineCode",{parentName:"a"},"~/sidebar.js")),", under the correct section. You will also need to follow a few naming conventions and Markdown meta details:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You should follow ",Object(o.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/11273282/whats-the-name-for-hyphen-separated-case"},"kebab-case")," for naming the files."),Object(o.b)("li",{parentName:"ol"},"Make sure you also use the same name as the id of the doc. That's the YAML details on all doc files, between ",Object(o.b)("inlineCode",{parentName:"li"},"---"),"."),Object(o.b)("li",{parentName:"ol"},"Reference the doc's id in ",Object(o.b)("inlineCode",{parentName:"li"},"~/sidebar.js")," like this: ",Object(o.b)("inlineCode",{parentName:"li"},"<folder-name>/<file-name>"),"."),Object(o.b)("li",{parentName:"ol"},"You will have to add the same inside ",Object(o.b)("inlineCode",{parentName:"li"},"items")," if the doc comes under a subsection.")),Object(o.b)("p",null,"Here is an example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"...\nCSS: [\n  'css/intro',\n  'css/coding-guidelines',\n  {\n    type: 'category',\n    label: 'Tranings',\n    items: ['css/understanding-display'],\n  },\n  {\n    type: 'category',\n    label: 'Reusable components',\n    items: ['css/tailwind'],\n  },\n  'css/tools',\n],\n...\n")),Object(o.b)("h2",{id:"last-author"},"Last author"),Object(o.b)("p",null,"Each doc imports the ",Object(o.b)("inlineCode",{parentName:"p"},'<EditedBy name="<author-name>" date="dd/mm/YYYY" />')," component and uses it at the end. This component keeps track of the last author."),Object(o.b)("p",null,"If you make a change, you will have to update the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"date")," with your name and current date. You will also have to do the same when creating a new doc."),Object(o.b)("h2",{id:"merge-request"},"Merge request"),Object(o.b)("p",null,"You can create a new branch from the ",Object(o.b)("inlineCode",{parentName:"p"},"develop")," to start working on a new change. Once completed, you can raise a merge request against ",Object(o.b)("inlineCode",{parentName:"p"},"develop"),". Please assign your respective approvers."),Object(o.b)("p",null,"The approvers will review your changes. If everything is good, they will approve your contribution."),Object(o.b)(i.a,{name:"Vijay dev",date:"24/02/2020",mdxType:"EditedBy"}))}u.isMDXComponent=!0},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(56),l=a.n(c),s={name:i.a.string.isRequired,updated:i.a.string,date:i.a.string.isRequired},d=function(e){var t=e.name,a=e.updated,n=e.date;return r.a.createElement("div",{className:l.a.editedBy},r.a.createElement("div",{className:l.a.block+" "+(n?"":l.a.single)},r.a.createElement("span",{className:l.a.label},"Author"),r.a.createElement("span",{className:l.a.value},t)),a?r.a.createElement("div",{className:l.a.block+" "+(n?l.a.double:"")},r.a.createElement("span",{className:l.a.label},"Updated by"),r.a.createElement("span",{className:l.a.value},a)):null,r.a.createElement("div",{className:l.a.block+" "+(n?l.a.double:"")},r.a.createElement("span",{className:l.a.label},"On"),r.a.createElement("span",{className:l.a.value},n)))};d.propTypes=s,d.defaultProps={updated:""},t.a=d}}]);