(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(1),i=n.n(r),c=n(56),s=n.n(c),l={name:i.a.string.isRequired,updated:i.a.string,date:i.a.string.isRequired},p=function(e){var t=e.name,n=e.updated,o=e.date;return a.a.createElement("div",{className:s.a.editedBy},a.a.createElement("div",{className:s.a.block+" "+(o?"":s.a.single)},a.a.createElement("span",{className:s.a.label},"Author"),a.a.createElement("span",{className:s.a.value},t)),n?a.a.createElement("div",{className:s.a.block+" "+(o?s.a.double:"")},a.a.createElement("span",{className:s.a.label},"Updated by"),a.a.createElement("span",{className:s.a.value},n)):null,a.a.createElement("div",{className:s.a.block+" "+(o?s.a.double:"")},a.a.createElement("span",{className:s.a.label},"On"),a.a.createElement("span",{className:s.a.value},o)))};p.propTypes=l,p.defaultProps={updated:""},t.a=p},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/prop-context-2e9003d0fec0afa1d36e1a6d6249b233.png"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(158)),i=n(159),c={id:"context",title:"Context",sidebar_label:"Context"},s={unversionedId:"react/training/context",id:"react/training/context",isDocsHomePage:!1,title:"Context",description:"Context - Introduction",source:"@site/docs/react/training/context.md",slug:"/react/training/context",permalink:"/docs/react/training/context",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/react/training/context.md",version:"current",sidebar_label:"Context",sidebar:"docs",previous:{title:"React routing",permalink:"/docs/react/training/react-routing"},next:{title:"React HOC",permalink:"/docs/react/training/hoc"}},l=[{value:"Context - Introduction",id:"context---introduction",children:[]},{value:"When Should We Use Context?",id:"when-should-we-use-context",children:[]},{value:"How To Use Context?",id:"how-to-use-context",children:[]},{value:"Providing Context",id:"providing-context",children:[]},{value:"Consuming Context",id:"consuming-context",children:[]},{value:"Class component",id:"class-component",children:[]},{value:"Functional component and Hooks",id:"functional-component-and-hooks",children:[]}],p={toc:l};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"context---introduction"},"Context - Introduction"),Object(r.b)("p",null,"Context provides a way to pass data through the component tree without having to pass props down manually at every level."),Object(r.b)("p",null,"For a more in-depth definition, it provides a way for you to make particular data available to all components throughout the component tree no matter how deeply nested that component may be"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'const App = () => {\n  return <ParentComponent theme="light" />;\n};\n\nconst ParentComponent = props => <Child theme={props.theme} />;\n\nconst Child = props => <Grandchild theme={props.theme} />;\n\nconst Grandchild = props => <p>Theme: {props.theme}</p>;\n')),Object(r.b)("p",null,"In the example above, we specified the application theme using a props in the ParentComponent called theme. We had to pass that props to all components down the component tree to get it where it is needed which is the GrandChild component. The ChildComponent had nothing to do with the theme props but was just used as an intermediary."),Object(r.b)("p",null,"Now, imagine the GrandChild component was more deeply nested than it was in the top example. We would have to pass the theme props the same way we did here which would be cumbersome. This is the problem that Context solves. With Context, every component in the component tree has access to whatever data we decide to put in our context."),Object(r.b)("h4",{id:"prop-drilling-vs-context-api"},"Prop Drilling VS Context API"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt text",src:n(214).default,title:"Context Data Passing"})),Object(r.b)("h3",{id:"when-should-we-use-context"},"When Should We Use Context?"),Object(r.b)("p",null,"It would recommend reaching for Context when you find yourself passing props down through three or more levels in your component tree. You might notice that you have renamed your props, making it challenging to determine the data\u2019s origin. You might consider implementing context if a bunch of your components know about irrelevant data."),Object(r.b)("h3",{id:"how-to-use-context"},"How To Use Context?"),Object(r.b)("p",null,"First of all we will create Context, and call it UserContext. This will also give us UserContext.Provider and UserContext.Consumer. What these two components do is straightforward:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Provider - The component that provides the value"),Object(r.b)("li",{parentName:"ul"},"Consumer - A component that is consuming the value")),Object(r.b)("p",null,"So We'll create it with React.createContext() in a new file called UserContext.js."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"// src/UserContext.js\n\nimport React from 'react';\n\nconst UserContext = React.createContext();\n\nexport const UserProvider = UserContext.Provider;\nexport const UserConsumer = UserContext.Consumer;\n\nexport default UserContext;\n")),Object(r.b)("p",null,"We are passing in an empty object value here to represent that we might be filling in this data later with an API call. You can pre-populate this with whatever data you want, in case you're not retrieving the data through an API."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"React.createContext(true);\n")),Object(r.b)("h3",{id:"providing-context"},"Providing Context"),Object(r.b)("p",null,"The provider always needs to exist as a wrapper around the parent element, no matter how you choose to consume the values. We'll wrap the entire App component in the Provider. We are just creating some value (user) and passing it down as the Provider value prop."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\n\nimport React from 'react';\nimport HomePage from './HomePage';\nimport {UserProvider} from './UserContext';\n\nfunction App() {\n  const user = {name: 'Farman', loggedIn: true};\n\n  return (\n    <UserProvider value={user}>\n      <HomePage />\n    </UserProvider>\n  );\n}\n")),Object(r.b)("p",null,"Now any child, grandchild, great-grandchild, and so on will have access to user as a prop. Unfortunately, retrieving that value is slightly more involved than simply getting it like you might with this.props or this.state."),Object(r.b)("h3",{id:"consuming-context"},"Consuming Context"),Object(r.b)("p",null,"The way you provide Context is the same for class and functional components, but consuming it is a little different for both."),Object(r.b)("h3",{id:"class-component"},"Class component"),Object(r.b)("p",null,"The traditional way to retrieve Context values was by wrapping the child component in the Consumer. From there, you would be able to access the value prop as props. You may still see this, but it's more of a legacy way of accessing Context."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"// src/HomePage.js (class example)\n\nimport React, {Component} from 'react';\nimport {UserConsumer} from './UserContext';\n\nclass HomePage extends Component {\n  render() {\n    return (\n      <UserConsumer>\n        {props => {\n          return <div>{props.name}</div>;\n        }}\n      </UserConsumer>\n    );\n  }\n}\n")),Object(r.b)("h3",{id:"functional-component-and-hooks"},"Functional component and Hooks"),Object(r.b)("p",null,"For functional components, you'll use useContext, such as in the example below. This is the equivalent of static contextType."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"// src/HomePage.js (Functional Component)\n\nimport React, {useContext} from 'react';\nimport UserContext from './UserContext';\n\nexport const HomePage = () => {\n  const user = useContext(UserContext);\n\n  return <div>{user.name}</div>;\n};\n")),Object(r.b)(i.a,{name:"Farman",date:"20/05/2020",mdxType:"EditedBy"}))}u.isMDXComponent=!0}}]);