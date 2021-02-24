(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),A=a(7),r=(a(0),a(158)),c=a(159),i={id:"installation",title:"CRA Installation",sidebar_label:"Installing React"},l={unversionedId:"react/training/installation",id:"react/training/installation",isDocsHomePage:!1,title:"CRA Installation",description:"React create-react-app",source:"@site/docs/react/training/install-react-using-cra.md",slug:"/react/training/installation",permalink:"/feed-docs/docs/react/training/installation",editUrl:"https://github.com/feedpm/feed-docs/tree/main/docs/react/training/install-react-using-cra.md",version:"current",sidebar_label:"Installing React",sidebar:"docs",previous:{title:"Training 1",permalink:"/feed-docs/docs/react/train1"},next:{title:"Lifting States in React",permalink:"/feed-docs/docs/react/training/lifting-state"}},o=[{value:"React create-react-app",id:"react-create-react-app",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Installing create-react-app",id:"installing-create-react-app",children:[]},{value:"Create a new React project",id:"create-a-new-react-project",children:[]},{value:"Starting our React App",id:"starting-our-react-app",children:[]},{value:"Build Scripts",id:"build-scripts",children:[]}]}],p={toc:o};function s(e){var t=e.components,i=Object(A.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"react-create-react-app"},"React create-react-app"),Object(r.b)("p",null,"The create-react-app is an excellent tool for beginners, which allows you to create and run React project very quickly. It does not take any configuration manually. This tool is wrapping all of the required dependencies like Webpack, Babel for React project itself and then you need to focus on writing React code only. This tool sets up the development environment, provides an excellent developer experience, and optimizes the app for production."),Object(r.b)("p",null,"There are lots of goodies that come out of the box. We can also easily add more support for things like Sass or TypeScript."),Object(r.b)("p",null,"We can run a single command and get a brand new React application that comes with:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A recommended starting folder structure"),Object(r.b)("li",{parentName:"ul"},"A solid build setup with webpack and Babel (that you don't have to worry about setting up)"),Object(r.b)("li",{parentName:"ul"},"Scripts to run our React application"),Object(r.b)("li",{parentName:"ul"},"Extensibility"),Object(r.b)("li",{parentName:"ul"},"And more!")),Object(r.b)("h3",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"The Create React App is maintained by Facebook and can works on any platform, for example, macOS, Windows, Linux, etc. To create a React Project using create-react-app, you need to have installed the following things in your system."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Node version >= 8.10"),Object(r.b)("li",{parentName:"ul"},"NPM version >= 5.6")),Object(r.b)("h3",{id:"installing-create-react-app"},"Installing create-react-app"),Object(r.b)("p",null,"There are many ways to install create-react-app. Use whichever works best for your team and environment:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# using npx (npm 5.2+)\n$ npx create-react-app my-new-app\n\n# using npm (npm 6+)\n$ npm init react-app my-new-app\n\n# using yarn (yarn 0.25+)\n$ yarn create react-app my-new-app\n\n\n")),Object(r.b)("h3",{id:"create-a-new-react-project"},"Create a new React project"),Object(r.b)("p",null,"We\u2019ll use npx to create a new project:"),Object(r.b)("p",null,"Once the React installation is successful, we can create a new React project using create-react-app command."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt text",src:a(219).default,title:"execution window 1"})),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt text",src:a(220).default,title:"execution window 2"})),Object(r.b)("p",null,"This is the new folder structure we\u2019ll see:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt text",src:a(221).default,title:"folder structure"})),Object(r.b)("h3",{id:"starting-our-react-app"},"Starting our React App"),Object(r.b)("p",null,"To start developing on our React app, we can tell the CLI to run everything and open our app in the browser at http://localhost:3000 ."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# with npm\n$ npm run start\n\n# with yarn\n$ yarn start\n\n")),Object(r.b)("p",null,"The start command will run webpack and Babel and get our app loaded."),Object(r.b)("p",null,"Essentially what this command does is compile all of our React code including transpiling, checking for errors, compiling Sass, creating a JavaScript bundle of all our code, injecting this into the public/index.html file and finally loading it all up in our browser."),Object(r.b)("h3",{id:"build-scripts"},"Build Scripts"),Object(r.b)("p",null,"Create React App comes with a few scripts that are helpful for our development. We will use these scripts whenever we want to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Run our application for development"),Object(r.b)("li",{parentName:"ul"},"Build our application for production"),Object(r.b)("li",{parentName:"ul"},"Test our application if we've created tests")),Object(r.b)("p",null,"You can see inside our package.json where the scripts are located:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt text",src:a(222).default,title:"snippet from package.json"})),Object(r.b)("p",null,"We can run any of the above commands using the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# starting our app for development\n$ npm start\n$ npm run start\n$ yarn start\n\n# building our app for production\n$ npm run production\n$ yarn production\n\n# testing our application\n$ npm run test\n\n# ejecting our application  (ONLY DO IF YOU KNOW WHAT YOU ARE DOING)\n$ npm run eject\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"start: This command will start our application for development. It will even open up our application for development in browser at http://localhost:3000.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"build: We can bundle our application for production and generate only a few files that we can host for our users.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"test: This will run all of our tests like the one that comes with Create React App in App.test.js")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"eject: Ejecting will give you access to configure every aspect of your React application. This means that Create React App is no longer handling the configuration for your application. This command is only for those that are 100% sure they want to leave the comfort of CRA and need extra configuration."))),Object(r.b)(c.a,{name:"Athira V.U.",date:"28/04/2020",mdxType:"EditedBy"}))}s.isMDXComponent=!0},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var n=a(0),A=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,A=function(e,t){if(null==e)return{};var a,n,A={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(A[a]=e[a]);return A}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(A[a]=e[a])}return A}var o=A.a.createContext({}),p=function(e){var t=A.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return A.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return A.a.createElement(A.a.Fragment,{},t)}},b=A.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(a),b=n,h=s["".concat(c,".").concat(b)]||s[b]||u[b]||r;return a?A.a.createElement(h,i(i({ref:t},o),{},{components:a})):A.a.createElement(h,i({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<r;o++)c[o]=a[o];return A.a.createElement.apply(null,c)}return A.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},159:function(e,t,a){"use strict";var n=a(0),A=a.n(n),r=a(1),c=a.n(r),i=a(56),l=a.n(i),o={name:c.a.string.isRequired,updated:c.a.string,date:c.a.string.isRequired},p=function(e){var t=e.name,a=e.updated,n=e.date;return A.a.createElement("div",{className:l.a.editedBy},A.a.createElement("div",{className:l.a.block+" "+(n?"":l.a.single)},A.a.createElement("span",{className:l.a.label},"Author"),A.a.createElement("span",{className:l.a.value},t)),a?A.a.createElement("div",{className:l.a.block+" "+(n?l.a.double:"")},A.a.createElement("span",{className:l.a.label},"Updated by"),A.a.createElement("span",{className:l.a.value},a)):null,A.a.createElement("div",{className:l.a.block+" "+(n?l.a.double:"")},A.a.createElement("span",{className:l.a.label},"On"),A.a.createElement("span",{className:l.a.value},n)))};p.propTypes=o,p.defaultProps={updated:""},t.a=p},219:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/install-cra2-a097a7c0c6b7f915e43d332a05b53c62.png"},220:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/install-cra3-392caf91943b0dd8b77996a22b60dab2.png"},221:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/install-cra4-a2c110b6f8d09a6a748582f8cf609d8c.png"},222:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhMAAAD2CAYAAABstQU8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABz2SURBVHhe7d2/btRK3P/x54ZOk+IXKQX6CSGhI1EG0Z0qqzQ0XAAUUYSEuACCxJOaFOHUUKEgqPbUuQhugG4ee/74z/g74xmP94837+Klo12P7bG9O9/Pjh3O//z1118KAABgKsIEAAAoQpgAAABFCBMAAKAIYQIAABQhTAAAgCKECQAAUIQwAQAAihAmAABAEcIEAAAoQpgAAABFCBMAAKAIYQIAABQhTAAAgCKECQAAUIQwAQAAihAmAABAEcIEAAAoQpjYmmN1//O5+vPzmfpxJi1Hz/m1uluv1dq6+7SS2wEAdm55YeLskfpdF+Wvj9Q7/Z4r0k/Ujd92r7h+Plf3F9LyfO8+PFN/Ph+Ly6a4+dzvn95+9fr3h6NB281aqevvVYj4ciksAwDsG8LEgunif8Bh4vattAwAsG8WeJvDhoemiNrXTbh4OOYOEyY8tLdhXJiYayYlHWECAJbkAMLEkfrxNVxUXUHsiv3Sdr/OW8KMx8WTNry4mRKn0w9p3/IMijkG3a962532g756y4eG2x8ekxwQ/DBh9hV7xmOl/q6K/vl/a3U6a+E3YYLnJABgGRYYJjqF174X+oU+KI6aCSODIj24fWLobfuzHrrIPlE/6u1nzIiY/oTDhC703eOwwUEOP/EQ5Zgg4e3THusgUNjjatrqdpEwcX6t/qmCRB0mzv+d9/mGyy+ECQBYigWGCVMgu4Wwfi0VXDEIiGxhTg0G0SIfNhomhGAghgEtJUykBY5GHR6650CHCWnfzoZmJuxfcnCbAwCWYZFhIpkt+qN/jml/qSeHA73dkW0KpoSJ8L7SgoLZZ30OYqFgT7y9NX8K+v1araTlAIC9dNhhQrNFVxdUyy/AoWn/kAWFCcP9xUsrd1Zlq5iZAIBFeQBhwuNmKwbT+YccJvqa2YoJ624Lz0wAwHI8vDBRGRZ1W5iznpnYTpiIPfeR/kzIUMm6Lf6aAwBw0GHC/xPSkfft7IRfYHUA8IvupsJEtf/u7Qc3gxCcMbGzLMHloWdBcp8RCdnYX3MQJgBgSQ43TJwd6QBg/hqiL1xE26Leqoq/3VbTboMzEy5AGOP76Lc3mnCh+y0dU8YtnajNzkzwzAQALMODvM2xf8K3OR4mwgQALAlhYi8QJnz1A5j8j74AYBkIE3uBMDF0qW7t/36c/wU5AOw3wsReIEwAAJaLMAEAAIoQJgAAQBHCBAAAKEKYAAAARQgTAACgCGECAAAUIUwAAIAihAkAAFCEMAEAAIoQJgAAQBHCBAAAKEKYAAAARQgTAACgCGECAAAUIUwAAIAihAkAAFCEMAEAAIoQJgCUu3it3vz6qN58e6lOpOUADhphwrl4ov78fK7+fD42r88eqd/166+P1Du/bS69rSfqRlq2JTefn6vfH47EZU7dpj4H9xfm9bsPz/TrsfVms3qpXvUK0gt1Vr/+9Vo99dsu0MnVe/Xm5oW4bPFcmJjtWtXX/r06XUnL9s/Tm4/q1dVjcdlW6O/OyLk/8O8Xdosw4WwyTOht7zJMHKkfXwkTu1YXnIMNE3PTn4WlhInH6vTbjsOEDnOECewOYcKx4aEpnC5MuHBRYiFhwoSHZ+rHWfd1Gy42zw5uTcG1rw9k6pwwkYEwkSclTBz49wu7RZhw/DDx17G6D/4qN8v0TEbDDwtSmz6/SLviHWtjmHDglrkZBWMYBoK8WRc/TJgQ1Hk9sFJ/f1+r8//W6vSttDyXP9iZQVouwHVbV2xsu3pdTRhUm2l4KzSAul9vXbEAILTvFRV/vwMlvwrt+Urd3lhfrd7tGK//bXv/nFvBa/VRnVWfV73tTvv6vbZdYJsdg/5K12uG4uj3s+bvW2rTM+iHcL0CfU27BtL17+ufX9u+uUax7xeQhzDRMMW/Ld6hX/M2JHgzFqYQy7MPsWWOCQReG3vrZRgoXN8eeX0OiQWjDn8GRQesSJg4v1b/VEGiDhPn/17KbbKYwa07aId/zdsCdTX+C1Zvw2tj3vMKrx204wNwy2zDa2+LW38btbkHbrlfpsANA0VOX/U2qiJ3Gjz3ktjxtUWve21dMR6eq4q+FiMzE7b/fpHXx1oQKEy//H2bY/D3Nb7MEvtqz5nQ19xrELrufTnfLyAPYaJRF+hu4ez/+m/YGYzxAt5KCRMy04fhrRb7fvI2E8NEfWzd2Qp9rLF9zD0zYQa3bnGpX8cG8NGiESxKCQXAEgdqMXjEzBwmgqFFkNnXaJEPGg8Tw3MdLqZJYSKlzQT5YST9szQQOIbca5AWJnK+X0AewkQ2V8ilIi/LCxPC7ZHBQ6ChkBGSGCYWJW0AjxUGvSxQ3PWyavut/oBvlo8P3q2EMGEDQn+/Hb117fYG7w/l9jW1MPVNCRORfSUFBbPd+hzMWhBt+EoPKnlhwgWFLj805F6DadcMmA9hYip7C6IVvh2QFCbsjEe9re6sh779QZgQpAzgnYIbklKghcIWCymyhDAxRVP4nGEBzO3rcsKEMSzOcxRV4bMTvHZpYaIJqN1rEbvVRJjAghAmZtHOVki3P8bDRDgcECZCMgbwxEKaU9j2Jkz0tAXQn8o+5DDRZ/Y1bd0IF9rE85jwWQwdD2ECB4IwMZtIwR79qwizrhRE5gkTue1Tzf/MRLq0MJFTlHTRlYqhtA1bXPwiEJMfQKYQzktmX7cXJiLr5DwT4itZNyJ8XsaDol5XuvYzhYmcz3mWt7dqvV5XbtWltBywCBOZzCzDMBiE3jdMWAgXc1vse6HBrlMrDhNj/Zto9r/myJEYJiq6iA8G2roA9AdrM4D325l1pfXbZf1CYPolFrIJASRE6mvs/Zy+ZhcybTxM+PuXr4tjtxcJX2b9YT9D76exfR0cR+h9I3TeG8K1N+vUfZ3jGsT7N9XllzpIGLdb/8GAJSFMZHp3dtR7vqGV/kxEoxcGbEBolpvt6RAwQ5io9f89ilppuFjAzIRjB/OuV1cv1VNxEG/b6EFe/3oMFApxu4/VyUrul7/9ml9IUujt21+1/e1FClBiX/MLWW08TNT7cqHGGNuHLZBdTbio+139Vzimotmf6lzU6/b7aYx91obreJ8Zr69me+YYy8NERfo8lIaLZmZire4+reQ2QIUwAWDDMoMf9sxKXVc/GpiZQAxhAsCGESYWTc9O8MwE4ggTADaMMLFY9jYHtzgwhjABYMMIE4t0fq3u1nfq+lxYBngIEwAAoAhhAgAAFCFMAACAIoQJAABQhDABAACKECYAAEARwgQAAChCmAAAAEUIEwAAoAhhAgAAFCFMAACAIoQJAABQhDABAACKECYAAEARwgQAAChCmAAAAEUIEwAAoAhhItfFE/Xn5zP140xYNhe9j+fqz9dH6p2/7OyR+l0v6/j94ajfZtSxup+0HhBw8Vq9+fVRvfn2Up1IyxfjsTr9Vh3HzQth2VzsPqrzdXYRXtaYcE5Prt5X675WT4VlwCYQJhxXwD8fm9euaPsFfZth4ucTdSMtb0wNBfJ6N59NOLm3A9y7D8/0662FjtVL9ao3eL5QZ3pAPYxBUQ/wGy1SO+TCxGzXqr7279XpSlq2SdsNE6+uHgvLW09vut+HdGKYOPDvF3aLMOHsU5hIRphYEl0YDjVMzE1/Fg41TKQjTGApCBOODQ9N4XRhwoUL54DDhAkP7bG5MOHCxebZwa0ZyO3rCYPpPiJMZCBMaLOGiQP/fmG3CBOOHyZChboJE0fqx1fzS97wb0nY5X4YqZgi3W3vb8sS1u1LCxMuFBh139PCxHhwWqm/v6/V+X9rdfpWWp7LH+xiA3vd1hWbdto4ONXeTMNboQHU/XrrihUWoX1v6trf70DJr0J7vlK3N9ZXq3c7xut/294/51bwWpnnA0yRa9v3nxkIbLNj0F/pehUVx85nLnjsll4uBR5zvOOfg/GwlBYmvM9B1fe0MBH7fgF5CBMNU2DbX+GmwMthwhXlflsxICSFCV943b7xMGFuXUh9DR1bp186YEXCxPm1+qcKEnWYOP/3Um6TxQxu3UE4/GveFqir8V+wehteG/OeN9jaAb9f4PwBuGW24bW3xS34YN1sA7fcL7mI5PVVb6MqYKfBcy+JHV9b7LrX1gWL4bmqBAt1h+2/X+T1sU4OFPY46v52j8V+NoYBITFM+FKOrzJ6LC5MCX0dfg5yvl9AHsJEoy6yw6I7mOIP/VofzGzsQZiwfRrepgisV7fvPiOi14/1c+6ZCTO4dYtL/VoelG2BGisaJQO+JRZoO2CLhVA0c5gIhhZBZl+jRT5oPEwMz7VdR7qGKcU2pU228HHowtv9HJR8thL7PhYmQstjoTLt+wXkIUzkCk79+wFg92EivJ/xGY39lxYGYoOxXhYo7npZtf1Wf+A3y4eDdVhCmHC/MkN669rtDd4fyu1rqBDFTQkTkX0lFVuz3foczFcQI8fh92nnYWLCeQU2hDCRa0FhwtzieMhholNwQ1IKtDDwxwd5SazYFtB9s33WhgUqt6/LCROG2Ub3HJQU0QWFicBtnhphAttGmMjFzMSeSAkTeYU0p7DtTZjoacOQP5V9yGGiz+xr2rq1BYWJKecV2BDCRK6RZya6zyfomYHBv2Jpg8IWwoTpa8YzE9nmf2YiXVqYyClKeuBOKSLNe3nPFeQHkCmE85LZ1+2Ficg6Oc+E+ErWjfRpcP1C+7Hne/NhwvZVWD5bmHh7q9brdeVWXUrLAYswkcsW6H4YMMVZ/geuhn8hcv+5fn+OMGHbDQKLt1zq6xxhYva/5siRGCYqekAeDNz1QNwfbM0A3G9n1pXWb5f1i4npl1jIJgSQEKmvsfdz+rqpMOHvX74uTrhQOmb9YT9D76ex+6362v1smXPinyuhj/U1rj5XZ9X7c4SJ0PVsCMHF9XWOMHH5pQ4Sxu3WfzBgSQgTueqAoIt3W5S1QOF3/6qkYWc0dMiYI0zUvH4Isyb9PtT7Ndt/EDMTjh10u15dvVRPxULattHFQ/8CDQzo4nYfq5OV3C9/+zW/mKfQ27e/jPvbixSQxL6aPs4fJup9uVBjjO2jDSGNpnDX/a7+KxxTLICMM8dRX5P+tQpcf/8a6OM324h+NnW/x8NErX/OhO16fdDL9fbLw0Q7M7FWd59WchugQpgAsGGZwQ97ZqWuqx8NzEwghjABYMMIE4umZyd4ZgJxhAkAG0aYWCx7m4NbHBhDmACwYYSJRTq/VnfrO3V9LiwDPIQJAABQhDABAACKECYAAEARwgQAAChCmAAAAEUIEwAAoAhhAgAAFCFMAACAIoQJAABQhDABAACKECYAAEARwgQAAChCmAAAAEUIEwAAoAhhAgAAFCFMAACAIoQJAABQhDABIOCFOvv1Ub359V6drqTlAGAQJpyLJ+rPz+fqz+dj8/rskfpdv/76SL3z22rH6v7nM/XjTFq2He8+PGv7G5J9XHN7rE6/9QvS05v69Ud1duG3XaDVS/Xq12v1VFq2eC5MzHet6mv/6uqxuGwrdn696nM6Fs4O/DuDg0SYcHKLrl6+2zBx87nT3xDCxGZdvK6O5VDDxNzMZ2GnYWLX10uHGcIEDg9hwrFF9veHo97rYLFeSpjIPa4NMANhO4Cb12MD6kIQJjIQJtLCxIF/Z3CQCBOOX3T1bYzu69qR+vG1KsR1MQ7otzf07Yhuu0AhH7SrDLbnZhqCnqibbvuk4+r7//+u1fl/a/XP/67E5bn8gfHk6n1gQDfFxv36Mus50kDaTsOH20jtKt9eqpNBO0sP+P32/QIobM9T8guyf9xj2xP6cvNi0E6fc/e+Lqht++6xmWvT2ZYWvlZ63cj2avI2OwbXQjq/JQFgyvVyswOxNsb49Rpuy+efs/TvDLAfCBMNU2Tvm0HABIdg0dVFfWxmwoWPboG373m3GUyQ8LcXK/x2O6MzDJnH9delOq2CRB0mzr9fq/8ntsmjB8JuwQj+OnQF6qUe/KMF2Raw3iBs3+utZ4NBf7C2g7sQKFxhkLYh9WfuQd4vIlpg/65I94/NFE6xoFfHe1pvXwgbIeHj6xTI7vak69KQ+9ZnC7/Xx7nOc9J2XJjs9kH8HOVdL02fn/EZBne9xr8zwH4gTDTqItst5qbotkXYkxAmTEDwZgpqdragu219yyLrOYbUMJF5XJW5Zyb0QOgXHKGQtwVqbNAMFyU9uIvb9kiDun4vUAQC5ipyhj3+lGIfKG4hpp95x1YLH1+4r2KB1RLCRKwQz2D8eoWPa7huxvVypM+dJPk7A+wHwsRUo2EiVuzNst7sQHP7Ih5QWqlhYkkSB+fYgKyXycXCFdSubtEKF8Gw8eJkf2mHeAWi7WO8H6ZdQlGyxvspC68XuVbB65MyM2G3W5+DnCKdaPQ8xMKMXtY/rtTr1Yh9doEFI0xMNRomzO2F4TMNreGtBhsQuu2CYeHhhol2AA/pD+wmJFS6hVsoGsmzGh1Ti3TcMID4BTh3v1P7GV5vU2HC0tvonoN5CvDoeRjs1xc+rm674DESJnCgCBNTFc1MJHKzFeLtD2YmkgbkUNu9DhN9Zh/985K736n9DK+34TDR085WlN7+GD0PM9xmka5XgzCBA0WYmEp47sEXfGYiQ2wb+c9ZpJn9mYlkiWEioyjpgV0KCFLR0AN9ZiHZUnEYBB3b/9TCvM0wEQ5lqddXMjWIeEavV0kfW8FzMENYka3U9fe1Wq/X6u7Ttr+3AGGigJ0ZiBZzd9vCDwPH6r63nr0lMphlCL1v2ZmLWKDJN/9fc6TLGMht4feLS138xgJC88tRGNR1ERi8bwqZXADsFHdh8dFCASHwvjuO/vvmHMptNxAmvP27Psnnyi0PF/PQ8rH10iVcL3u+B22qz1LvvGZeL8Oet8wZsFHn1+quChJ1mFhX39uV1AbYIMJEEeG5CCFcSP9+xP2HY3XjbpGcHel19EyD1y78J5yGuO3AQJ5q/2cmHFsYuqpB+vRiWAS6bcwgHwkIXnu3zslKKg4VV3y6poSLavsnnSLdFSrOoX37fQ2Hgrjweu21Mm3c/scLvgts0jq639IxTeh7UNL1kq7Da/3ZameHJlwvTf7cloWLdmZivb5Vl2IbYHMIEwAmyA1+2Iq3t8xMYCcIEwAmIEzsHzM7wTMT2AXCBIAJCBP7xd3m4BYHdoMwAWACwsQ+ufxSBYkvl+IyYBsIEwAAoAhhAgAAFCFMAACAIoQJAABQhDABAACKECYAAEARwgQAAChCmAAAAEUIEwAAoAhhAgAAFCFMAACAIoQJAABQhDABAACKECYAAEARwgQAAChCmAAAAEUIEwAAoAhhYmuO1f3P5+rPz2fqx5m0HFiwi9fqza+P6s23l+pEWv4AnFy9N+fg5oW4HDhkhAnn4klV6Kti//nYvD57pH7Xr78+Uu/8tpO4MPFc3V9Iyzfr5vNz9fvDkbjMqdt0+/fuwzP9emy92axeqle9gvRCndWvf71WT/22C6SLzaEWGhcmZrtW9bV/r05X0rL91ISJXQQq/d0ZOfcH/v3CbhEmnI2HiV06Uj++EiZ27elNdSz8ak2jPwvLChM7pcMcYQK7Q5hwbHhoCqcLEy5cLFpamDDhob0N48LE9mZS7ODWFFz7ehe/9DaAMJGBMJEnJUwc+PcLu0WYcPwwYW9LBAuwm8lwhBkMV4z7nqgbr13LFP1u+1ghH26//zyGvP8Or89+mDDHGHvGY6X+/r5W5/+t1elbaXkuf7B7rE6/hQpw3dYVG9uuXlcTBtVmGt4KDaDu11tXLAAI7V9dPW6X+/sdKPlVaM9X6vbG+mr1bsd4/W/b++fcCl6rj+qs+iw3twKs+r22XWCbHYP+StdrluI47Eu/rzXp/MvntJH6OayNXi95/139Ptv2Sd8vIA9homHCQ1u8w7/mze2AfpE178WCgivWgTbSTMgg4Dju+Yv+tsLbHwlGjg4PnfX1/iNh4vxa/VMFiTpMnP97KbfJYga37oAZ/jVvC9RVPeDGf8HqbXhtzHte4bUDfXwAbplteO1tARgWnrkHbrlfplgPA0VOX/U2qiJ3Gjz3ktjxtUWve21dsBieq4q+FiMzE7b/fvHWx1oSKFwR7x5LYF995jhDbZI/h837qZ+t8HXvy/l+AXkIE406PHQLpwkTg5mB4K/18YIdLvZ2RkK4pSKtkxJc+hLDRB0eurMVOkzE9jP3zIQZ3LqDZf1aHpxtgRorGsGiFB/4u8SBWgweMTOHiUhhGcjsa7TIB42HieG5tutI1zAlTKS0yRY+jvGCHflM5XwOsz9bqWEi5/sF5CFMZNKFPPBQpl4WecYiGCbsDIR4S2MwO2BnJbKe5UgME4uSFgb0L69A4NDLAsVdL6u230r7RRmWECbcL+KQ3rp2e4P3h3L7mlqY+qaEici+koKC2W59DmYriLGQppfF+hQ+zpzPYf5na+o1A+ZDmMgyfKZhYEqY8J+/GBiGibxg8FDDRKfghqQUaKGwxYqDLCFMTGF/xbaGxS63r8sJE4bZRvccFBTVwfn0TQkTeZ/D/M8WYQK7R5jIFJuZGDNpZmKAMGGkhIm8gTmnsO1NmOhpi5Y/lX3IYaLP7GvaupWc20cD4ePMuQaECSwRYSLX6F84hE15ZkKS/8xE3vbTzf/MRLq0MJFTlPQgLhVDaRv2F2xO0ZlSJPIJ5yWzr9sLE5F1Sop6USAoCX2Rz2ROOJrw2craPrABhIkJTDH3A0VdsOMFPhwmKnZ2YlDwq/AynFEwMw2Dbfl/jdFh9j0tBAXN/tccORLDREUX8cFAWxeNfsE0RbTfzqwrrd8u6w/6pl9iIZhSJAKkvsbez+nrpsKEv3/5ujh2e5HwZdYf9jP0fjIbRgbHUl2/+Oct/pmUj3f4OWzbpl2v7rJpIQgoR5iYSnjO4feHR+pG/KIb0TChSc9kPFE/Lo7DD3z22tZh4Ui9CwQGub3cNs0CZiYcW8i7Xl29VE/FQtq20QN37ME7cbuP1clK7pe//ZpcHOL09l3R64kU0cS+bipM1PtyRdIY24ctkF1NuKj7Xf1XOKZ5Zn/s8fS2/VqdXryIbDvhM5n4OQy3DX+2xM8D4QJbQpjYovEwARyizOC3WA/lOIEhwsQW6TAx8eFNYLkeVpiYMtMELB1hYlvsMxGH9RcVQIqHESaKn9UAFowwsSnugcoOggQepsMME/3nPwgSeNgIEwAAoAhhAgAAFCFMAACAIoQJAABQhDABAACKECYAAEARwgQAAChCmAAAAEUIEwAAoAhhAgAAFCFMAACAIoQJAABQhDABAACKECYAAEARwgQAAChCmAAAAEUIEwAAoMjiwsTll7Var63v12oltAEAANuz4JmJlbr+XgWKL5fCMgAAsC2Lvs2x+nRHmAAAYMcIEwAAoMiiw0T9/MTdp5W4DAAAbAdhAgAAFFn+bY71rboUlgEAgO1YdJgwLtWt/lPRO3V9Li0HAACbxMwEAAAowjMTAACgyMMIE+fX6o5bIQAAbMTiw0TKvzNhbofUYYKZDAAA5rb8ZyZS/tGqZmYiLXwAAIB0DyNMWDxjAQDA/BYcJsz/6Cs5HOjZCZ6ZAABgbosLE/o5CXfLIvV/Qe5uc3CLAwCA2S36Nkca849a3b6VlgEAgFIPIEwAAIBNIkwAAIAihAkAAFCEMAEAAIoQJgAAQBHCBAAAKEKYAAAARQgTAACgCGECAAAUIUwAAIAihAkAAFCEMAEAAIoQJgAAQBHCBAAAKEKYAAAARQgTAACgCGECAAAUIUwAAIAihAkAAFCEMAEAAIoQJgAAQBHCBAAAKEKYAAAARQgTAACgCGECAAAUIUwAAIAihAkAAFCEMAEAAIoQJgAAQBHCBAAAKEKYAAAARQgTAACgCGECAAAUIUwAAIAihAkAAFCEMAEAAIoQJgAAQBHCBAAAKEKYAAAARQgTAACgCGECAAAU+Ev9H8zi5f53fsWQAAAAAElFTkSuQmCC"}}]);