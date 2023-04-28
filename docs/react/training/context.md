---
id: context
title: Context
sidebar_label: Context
---

import EditedBy from '../../../src/components/EditedBy'

### Context - Introduction

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

For a more in-depth definition, it provides a way for you to make particular data available to all components throughout the component tree no matter how deeply nested that component may be

```jsx
const App = () => {
  return <ParentComponent theme="light" />;
};

const ParentComponent = (props) => <Child theme={props.theme} />;

const Child = (props) => <Grandchild theme={props.theme} />;

const Grandchild = (props) => <p>Theme: {props.theme}</p>;
```

In the example above, we specified the application theme using a props in the ParentComponent called theme. We had to pass that props to all components down the component tree to get it where it is needed which is the GrandChild component. The ChildComponent had nothing to do with the theme props but was just used as an intermediary.

Now, imagine the GrandChild component was more deeply nested than it was in the top example. We would have to pass the theme props the same way we did here which would be cumbersome. This is the problem that Context solves. With Context, every component in the component tree has access to whatever data we decide to put in our context.

#### Prop Drilling VS Context API

![alt text](/img/prop-context.png 'Context Data Passing')

### When Should We Use Context?

It would recommend reaching for Context when you find yourself passing props down through three or more levels in your component tree. You might notice that you have renamed your props, making it challenging to determine the data’s origin. You might consider implementing context if a bunch of your components know about irrelevant data.

### How To Use Context?

First of all we will create Context, and call it UserContext. This will also give us UserContext.Provider and UserContext.Consumer. What these two components do is straightforward:

- Provider - The component that provides the value
- Consumer - A component that is consuming the value

So We'll create it with React.createContext() in a new file called UserContext.js.

```jsx
// src/UserContext.js

import React from 'react';

const UserContext = React.createContext();

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
```

We are passing in an empty object value here to represent that we might be filling in this data later with an API call. You can pre-populate this with whatever data you want, in case you're not retrieving the data through an API.

```jsx
React.createContext(true);
```

### Providing Context

The provider always needs to exist as a wrapper around the parent element, no matter how you choose to consume the values. We'll wrap the entire App component in the Provider. We are just creating some value (user) and passing it down as the Provider value prop.

```jsx
// src/App.js

import React from 'react';
import HomePage from './HomePage';
import {UserProvider} from './UserContext';

function App() {
  const user = {name: 'Farman', loggedIn: true};

  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  );
}
```

Now any child, grandchild, great-grandchild, and so on will have access to user as a prop. Unfortunately, retrieving that value is slightly more involved than simply getting it like you might with this.props or this.state.

### Consuming Context

The way you provide Context is the same for class and functional components, but consuming it is a little different for both.

### Class component

The traditional way to retrieve Context values was by wrapping the child component in the Consumer. From there, you would be able to access the value prop as props. You may still see this, but it's more of a legacy way of accessing Context.

```jsx
// src/HomePage.js (class example)

import React, {Component} from 'react';
import {UserConsumer} from './UserContext';

class HomePage extends Component {
  render() {
    return (
      <UserConsumer>
        {(props) => {
          return <div>{props.name}</div>;
        }}
      </UserConsumer>
    );
  }
}
```

### Functional component and Hooks

For functional components, you'll use useContext, such as in the example below. This is the equivalent of static contextType.

```jsx
// src/HomePage.js (Functional Component)

import React, {useContext} from 'react';
import UserContext from './UserContext';

export const HomePage = () => {
  const user = useContext(UserContext);

  return <div>{user.name}</div>;
};
```

<EditedBy name="Farman" date="20/05/2020" />
