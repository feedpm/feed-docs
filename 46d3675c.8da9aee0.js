(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),c=n.n(o),i=n(56),s=n.n(i),l={name:c.a.string.isRequired,updated:c.a.string,date:c.a.string.isRequired},u=function(e){var t=e.name,n=e.updated,r=e.date;return a.a.createElement("div",{className:s.a.editedBy},a.a.createElement("div",{className:s.a.block+" "+(r?"":s.a.single)},a.a.createElement("span",{className:s.a.label},"Author"),a.a.createElement("span",{className:s.a.value},t)),n?a.a.createElement("div",{className:s.a.block+" "+(r?s.a.double:"")},a.a.createElement("span",{className:s.a.label},"Updated by"),a.a.createElement("span",{className:s.a.value},n)):null,a.a.createElement("div",{className:s.a.block+" "+(r?s.a.double:"")},a.a.createElement("span",{className:s.a.label},"On"),a.a.createElement("span",{className:s.a.value},r)))};u.propTypes=l,u.defaultProps={updated:""},t.a=u},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(158)),c=n(159),i={id:"intro",title:"Cascading Style Sheets",sidebar_label:"Introduction"},s={unversionedId:"css/intro",id:"css/intro",isDocsHomePage:!1,title:"Cascading Style Sheets",description:"This is an introduction to get started with CSS.",source:"@site/docs/css/intro.md",slug:"/css/intro",permalink:"/feed-docs/docs/css/intro",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/css/intro.md",version:"current",sidebar_label:"Introduction"},l=[],u={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is an introduction to get started with CSS."),Object(o.b)(c.a,{name:"Vijay dev",date:"24/02/2020",mdxType:"EditedBy"}))}d.isMDXComponent=!0}}]);