(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{158:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return t?o.a.createElement(h,i(i({ref:n},s),{},{components:t})):o.a.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<r;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},159:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(1),c=t.n(r),i=t(56),l=t.n(i),s={name:c.a.string.isRequired,updated:c.a.string,date:c.a.string.isRequired},p=function(e){var n=e.name,t=e.updated,a=e.date;return o.a.createElement("div",{className:l.a.editedBy},o.a.createElement("div",{className:l.a.block+" "+(a?"":l.a.single)},o.a.createElement("span",{className:l.a.label},"Author"),o.a.createElement("span",{className:l.a.value},n)),t?o.a.createElement("div",{className:l.a.block+" "+(a?l.a.double:"")},o.a.createElement("span",{className:l.a.label},"Updated by"),o.a.createElement("span",{className:l.a.value},t)):null,o.a.createElement("div",{className:l.a.block+" "+(a?l.a.double:"")},o.a.createElement("span",{className:l.a.label},"On"),o.a.createElement("span",{className:l.a.value},a)))};p.propTypes=s,p.defaultProps={updated:""},n.a=p},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(3),o=t(7),r=(t(0),t(158)),c=t(159),i={id:"parent-child-interaction-of-components",title:"Parent-child interaction of components",sidebar_label:"Parent-child interaction of components"},l={unversionedId:"react/training/parent-child-interaction-of-components",id:"react/training/parent-child-interaction-of-components",isDocsHomePage:!1,title:"Parent-child interaction of components",description:"Parent Child Component Interaction",source:"@site/docs/react/training/parent-child-communication.md",slug:"/react/training/parent-child-interaction-of-components",permalink:"/docs/react/training/parent-child-interaction-of-components",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/react/training/parent-child-communication.md",version:"current",sidebar_label:"Parent-child interaction of components",sidebar:"docs",previous:{title:"Webpack",permalink:"/docs/react/training/webpack"},next:{title:"Training 1",permalink:"/docs/react/train1"}},s=[{value:"Parent Child Component Interaction",id:"parent-child-component-interaction",children:[{value:"Parent to Child interaction",id:"parent-to-child-interaction",children:[]},{value:"Child to parent interaction",id:"child-to-parent-interaction",children:[]},{value:"From Parent to Child with Context",id:"from-parent-to-child-with-context",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]}],p={toc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"parent-child-component-interaction"},"Parent Child Component Interaction"),Object(r.b)("p",null,"In a react application, we can have multiple components. React components can communicate by passing ",Object(r.b)("strong",{parentName:"p"},"state")," data to each other. The ",Object(r.b)("strong",{parentName:"p"},"state")," data sent from the parent component to child component is accepted by the child component using ",Object(r.b)("strong",{parentName:"p"},"props")," object."),Object(r.b)("p",null,"A React component is a function that receives a parameter called props. Props is a bag of data, an object that can contain any number of fields."),Object(r.b)("h3",{id:"parent-to-child-interaction"},"Parent to Child interaction"),Object(r.b)("p",null,"If a parent component wants to feed data to a child component, it simply passes it via props."),Object(r.b)("h5",{id:"example"},"Example:"),Object(r.b)("p",null,"We have a StudentList component that contains data for a list of students. As it iterates through the student list at render time, it wants to pass the details of each student in its list to the child Student component. It can do that through props. These props are passed to the child component as attributes in JSX:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"function StudentList() {\n  const list = [\n    {name: 'Adam', gender: 'M'},\n    {title: 'Laura', author: 'F'},\n    // ...\n  ];\n\n  return (\n    <ul>\n      {list.map((student, i) => (\n        <Student name={student.name} gender={student.gender} key={i} />\n      ))}\n    </ul>\n  );\n}\n")),Object(r.b)("p",null,"Then the Book component can receive and use those fields as contained in the props parameter to its function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"function Student(props) {\n  return (\n    <li>\n      <h2>{props.name</h2>\n      <div>{props.gender}</div>\n    </li>\n  )\n}\n")),Object(r.b)("h3",{id:"child-to-parent-interaction"},"Child to parent interaction"),Object(r.b)("p",null,"A child component can communicate back to its parent component by ",Object(r.b)("strong",{parentName:"p"},"callbacks"),"."),Object(r.b)("p",null,"A special prop of type function can be passed down to a child. At the time of a relevant event (eg, user interaction) the child can then call this function as a callback."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"function StudentName(props) {\n  return (\n    <label>\n      Student Name:\n      <input onChange={props.onChange} value={props.name} />\n    </label>\n  );\n}\n")),Object(r.b)("p",null,"It receives a onChange function in the props, sent from its parent. It binds this function to the onChange event on the input field. When the input changes, it will call the onChange callback, passing the change Event object."),Object(r.b)("p",null,"Because the parent, StudentForm, has reference to this function, it can receive the arguments that are passed to the function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"function StudentForm(props) {\n  const [name, setName] = useState(props.student.name);\n  function handleNameChange(e) {\n    setNametTitle(e.target.value);\n  }\n  return (\n    <form>\n      <StudentName onChange={handleNameChange} name={name} />\n    </form>\n  );\n}\n")),Object(r.b)("p",null,"In this case, the parent passed handleNameChange, and when it's called, it sets the internal state based on the value of e.target.value -- a value that has come as a callback argument from the child component."),Object(r.b)("h3",{id:"from-parent-to-child-with-context"},"From Parent to Child with Context"),Object(r.b)("p",null,"If we desire something to be globally available -- in many components and levels in the hierarchy -- props passing has the potential to be cumbersome. Context is used in React to share data across deeply nested components."),Object(r.b)("p",null,"We might like to broadcast to all child components, such as theming data."),Object(r.b)("p",null,"Instead of passing theme props to every component down the tree, we can define a theme context to be provided at the top and then consume it in whichever child needs it down the line."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'const ColorContext = React.createContext("yellow")\nclass App extends React.Component {\n    render() {\n        return (\n            <ColorContext.Provider>\n                <ThemeExample />\n            </ColorContext.Provider>\n        )\n    }\n}\nclass ThemeExample extends React.Component {\n    render() {\n        return (\n            {this.context}\n            <ColorExample />\n        )\n    }\n}\nclass ColorExample extends React.Component {\n    render() {\n        return (\n            <BackgroundTheme />\n        )\n    }\n}\nclass BackgroundTheme extends React.Component {\n    render() {\n        <div>\n            {this.context}\n        </div>\n    }\n}\n')),Object(r.b)("h3",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"React mechanisms for communicating between components are simple and effective. ",Object(r.b)("strong",{parentName:"p"},"Props")," allow data to flow down the component hierarchy from parent to child."),Object(r.b)("p",null,"When a child wants to communicate back up to a parent, a ",Object(r.b)("strong",{parentName:"p"},"callback")," function is passed through props. Context provides additional convenience and globally providing data across the component tree hierarchy."),Object(r.b)(c.a,{name:"Chris Rachel",date:"13/05/2020",mdxType:"EditedBy"}))}d.isMDXComponent=!0}}]);