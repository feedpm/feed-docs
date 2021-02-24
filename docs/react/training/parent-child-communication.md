---
id: parent-child-interaction-of-components
title: Parent-child interaction of components
sidebar_label: Parent-child interaction of components
---

import EditedBy from '../../../src/components/EditedBy'

## Parent Child Component Interaction

In a react application, we can have multiple components. React components can communicate by passing **state** data to each other. The **state** data sent from the parent component to child component is accepted by the child component using **props** object.

A React component is a function that receives a parameter called props. Props is a bag of data, an object that can contain any number of fields.

### Parent to Child interaction

If a parent component wants to feed data to a child component, it simply passes it via props.

##### Example:

We have a StudentList component that contains data for a list of students. As it iterates through the student list at render time, it wants to pass the details of each student in its list to the child Student component. It can do that through props. These props are passed to the child component as attributes in JSX:

```jsx
function StudentList() {
  const list = [
    {name: 'Adam', gender: 'M'},
    {title: 'Laura', author: 'F'},
    // ...
  ];

  return (
    <ul>
      {list.map((student, i) => (
        <Student name={student.name} gender={student.gender} key={i} />
      ))}
    </ul>
  );
}
```

Then the Book component can receive and use those fields as contained in the props parameter to its function:

```jsx
function Student(props) {
  return (
    <li>
      <h2>{props.name</h2>
      <div>{props.gender}</div>
    </li>
  )
}
```

### Child to parent interaction

A child component can communicate back to its parent component by **callbacks**.

A special prop of type function can be passed down to a child. At the time of a relevant event (eg, user interaction) the child can then call this function as a callback.

```jsx
function StudentName(props) {
  return (
    <label>
      Student Name:
      <input onChange={props.onChange} value={props.name} />
    </label>
  );
}
```

It receives a onChange function in the props, sent from its parent. It binds this function to the onChange event on the input field. When the input changes, it will call the onChange callback, passing the change Event object.

Because the parent, StudentForm, has reference to this function, it can receive the arguments that are passed to the function:

```jsx
function StudentForm(props) {
  const [name, setName] = useState(props.student.name);
  function handleNameChange(e) {
    setNametTitle(e.target.value);
  }
  return (
    <form>
      <StudentName onChange={handleNameChange} name={name} />
    </form>
  );
}
```

In this case, the parent passed handleNameChange, and when it's called, it sets the internal state based on the value of e.target.value -- a value that has come as a callback argument from the child component.

### From Parent to Child with Context

If we desire something to be globally available -- in many components and levels in the hierarchy -- props passing has the potential to be cumbersome. Context is used in React to share data across deeply nested components.

We might like to broadcast to all child components, such as theming data.

Instead of passing theme props to every component down the tree, we can define a theme context to be provided at the top and then consume it in whichever child needs it down the line.

```jsx
const ColorContext = React.createContext("yellow")
class App extends React.Component {
    render() {
        return (
            <ColorContext.Provider>
                <ThemeExample />
            </ColorContext.Provider>
        )
    }
}
class ThemeExample extends React.Component {
    render() {
        return (
            {this.context}
            <ColorExample />
        )
    }
}
class ColorExample extends React.Component {
    render() {
        return (
            <BackgroundTheme />
        )
    }
}
class BackgroundTheme extends React.Component {
    render() {
        <div>
            {this.context}
        </div>
    }
}
```

### Conclusion

React mechanisms for communicating between components are simple and effective. **Props** allow data to flow down the component hierarchy from parent to child.

When a child wants to communicate back up to a parent, a **callback** function is passed through props. Context provides additional convenience and globally providing data across the component tree hierarchy.

<EditedBy name="Chris Rachel" date="13/05/2020" />
