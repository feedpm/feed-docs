---
id: functional-components
title: FunctionalComponents
sidebar_label: FunctionalComponents
---

import EditedBy from '../../../src/components/EditedBy'

### What is Functional Components

The core building blocks of React are Components. These components may be Class based which possess enough complexity to require state and lifecycle methods. However some are simple enough that they can be written as pure Javascript functions which are known as functional Components.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

The above is an example of functional Component

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Both are same and will give you the same output. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.The code transpiled by babel looks like

```jsx
function Welcome(props) {
  return React.createElement('h1', null, 'Hello,', props.name);
}
```

### Why Functional Components

- Functional component are much easier to read and test because they are plain JavaScript functions
- You end up with less code
- It is easier to separate container and presentational components.
- The React team mentioned that there may be a performance boost for functional component.

Because a functional component is just a plain JavaScript function, you cannot use setState() in your component. That’s why they also get called as functional stateless components.

### When to use Functional Components

You should use functional components if you are writing a presentational component which doesn’t have its own state or needs to access a lifecycle hook. Otherwise use class components or take a look into the library recompose which allows you to write functional components and enhance them with a state or lifecycle hooks with HOCs!

### React Hooks

The primitive functional component which doesn't allow state or any lifecycle methods has been changed with React 16.8.0 version update by introduction of React Hooks.

### State Hook

In class based components, state initiation and it's changes are accesed via this.state and this.setstate().Similarly we use useState in functional components.The useState returns value, its accessor and is initiated at the start:

```jsx
const [state, setState] = useState(initialState);
```

```jsx
import React, {useState} from 'react';

function SampleHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### Effect Hook

The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

### Effect Hook without Cleanup

Here at each time this functional component renders (including first render and subsequent re-renders due to count change) will execute effect hook function.

```jsx
import React, {useState, useEffect} from 'react';
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click </button>
    </div>
  );
}
```

- Conditional execution of Effect hook

This effect hook acts for each render, so can replace lifecycle methods such as componentDidMount & componentDidUpdate.In above example, hook function will execute on component mounting (first render) as well as component updating (re-rendering), and might not be required to execute every time. Thereby effect hook execution can be restricted, and decided by second parameter passed to useFffect.

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

In above e.g., it’ll be executed at first render and whenever there is change in count as given by second parameter as [count].

### Effect Hook with cleanup

In class component, you’ll be subscribing to external source in componentDidMount. Thereby when removing the component, subscription should be removed in componentWillUnmount. In hooks it's called cleanup, and if function is returned from effect hook (optional) it’ll be used for cleanup when unmounting this functional component.

```jsx
import React, { useState, useEffect } from 'react';

function FriendStatus(id) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribe(id, handleStatusChange);
    return function cleanup() {
      ChatAPI.unsubscribe(id, handleStatusChange);
    };
  });

  return(
     if (isOnline === null) 'Loading...';
     else isOnline ? 'Online' : 'Offline';
  );
}
```

### Ref Hook

Reference hook can be used to refer React element created by render method. When there are DOM changes, refs.current value will be up to date.

```jsx
import React, {useRef} from 'react';
function App() {
  const inputElement = useRef(null);
  const onButtonClick = () => {
    inputElement.current.focus();
  };
  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Focus</button>
    </>
  );
}
```

<EditedBy name="Steffy" date="21/05/2020" />
