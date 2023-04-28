---
id: react-component-styling
title: React Component Styling
sidebar_label: React-Component-Styling
---

import EditedBy from '../../../src/components/EditedBy'

There seems to be about eight different ways of styling React JS components used widely in the industry for production level work:

1. **Inline CSS**
2. **Normal CSS**
3. **CSS in JS**
4. **Styled Components**
5. **CSS Modules**
6. **Sass & SCSS**
7. **Less**
8. **Stylable**

For each method, I’ll look at the need for dependencies, the difficulty level, and whether or not the approach is really a good one or not.

## Inline CSS

**Dependencies: None Difficulty: Easy Approach: Worst**

I don’t think anyone needs an introduction to inline CSS. This is the CSS styling sent to the element directly using the HTML or JSX. You can include a JavaScript object for CSS in React components. There are a few restrictions like replacing every - with camelCase text. You can style them in two ways using JavaScript objects as shown in the example.

### Example

```jsx
import React from 'react';

const spanStyles = {
  color: '#fff',
  borderColor: '#00f',
};

const Button = (props) => (
  <button
    style={{
      color: '#fff',
      borderColor: '#00f',
    }}>
    <span style={spanStyles}>Button Name</span>
  </button>
);
```

## Regular CSS

**Dependencies: None Difficulty: Easy Approach: Okay**

Regular CSS is a common approach, arguably one step better than inline CSS. The styles can be imported to any number of pages and elements unlike inline CSS, which is applied directly to the particular element. Normal CSS has several advantages, such as decreasing the file size with a clean code structure.

You can maintain any number of style sheets, and it can be easier to change or customize styles when needed. But regular CSS might be a major problem if you’re working on a bigger project with lots of people involved, especially without an agreed pattern to do styling in CSS.

### Example

```css
a:link {
  color: gray;
}
a:visited {
  color: green;
}
a:hover {
  color: rebeccapurple;
}
a:active {
  color: teal;
}
```

## CSS in JS

**Dependencies: jss, jss-preset-default, jss-cli Difficulty: Easy Approach: Decent**

CSS in JS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way. It can compile in the browser, on the server side or at build time in Node. It uses JavaScript as a language to describe styles in a declarative and maintainable way. It’s a high performance JS-to-CSS compiler which works at runtime and server-side. When thinking in components, you no longer have to maintain a bunch of style sheets. CSS-in-JS abstracts the CSS model to the component level, rather than the document level (modularity).

### Example

```jsx
import React from 'react';
import injectSheet from 'react-jss';

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const styles = {
  myButton: {
    color: 'green',
    margin: {
      // jss-expand gives more readable syntax
      top: 5, // jss-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem',
    },
    '& span': {
      // jss-nested applies this to a child span
      fontWeight: 'bold', // jss-camel-case turns this into 'font-weight'
    },
  },
  myLabel: {
    fontStyle: 'italic',
  },
};

const Button = ({classes, children}) => (
  <button className={classes.myButton}>
    <span className={classes.myLabel}>{children}</span>
  </button>
);

// Finally, inject the stylesheet into the component.
const StyledButton = injectSheet(styles)(Button);
```

## Styled Components

**Dependencies: styled-components Difficulty: Medium Approach: Decent**

Styled-components is an example of the above-mentioned CSS in JS. It basically gives us CSS with other properties you wish we had in CSS like nesting. It also allows us to style the CSS under the variable created in JavaScript. You could normally create a React component along with the styles attached to it without having to create a separate file for CSS. Styled-components allows us to create custom reusable components which can be less of a hassle to maintain. Props can be used in styling the components in the same way it is passed in the React components. Props are used instead of classes in CSS and set the properties dynamically.

### Example

```jsx
import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  ${(props) =>
    props.primary &&
    css`
      background-color: white;
      color: green;
      border-color: green;
    `};
`;

export default Button;
```

## CSS Modules

**Dependencies: css-loader Difficulty: Tough (Uses Loader Configuration) Approach: Better**

If you’ve ever felt like the CSS global scope problem takes up most of your time when you have to find what a particular style does, or if you’ve had to write a CSS file without organizing it properly to make the code work first, or if getting rid of the files gives you a slight nudge in your heart wondering if you might break the whole code, I feel you. CSS Modules make sure that all of the styles for a component are at one single place and apply to that particular component. This certainly solves the global scope problem of CSS. The composition feature acts as a weapon to represent shared styles between the states. It’s similar to the mixin in Sass, making it possible to combine multiple groups of styles.

### Example

```jsx
import React from "react";
import style from "./panel.css";

const Panel = () => (
  <div className={style.panelDefault}>
    <div className={style.panelBody}>A Basic Panel</div>
  </div>
);

export default Panel;
.panelDefault {
  border-color: #ddd;
}
.panelBody {
  padding: 15px;
}
```

## Sass & SCSS

**Dependencies: node-sass Difficulty: Easy Approach: Best**

Sass claims that it’s the most mature, stable, and powerful professional grade CSS extension language in the world. It’s a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as “syntactic sugar”) into regular CSS. The aim is to make the coding process simpler and more efficient. Just like other programming languages, Sass allows the use of variables, nesting, partials, imports and functions, which add super powers to regular CSS.

### Example

```css
$font-stack: 'Open Sans', sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

## Less

**Dependencies: less, less-loader Difficulty: Easy Approach: Good**

Less (Leaner Style Sheets) is a open-source, dynamic preprocessor style sheet language that can be compiled into CSS and run on the client side or server side. It takes inspiration from both CSS and Sass and is similar to SCSS. A few notable differences include variables starting with an @ sign in Less and with a \$ in Sass.

### Example

```css
@pale-green-color: #4D926F;

#header {
  color: @pale-green-color;
}

h2 {
  color: @pale-green-color;
}
```

## Stylable

**Dependencies: @stylable/core, @stylable/runtime, @stylable/optimizer, @stylable/module-utils, @stylable/custom-value Difficulty: Difficult Approach: Better**

Stylable is another pre-processor joining Sass, SCSS, and Less. If there is a struggle in getting handy with styled components — as their syntax is slightly different from Normal CSS — this comes to the rescue. Stylable is just like CSS but offers more opportunities to make each component discreet. This can do what CSS Modules finds it harder to do, which is styling the internal parts of a UI. Along with the other properties of CSS, Stylable also offers custom pseudo classes and pseudo elements. This property of Stylable automatically allows us to create custom CSS classes, which enables us to do the styling to internal parts of the components.

### Example

```css
@namespace 'Page';
:import {
  -st-from: './video-player.st.css';
  -st-default: VideoPlayer;
}
.mainVideo {
  -st-extends: VideoPlayer; /* define mainVideo as VideoPlayer */
}
.mainVideo::playbutton {
  /* override mainVideo playButton */
  background: green;
  color: purple;
}
/* CSS output*/
.Page__mainVideo.VideoPlayer__root {
}
.Page__mainVideo.VideoPlayer__root .VideoPlayer__playButton {
  background: green;
  color: purple;
}
```

<EditedBy name="Vinay Edadan" date="18/05/2020" />
