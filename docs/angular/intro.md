---
id: intro
title: Angular Introduction
sidebar_label: Introduction
---

import EditedBy from '../../src/components/EditedBy'

### What is Angular?

- Angular is a platform and framework for building single-page client applications in HTML and TypeScript.
- Angular is written in TypeScript.
- It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.
- **Current stable version: 9**
- **Current TypeScript support version: 3.7+**

---

### Setup angular environment

#### Pre requisites:

- **Node.js**
  - To check your version, run node -v in a terminal/console window.
  - To get Node.js, go to [nodejs.org](https://nodejs.org/en/).
- **npm package manager**
  - Installed with Node.js by default.
  - To check that you have the npm client installed, run npm -v in a terminal/console window.

#### Step 1:

To install the CLI (globally) using npm, open a terminal/console window and enter the following command:

```
npm install -g @angular/cli
```

#### Step 2: Create a workspace and initial application

To create a new workspace and initial starter app:

1. Run the CLI command ng new and provide the name my-app, as shown here:

```
ng new my-app
```

2. The ng new command prompts you for information about features to include in the initial app. Accept the defaults by pressing the Enter or Return key.

The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes. The CLI creates a new workspace and a simple Welcome app, ready to run.

#### Step 3: Run the application

The Angular CLI includes a server, so that you can easily build and serve your app locally.

- Go to the workspace folder (my-app).
- Launch the server by using the CLI command ** ng serve **, with the ** --open ** option.

```
cd my-app
ng serve --open
```

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files. The --open (or just -o) option automatically opens your browser to _ http://localhost:4200/ _.

We can specify the port in which the application should run.

```
ng serve --port 1337
```

Above command runs the app in port 1337 (http://localhost:1337). By default angular applications run on port **4200**

---

### Architecture

![alt text](/img/angular_architecture.png 'Angular Architrcture')

#### Modules:

- The basic building blocks are **NgModules**, which provide a compilation context for components.
- Every Angular app has a **root module**, conventionally named _AppModule_, which provides the bootstrap mechanism that launches the application.
- An app typically contains many functional modules.
- NgModules can import functionality from other NgModules, and allow their own functionality to be exported and used by other NgModules.
  - For example, to use the router service in your app, you import the Router NgModule.

#### Components:

- Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM).
- Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment.
- The _@Component()_ decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata.

#### Services and dependency injection:

For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. A service class definition is immediately preceded by the _@Injectable()_ decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class.

#### Routing:

The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your app. It is modeled on the familiar browser navigation conventions:

- Enter a URL in the address bar and the browser navigates to a corresponding page.
- Click links on the page and the browser navigates to a new page.
- Click the browser's back and forward buttons and the browser navigates backward and forward through the history of pages you've seen.

The router maps URL-like paths to views instead of pages. When a user performs an action, such as clicking a link, that would load a new page in the browser, the router intercepts the browser's behavior, and shows or hides view hierarchies.

If the router determines that the current application state requires particular functionality, and the module that defines it hasn't been loaded, the router can lazy-load the module on demand.

The router interprets a link URL according to your app's view navigation rules and data state. You can navigate to new views when the user clicks a button or selects from a drop box, or in response to some other stimulus from any source. The router logs activity in the browser's history, so the back and forward buttons work as well.

<EditedBy name="Anusree" updated="Ajay C" date="08/04/2020" />
