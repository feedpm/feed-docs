(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),s=(n(0),n(158)),r=n(159),l={id:"coding-guidelines",title:"Coding guidelines",sidebar_label:"Coding guidelines"},o={unversionedId:"css/coding-guidelines",id:"css/coding-guidelines",isDocsHomePage:!1,title:"Coding guidelines",description:"Implementing the CSS Reset",source:"@site/docs/css/coding-guidelines.md",slug:"/css/coding-guidelines",permalink:"/feed-docs/docs/css/coding-guidelines",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/css/coding-guidelines.md",version:"current",sidebar_label:"Coding guidelines",sidebar:"docs",previous:{title:"Cascading Style Sheets",permalink:"/feed-docs/docs/css/intro"},next:{title:"CSS Syllabus",permalink:"/feed-docs/docs/css/css-syllabus"}},c=[{value:"Implementing the CSS Reset",id:"implementing-the-css-reset",children:[]},{value:"Comments",id:"comments",children:[]},{value:"Organize the Stylesheet with a Top-down Structure",id:"organize-the-stylesheet-with-a-top-down-structure",children:[]},{value:"Formatting",id:"formatting",children:[]},{value:"Naming",id:"naming",children:[]},{value:"Mobile-First Responsive Design",id:"mobile-first-responsive-design",children:[]},{value:"Basic breakpoints in Responsive Design",id:"basic-breakpoints-in-responsive-design",children:[]},{value:"Shrink CSS file size with CSS Compressors",id:"shrink-css-file-size-with-css-compressors",children:[]},{value:"Validating your CSS",id:"validating-your-css",children:[]}],d={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"implementing-the-css-reset"},"Implementing the CSS Reset"),Object(s.b)("p",null,"The major goal of a reset stylesheet is to reduce incompatibilities across various browsers \u2013 it provides general styles, which can be easily edited and styled as per your requirements.One of the common examples of a reset CSS style sheet is normalize.css \u2013 which is a modern HTML 5 CSS reset.You have to include this reset CSS style sheet preceding your style definition under the section \u2018head\u2019 within your HTML file in order to prevent these from overriding your style definitions that follow."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"comments"},"Comments"),Object(s.b)("p",null,"Divide your stylesheet into specific sections: i.e. Global styles \u2013 (body, paragraphs, lists, etc), Header, Page structure, Headings, Text styles, Navigation, Forms, Comments, and Extras."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"/* -----------------------------------*/\n/* ----------\x3e>> GLOBAL <<<-----------*/\n/* -----------------------------------*/\n")),Object(s.b)("p",null,"Comments should be used liberally to explain anything that may be unclear at first glance."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},".prose p {\n  font-size: 1.1666em /* 14px / 12px */;\n}\n\n.ie7 .search-form {\n  /*\n    Force the item to have layout in IE7 by setting display to block.\n    See: http://reference.sitepoint.com/css/haslayout\n  */\n  display: inline-block;\n}\n")),Object(s.b)("hr",null),Object(s.b)("h3",{id:"organize-the-stylesheet-with-a-top-down-structure"},"Organize the Stylesheet with a Top-down Structure"),Object(s.b)("p",null,"It always makes sense to lay your stylesheet out in a way that allows you to quickly find parts of your code. So, an example stylesheet might be ordered like this:"),Object(s.b)("p",null,"Generic classes (body, a, p, h1, etc.)"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"header"),Object(s.b)("li",{parentName:"ol"},"#nav-menu"),Object(s.b)("li",{parentName:"ol"},"#main-content")),Object(s.b)("hr",null),Object(s.b)("h3",{id:"formatting"},"Formatting"),Object(s.b)("p",null,"All CSS documents must use two spaces for indentation and files should have no trailing whitespace. Other formatting rules:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Use soft-tabs with a two space indent."),Object(s.b)("li",{parentName:"ul"},"Avoiding inline styling")),Object(s.b)("h4",{id:"anatomy-of-a-ruleset"},"Anatomy of a Ruleset"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"/* GOOD */\n.foo,.foo--bar,\n.baz {\n  display: block;\n  background-color: green;\n  color: red;\n}\n\n/* BAD */\n.foo,\n.foo--bar,\n.baz {\n  display: block;\n  background-color: green;\n  color: red;\n}\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Related selectors on the same line. Unrelated selectors on new lines."),Object(s.b)("li",{parentName:"ul"},"A space before our opening brace ( ",Object(s.b)("inlineCode",{parentName:"li"},"{")," );"),Object(s.b)("li",{parentName:"ul"},"Properties and values on the same line;"),Object(s.b)("li",{parentName:"ul"},"A space after our property\u2013value delimiting colon ( ",Object(s.b)("inlineCode",{parentName:"li"},":")," );"),Object(s.b)("li",{parentName:"ul"},"Each declaration on its own new line;"),Object(s.b)("li",{parentName:"ul"},"The opening brace ( ",Object(s.b)("inlineCode",{parentName:"li"},"{")," ) on the same line as our last selector;"),Object(s.b)("li",{parentName:"ul"},"Our first declaration on a new line after our opening brace ( ",Object(s.b)("inlineCode",{parentName:"li"},"{")," );"),Object(s.b)("li",{parentName:"ul"},"Our closing brace ( ",Object(s.b)("inlineCode",{parentName:"li"},"}")," ) on its own new line;"),Object(s.b)("li",{parentName:"ul"},"Each declaration indented by two (2) spaces;"),Object(s.b)("li",{parentName:"ul"},"A trailing semi-colon ( ",Object(s.b)("inlineCode",{parentName:"li"},";")," ) on our last declaration."),Object(s.b)("li",{parentName:"ul"},"Place the closing brace of a ruleset in the same column as the first character of the ruleset."),Object(s.b)("li",{parentName:"ul"},"Separate each ruleset by a blank line."),Object(s.b)("li",{parentName:"ul"},"Avoid using tag names in selectors as this prevents re-use in other contexts."),Object(s.b)("li",{parentName:"ul"},"Also ids should be avoided in selectors as it makes it far too difficult to override later in the cascade.")),Object(s.b)("h4",{id:"multi-line-css"},"Multi-line CSS"),Object(s.b)("p",null,"CSS should be written across multiple lines, except in very specific circumstances such as similar rulesets that only carry one declaration each."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},".icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-image: url(/img/sprite.svg);\n}\n\n.icon--home { background-position: 0 0; }\n.icon--person { background-position: -16px 0; }\n")),Object(s.b)("h4",{id:"values"},"Values"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Always define generic font families like sans-serif or serif."),Object(s.b)("li",{parentName:"ul"},"Use lowercase and shorthand hex values"),Object(s.b)("li",{parentName:"ul"},"If you use 0 as a value, do not add a unit (px, em, etc.) after it."),Object(s.b)("li",{parentName:"ul"},'Use single or double quotes consistently. Preference is for double quotes, e.g., content: "".'),Object(s.b)("li",{parentName:"ul"},"Include a space after each comma in comma-separated property or function values."),Object(s.b)("li",{parentName:"ul"},"It is a bad practice to use !important")),Object(s.b)("hr",null),Object(s.b)("h3",{id:"naming"},"Naming"),Object(s.b)("p",null,"All ids, classes and attributes must be lowercase with hyphens used for separation."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"/* GOOD */\n.dataset-list {\n}\n\n/* BAD */\n.datasetlist {\n}\n.datasetList {\n}\n.dataset_list {\n}\n")),Object(s.b)("h4",{id:"bem-like-naming"},"BEM-like Naming"),Object(s.b)("p",null,"BEM splits components\u2019 classes into three groups:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Block: The sole root of the component."),Object(s.b)("li",{parentName:"ul"},"Element: A component part of the Block."),Object(s.b)("li",{parentName:"ul"},"Modifier: A variant or extension of the Block.")),Object(s.b)("p",null,"Elements are delimited with two (2) underscores (","_","_","), and Modifiers are delimited by two (2) hyphens (--)."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},".person {\n}\n.person__head {\n}\n.person--tall {\n}\n")),Object(s.b)("hr",null),Object(s.b)("h3",{id:"mobile-first-responsive-design"},"Mobile-First Responsive Design"),Object(s.b)("p",null,"The mobile-first approach is a tenet of progressive enhancement. It is the ideology that mobile design, as the hardest, should be done first. Once the mobile design questions are answered, designing for other devices will be easier. What it boils down to is that, the smallest of the designs will have only the essential features."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"basic-breakpoints-in-responsive-design"},"Basic breakpoints in Responsive Design"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"// Small devices (landscape phones, 576px and up)\n@media (min-width: 576px) {\n  ...;\n}\n\n// Medium devices (tablets, 768px and up)\n@media (min-width: 768px) {\n  ...;\n}\n\n// Large devices (desktops, 992px and up)\n@media (min-width: 992px) {\n  ...;\n}\n\n// Extra large devices (large desktops, 1200px and up)\n@media (min-width: 1200px) {\n  ...;\n}\n")),Object(s.b)("h3",{id:"shrink-css-file-size-with-css-compressors"},"Shrink CSS file size with CSS Compressors"),Object(s.b)("p",null,"It\u2019s really a great idea to shrink the CSS file size as it will remove white spaces, line breaks and remove redundant CSS styles. Through this, you can help browsers to speed up the loading of your CSS codes. Using tools like CSS Compressor and CSS Compressor & Minifier can make this happen."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"validating-your-css"},"Validating your CSS"),Object(s.b)("p",null,"You can always use the ",Object(s.b)("a",{parentName:"p",href:"https://jigsaw.w3.org/css-validator/"},"W3C free CSS validator")," to examine whether your CSS code has been organized and structured appropriately. One of the other benefits of using it is to help you find errors within your stylesheet. This will save you all the time that would be spent on troubleshooting these when you are doing it manually."),Object(s.b)("hr",null),Object(s.b)(r.a,{name:"Priya Sasidharan",date:"20/03/2020",mdxType:"EditedBy"}))}u.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,m=u["".concat(r,".").concat(p)]||u[p]||b[p]||s;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<s;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";var a=n(0),i=n.n(a),s=n(1),r=n.n(s),l=n(56),o=n.n(l),c={name:r.a.string.isRequired,updated:r.a.string,date:r.a.string.isRequired},d=function(e){var t=e.name,n=e.updated,a=e.date;return i.a.createElement("div",{className:o.a.editedBy},i.a.createElement("div",{className:o.a.block+" "+(a?"":o.a.single)},i.a.createElement("span",{className:o.a.label},"Author"),i.a.createElement("span",{className:o.a.value},t)),n?i.a.createElement("div",{className:o.a.block+" "+(a?o.a.double:"")},i.a.createElement("span",{className:o.a.label},"Updated by"),i.a.createElement("span",{className:o.a.value},n)):null,i.a.createElement("div",{className:o.a.block+" "+(a?o.a.double:"")},i.a.createElement("span",{className:o.a.label},"On"),i.a.createElement("span",{className:o.a.value},a)))};d.propTypes=c,d.defaultProps={updated:""},t.a=d}}]);