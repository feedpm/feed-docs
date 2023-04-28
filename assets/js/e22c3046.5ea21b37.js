"use strict";(self.webpackChunkfeed_docs=self.webpackChunkfeed_docs||[]).push([[3642],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return b}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(i),f=n,b=p["".concat(o,".").concat(f)]||p[f]||u[f]||l;return i?a.createElement(b,s(s({ref:t},d),{},{components:i})):a.createElement(b,s({ref:t},d))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,s=new Array(l);s[0]=f;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[p]="string"==typeof e?e:n,s[1]=r;for(var c=2;c<l;c++)s[c]=i[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},933:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(7294),n=i(5697),l=i.n(n),s={editedBy:"editedBy_t81w",block:"block_jsl5",label:"label_ynlq",value:"value_H8Hf"},r={name:l().string.isRequired,updated:l().string,date:l().string.isRequired},o=function(e){var t=e.name,i=e.updated,n=e.date;return a.createElement("div",{className:s.editedBy},a.createElement("div",{className:s.block+" "+(n?"":s.single)},a.createElement("span",{className:s.label},"Author"),a.createElement("span",{className:s.value},t)),i?a.createElement("div",{className:s.block+" "+(n?s.double:"")},a.createElement("span",{className:s.label},"Updated by"),a.createElement("span",{className:s.value},i)):null,a.createElement("div",{className:s.block+" "+(n?s.double:"")},a.createElement("span",{className:s.label},"On"),a.createElement("span",{className:s.value},n)))};o.propTypes=r,o.defaultProps={updated:""};var c=o},4294:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=i(3117),n=i(102),l=(i(7294),i(3905)),s=i(933),r=["components"],o={id:"form-ux",title:"Form Design",sidebar_label:"Form Design"},c=void 0,d={unversionedId:"css/form-ux",id:"css/form-ux",title:"Form Design",description:"Perfect input fields",source:"@site/docs/css/form-ux.md",sourceDirName:"css",slug:"/css/form-ux",permalink:"/feed-docs/docs/css/form-ux",draft:!1,editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/css/form-ux.md",tags:[],version:"current",frontMatter:{id:"form-ux",title:"Form Design",sidebar_label:"Form Design"},sidebar:"docs",previous:{title:"Microinteraction",permalink:"/feed-docs/docs/css/microinteraction"},next:{title:"UI Tips",permalink:"/feed-docs/docs/css/ui-tips"}},p={},u=[{value:"Perfect input fields",id:"perfect-input-fields",level:3},{value:"Form layout",id:"form-layout",level:3},{value:"Use labels",id:"use-labels",level:3},{value:"Label layout",id:"label-layout",level:3},{value:"Optional labels",id:"optional-labels",level:3},{value:"Select options",id:"select-options",level:3},{value:"Highlight Limitations",id:"highlight-limitations",level:3},{value:"Descriptive Error Messages",id:"descriptive-error-messages",level:3},{value:"Inline validation",id:"inline-validation",level:3},{value:"Call to action",id:"call-to-action",level:3},{value:"Actions types",id:"actions-types",level:3},{value:"Negative actions",id:"negative-actions",level:3},{value:"Action position (small)",id:"action-position-small",level:3},{value:"Action position (page)",id:"action-position-page",level:3},{value:"Grouping",id:"grouping",level:3},{value:"Wizards",id:"wizards",level:3},{value:"Rich UI",id:"rich-ui",level:3}],f={toc:u},b="wrapper";function g(e){var t=e.components,o=(0,n.Z)(e,r);return(0,l.kt)(b,(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"perfect-input-fields"},"Perfect input fields"),(0,l.kt)("p",null,"Input Fields are part of every form UI, here are some tips and tricks to deliver better Input fields."),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(1643).Z},(0,l.kt)("img",{alt:"Image",src:i(6193).Z,title:"UI Tips",width:"1085",height:"760"}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use radio buttons for gender types, don\u2019t be afraid using icons"),(0,l.kt)("li",{parentName:"ul"},"Use labels with text of currency for finance fields, auto separate thousands and millions"),(0,l.kt)("li",{parentName:"ul"},"Design obvious field for mobile numbers, days of week, dates, etc"),(0,l.kt)("li",{parentName:"ul"},"Use advanced search with auto-suggestion in case of location/address instead of many field that user have to complete manually")),(0,l.kt)("h3",{id:"form-layout"},"Form layout"),(0,l.kt)("p",null,"Forms should be single column"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(9091).Z},(0,l.kt)("img",{alt:"Forms should be single column",src:i(3089).Z,title:"Forms should be signle column",width:"2000",height:"805"}))),(0,l.kt)("h3",{id:"use-labels"},"Use labels"),(0,l.kt)("p",null,"Resist using placeholder text as labels"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(4231).Z},(0,l.kt)("img",{alt:"Resist using placeholder text as labels",src:i(1508).Z,title:"Resist using placeholder text as labels",width:"2000",height:"858"}))),(0,l.kt)("h3",{id:"label-layout"},"Label layout"),(0,l.kt)("p",null,"Always top align labels and group labels with their inputs"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(2500).Z},(0,l.kt)("img",{alt:"Group labels with their inputs",src:i(7228).Z,title:"Group labels with their inputs",width:"2000",height:"858"}))),(0,l.kt)("h3",{id:"optional-labels"},"Optional labels"),(0,l.kt)("p",null,"Ditch the ","*"," and denote optional fields"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(3313).Z},(0,l.kt)("img",{alt:"Optional Fields",src:i(5677).Z,title:"Optional Fields",width:"2000",height:"858"}))),(0,l.kt)("h3",{id:"select-options"},"Select options"),(0,l.kt)("p",null,"Show all selection options if under 6"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(18).Z},(0,l.kt)("img",{alt:"Show all selection options if under 6",src:i(8547).Z,title:"Show all selection options if under 6",width:"2000",height:"770"}))),(0,l.kt)("h3",{id:"highlight-limitations"},"Highlight Limitations"),(0,l.kt)("p",null,"Most fields have some kind of limitation. Character limit, number/date range, phone number, etc. Make users aware of limitations beforehand to prevent their frustration."),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(2333).Z},(0,l.kt)("img",{alt:"Highlight Limitations",src:i(5080).Z,title:"Highlight Limitations",width:"905",height:"530"}))),(0,l.kt)("h3",{id:"descriptive-error-messages"},"Descriptive Error Messages"),(0,l.kt)("p",null,"Always describe the error with in-depth details and help people overcome them."),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(9479).Z},(0,l.kt)("img",{alt:"Descriptive Error Messages",src:i(6872).Z,title:"Descriptive Error Messages",width:"906",height:"616"}))),(0,l.kt)("h3",{id:"inline-validation"},"Inline validation"),(0,l.kt)("p",null,"Use inline validation after the user fills out the field (unless it helps them while in the process)"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(646).Z},(0,l.kt)("img",{alt:"Error Placement",src:i(274).Z,title:"Error Placement",width:"2000",height:"612"}))),(0,l.kt)("h3",{id:"call-to-action"},"Call to action"),(0,l.kt)("p",null,"Make CTAs descriptive"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(4100).Z},(0,l.kt)("img",{alt:"CTA Description",src:i(4900).Z,title:"CTA Description",width:"2000",height:"725"}))),(0,l.kt)("h3",{id:"actions-types"},"Actions types"),(0,l.kt)("p",null,"Differentiate primary from secondary actions"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(3504).Z},(0,l.kt)("img",{alt:"Differentiate primary from secondary actions",src:i(1641).Z,title:"Differentiate primary from secondary actions",width:"2000",height:"725"}))),(0,l.kt)("h3",{id:"negative-actions"},"Negative actions"),(0,l.kt)("p",null,"A subtle link for negative secondary actions often works better than a big bold button"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(4055).Z},(0,l.kt)("img",{alt:"Image",src:i(1056).Z,title:"UI Tips",width:"585",height:"263"}))),(0,l.kt)("h3",{id:"action-position-small"},"Action position (small)"),(0,l.kt)("p",null,"In small windows, the primary action button should be placed at the bottom right"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(1560).Z},(0,l.kt)("img",{alt:"Primary action button",src:i(9737).Z,title:"Primary action button",width:"2208",height:"1238"}))),(0,l.kt)("h3",{id:"action-position-page"},"Action position (page)"),(0,l.kt)("p",null,"Full page designs should have the primary button on the left side of the page"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(862).Z},(0,l.kt)("img",{alt:"Primary action button",src:i(5155).Z,title:"Primary action button",width:"1600",height:"847"}))),(0,l.kt)("h3",{id:"grouping"},"Grouping"),(0,l.kt)("p",null,"Group related fields"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(2904).Z},(0,l.kt)("img",{alt:"Group related fields",src:i(8087).Z,title:"Group related fields",width:"1400",height:"1505"}))),(0,l.kt)("h3",{id:"wizards"},"Wizards"),(0,l.kt)("p",null,"Use wizard for long forms and progress bar"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(2086).Z},(0,l.kt)("img",{alt:"Use wizard",src:i(9013).Z,title:"Use wizard",width:"2000",height:"1006"}))),(0,l.kt)("h3",{id:"rich-ui"},"Rich UI"),(0,l.kt)("p",null,"Avoid writing when possible"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:i(6682).Z},(0,l.kt)("img",{alt:"Avoid writing when possible",src:i(5991).Z,title:"Avoid writing when possible",width:"1200",height:"484"}))),(0,l.kt)(s.Z,{name:"Priya, Ann",updated:"Ann",date:"24/04/2023",mdxType:"EditedBy"}))}g.isMDXComponent=!0},1560:function(e,t,i){t.Z=i.p+"assets/files/Button-placement-2-42cf6402e812ef007576489677feb8a8.png"},862:function(e,t,i){t.Z=i.p+"assets/files/Button-placement-3-3b8f061a7495e6ce3ddfe385b69f3f58.png"},4100:function(e,t,i){t.Z=i.p+"assets/files/CTA-e0d281ceb23980d8fde5938958bcdfbb.jpeg"},18:function(e,t,i){t.Z=i.p+"assets/files/all-options-7fffd79c36f3775b5b22251534f73147.jpeg"},4055:function(e,t,i){t.Z=i.p+"assets/files/button-3dc53270fa1f4098672f8384d63b958b.jpeg"},9479:function(e,t,i){t.Z=i.p+"assets/files/descriptive-error-messages-ad9c73f92a3ce39b43d3a081df34bd67.png"},646:function(e,t,i){t.Z=i.p+"assets/files/error-shown-ed9b4e32af18a93396f45276e5b3b334.jpeg"},2500:function(e,t,i){t.Z=i.p+"assets/files/group-label-3b48b8bbaad4c7c97217f300233b26c1.jpeg"},2904:function(e,t,i){t.Z=i.p+"assets/files/group-6b38db9dd696c98a047ec856e36aaf8d.jpeg"},2333:function(e,t,i){t.Z=i.p+"assets/files/highlight-limitations-a3b82bea2b55648e8fbbbf8de4e35e6f.png"},1643:function(e,t,i){t.Z=i.p+"assets/files/input-fileld-bd321f6d56f8fa0a1168710d157d5389.png"},9091:function(e,t,i){t.Z=i.p+"assets/files/one-column-0822e11734c2ca398589ab63e07a8ea2.jpeg"},3313:function(e,t,i){t.Z=i.p+"assets/files/optional-90b9a78429a15abfb3be9c312c11511b.jpeg"},4231:function(e,t,i){t.Z=i.p+"assets/files/placeholder-47c160b1dabc086b19a1c37bd2b545dd.jpeg"},6682:function(e,t,i){t.Z=i.p+"assets/files/price-range-3d383f234ba010703628e5f053adddf8.png"},3504:function(e,t,i){t.Z=i.p+"assets/files/secondary-4afbbb7bdb7b46684074cf0c28c55158.jpeg"},2086:function(e,t,i){t.Z=i.p+"assets/files/wizard-e9ccdd807371060215af853a56d4bb5f.png"},9737:function(e,t,i){t.Z=i.p+"assets/images/Button-placement-2-42cf6402e812ef007576489677feb8a8.png"},5155:function(e,t,i){t.Z=i.p+"assets/images/Button-placement-3-3b8f061a7495e6ce3ddfe385b69f3f58.png"},4900:function(e,t,i){t.Z=i.p+"assets/images/CTA-e0d281ceb23980d8fde5938958bcdfbb.jpeg"},8547:function(e,t,i){t.Z=i.p+"assets/images/all-options-7fffd79c36f3775b5b22251534f73147.jpeg"},1056:function(e,t,i){t.Z=i.p+"assets/images/button-3dc53270fa1f4098672f8384d63b958b.jpeg"},6872:function(e,t,i){t.Z=i.p+"assets/images/descriptive-error-messages-ad9c73f92a3ce39b43d3a081df34bd67.png"},274:function(e,t,i){t.Z=i.p+"assets/images/error-shown-ed9b4e32af18a93396f45276e5b3b334.jpeg"},7228:function(e,t,i){t.Z=i.p+"assets/images/group-label-3b48b8bbaad4c7c97217f300233b26c1.jpeg"},8087:function(e,t,i){t.Z=i.p+"assets/images/group-6b38db9dd696c98a047ec856e36aaf8d.jpeg"},5080:function(e,t,i){t.Z=i.p+"assets/images/highlight-limitations-a3b82bea2b55648e8fbbbf8de4e35e6f.png"},6193:function(e,t,i){t.Z=i.p+"assets/images/input-fileld-bd321f6d56f8fa0a1168710d157d5389.png"},3089:function(e,t,i){t.Z=i.p+"assets/images/one-column-0822e11734c2ca398589ab63e07a8ea2.jpeg"},5677:function(e,t,i){t.Z=i.p+"assets/images/optional-90b9a78429a15abfb3be9c312c11511b.jpeg"},1508:function(e,t,i){t.Z=i.p+"assets/images/placeholder-47c160b1dabc086b19a1c37bd2b545dd.jpeg"},5991:function(e,t,i){t.Z=i.p+"assets/images/price-range-3d383f234ba010703628e5f053adddf8.png"},1641:function(e,t,i){t.Z=i.p+"assets/images/secondary-4afbbb7bdb7b46684074cf0c28c55158.jpeg"},9013:function(e,t,i){t.Z=i.p+"assets/images/wizard-e9ccdd807371060215af853a56d4bb5f.png"}}]);