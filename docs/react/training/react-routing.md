---
id: react-routing
title: React routing
sidebar_label: React routing
---

import EditedBy from '../../../src/components/EditedBy'

## React Routing

React Router is a package that allows you to configure routes that show only the components you specify on the page depending on the route.

#### Installation

React Router can be installed via npm and the ‘react-router-dom’ package. I’m using this particular package since I’m writing something for the browser. There is also a package for React Native. Both of these install the ‘react-router’ package as a dependency.

    npm install react-router-dom

#### React router components

React Router includes several components but the three most important are `<BrowserRouter>`, `<Route>`, and `<Link>`. The first one, `<BrowserRouter>`, is usually given an alias of ‘Router’ and this is the parent component that is used to store all of your `<Route>` components. The `<Route>` components are what tell your app which other components to display based on the route. And `<Link>` components are how you create links to those different routes.

At the core of every React Router application should be a router component. For web projects, react-router-dom provides `<BrowserRouter>` and `<HashRouter>` routers. The main difference between the two is the way they store the URL and communicate with your web server.

- A `<BrowserRouter>` uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router. Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well.

- A `<HashRouter>` stores the current location in the hash portion of the URL, so the URL looks something like http://example.com/#/your/page. Since the hash is never sent to the server, this means that no special server configuration is needed.

To use a router, just make sure it is rendered at the root of your element hierarchy. Typically you’ll wrap your top-level `<App>` element in a router, like this:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Title, List} from './components/Child';
import './index.css';
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Title} />
      <Route path="/list" component={List} />
    </div>
  </Router>,
  document.getElementById('app'),
);
```

Here we have the `<Router>` component with a child div since that component can only have one child. Then in that div we place all of the routes needed for the example. Each `<Route>` component needs a path which is the URL and then a component that you want rendered when navigating to that path.

### Route Matchers

There are two route matching components: Switch and Route. When a `<Switch>` is rendered, it searches through its children `<Route>` elements to find one whose path matches the current URL. When it finds one, it renders that `<Route>` and ignores all others. This means that you should put `<Route>`s with more specific (typically longer) paths before less-specific ones.

If no `<Route>` matches, the `<Switch>` renders nothing (null).

```javascript
let sampleJsxElement = React.createElement(
  'h1',
  {
    className: 'hello',
  },
  'This is sample JSX',
);
```

React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

The 'Child.js' in the above case just contains the two components. Those each contain a `<Link>` component with a “to” argument pointing to the appropriate route.

```javascript
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const Title = () => {
  return (
    <div className="title">
      <h1>React Router demo</h1>
      <Link to="/list">
        <button>Show the List</button>
      </Link>
    </div>
  );
};
const List = () => {
  return (
    <div className="nav">
      <ul>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
};
module.exports = {
  Title,
  List,
};
```

One important thing to note is that a `<Route path>` matches the beginning of the URL, not the whole thing. So a `<Route path="/">` will always match the URL. Because of this, we typically put this `<Route>` last in our `<Switch>`. Another possible solution is to use `<Route exact path="/">` which does match the entire URL.

### History

Each router creates a history object that it uses to keep track of the current location and re-renders the application whenever this location changes. For this reason, the other React Router components rely on this history object being present; which is why they need to be rendered inside a router.

The BrowserRouter uses the HTML5 history API to keep the user interface in sync with the URL in the browser address bar.

The history object created by the Router contains a number of properties and one of the location property whose value is also an object.

The location object within the history object is shaped like so

    { pathname, search, hash, state }

### Protected Routes

The rationale of having is a protected route is that when a user tries to access part of the application without logging in, they are redirected to the login page to sign into the application.

For this redirect to work as intended, the react-router package provides a `<Redirect/>` component to serve this purpose. This component has a to prop which is passed to it in form of an object containing the pathname and state as shown below.

```javascript

<Redirect
  to={{pathname: ‘/login’, state: {from:props.location}}}
/>

```

Here, the Redirect component replaces the current location in the stack with the pathname provided in the object (/login) and then stores the location that the user was attempting to visit, in the state property. The value in state can be accessed from within the Login component using this.props.location.state.

For example, if a user attempts to navigate to /admin, a protected route, without logging in first, they will be redirected to the login page. Following a successful sign in, they will be redirected to /admin, the route they intended to visit in the first place.

### Custom Routes

In order to achieve the concept of protected routes, we need to understand first how to create custom routes.

In the case of a protected route, a given route should only be accessed when a user is logged in, otherwise, the user should be directed to the login page.

A private route is also grouped with all other routes as shown below.

```javascript
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/items" component={Items} />
  <Route path="/category" component={Category} />
  <Route path="/login" component={Login} />
  }/>
  <PrivateRoute
    path="/admin"
    component={Admin}
    isAuthenticated={fakeAuth.isAuthenticated}
  />
</Switch>
```

The private route has the path, component and isAuthenticated props.

```javascript
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/login', state: {from: props.location}}} />
      )
    }
  />
);
```

We destructure the props within the argument list and rename component to Component. We use the Route component by passing it the ...rest and render props. Within the render prop, we write logic that determines whether to render a component and which one to render if the user is signed in. Otherwise, the user is redirected to the login page.

The Login component contains a dummy authentication method which signs the user in when they click the Login button within its render method. See below the code snippet from the Login component.

```javascript
import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true,
      });
    });
  };

  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p> You must log in to view the content at {from.pathname} </p>
        <button onClick={this.login}> Log in </button>
      </div>
    );
  }
}

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

export default Login;
```

The redirectToReferrer state property is set to true when the user is signed in. This triggers a redirect to the route they had intended to visit, or to the ‘/’ path incase they navigated directly to the login route.

### Async Routing

Ideally, we’d have a component loaded only when we’re at a specific route. This required code splitting. To accomplish this we’ll use webpack, @babel/plugin-syntax-dynamic-import, and loadable-components.

webpack has built-in support for dynamic imports; however, if you are using Babel (e.g., to compile JSX to JavaScript) then you will need to use the @babel/plugin-syntax-dynamic-import plugin. This is a syntax-only plugin, meaning Babel won’t do any additional transformations. The plugin simply allows Babel to parse dynamic imports so webpack can bundle them as a code split. Your .babelrc should look something like this:

    {
      "presets": ["@babel/preset-react"],
      "plugins": ["@babel/plugin-syntax-dynamic-import"]
    }

loadable-components is a library for loading components with dynamic imports. It handles all sorts of edge cases automatically and makes code splitting simple! Here’s an example of how to use loadable-components:

```javascript
/* Dashboard.js */
import loadable from "@loadable/component";
import Loading from "./Loading.js";

const LoadableComponent = loadable(() => import("./Dashboard.js"), {
  fallback: <Loading />
});

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />;
  }

```

Then, we can simply call Dashboard inside the route of a Router and it will be loaded only when that particular path is matched.

```javascript
import Dashboard from './Dashboard.js'; // will be loaded only when Dashboard is ready to rendered.

<Switch>
  <Route exact path="/dashboard" component={Dashboard} />
</Switch>;
```

<EditedBy name="Sabir Ameen" date="23/04/2020" />
