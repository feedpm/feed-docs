(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{158:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(m,l(l({ref:t},i),{},{components:a})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),c=a.n(o),l=a(56),s=a.n(l),i={name:c.a.string.isRequired,updated:c.a.string,date:c.a.string.isRequired},p=function(e){var t=e.name,a=e.updated,n=e.date;return r.a.createElement("div",{className:s.a.editedBy},r.a.createElement("div",{className:s.a.block+" "+(n?"":s.a.single)},r.a.createElement("span",{className:s.a.label},"Author"),r.a.createElement("span",{className:s.a.value},t)),a?r.a.createElement("div",{className:s.a.block+" "+(n?s.a.double:"")},r.a.createElement("span",{className:s.a.label},"Updated by"),r.a.createElement("span",{className:s.a.value},a)):null,r.a.createElement("div",{className:s.a.block+" "+(n?s.a.double:"")},r.a.createElement("span",{className:s.a.label},"On"),r.a.createElement("span",{className:s.a.value},n)))};p.propTypes=i,p.defaultProps={updated:""},t.a=p},215:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/webpackDependancyGraph-ad919ecda60c33100f8f30dea096dfdc.png"},216:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/webpack_SamplCode-209d10bd1637333ef6625c876e6655ad.png"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(158)),c=a(159),l={id:"webpack",title:"Webpack",sidebar_label:"Webpack"},s={unversionedId:"react/training/webpack",id:"react/training/webpack",isDocsHomePage:!1,title:"Webpack",description:"Webpack",source:"@site/docs/react/training/webpack.md",slug:"/react/training/webpack",permalink:"/feed-docs/docs/react/training/webpack",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/react/training/webpack.md",version:"current",sidebar_label:"Webpack",sidebar:"docs",previous:{title:"Components-Props-Communication",permalink:"/feed-docs/docs/react/training/components-props-communication"},next:{title:"Parent-child interaction of components",permalink:"/feed-docs/docs/react/training/parent-child-interaction-of-components"}},i=[{value:"Webpack",id:"webpack",children:[]},{value:"Webpack DevServer",id:"webpack-devserver",children:[]}],p={toc:i};function b(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"webpack"},"Webpack"),Object(o.b)("p",null,"Webpack is a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"static module bundler"))," , acting as a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser."),Object(o.b)("p",null,"Webpack relies on ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"dependency graph"))," and analyzes dependencies among different modules (not only JS but also CSS, HTML, etc) and generates assets in the form of ",Object(o.b)("strong",{parentName:"p"},"linked trees")," ."),Object(o.b)("h4",{id:"how-webpack-works"},"How webpack works"),Object(o.b)("p",null,"Dependency graph is a directed graph representing dependencies of several modules towards each other. When webpack processes an application, it begins from a list of predefined modules either from the command line or in its configuration file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module the application needs, then bundles all of those modules into a small number of bundles - often, just one - to be loaded by the browser."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Webpack Dependancy",src:a(215).default})),Object(o.b)("h4",{id:"installation-and-usage"},"Installation and usage"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"npm install webpack --save-dev")),Object(o.b)("p",null,"Command to run webpack: ",Object(o.b)("em",{parentName:"p"},"webpack main.js bundle.js")," where main.js will be point from where the webpack starts the dependany generation and bundle.js will be the final bundled output file."),Object(o.b)("p",null,"Default entry file : src/index.js Default output file : /dist/main.js"),Object(o.b)("h4",{id:"core-concepts-of-a-webpack-file"},"Core Concepts of a webpack file"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Entry points:")," This determines the first JS code executed when a page is loaded. Dependencies are analyzed from this first module.",Object(o.b)("br",{parentName:"p"}),"\n","Default entry property in a webpack file is set to ./src/index.js,"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Output:")," Determines the out folder, file names, etc. The default value for this property is ./dist/main.js for the main bundle and ./dist for other generated files."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Loaders:")," Loaders are used for transformations on a resource file. Webpack can understand only JS and JSON files. Other types of files like css, sass, images etc acan only be understood with the help of loaders and so each module is loaded through a loader. A loader mainly has two properties ",Object(o.b)("em",{parentName:"p"},"test")," and ",Object(o.b)("em",{parentName:"p"},"use"),". test checks the type of file to be analysed and use determines the loader to used for that particular type. For example, babel is a loader used to process ES6 to ES5 files."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"context:")," Base directory for resolving the entry option. This needs to be mentioned as an absolute path !!!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"module:")," Options affecting normal modules, like which one must be automatically loaded."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"resolve:")," Determines how modules are loaded."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"target:")," Compiles depending the target environment (browser, node, webworker, etc)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"devtool:")," Enhance debugging (generates map files)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"plugins:")," Additional plugins added to the compiler. Its helps to perform more range of tasks like optimisations, asset management etc."),Object(o.b)("h4",{id:"sample-code-of-webpack"},"Sample Code of Webpack"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Webpack SampleCode",src:a(216).default})),Object(o.b)("h3",{id:"webpack-devserver"},"Webpack DevServer"),Object(o.b)("p",null,"During the development you need a mechanism to serve your files from a local server and auto reload changes to avoid refreshing browser again and again after you make any changes. Webpack provides this option by acting as a local developement server."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"npm i webpack-dev-server")," Entry in package.json: ",Object(o.b)("em",{parentName:"p"},'scripts": {"start": "webpack-dev-server --mode development"}')),Object(o.b)("h4",{id:"why-use-webpack"},"Why Use Webpack"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Beneficial for building complex front-end applications"),Object(o.b)("li",{parentName:"ul"},"Elimination of dead assets"),Object(o.b)("li",{parentName:"ul"},"Splitting code made easier"),Object(o.b)("li",{parentName:"ul"},"Controlling how assets are processed"),Object(o.b)("li",{parentName:"ul"},"Stable production deploys"),Object(o.b)("li",{parentName:"ul"},"Excellent speeds when used accurately")),Object(o.b)("h4",{id:"general-pros-and-cons-of-webpack"},"General Pros and Cons of Webpack"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pros:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Great for working with singe-page apps"),Object(o.b)("li",{parentName:"ul"},"Accepts both require() and import module syntaxes"),Object(o.b)("li",{parentName:"ul"},"Allows for very advanced code splitting"),Object(o.b)("li",{parentName:"ul"},"Hot Reload for quicker development with React, Vue.js and similar frameworks"),Object(o.b)("li",{parentName:"ul"},"\u041cost popular build tool")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cons:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Not suitable for beginners in web development"),Object(o.b)("li",{parentName:"ul"},"Working with CSS files, images, and other non-JS resources is confusing at first"),Object(o.b)("li",{parentName:"ul"},"Documentation could be better"),Object(o.b)("li",{parentName:"ul"},"Updated very frequently")),Object(o.b)(c.a,{name:"Meenu",date:"20/05/2020",mdxType:"EditedBy"}))}b.isMDXComponent=!0}}]);