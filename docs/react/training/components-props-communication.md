---
id: components-props-communication
title: Components-Props-Communication
sidebar_label: Components-Props-Communication
---

import EditedBy from '../../../src/components/EditedBy'

### Components

Components are the building blocks of any React app. A component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

```jsx
const Greeting = () => <h1>Hello World</h1>;
```

The above is a functional component (called Greeting) written using ES6’s arrow function syntax that takes no props and returns an H1 tag with the text “Hello World”

In ReactJS, we have mainly two types of components. They are

- Functional Components
- Class Components

#### Functional Components

In React, function components are a way to write components that only contain a render method and don't have their own state. They are simply JavaScript functions that may or may not receive data as parameters.

```jsx
function Welcome(props) {
  return <h1>Welcome to the , {props.name}</h1>;
}
```

The functional component is also known as a **stateless component** because they do not hold or manage state.

#### Class Components

Class components are more complex than functional components. It requires you to extend from **React. Component** and create a render function which returns a React element. You can pass data from one class to other class components. You can create a class by defining a class that extends Component and has a render function.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Welcome Message!</h1>;
  }
}
```

The class component is also known as a **stateful component** because they can hold or manage local state.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
        <div>
            <button onClick={this.increment}>Increment!</button>
            <button onClick={this.decrement}>Decrement!</button>
            <button onClick={this.reset}>Reset</button>
            <h1>Current Count: {this.state.count}</h1>
        </div>
    );
  }
};
```

#### Communication using Props

- Props

Props are React’s way of making components easily and dynamically customisable. They provide a way of passing properties/data down from one component to another, typically from a parent to a child component (unidirectional dataflow).

It’s important to note that props are **read-only** and that a component must never modify the props passed to it.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.username}!</h1>;
}
const element = <Greet username="Bruce" />;
```

- Props in function components

It should be noted that when working with components that have multiple children (see below with h1 and p), each child component gets its props from the parent. When using a function component, props are all that gets passed, they’re available by adding props as the function argument:

```jsx
const Test = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
```

- Props in class components

In a class component, props are passed by default. They’re accessible as this.props in a component instance.

```jsx
class Test extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
```

- Prop defaults

If any values are missing when a component is initialized, we’ll need to provide a default. Defaults can be specified, like so:

```jsx
Test.defaultProps = {
  title: '',
  description: '',
};
```

- The ‘children’ prop

The `children` prop is a little different to the norm. It contains the value of anything that is passed in the body of the component, for example:

```jsx
<Test title="Title" description="Description">
  Additional description
</Test>
```

In this example, inside Test we could access "Additional description" via **this.props.children**.

<EditedBy name="Bibhu" date="17/05/2020" />
