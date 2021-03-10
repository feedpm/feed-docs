(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return b}));var n=i(0),a=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),h=n,b=p["".concat(r,".").concat(h)]||p[h]||u[h]||o;return i?a.a.createElement(b,s(s({ref:t},c),{},{components:i})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},159:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(1),r=i.n(o),s=i(56),l=i.n(s),c={name:r.a.string.isRequired,updated:r.a.string,date:r.a.string.isRequired},d=function(e){var t=e.name,i=e.updated,n=e.date;return a.a.createElement("div",{className:l.a.editedBy},a.a.createElement("div",{className:l.a.block+" "+(n?"":l.a.single)},a.a.createElement("span",{className:l.a.label},"Author"),a.a.createElement("span",{className:l.a.value},t)),i?a.a.createElement("div",{className:l.a.block+" "+(n?l.a.double:"")},a.a.createElement("span",{className:l.a.label},"Updated by"),a.a.createElement("span",{className:l.a.value},i)):null,a.a.createElement("div",{className:l.a.block+" "+(n?l.a.double:"")},a.a.createElement("span",{className:l.a.label},"On"),a.a.createElement("span",{className:l.a.value},n)))};d.propTypes=c,d.defaultProps={updated:""},t.a=d},76:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return s})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return p}));var n=i(3),a=i(7),o=(i(0),i(158)),r=i(159),s={id:"research-development",title:"R&D Topics",sidebar_label:"R&D Topics"},l={unversionedId:"css/research-development",id:"css/research-development",isDocsHomePage:!1,title:"R&D Topics",description:"Designing for screen reader compatibility",source:"@site/docs/css/research-development.md",slug:"/css/research-development",permalink:"/feed-docs/docs/css/research-development",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/css/research-development.md",version:"current",sidebar_label:"R&D Topics",sidebar:"docs",previous:{title:"Tools",permalink:"/feed-docs/docs/css/tools"},next:{title:"Form Design",permalink:"/feed-docs/docs/css/form-ux"}},c=[{value:"Designing for screen reader compatibility",id:"designing-for-screen-reader-compatibility",children:[]},{value:"Usability checklist for web application",id:"usability-checklist-for-web-application",children:[]},{value:"How to create wireframes",id:"how-to-create-wireframes",children:[]},{value:"UI microinteractions and microanimations",id:"ui-microinteractions-and-microanimations",children:[]},{value:"When and how to replace images in HTML with SVG",id:"when-and-how-to-replace-images-in-html-with-svg",children:[]},{value:"Neumorphism and CSS",id:"neumorphism-and-css",children:[]},{value:"Clipping and Masking in CSS",id:"clipping-and-masking-in-css",children:[]},{value:"CSS for asymmetrical layouts",id:"css-for-asymmetrical-layouts",children:[]},{value:"Common device specific CSS issue and its solution",id:"common-device-specific-css-issue-and-its-solution",children:[]},{value:"AMP",id:"amp",children:[]}],d={toc:c};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"designing-for-screen-reader-compatibility"},"Designing for screen reader compatibility"),Object(o.b)("p",null,"Screen readers convert digital text into synthesized speech. They empower users to hear content and navigate with the keyboard. The technology helps people who are blind or who have low vision to use information technology with the same level of independence and privacy as anyone else. Screen readers are also used by people with certain cognitive or learning disabilities, or users who simply prefer audio content over text."),Object(o.b)("p",null,"In the context of a website, your screen reader might be halfway through reading you a list of 50 sidebar links when you start wondering if there is any valuable content on the site at all."),Object(o.b)("p",null,"Experiences like this are caused by websites that are built with layouts that are only visual. Ideally, however, our visual layouts should point to an underlying organizational model of our content. They should be visual indicators for a conceptual model. The visual indicators are just one way of revealing this model. The Web Accessibility Initiative\u2019s ARIA (Accessible Rich Internet Applications) project provides alternative indicators to users who may need them."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"usability-checklist-for-web-application"},"Usability checklist for web application"),Object(o.b)("h4",{id:"what-is-usability-testing"},"What is Usability Testing?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Usability testing is nothing but the User-friendliness check."),Object(o.b)("li",{parentName:"ul"},"In Usability testing, the application flow is tested so that a new user can understand the application easily."),Object(o.b)("li",{parentName:"ul"},"Basically, system navigation is checked in Usability testing.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"how-to-create-wireframes"},"How to create wireframes"),Object(o.b)("p",null,"According to usability.gov \u2014 \u201cA wireframe is a two-dimensional illustration of a page\u2019s interface that specifically focuses on space allocation and prioritization of content, functionalities available, and intended behaviors.\u201d"),Object(o.b)("p",null,"Wireframes come in handy generally once you have completed the discovery phase and gathered enough information about the user\u2019s goals and motivations. You also have to understand the structure of your website that can be done by creating a sitemap."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ui-microinteractions-and-microanimations"},"UI microinteractions and microanimations"),Object(o.b)("p",null,"Pupose of micro-interactions is to delight the user; to create a moment that is engaging, welcoming and, dare we say it \u2014 human."),Object(o.b)("p",null,"Micro-animations are small, preferably functional animations that support the user by giving visual feedback and displaying changes more clearly. With micro-animations, it\u2019s possible to explain a lot without using a word."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"when-and-how-to-replace-images-in-html-with-svg"},"When and how to replace images in HTML with SVG"),Object(o.b)("p",null,"SVG file sizes are small, especially for simpler images, they also compress very well if you have gZip compression enabled on your server. They look fantastic at any resolution, because they are scalable there is no loss of quality, making them perfect for use with retina/hdpi displays. SVG output is XML based and can be used directly inline within your HTML code."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"neumorphism-and-css"},"Neumorphism and CSS"),Object(o.b)("p",null,"Neumorphism or Soft UI. It is going to be a new biggest trend in User interface design in 2020. Developers, designers, and UX specialists are weighing in on the topic of aesthetics, usability, accessibility, and practicality of this design trend."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"clipping-and-masking-in-css"},"Clipping and Masking in CSS"),Object(o.b)("p",null,"Masking in image editing is a method of \u2018hiding\u2019 a portion of an object based on another object. This method has long been available in Image editors like Photoshop. A similar method can also be done in CSS with some of its properties."),Object(o.b)("p",null,"The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"css-for-asymmetrical-layouts"},"CSS for asymmetrical layouts"),Object(o.b)("p",null,"Designers have been implementing grids to ensure that their page layouts appear beautiful and instantly drive user attention, with dynamic effects. But now, it is time to break the monotony and introduce something beyond the grid. This is being achieved by breaking the grid. It might not be easy to get rid of the grid entirely since it has already become a norm over the internet. It has been playing an important role in offering a distinct and beautiful experience to the users, enhancing a brand\u2019s prominence and thereby bolstering conversions."),Object(o.b)("p",null,"This is where an asymmetrical layout can be thought about \u2013 for organizing text, irregular shapes, and image overlapping. The realistic effect will bloom within your site with no compromise over the functionality part."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"common-device-specific-css-issue-and-its-solution"},"Common device specific CSS issue and its solution"),Object(o.b)("p",null,"Try to figure out most common device and OS specific issues and its solution."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"amp"},"AMP"),Object(o.b)("p",null,"Accelerated Mobile Page (or AMP, for short) is a project from Google and Twitter designed to make really fast mobile pages. At its essence, it's basically a stripped-down form of HTML."),Object(o.b)("p",null,"Fundamentally, it's an HTML page designed to be super lightweight and critically designs really fast loading. So Google, Twitter, a bunch of other companies have rolled this out \u2014 kind of in response to projects like the Facebook Instant Articles project from Facebook and Apple News and so forth. This is designed to be the open response. So it's open source, and there are all kinds of elements of openness to the project."),Object(o.b)(r.a,{name:"Priya Sasidharan",date:"24/03/2020",mdxType:"EditedBy"}))}p.isMDXComponent=!0}}]);