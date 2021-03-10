(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(158)),s=n(159),l={id:"react-component-styling",title:"React Component Styling",sidebar_label:"React-Component-Styling"},i={unversionedId:"react/training/react-component-styling",id:"react/training/react-component-styling",isDocsHomePage:!1,title:"React Component Styling",description:"There seems to be about eight different ways of styling React JS components used widely in the industry for production level work:",source:"@site/docs/react/training/styling-react-components.md",slug:"/react/training/react-component-styling",permalink:"/feed-docs/docs/react/training/react-component-styling",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/react/training/styling-react-components.md",version:"current",sidebar_label:"React-Component-Styling",sidebar:"docs",previous:{title:"Handling Form events",permalink:"/feed-docs/docs/react/training/form-events"},next:{title:"Flux architecture",permalink:"/feed-docs/docs/react/training/flux-architecture"}},c=[{value:"Inline CSS",id:"inline-css",children:[{value:"Example",id:"example",children:[]}]},{value:"Regular CSS",id:"regular-css",children:[{value:"Example",id:"example-1",children:[]}]},{value:"CSS in JS",id:"css-in-js",children:[{value:"Example",id:"example-2",children:[]}]},{value:"Styled Components",id:"styled-components",children:[{value:"Example",id:"example-3",children:[]}]},{value:"CSS Modules",id:"css-modules",children:[{value:"Example",id:"example-4",children:[]}]},{value:"Sass &amp; SCSS",id:"sass--scss",children:[{value:"Example",id:"example-5",children:[]}]},{value:"Less",id:"less",children:[{value:"Example",id:"example-6",children:[]}]},{value:"Stylable",id:"stylable",children:[{value:"Example",id:"example-7",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There seems to be about eight different ways of styling React JS components used widely in the industry for production level work:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Inline CSS")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Normal CSS")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"CSS in JS")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Styled Components")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"CSS Modules")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Sass & SCSS")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Less")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Stylable"))),Object(r.b)("p",null,"For each method, I\u2019ll look at the need for dependencies, the difficulty level, and whether or not the approach is really a good one or not."),Object(r.b)("h2",{id:"inline-css"},"Inline CSS"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Dependencies: None Difficulty: Easy Approach: Worst")),Object(r.b)("p",null,"I don\u2019t think anyone needs an introduction to inline CSS. This is the CSS styling sent to the element directly using the HTML or JSX. You can include a JavaScript object for CSS in React components. There are a few restrictions like replacing every - with camelCase text. You can style them in two ways using JavaScript objects as shown in the example."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst spanStyles = {\n  color: '#fff',\n  borderColor: '#00f',\n};\n\nconst Button = props => (\n  <button\n    style={{\n      color: '#fff',\n      borderColor: '#00f',\n    }}>\n    <span style={spanStyles}>Button Name</span>\n  </button>\n);\n")),Object(r.b)("h2",{id:"regular-css"},"Regular CSS"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Dependencies: None Difficulty: Easy Approach: Okay")),Object(r.b)("p",null,"Regular CSS is a common approach, arguably one step better than inline CSS. The styles can be imported to any number of pages and elements unlike inline CSS, which is applied directly to the particular element. Normal CSS has several advantages, such as decreasing the file size with a clean code structure."),Object(r.b)("p",null,"You can maintain any number of style sheets, and it can be easier to change or customize styles when needed. But regular CSS might be a major problem if you\u2019re working on a bigger project with lots of people involved, especially without an agreed pattern to do styling in CSS."),Object(r.b)("h3",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"a:link {\n  color: gray;\n}\na:visited {\n  color: green;\n}\na:hover {\n  color: rebeccapurple;\n}\na:active {\n  color: teal;\n}\n")),Object(r.b)("h2",{id:"css-in-js"},"CSS in JS"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Dependencies: jss, jss-preset-default, jss-cli Difficulty: Easy Approach: Decent")),Object(r.b)("p",null,"CSS in JS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way. It can compile in the browser, on the server side or at build time in Node. It uses JavaScript as a language to describe styles in a declarative and maintainable way. It\u2019s a high performance JS-to-CSS compiler which works at runtime and server-side. When thinking in components, you no longer have to maintain a bunch of style sheets. CSS-in-JS abstracts the CSS model to the component level, rather than the document level (modularity)."),Object(r.b)("h3",{id:"example-2"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport injectSheet from 'react-jss';\n\n// Create your Styles. Remember, since React-JSS uses the default preset,\n// most plugins are available without further configuration needed.\nconst styles = {\n  myButton: {\n    color: 'green',\n    margin: {\n      // jss-expand gives more readable syntax\n      top: 5, // jss-default-unit makes this 5px\n      right: 0,\n      bottom: 0,\n      left: '1rem',\n    },\n    '& span': {\n      // jss-nested applies this to a child span\n      fontWeight: 'bold', // jss-camel-case turns this into 'font-weight'\n    },\n  },\n  myLabel: {\n    fontStyle: 'italic',\n  },\n};\n\nconst Button = ({classes, children}) => (\n  <button className={classes.myButton}>\n    <span className={classes.myLabel}>{children}</span>\n  </button>\n);\n\n// Finally, inject the stylesheet into the component.\nconst StyledButton = injectSheet(styles)(Button);\n")),Object(r.b)("h2",{id:"styled-components"},"Styled Components"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Dependencies: styled-components Difficulty: Medium Approach: Decent")),Object(r.b)("p",null,"Styled-components is an example of the above-mentioned CSS in JS. It basically gives us CSS with other properties you wish we had in CSS like nesting. It also allows us to style the CSS under the variable created in JavaScript. You could normally create a React component along with the styles attached to it without having to create a separate file for CSS. Styled-components allows us to create custom reusable components which can be less of a hassle to maintain. Props can be used in styling the components in the same way it is passed in the React components. Props are used instead of classes in CSS and set the properties dynamically."),Object(r.b)("h3",{id:"example-3"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport styled, {css} from 'styled-components';\n\nconst Button = styled.button`\n  cursor: pointer;\n  background: transparent;\n  font-size: 16px;\n  border-radius: 3px;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n  transition: 0.5s all ease-out;\n  ${props =>\n    props.primary &&\n    css`\n      background-color: white;\n      color: green;\n      border-color: green;\n    `};\n`;\n\nexport default Button;\n")),Object(r.b)("h2",{id:"css-modules"},"CSS Modules"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Dependencies: css-loader Difficulty: Tough (Uses Loader Configuration) Approach: Better")),Object(r.b)("p",null,"If you\u2019ve ever felt like the CSS global scope problem takes up most of your time when you have to find what a particular style does, or if you\u2019ve had to write a CSS file without organizing it properly to make the code work first, or if getting rid of the files gives you a slight nudge in your heart wondering if you might break the whole code, I feel you. CSS Modules make sure that all of the styles for a component are at one single place and apply to that particular component. This certainly solves the global scope problem of CSS. The composition feature acts as a weapon to represent shared styles between the states. It\u2019s similar to the mixin in Sass, making it possible to combine multiple groups of styles."),Object(r.b)("h3",{id:"example-4"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport style from "./panel.css";\n\nconst Panel = () => (\n  <div className={style.panelDefault}>\n    <div className={style.panelBody}>A Basic Panel</div>\n  </div>\n);\n\nexport default Panel;\n.panelDefault {\n  border-color: #ddd;\n}\n.panelBody {\n  padding: 15px;\n}\n')),Object(r.b)("h2",{id:"sass--scss"},"Sass & SCSS"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Dependencies: node-sass Difficulty: Easy Approach: Best")),Object(r.b)("p",null,"Sass claims that it\u2019s the most mature, stable, and powerful professional grade CSS extension language in the world. It\u2019s a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as \u201csyntactic sugar\u201d) into regular CSS. The aim is to make the coding process simpler and more efficient. Just like other programming languages, Sass allows the use of variables, nesting, partials, imports and functions, which add super powers to regular CSS."),Object(r.b)("h3",{id:"example-5"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"$font-stack: 'Open Sans', sans-serif;\n$primary-color: #333;\n\nbody {\n  font: 100% $font-stack;\n  color: $primary-color;\n}\n")),Object(r.b)("h2",{id:"less"},"Less"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Dependencies: less, less-loader Difficulty: Easy Approach: Good")),Object(r.b)("p",null,"Less (Leaner Style Sheets) is a open-source, dynamic preprocessor style sheet language that can be compiled into CSS and run on the client side or server side. It takes inspiration from both CSS and Sass and is similar to SCSS. A few notable differences include variables starting with an @ sign in Less and with a \\$ in Sass."),Object(r.b)("h3",{id:"example-6"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"@pale-green-color: #4D926F;\n\n#header {\n  color: @pale-green-color;\n}\n\nh2 {\n  color: @pale-green-color;\n}\n")),Object(r.b)("h2",{id:"stylable"},"Stylable"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Dependencies: @stylable/core, @stylable/runtime, @stylable/optimizer, @stylable/module-utils, @stylable/custom-value Difficulty: Difficult Approach: Better")),Object(r.b)("p",null,"Stylable is another pre-processor joining Sass, SCSS, and Less. If there is a struggle in getting handy with styled components \u2014 as their syntax is slightly different from Normal CSS \u2014 this comes to the rescue. Stylable is just like CSS but offers more opportunities to make each component discreet. This can do what CSS Modules finds it harder to do, which is styling the internal parts of a UI. Along with the other properties of CSS, Stylable also offers custom pseudo classes and pseudo elements. This property of Stylable automatically allows us to create custom CSS classes, which enables us to do the styling to internal parts of the components."),Object(r.b)("h3",{id:"example-7"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"@namespace 'Page';\n:import {\n  -st-from: './video-player.st.css';\n  -st-default: VideoPlayer;\n}\n.mainVideo {\n  -st-extends: VideoPlayer; /* define mainVideo as VideoPlayer */\n}\n.mainVideo::playbutton {\n  /* override mainVideo playButton */\n  background: green;\n  color: purple;\n}\n/* CSS output*/\n.Page__mainVideo.VideoPlayer__root {\n}\n.Page__mainVideo.VideoPlayer__root .VideoPlayer__playButton {\n  background: green;\n  color: purple;\n}\n")),Object(r.b)(s.a,{name:"Vinay Edadan",date:"18/05/2020",mdxType:"EditedBy"}))}d.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.a.createElement(b,l(l({ref:t},c),{},{components:n})):o.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1),s=n.n(r),l=n(56),i=n.n(l),c={name:s.a.string.isRequired,updated:s.a.string,date:s.a.string.isRequired},p=function(e){var t=e.name,n=e.updated,a=e.date;return o.a.createElement("div",{className:i.a.editedBy},o.a.createElement("div",{className:i.a.block+" "+(a?"":i.a.single)},o.a.createElement("span",{className:i.a.label},"Author"),o.a.createElement("span",{className:i.a.value},t)),n?o.a.createElement("div",{className:i.a.block+" "+(a?i.a.double:"")},o.a.createElement("span",{className:i.a.label},"Updated by"),o.a.createElement("span",{className:i.a.value},n)):null,o.a.createElement("div",{className:i.a.block+" "+(a?i.a.double:"")},o.a.createElement("span",{className:i.a.label},"On"),o.a.createElement("span",{className:i.a.value},a)))};p.propTypes=c,p.defaultProps={updated:""},t.a=p}}]);