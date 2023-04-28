---
id: react-intro
title: Introduction to React
sidebar_label: React-Introducttion
---

import EditedBy from '../../../src/components/EditedBy'

![React_Logo](/img/react_logo.png)

### What is React JS

React is a declarative, efficient, and flexible JavaScript library, built and maintained by facebook, and used for building user interfaces. It is an open-source, component-based front end library responsible only for the view layer of the application.

React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and will efficiently update and render the component when data changes. The declarative view makes code more predictable and easier to debug.

A react application is made of multiple components, each responsible for rendering a small, reusable piece of HTML.

### Concept of Virtual DOM

React implements the concept of virtual DOM, which is basically a DOM tree representation in Javascript. Whenever there is a need to write to DOM, React used the virtual representtaon of it and then the virtual DOM will try to find the most efficient way to update the browser’s DOM. React DOM takes care of updating the DOM to match the React elements which ultimately makes React run faster.

### The concept of tree reconciliation

Any operation on the DOM is done in the same single thread that’s responsible for everything else that’s happening in the browser and hence any expensive operation on the DOM means a slow and unpleasant experience for the user.

When React renders a tree of elements in the browser, it first generates a virtual representation of that tree and keeps it around in memory for later. Then it’ll proceed to perform the DOM operations that will make the tree show up in the browser.

When React updates the tree of elements it previously rendered, it generates a new virtual representation of the updated tree. Now React has 2 versions of the tree in memory!

To render the updated tree in the browser, React does not discard what has already been rendered. Instead, it will compare the 2 virtual versions of the tree that it has in memory, compute the differences between them, figure out what sub-trees in the main tree need to be updated, and only update these sub-trees in the browser.

This process is what’s known as the **_tree reconciliation_** algorithm and it is what makes React a very efficient way to work with a browser’s DOM tree.

### Simple React Code

```jsx
ReactDOM.render(
  React.createElement('div', null, 'Hello , Welcome to world of React'),
  document.getElementById('app'),
);
```

In above piece of code, **ReactDOM.render** method and **React.createElement** method are the core API methods in a React application.

ReactDOM.render is the entry point for a React application into the browser’s DOM. It has 2 arguments: The first argument is WHAT to render to the browser. This is always a "React element".  
 The second argument is WHERE to render that React element in the browser. This has to be a valid DOM node that exists in the statically rendered HTML.( The element 'app' in above example ).

React.createElement are methods used to create objects to represent DOM element.

### React Components

React components can be considered as functions which takes input as a set of "props" and their output is a description of a UI. We can reuse a single component in multiple UIs and components can contain other components.

A React component can have a private state to hold data that may change over the lifecycle of the component. This private state is an implicit part of the input that drives the component’s output.

Sample 1:

```jsx
function Button(props) {
  // Returns a DOM/React element here.
  return <button type="submit">{props.label}</button>;
}

// To render a Button element in the browser
ReactDOM.render(<Button label="Submit" />, app);
```

Sample 2:

```jsx
class Button extends React.Component {
  render() {
    return <button>{this.props.label}</button>;
  }
}

ReactDOM.render(<Button label="Submit" />, app);
```

### Concept of Props and States in React

**Props** are parameters that are passed to components of a React application. Sample :

```jsx
const Greetings = (props) => (
  <div>
    Hello {props.firstName} {props.lastName} !
  </div>
);

const App = () => (
  <div>
    <Greetings firstName="George" lastName="Harvid" />
  </div>
);
```

Output : Hello George Harvid !

The values of firstName and lastName were passed as props into the component Greetings. They can be accessed as 'prop.firstName' and 'props.lastName'.

**State** is basically a plain JavaScript object that is stored as a property within the component. The values within state can be updated using the setState({}) method.

Sample:

```jsx
class HelloForm extends React.Component {
  state = {
    firstName: '',
  };

  onNameChange = (event) =>
    this.setState({
      firstName: event.target.value,
    });

  render() {
    return (
      <div>
        <input type="text" name="firstName" onChange={this.onNameChange} />
        <Greetings firstName={this.state.firstName} />
      </div>
    );
  }
}
```

<EditedBy name="Meenu" updated="Vijay" date="21/05/2020" />
