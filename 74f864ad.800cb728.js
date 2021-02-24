(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(3),o=t(7),r=(t(0),t(158)),c=t(159),i={id:"hoc",title:"React HOC",sidebar_label:"hoc"},s={unversionedId:"react/training/hoc",id:"react/training/hoc",isDocsHomePage:!1,title:"React HOC",description:"Higher Order Components",source:"@site/docs/react/training/hoc-introduction.md",slug:"/react/training/hoc",permalink:"/docs/react/training/hoc",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/react/training/hoc-introduction.md",version:"current",sidebar_label:"hoc",sidebar:"docs",previous:{title:"Context",permalink:"/docs/react/training/context"},next:{title:"Store",permalink:"/docs/react/training/store-tutorial"}},p=[{value:"Higher Order Components",id:"higher-order-components",children:[{value:"Conclusion",id:"conclusion",children:[]}]}],l={toc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"higher-order-components"},"Higher Order Components"),Object(r.b)("p",null,"A higher-order component is a function that takes a component and returns a new component. A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic. The component transforms props into UI, and a higher-order component converts a component into another component. An example of HOCs is Redux connect."),Object(r.b)("p",null,"The purpose of a HOC is to enhance a component with extra functionality. A HOC allows for reusability since in real-life applications there is a need to re-use the same functionalities in various similar kinds of components."),Object(r.b)("h5",{id:"example"},"Example:"),Object(r.b)("p",null,"A HOC takes a component as input parameter and returns a new component. Let's look at an example of the most simple HOC possible."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"// Take in a component as argument WrappedComponent\nfunction simpleHOC(WrappedComponent) {\n  // And return a new anonymous component\n  return class extends React.Component {\n    render() {\n      return <WrappedComponent {...this.props} />;\n    }\n  };\n}\n")),Object(r.b)("p",null,"This HOC takes a React component, WrappedComponent, as parameter. It returns a new React component. The returned component contains the WrappedComponent as a child."),Object(r.b)("p",null,"We use the HOC to create a new component like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"// Create a new component\nconst NewComponent = simpleHOC(Hello);\n\n// NewComponent can be used exactly like any component\n// In this case, NewComponent is functionally the same as Hello\n<NewComponent />;\n")),Object(r.b)("p",null,"The HOC created above does not do anything to the component, it just returns the same component with a wrapper component around it. It is just not that."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The idea with HOC is to enhance components with functions or data.")),Object(r.b)("p",null,"The way we are going to do that is to add a prop to the component. Lets add a name prop with the value ",Object(r.b)("strong",{parentName:"p"},"React"),". It would look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'// Take in a component as argument WrappedComponent\nfunction withNameReact(WrappedComponent) {\n  // And return a new anonymous component\n  return class extends React.Component {\n    render() {\n      return <WrappedComponent name="React" {...this.props} />;\n    }\n  };\n}\n')),Object(r.b)("p",null,"Lets take a look how we can use it."),Object(r.b)("p",null,"First, we define the component to send in, which uses the name prop"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const Hello = ({name}) => <h1>Hello {name}!</h1>;\n")),Object(r.b)("p",null,"then we will enhance it with our HOC."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const HelloReact = withNameReact(Hello);\n// No need to send in the name prop, it is already sent in\n// by the HOC. It will output Hello React!\n<HelloReact />;\n")),Object(r.b)("h3",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"The primary use of Higher-Order Component is to enhance the reusability of particular components in multiple modules or components. We can also comprise various components to get improved components."),Object(r.b)("p",null,"HOC is a powerful concept that is used to enhance a component with new functions or data."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We do not modify or mutate the component. We create new ones."),Object(r.b)("li",{parentName:"ul"},"A HOC is used to compose components for code reuse."),Object(r.b)("li",{parentName:"ul"},"A HOC is a pure function. That means it has no side effects. It only returns a new component.")),Object(r.b)(c.a,{name:"Jinadev",date:"21/05/2020",mdxType:"EditedBy"}))}u.isMDXComponent=!0},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return t?o.a.createElement(b,i(i({ref:n},p),{},{components:t})):o.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},159:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(1),c=t.n(r),i=t(56),s=t.n(i),p={name:c.a.string.isRequired,updated:c.a.string,date:c.a.string.isRequired},l=function(e){var n=e.name,t=e.updated,a=e.date;return o.a.createElement("div",{className:s.a.editedBy},o.a.createElement("div",{className:s.a.block+" "+(a?"":s.a.single)},o.a.createElement("span",{className:s.a.label},"Author"),o.a.createElement("span",{className:s.a.value},n)),t?o.a.createElement("div",{className:s.a.block+" "+(a?s.a.double:"")},o.a.createElement("span",{className:s.a.label},"Updated by"),o.a.createElement("span",{className:s.a.value},t)):null,o.a.createElement("div",{className:s.a.block+" "+(a?s.a.double:"")},o.a.createElement("span",{className:s.a.label},"On"),o.a.createElement("span",{className:s.a.value},a)))};l.propTypes=p,l.defaultProps={updated:""},n.a=l}}]);