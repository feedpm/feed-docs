(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),c=n.n(o),i=n(56),l=n.n(i),p={name:c.a.string.isRequired,updated:c.a.string,date:c.a.string.isRequired},s=function(e){var t=e.name,n=e.updated,r=e.date;return a.a.createElement("div",{className:l.a.editedBy},a.a.createElement("div",{className:l.a.block+" "+(r?"":l.a.single)},a.a.createElement("span",{className:l.a.label},"Author"),a.a.createElement("span",{className:l.a.value},t)),n?a.a.createElement("div",{className:l.a.block+" "+(r?l.a.double:"")},a.a.createElement("span",{className:l.a.label},"Updated by"),a.a.createElement("span",{className:l.a.value},n)):null,a.a.createElement("div",{className:l.a.block+" "+(r?l.a.double:"")},a.a.createElement("span",{className:l.a.label},"On"),a.a.createElement("span",{className:l.a.value},r)))};s.propTypes=p,s.defaultProps={updated:""},t.a=s},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(158)),c=n(159),i={id:"comp1",title:"Comp 1",sidebar_label:"Comp 1"},l={unversionedId:"node/comp1",id:"node/comp1",isDocsHomePage:!1,title:"Comp 1",description:"Comp 1.",source:"@site/docs/node/comp1.md",slug:"/node/comp1",permalink:"/docs/node/comp1",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/node/comp1.md",version:"current",sidebar_label:"Comp 1",sidebar:"docs",previous:{title:"Training 1",permalink:"/docs/node/train1"},next:{title:"Tools",permalink:"/docs/node/tools"}},p=[],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Comp 1."),Object(o.b)(c.a,{name:"Vijay dev",date:"24/02/2020",mdxType:"EditedBy"}))}u.isMDXComponent=!0}}]);