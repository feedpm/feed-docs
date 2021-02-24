(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{128:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(158)),o=t(159),c={id:"coding-guidelines",title:"Coding guidelines",sidebar_label:"Coding guidelines"},s={unversionedId:"js/coding-guidelines",id:"js/coding-guidelines",isDocsHomePage:!1,title:"Coding guidelines",description:"Coding guidelines.",source:"@site/docs/js/coding-guidelines.md",slug:"/js/coding-guidelines",permalink:"/feed-docs/docs/js/coding-guidelines",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/js/coding-guidelines.md",version:"current",sidebar_label:"Coding guidelines",sidebar:"docs",previous:{title:"JavaScript",permalink:"/feed-docs/docs/js/intro"},next:{title:"Training 1",permalink:"/feed-docs/docs/js/train1"}},l=[],d={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Coding guidelines."),Object(i.b)(o.a,{name:"Vijay dev",date:"24/02/2020",mdxType:"EditedBy"}))}u.isMDXComponent=!0},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},159:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(1),o=t.n(i),c=t(56),s=t.n(c),l={name:o.a.string.isRequired,updated:o.a.string,date:o.a.string.isRequired},d=function(e){var n=e.name,t=e.updated,r=e.date;return a.a.createElement("div",{className:s.a.editedBy},a.a.createElement("div",{className:s.a.block+" "+(r?"":s.a.single)},a.a.createElement("span",{className:s.a.label},"Author"),a.a.createElement("span",{className:s.a.value},n)),t?a.a.createElement("div",{className:s.a.block+" "+(r?s.a.double:"")},a.a.createElement("span",{className:s.a.label},"Updated by"),a.a.createElement("span",{className:s.a.value},t)):null,a.a.createElement("div",{className:s.a.block+" "+(r?s.a.double:"")},a.a.createElement("span",{className:s.a.label},"On"),a.a.createElement("span",{className:s.a.value},r)))};d.propTypes=l,d.defaultProps={updated:""},n.a=d}}]);