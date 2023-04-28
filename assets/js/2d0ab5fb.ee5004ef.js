"use strict";(self.webpackChunkfeed_docs=self.webpackChunkfeed_docs||[]).push([[3256],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},933:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),o=n(5697),r=n.n(o),i={editedBy:"editedBy_t81w",block:"block_jsl5",label:"label_ynlq",value:"value_H8Hf"},c={name:r().string.isRequired,updated:r().string,date:r().string.isRequired},l=function(e){var t=e.name,n=e.updated,o=e.date;return a.createElement("div",{className:i.editedBy},a.createElement("div",{className:i.block+" "+(o?"":i.single)},a.createElement("span",{className:i.label},"Author"),a.createElement("span",{className:i.value},t)),n?a.createElement("div",{className:i.block+" "+(o?i.double:"")},a.createElement("span",{className:i.label},"Updated by"),a.createElement("span",{className:i.value},n)):null,a.createElement("div",{className:i.block+" "+(o?i.double:"")},a.createElement("span",{className:i.label},"On"),a.createElement("span",{className:i.value},o)))};l.propTypes=c,l.defaultProps={updated:""};var s=l},8382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=n(933),c=["components"],l={id:"parent-child-interaction-of-components",title:"Parent-child interaction of components",sidebar_label:"Parent-child interaction of components"},s=void 0,p={unversionedId:"react/training/parent-child-interaction-of-components",id:"react/training/parent-child-interaction-of-components",title:"Parent-child interaction of components",description:"Parent Child Component Interaction",source:"@site/docs/react/training/parent-child-communication.md",sourceDirName:"react/training",slug:"/react/training/parent-child-interaction-of-components",permalink:"/feed-docs/docs/react/training/parent-child-interaction-of-components",draft:!1,editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/react/training/parent-child-communication.md",tags:[],version:"current",frontMatter:{id:"parent-child-interaction-of-components",title:"Parent-child interaction of components",sidebar_label:"Parent-child interaction of components"},sidebar:"docs",previous:{title:"Webpack",permalink:"/feed-docs/docs/react/training/webpack"},next:{title:"Training 1",permalink:"/feed-docs/docs/react/train1"}},d={},u=[{value:"Parent Child Component Interaction",id:"parent-child-component-interaction",level:2},{value:"Parent to Child interaction",id:"parent-to-child-interaction",level:3},{value:"Example:",id:"example",level:5},{value:"Child to parent interaction",id:"child-to-parent-interaction",level:3},{value:"From Parent to Child with Context",id:"from-parent-to-child-with-context",level:3},{value:"Conclusion",id:"conclusion",level:3}],m={toc:u},h="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"parent-child-component-interaction"},"Parent Child Component Interaction"),(0,r.kt)("p",null,"In a react application, we can have multiple components. React components can communicate by passing ",(0,r.kt)("strong",{parentName:"p"},"state")," data to each other. The ",(0,r.kt)("strong",{parentName:"p"},"state")," data sent from the parent component to child component is accepted by the child component using ",(0,r.kt)("strong",{parentName:"p"},"props")," object."),(0,r.kt)("p",null,"A React component is a function that receives a parameter called props. Props is a bag of data, an object that can contain any number of fields."),(0,r.kt)("h3",{id:"parent-to-child-interaction"},"Parent to Child interaction"),(0,r.kt)("p",null,"If a parent component wants to feed data to a child component, it simply passes it via props."),(0,r.kt)("h5",{id:"example"},"Example:"),(0,r.kt)("p",null,"We have a StudentList component that contains data for a list of students. As it iterates through the student list at render time, it wants to pass the details of each student in its list to the child Student component. It can do that through props. These props are passed to the child component as attributes in JSX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function StudentList() {\n  const list = [\n    {name: 'Adam', gender: 'M'},\n    {title: 'Laura', author: 'F'},\n    // ...\n  ];\n\n  return (\n    <ul>\n      {list.map((student, i) => (\n        <Student name={student.name} gender={student.gender} key={i} />\n      ))}\n    </ul>\n  );\n}\n")),(0,r.kt)("p",null,"Then the Book component can receive and use those fields as contained in the props parameter to its function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Student(props) {\n  return (\n    <li>\n      <h2>{props.name</h2>\n      <div>{props.gender}</div>\n    </li>\n  )\n}\n")),(0,r.kt)("h3",{id:"child-to-parent-interaction"},"Child to parent interaction"),(0,r.kt)("p",null,"A child component can communicate back to its parent component by ",(0,r.kt)("strong",{parentName:"p"},"callbacks"),"."),(0,r.kt)("p",null,"A special prop of type function can be passed down to a child. At the time of a relevant event (eg, user interaction) the child can then call this function as a callback."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function StudentName(props) {\n  return (\n    <label>\n      Student Name:\n      <input onChange={props.onChange} value={props.name} />\n    </label>\n  );\n}\n")),(0,r.kt)("p",null,"It receives a onChange function in the props, sent from its parent. It binds this function to the onChange event on the input field. When the input changes, it will call the onChange callback, passing the change Event object."),(0,r.kt)("p",null,"Because the parent, StudentForm, has reference to this function, it can receive the arguments that are passed to the function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function StudentForm(props) {\n  const [name, setName] = useState(props.student.name);\n  function handleNameChange(e) {\n    setNametTitle(e.target.value);\n  }\n  return (\n    <form>\n      <StudentName onChange={handleNameChange} name={name} />\n    </form>\n  );\n}\n")),(0,r.kt)("p",null,"In this case, the parent passed handleNameChange, and when it's called, it sets the internal state based on the value of e.target.value -- a value that has come as a callback argument from the child component."),(0,r.kt)("h3",{id:"from-parent-to-child-with-context"},"From Parent to Child with Context"),(0,r.kt)("p",null,"If we desire something to be globally available -- in many components and levels in the hierarchy -- props passing has the potential to be cumbersome. Context is used in React to share data across deeply nested components."),(0,r.kt)("p",null,"We might like to broadcast to all child components, such as theming data."),(0,r.kt)("p",null,"Instead of passing theme props to every component down the tree, we can define a theme context to be provided at the top and then consume it in whichever child needs it down the line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const ColorContext = React.createContext("yellow")\nclass App extends React.Component {\n    render() {\n        return (\n            <ColorContext.Provider>\n                <ThemeExample />\n            </ColorContext.Provider>\n        )\n    }\n}\nclass ThemeExample extends React.Component {\n    render() {\n        return (\n            {this.context}\n            <ColorExample />\n        )\n    }\n}\nclass ColorExample extends React.Component {\n    render() {\n        return (\n            <BackgroundTheme />\n        )\n    }\n}\nclass BackgroundTheme extends React.Component {\n    render() {\n        <div>\n            {this.context}\n        </div>\n    }\n}\n')),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"React mechanisms for communicating between components are simple and effective. ",(0,r.kt)("strong",{parentName:"p"},"Props")," allow data to flow down the component hierarchy from parent to child."),(0,r.kt)("p",null,"When a child wants to communicate back up to a parent, a ",(0,r.kt)("strong",{parentName:"p"},"callback")," function is passed through props. Context provides additional convenience and globally providing data across the component tree hierarchy."),(0,r.kt)(i.Z,{name:"Chris Rachel",date:"13/05/2020",mdxType:"EditedBy"}))}f.isMDXComponent=!0}}]);