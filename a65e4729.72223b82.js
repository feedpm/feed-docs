(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(158)),i=r(159),s={id:"common-appstore-rejections",title:"Common Appstore Rejections",sidebar_label:"Common Appstore Rejections"},l={unversionedId:"react-native/common-appstore-rejections",id:"react-native/common-appstore-rejections",isDocsHomePage:!1,title:"Common Appstore Rejections",description:"- Only IAP should be used for app feature upgrade or subscriptions. Any alternate payment option should be removed.",source:"@site/docs/react-native/Common-Appstore-Rejections.md",slug:"/react-native/common-appstore-rejections",permalink:"/feed-docs/docs/react-native/common-appstore-rejections",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/react-native/Common-Appstore-Rejections.md",version:"current",sidebar_label:"Common Appstore Rejections",sidebar:"docs",previous:{title:"Tools",permalink:"/feed-docs/docs/react-native/tools"}},c=[],p={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Only IAP should be used for app feature upgrade or subscriptions. Any alternate payment option should be removed."),Object(o.b)("li",{parentName:"ul"},"Cash rewards for virtual activities are against the policies of Apple."),Object(o.b)("li",{parentName:"ul"},"Smoke test the build with the live APIs before upload."),Object(o.b)("li",{parentName:"ul"},"Increment the build number before every upload."),Object(o.b)("li",{parentName:"ul"},"If using Expo, enable support for tablet in app.json even if you dont support tablet."),Object(o.b)("li",{parentName:"ul"},"Ensure screenshots are of required size & OS version."),Object(o.b)("li",{parentName:"ul"},"Don't use android screenshots for iOS"),Object(o.b)("li",{parentName:"ul"},"Provide details for conditional screens screenshots if available."),Object(o.b)("li",{parentName:"ul"},"App icon should be added with the build."),Object(o.b)("li",{parentName:"ul"},"There shouldn't be any App crash."),Object(o.b)("li",{parentName:"ul"},"Replace UIWebView with latest WKWebView."),Object(o.b)("li",{parentName:"ul"},"Provide specific messages in plist for permissions. e.g. MyApp require camera permission to take profile photo."),Object(o.b)("li",{parentName:"ul"},"Handle Dark mode for iOS 13+."),Object(o.b)("li",{parentName:"ul"},"Restore purchase option is mandatory."),Object(o.b)("li",{parentName:"ul"},"Use latest XCode versions to upload builds."),Object(o.b)("li",{parentName:"ul"},"Http URL usage should be mentioned in info.plist."),Object(o.b)("li",{parentName:"ul"},"Provide sign in with Apple if any social login are used in the app."),Object(o.b)("li",{parentName:"ul"},"Do not force user to provide personal informations such as email if using sign in with Apple."),Object(o.b)("li",{parentName:"ul"},"Use facebook developer account for login with Instagram."),Object(o.b)("li",{parentName:"ul"},"Provide working login information or any other resources such as QR code that might be requird to review your app."),Object(o.b)("li",{parentName:"ul"},"Internal usage apps do not require login informations or sign in with Apple.")),Object(o.b)(i.a,{name:"Firoz Ahmed",date:"05/06/2020",mdxType:"EditedBy"}))}u.isMDXComponent=!0},158:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?a.a.createElement(b,s(s({ref:t},c),{},{components:r})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},159:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),s=r(56),l=r.n(s),c={name:i.a.string.isRequired,updated:i.a.string,date:i.a.string.isRequired},p=function(e){var t=e.name,r=e.updated,n=e.date;return a.a.createElement("div",{className:l.a.editedBy},a.a.createElement("div",{className:l.a.block+" "+(n?"":l.a.single)},a.a.createElement("span",{className:l.a.label},"Author"),a.a.createElement("span",{className:l.a.value},t)),r?a.a.createElement("div",{className:l.a.block+" "+(n?l.a.double:"")},a.a.createElement("span",{className:l.a.label},"Updated by"),a.a.createElement("span",{className:l.a.value},r)):null,a.a.createElement("div",{className:l.a.block+" "+(n?l.a.double:"")},a.a.createElement("span",{className:l.a.label},"On"),a.a.createElement("span",{className:l.a.value},n)))};p.propTypes=c,p.defaultProps={updated:""},t.a=p}}]);