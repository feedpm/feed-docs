(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(158)),c=n(159),l={id:"tools",title:"Tools",sidebar_label:"Tools"},i={unversionedId:"react-native/tools",id:"react-native/tools",isDocsHomePage:!1,title:"Tools",description:"Tools.",source:"@site/docs/react-native/tools.md",slug:"/react-native/tools",permalink:"/feed-docs/docs/react-native/tools",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/react-native/tools.md",version:"current",sidebar_label:"Tools",sidebar:"docs",previous:{title:"Comp 1",permalink:"/feed-docs/docs/react-native/comp1"},next:{title:"Common Appstore Rejections",permalink:"/feed-docs/docs/react-native/common-appstore-rejections"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Tools."),Object(o.b)(c.a,{name:"Vijay dev",date:"24/02/2020",mdxType:"EditedBy"}))}u.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),c=n.n(o),l=n(56),i=n.n(l),s={name:c.a.string.isRequired,updated:c.a.string,date:c.a.string.isRequired},p=function(e){var t=e.name,n=e.updated,r=e.date;return a.a.createElement("div",{className:i.a.editedBy},a.a.createElement("div",{className:i.a.block+" "+(r?"":i.a.single)},a.a.createElement("span",{className:i.a.label},"Author"),a.a.createElement("span",{className:i.a.value},t)),n?a.a.createElement("div",{className:i.a.block+" "+(r?i.a.double:"")},a.a.createElement("span",{className:i.a.label},"Updated by"),a.a.createElement("span",{className:i.a.value},n)):null,a.a.createElement("div",{className:i.a.block+" "+(r?i.a.double:"")},a.a.createElement("span",{className:i.a.label},"On"),a.a.createElement("span",{className:i.a.value},r)))};p.propTypes=s,p.defaultProps={updated:""},t.a=p}}]);