---
id: hoc
title: React HOC
sidebar_label: hoc
---

import EditedBy from '../../../src/components/EditedBy'

## Higher Order Components

A higher-order component is a function that takes a component and returns a new component. A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic. The component transforms props into UI, and a higher-order component converts a component into another component. An example of HOCs is Redux connect.

The purpose of a HOC is to enhance a component with extra functionality. A HOC allows for reusability since in real-life applications there is a need to re-use the same functionalities in various similar kinds of components.

##### Example:

A HOC takes a component as input parameter and returns a new component. Let's look at an example of the most simple HOC possible.

```jsx
// Take in a component as argument WrappedComponent
function simpleHOC(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
```

This HOC takes a React component, WrappedComponent, as parameter. It returns a new React component. The returned component contains the WrappedComponent as a child.

We use the HOC to create a new component like this:

```jsx
// Create a new component
const NewComponent = simpleHOC(Hello);

// NewComponent can be used exactly like any component
// In this case, NewComponent is functionally the same as Hello
<NewComponent />;
```

The HOC created above does not do anything to the component, it just returns the same component with a wrapper component around it. It is just not that.

**The idea with HOC is to enhance components with functions or data.**

The way we are going to do that is to add a prop to the component. Lets add a name prop with the value **React**. It would look something like this:

```jsx
// Take in a component as argument WrappedComponent
function withNameReact(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component {
    render() {
      return <WrappedComponent name="React" {...this.props} />;
    }
  };
}
```

Lets take a look how we can use it.

First, we define the component to send in, which uses the name prop

```jsx
const Hello = ({name}) => <h1>Hello {name}!</h1>;
```

then we will enhance it with our HOC.

```jsx
const HelloReact = withNameReact(Hello);
// No need to send in the name prop, it is already sent in
// by the HOC. It will output Hello React!
<HelloReact />;
```

### Conclusion

The primary use of Higher-Order Component is to enhance the reusability of particular components in multiple modules or components. We can also comprise various components to get improved components.

HOC is a powerful concept that is used to enhance a component with new functions or data.

- We do not modify or mutate the component. We create new ones.
- A HOC is used to compose components for code reuse.
- A HOC is a pure function. That means it has no side effects. It only returns a new component.

<EditedBy name="Jinadev" date="21/05/2020" />
