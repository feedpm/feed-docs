---
id: jsx
title: JSX - Introduction
sidebar_label: JSX - Introduction
---

import EditedBy from '../../../src/components/EditedBy'

## JSX - Introduction

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. But instead of using regular JavaScript, React code should be written in something called JSX. JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM.

```jsx
const sampleJsxElement = <h1 className="hello">This is sample JSX</h1>;
```

The above code snippet somewhat looks like HTML and it also uses a JavaScript-like variable but is neither of HTML or JavaScript, it is JSX.

#### Why JSX

Can we write a react component without JSX ?

Yes.

Our previous example without JSX, will look something like this:

```jsx
const sampleJsxElement = React.createElement(
  'h1',
  {
    className: 'hello',
  },
  'This is sample JSX',
);
```

React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

### Using JavaScript Expressions in JSX

To write a JavaScript expression within JSX you will have to surround the JavaScript code in `{ }` brackets.

```jsx
let label = '2 + 2';
let inputType = 'input';

let reactNode = (
  <label>
    {label} = <input type={inputType} value={2 + 2} />
  </label>
);
```

The `{ }` brackets simply tells JSX that the content is JavaScript so leave it alone so it can eventually be parsed by a JavaScript engine (e.g., 2+2). Note that `{ }` brackets can be used anywhere among the JSX expressions as long as the result is valid JavaScript.

### JSX Style - Using Inline CSS in JSX

In order to define inline jsx style on React nodes you need to pass the style prop/attribute a JavaScript object or reference to an object containing CSS properties and values.

In the code below I first setup a JavaScript object, named styles, containing jsx inline style. Then I use the `{ }` brackets to reference the object that should be used for the value of the style prop/attribute (e.g., style={styles}).

```jsx
const styles = {
  color: 'white',
  backgroundColor: 'black',
};

let reactNode = <div style={styles}>Hello world</div>;
```

The react inline CSS properties are in a camelCased form similar to what is used when writing CSS properties in JavaScript. This is required because JavaScript does not allow hyphens in names.

When the above React JSX code is transformed by Babel, and then parsed by a JavaScript engine, the resulting HTML will be:

```html
<div style="color:white;background-color:black;">Hello world</div>
```

## Rendering Elements

Elements are the smallest building blocks of React apps. Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

### Rendering an Element into the DOM

Let’s say there is a `<div>` somewhere in your HTML file:

```html
<div id="root"></div>
```

We call this a “root” DOM node because everything inside it will be managed by React DOM. Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element into a root DOM node, pass both to `ReactDOM.render()`:

```jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

It would display “Hello, world” on the page.

### Updating the Rendered Element

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to `ReactDOM.render()`. We will learn about stateful components in further section.

### React Only Updates What’s Necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

**Notes:**

- Since JSX compiles into calls to `React.createElement`, the React library must also always be in scope from your JSX code.
- JSX tags support the XML self close syntax so you can optionally leave the closing tag off when no child node is used.
- The `class` attribute has to be written `className`.
- The `for` attribute has to be written `htmlFor`.
- All attributes are camel-cased.
- To represent HTML elements, ensure the HTML tag is lower-cased.

<EditedBy name="Sreenath PG" date="12/05/2020" />
