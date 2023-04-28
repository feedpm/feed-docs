"use strict";(self.webpackChunkfeed_docs=self.webpackChunkfeed_docs||[]).push([[6367],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},933:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(5697),o=n.n(r),i={editedBy:"editedBy_t81w",block:"block_jsl5",label:"label_ynlq",value:"value_H8Hf"},l={name:o().string.isRequired,updated:o().string,date:o().string.isRequired},s=function(e){var t=e.name,n=e.updated,r=e.date;return a.createElement("div",{className:i.editedBy},a.createElement("div",{className:i.block+" "+(r?"":i.single)},a.createElement("span",{className:i.label},"Author"),a.createElement("span",{className:i.value},t)),n?a.createElement("div",{className:i.block+" "+(r?i.double:"")},a.createElement("span",{className:i.label},"Updated by"),a.createElement("span",{className:i.value},n)):null,a.createElement("div",{className:i.block+" "+(r?i.double:"")},a.createElement("span",{className:i.label},"On"),a.createElement("span",{className:i.value},r)))};s.propTypes=l,s.defaultProps={updated:""};var p=s},3236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(933),l=["components"],s={id:"intro",title:"Angular Introduction",sidebar_label:"Introduction"},p=void 0,u={unversionedId:"angular/intro",id:"angular/intro",title:"Angular Introduction",description:"What is Angular?",source:"@site/docs/angular/intro.md",sourceDirName:"angular",slug:"/angular/intro",permalink:"/feed-docs/docs/angular/intro",draft:!1,editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/angular/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"Angular Introduction",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Tools",permalink:"/feed-docs/docs/react/tools"},next:{title:"Coding guidelines",permalink:"/feed-docs/docs/angular/coding-guidelines"}},c={},d=[{value:"What is Angular?",id:"what-is-angular",level:3},{value:"Setup angular environment",id:"setup-angular-environment",level:3},{value:"Pre requisites:",id:"pre-requisites",level:4},{value:"Step 1:",id:"step-1",level:4},{value:"Step 2: Create a workspace and initial application",id:"step-2-create-a-workspace-and-initial-application",level:4},{value:"Step 3: Run the application",id:"step-3-run-the-application",level:4},{value:"Architecture",id:"architecture",level:3},{value:"Modules:",id:"modules",level:4},{value:"Components:",id:"components",level:4},{value:"Services and dependency injection:",id:"services-and-dependency-injection",level:4},{value:"Routing:",id:"routing",level:4}],m={toc:d},h="wrapper";function g(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)(h,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"what-is-angular"},"What is Angular?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Angular is a platform and framework for building single-page client applications in HTML and TypeScript."),(0,o.kt)("li",{parentName:"ul"},"Angular is written in TypeScript."),(0,o.kt)("li",{parentName:"ul"},"It implements core and optional functionality as a set of TypeScript libraries that you import into your apps."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Current stable version: 9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Current TypeScript support version: 3.7+"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setup-angular-environment"},"Setup angular environment"),(0,o.kt)("h4",{id:"pre-requisites"},"Pre requisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Node.js"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To check your version, run node -v in a terminal/console window."),(0,o.kt)("li",{parentName:"ul"},"To get Node.js, go to ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"nodejs.org"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"npm package manager"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Installed with Node.js by default."),(0,o.kt)("li",{parentName:"ul"},"To check that you have the npm client installed, run npm -v in a terminal/console window.")))),(0,o.kt)("h4",{id:"step-1"},"Step 1:"),(0,o.kt)("p",null,"To install the CLI (globally) using npm, open a terminal/console window and enter the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install -g @angular/cli\n")),(0,o.kt)("h4",{id:"step-2-create-a-workspace-and-initial-application"},"Step 2: Create a workspace and initial application"),(0,o.kt)("p",null,"To create a new workspace and initial starter app:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the CLI command ng new and provide the name my-app, as shown here:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ng new my-app\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"The ng new command prompts you for information about features to include in the initial app. Accept the defaults by pressing the Enter or Return key.")),(0,o.kt)("p",null,"The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes. The CLI creates a new workspace and a simple Welcome app, ready to run."),(0,o.kt)("h4",{id:"step-3-run-the-application"},"Step 3: Run the application"),(0,o.kt)("p",null,"The Angular CLI includes a server, so that you can easily build and serve your app locally."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the workspace folder (my-app)."),(0,o.kt)("li",{parentName:"ul"},"Launch the server by using the CLI command ",(0,o.kt)("strong",{parentName:"li"}," ng serve "),", with the ",(0,o.kt)("strong",{parentName:"li"}," --open ")," option.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd my-app\nng serve --open\n")),(0,o.kt)("p",null,"The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files. The --open (or just -o) option automatically opens your browser to ",(0,o.kt)("em",{parentName:"p"}," http://localhost:4200/ "),"."),(0,o.kt)("p",null,"We can specify the port in which the application should run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ng serve --port 1337\n")),(0,o.kt)("p",null,"Above command runs the app in port 1337 (http://localhost:1337). By default angular applications run on port ",(0,o.kt)("strong",{parentName:"p"},"4200")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:n(7342).Z,title:"Angular Architrcture",width:"958",height:"436"})),(0,o.kt)("h4",{id:"modules"},"Modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The basic building blocks are ",(0,o.kt)("strong",{parentName:"li"},"NgModules"),", which provide a compilation context for components."),(0,o.kt)("li",{parentName:"ul"},"Every Angular app has a ",(0,o.kt)("strong",{parentName:"li"},"root module"),", conventionally named ",(0,o.kt)("em",{parentName:"li"},"AppModule"),", which provides the bootstrap mechanism that launches the application."),(0,o.kt)("li",{parentName:"ul"},"An app typically contains many functional modules."),(0,o.kt)("li",{parentName:"ul"},"NgModules can import functionality from other NgModules, and allow their own functionality to be exported and used by other NgModules.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For example, to use the router service in your app, you import the Router NgModule.")))),(0,o.kt)("h4",{id:"components"},"Components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM)."),(0,o.kt)("li",{parentName:"ul"},"Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"@Component()")," decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata.")),(0,o.kt)("h4",{id:"services-and-dependency-injection"},"Services and dependency injection:"),(0,o.kt)("p",null,"For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. A service class definition is immediately preceded by the ",(0,o.kt)("em",{parentName:"p"},"@Injectable()")," decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class."),(0,o.kt)("h4",{id:"routing"},"Routing:"),(0,o.kt)("p",null,"The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your app. It is modeled on the familiar browser navigation conventions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enter a URL in the address bar and the browser navigates to a corresponding page."),(0,o.kt)("li",{parentName:"ul"},"Click links on the page and the browser navigates to a new page."),(0,o.kt)("li",{parentName:"ul"},"Click the browser's back and forward buttons and the browser navigates backward and forward through the history of pages you've seen.")),(0,o.kt)("p",null,"The router maps URL-like paths to views instead of pages. When a user performs an action, such as clicking a link, that would load a new page in the browser, the router intercepts the browser's behavior, and shows or hides view hierarchies."),(0,o.kt)("p",null,"If the router determines that the current application state requires particular functionality, and the module that defines it hasn't been loaded, the router can lazy-load the module on demand."),(0,o.kt)("p",null,"The router interprets a link URL according to your app's view navigation rules and data state. You can navigate to new views when the user clicks a button or selects from a drop box, or in response to some other stimulus from any source. The router logs activity in the browser's history, so the back and forward buttons work as well."),(0,o.kt)(i.Z,{name:"Anusree",updated:"Ajay C",date:"08/04/2020",mdxType:"EditedBy"}))}g.isMDXComponent=!0},7342:function(e,t,n){t.Z=n.p+"assets/images/angular_architecture-ed759e846e019d55c8dc33750147a3c1.png"}}]);