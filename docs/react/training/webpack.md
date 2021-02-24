---
id: webpack
title: Webpack
sidebar_label: Webpack
---

import EditedBy from '../../../src/components/EditedBy'

### Webpack

Webpack is a **_static module bundler_** , acting as a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser.

Webpack relies on **_dependency graph_** and analyzes dependencies among different modules (not only JS but also CSS, HTML, etc) and generates assets in the form of **linked trees** .

#### How webpack works

Dependency graph is a directed graph representing dependencies of several modules towards each other. When webpack processes an application, it begins from a list of predefined modules either from the command line or in its configuration file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module the application needs, then bundles all of those modules into a small number of bundles - often, just one - to be loaded by the browser.

![Webpack Dependancy](/img/webpackDependancyGraph.png)

#### Installation and usage

_npm install webpack --save-dev_

Command to run webpack: _webpack main.js bundle.js_ where main.js will be point from where the webpack starts the dependany generation and bundle.js will be the final bundled output file.

Default entry file : src/index.js Default output file : /dist/main.js

#### Core Concepts of a webpack file

**Entry points:** This determines the first JS code executed when a page is loaded. Dependencies are analyzed from this first module.  
 Default entry property in a webpack file is set to ./src/index.js,

**Output:** Determines the out folder, file names, etc. The default value for this property is ./dist/main.js for the main bundle and ./dist for other generated files.

**Loaders:** Loaders are used for transformations on a resource file. Webpack can understand only JS and JSON files. Other types of files like css, sass, images etc acan only be understood with the help of loaders and so each module is loaded through a loader. A loader mainly has two properties _test_ and _use_. test checks the type of file to be analysed and use determines the loader to used for that particular type. For example, babel is a loader used to process ES6 to ES5 files.

**context:** Base directory for resolving the entry option. This needs to be mentioned as an absolute path !!!

**module:** Options affecting normal modules, like which one must be automatically loaded.

**resolve:** Determines how modules are loaded.

**target:** Compiles depending the target environment (browser, node, webworker, etc).

**devtool:** Enhance debugging (generates map files).

**plugins:** Additional plugins added to the compiler. Its helps to perform more range of tasks like optimisations, asset management etc.

#### Sample Code of Webpack

![Webpack SampleCode](/img/webpack_SamplCode.png)

### Webpack DevServer

During the development you need a mechanism to serve your files from a local server and auto reload changes to avoid refreshing browser again and again after you make any changes. Webpack provides this option by acting as a local developement server.

_npm i webpack-dev-server_ Entry in package.json: _scripts": {"start": "webpack-dev-server --mode development"}_

#### Why Use Webpack

- Beneficial for building complex front-end applications
- Elimination of dead assets
- Splitting code made easier
- Controlling how assets are processed
- Stable production deploys
- Excellent speeds when used accurately

#### General Pros and Cons of Webpack

**Pros:**

- Great for working with singe-page apps
- Accepts both require() and import module syntaxes
- Allows for very advanced code splitting
- Hot Reload for quicker development with React, Vue.js and similar frameworks
- Мost popular build tool

**Cons:**

- Not suitable for beginners in web development
- Working with CSS files, images, and other non-JS resources is confusing at first
- Documentation could be better
- Updated very frequently

<EditedBy name="Meenu" date="20/05/2020" />
