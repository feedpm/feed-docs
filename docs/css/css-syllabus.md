---
id: css-syllabus
title: CSS Syllabus
sidebar_label: CSS Syllabus
---

import EditedBy from '../../src/components/EditedBy'

## Why Learn CSS?

Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!

---

## Selectors and Visual Rules

### Link Element `<link>`

```css
<!-- How to link an external stylesheet with href, rel, and type attributes -->

<link href="./path/to/stylesheet/style.css" rel="stylesheet" type="text/css">
```

The `<link>` element is used to link HTML documents to external resources like CSS files. It commonly uses:

- `href` attribute to specify the URL to the external resource
- `rel` attribute to specify the relationship of the linked document to the current document
- `type` attribute to define the type of content being linked

### Purpose of CSS

CSS, or Cascading Style Sheets, is a language that is used in combination with HTML that customizes how HTML elements will appear. CSS can define styles and change the layout and design of a sheet.

### Write CSS in Separate Files

```css
<head>
  <link href="style.css" type="text/css" rel="stylesheet">
</head>
```

CSS code can be written in its own files to keep it separate from the HTML code. The extension for CSS files is `.css`. These can be linked to an HTML file using a `<link>` tag in the `<head>` section.

### Write CSS in HTML File

```css
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```

CSS code can be written in an HTML file by enclosing the code in `<style>` tags. Code surrounded by `<style>` tags will be interpreted as CSS syntax.

### CSS Selectors

Because we don’t want to style all our HTML elements at once, we need to be able to target a subset of these HTML elements.

CSS selectors define which elements we want our styling to be applied to.

#### Generic tag selectors

Targeting generic HTML tags is easy: just use the tag name.

```css
a {
  /* Links */
}
p {
  /* Paragraphs */
}
ul {
  /* Unordered lists */
}
li {
  /* List items */
}
```

There’s a direct connection between the name of the HTML tag and the CSS selector used.

#### Classes

Considering we probably don’t want to style all paragraphs or all titles identically, we need to differentiate them.

Of all HTML attributes, the `class` attribute is the most important for CSS. It allows us to define a `group` of HTML elements that we can target specifically. Just put a dot `.` in front of the class name you want to use:

```css
.date {
  color: red;
}
```

On one side, there is the HTML `class` attribute with the value `date`. It must match the name of the CSS class.

> You can use any name for your CSS class, as long as it doesn’t start with a number.

The `.date` class selector will target all HTML elements that have the `class="date"` attribute. So, the following HTML elements will `all` be styled:

```html
<p class="date">
  Saturday Feb 21
</p>
<p>The event will be on <em class="date">Saturday</em>.</p>
```

#### IDs

You can also use the `id` attribute in your HTML, and target it with a hash `#` in your CSS:

```css
#tagline {
  color: orange;
}
```

```html
<h1 id="tagline">This heading will be orange.</h1>
```

ID are similar to Classes, as they rely upon an HTML attribute.

#### Chaining Selectors

```css
/* Select h3 elements with the section-heading class */
h3.section-heading {
  color: blue;
}

/* Select elements with the section-heading and button class */
.section-heading.button {
  cursor: pointer;
}
```

CSS selectors can be chained so that rule sets apply only to elements that match all criteria. For instance, to select `<h3>` elements that also have the `section-heading` class, the selector `h3.section-heading` can be used.

#### Groups of CSS Selectors

```css
h1,
h2 {
  color: red;
}
```

Match multiple selectors to the same CSS rule, using a comma-separated list. In this example, the text for both `h1` and `h2` is set to red.

#### Hierarchy selectors

A `space` in a selector defines a ancestor/descendant relationship. Let’s say we want the links in our header to be in red:

```css
header a {
  color: red;
}
```

This can be read from right to left as: _“Select all `a` elements that are within a `header` element”_. This will prevent all other links (that aren’t in the header) from being affected.

#### Pseudo-class selectors

HTML elements can have different `states`. The most common case is when you hover over a link. It’s possible in CSS to apply a different style when such an event occurs.

Pseudo-class selectors are attached to usual selectors and start with a `colon :`

```css
a {
  color: blue;
}

a:hover {
  color: red;
}
```

#### Pseudo-element selectors

PSEUDO-ELEMENTS are used to address sub-parts of elements. They allow you to set style on a part of an element's content beyond what is specified in the documents. In other words they allow logical elements to be defined which are not actually in the document element tree. Logical elements allow implied semantic structure to be addressed in CSS selectors. Pseudo-element selectors are attached to usual selectors and start with a `colon ::`

```css
a {
  color: blue;
}

a::before {
  content: '';
  color: red;
}

a::after {
  content: '';
  color: red;
}
```

[Learning To Use The :after And :before Pseudo-Elements In CSS](https://www.smashingmagazine.com/2011/07/learning-to-use-the-before-and-after-pseudo-elements-in-css/)

[How CSS pseudo-classes work, explained with code and lots of diagrams](https://medium.freecodecamp.org/explained-css-pseudo-classes-cef3c3177361)

#### HTML attributes with multiple values

```css
<div class="class-1 class-2 class-3"></div>
```

Some HTML attributes can have multiple attribute values. Multiple attribute values are separated by a space between each attribute.

### Inline Styles

CSS styles can be directly added to HTML elements by using the `style` attribute in the element’s opening tag. Each style declaration is ended with a semicolon. Styles added in this manner are known as inline styles.

### CSS Colors and Gradients

The web has not one but 3 unique color systems, as well as a a number of keywords and the ability to create complex gradients.

[Color | MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)  
A thorough document explaining all of the different color coordinate systems (hexadecimal vs rgb/rgba vs hsl/hsla) as well as color keywords.

[CSS Gradients | CSS-Tricks](https://css-tricks.com/css3-gradients/)  
Great explanation of all the different types of gradients, what they look like, and how they're supported across different browsers.

[CSS Gradient](https://cssgradient.io/)  
A visual tool for generating CSS Gradients. Test and tinker in real time, and when you get one you like simply copy out the CSS.

[How to add gradients to images with CSS ::after](https://peter.coffee/how-to-use-css-pseudo-elements-to-add-a-gradient-to-images)  
Gradients can also be useful for manipulating images and all sorts of other good stuff. This shows how to do a nice gradient fade-out of an background image using a gradient.

[CSS3 Progress Bars | CSS-Tricks](https://css-tricks.com/css3-progress-bars/)  
Utilizing gradients to create beautiful progress bars.

### CSS Units

Measurement of properties like font-size, line-height, margin, padding, width, height, etc. are done in CSS using length units. There are four basic types of length units used in CSS – relative, absolute, angle and time.

[CSS values and units | MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)  
An introduction to all of the different types of units in CSS. Pixels, rems, ems, unitless values, degrees, seconds, percentages, hexadecimals and more.

[REM vs EM](https://zellwk.com/blog/rem-vs-em/)  
While pixels are probably the easiest unit to understand, creating accessible and responsive websites requires the use of em and rem units.

[CSS Viewport units](https://alligator.io/css/viewport-units/)  
Viewport units aren’t necessary very often, but there are a certain set of problems where they are incredibly useful, in fact there are no substitutes.

[calc() Functions](https://pineco.de/calc-function-with-use-cases/)  
Calc is one of the most useful general purpose tools in modern CSS toolkits.

### CSS Reset

There is no such thing as an unstyled HTML element. Every webpage uses at least one CSS: the User agent Stylesheet.

#### Applying a CSS reset

A browser’s default styles can `interfere` with the styles we actually want to apply. That’s why a `CSS` reset has been devised to provide a `consistent base` across all browsers.

It’s particularly useful for normalizing the text size and removing all margins.

You can find (and download) the [HTML 5 reset.css](https://marksheet.io/css/reset.css) of this website. Just include it in your `<head>` before your own stylesheet.

[CSS Reset libraries](https://medium.com/@riittagirl/a-tale-of-css-resets-and-everything-you-need-to-know-about-them-781849d9b7f2)

#### `!important` Rule

```css
#column-one {
  width: 200px !important;
}

.post-title {
  color: blue !important;
}
```

The CSS `!important` rule is used on declarations to override any other declarations for a property and ignore selector specificity. `!important` rules will ensure that a specific declaration always applies to the matched elements.

However, generally it is good to avoid using `!important` as bad practice.

---

## Typography

One of the fundamental pieces of web styling is how we deal with text. Paragraphs, headers, links, lists... text is one of the fundamental building blocks of the web, and there are a myriad of ways to make it look good.

[Fundamental text and font styling | MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)  
An excellent overview of the various tools in your hands when it comes to styling text. Fonts, colors, sizing, decoration, and more. Start here.

[The Definitive Guide To Styling Links With CSS | Smashing Magazine](https://www.smashingmagazine.com/2010/02/the-definitive-guide-to-styling-web-links/)  
Links are one of the fundamental building blocks of the web, and when styling them it's important to not only know the tools at your disposal but also think about the ways people use links. That's why this is such a great guide - it goes through both the technical details and how you can style links in different states, but also the design thinking behind how you might want to.

[Styling lists | MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)  
Lists are a fundamental part of displaying content on the web. Any time you have an array of data, there's a very good chance you'll be interested in displaying it as a list. While lists for the large part style like text, they have some unique pieces as well that this goes through in great detail.

[Using @font-face | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)  
A thorough guide to using custom fonts on your website. Covers font-face options for different levels of browser support, as well as alternatives like `@import`.

---

## The Box Model

By default, every HTML element is rendered in the browser as a rectangle. The dimensions of that rectangle are dynamic: they vary according to the content of that element. You can consider these rectangles as fluid, altering their shape to fit the content.

[![Image](/img/box-model.png 'CSS Box Model')](/img/box-model.png) _The property box-sizing of CSS box model_

[Opening the Box Model](https://learn.shayhowe.com/html-css/opening-the-box-model/)

[The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)

---

## Display and Positioning

These two are some of the most import properties in CSS where you need to pay attention to understand them correctly. Knowing these two properties well can make your CSS journey a lot smoother.

#### CSS `display` property

```css
.container1 {
  display: block;
}

.container2 {
  display: inline;
}

.container3 {
  display: inline-block;
}
```

The CSS `display` property determines the type of render block for an element. The most common values for this property are `block`, `inline`, and `inline-block`.

**_Block-level_** elements take up the full width of their container with line breaks before and after, and can have their height and width manually adjusted.

**_Inline_** elements take up as little space as possible, flow horizontally, and cannot have their width or height manually adjusted.

**_Inline-block_** elements can appear next to each other, and can have their width and height manually adjusted.

#### CSS Positioning

Positioning in CSS provides designers and developers options for positioning HTML elements on a web page. There are five different position values:

- static
- relative
- fixed
- absolute
- sticky

Elements are then positioned using the `top`, `bottom`, `left`, and `right` properties. However, these properties will not work unless the [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property is set first. They also work differently depending on the position value.

#### CSS `float` property

```css
/* The content will float to the left side of the container. */
.left {
  float: left;
}

/* The content will float to the right side of the container. */
.right {
  float: right;
}
```

The CSS [float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) property determines how far left or how far right an element should float within its parent element. The value `left` floats an element to the left side of its container and the value `right` floats an element to the right side of its container. For the property `float`, the `width` of the container must be specified or the element will assume the full width of its containing element.

#### The CSS `clear` property

```css
/*This determines that no other elements within the same containing element are allowed to float on the left side of this element.*/
.element {
  clear: left;
}

/*This determines that no other elements within the same containing element are allowed to float on the right side of this element.*/
.element {
  clear: right;
}

/*This determines that no elements within the same containing element are allowed to float on either side of this element.*/
.element {
  clear: both;
}

/*This determines that other elements within the same containing element are allowed to float on both side of this element.*/
.element {
  clear: none;
}
```

The CSS `clear` property specifies how an element should behave when it bumps into another element within the same containing element.The `clear` is usually used in combination with elements having the CSS `float` property. This determines on which sides floating elements are allowed to float.

[Positioning Content](https://learn.shayhowe.com/html-css/positioning-content/)

---

## Advanced CSS

For a while, CSS has remained one-sided: one color, one state, one instant, one device. Throughout the years, it has developed new features that alter interactions, intermediate states, and even time.

- CSS Transitions
  - [CSS Transitions explained](https://zellwk.com/blog/css-transitions/)
  - [CSS Transitions](http://css3.bradshawenterprises.com/transitions/)
- CSS Animations
  - [An Introduction To CSS Keyframes Animation](https://www.smashingmagazine.com/2011/05/an-introduction-to-css3-keyframe-animations/)
  - [Animista: CSS Animations on Demand](http://animista.net/)
- [CSS Transforms](https://learn.shayhowe.com/advanced-html-css/css-transforms/)
- [CSS At-Rules](https://css-tricks.com/the-at-rules-of-css/)
- CSS Responsivesness
  - [CSS Media Queries](https://alligator.io/css/media-queries/)
  - [How To Write Mobile-first CSS](https://zellwk.com/blog/how-to-write-mobile-first-css/)
- Common CSS Practices
  - [Autoprefixer](https://css-tricks.com/autoprefixer/)
  - [Lint your CSS with stylelint](https://css-tricks.com/stylelint/)
  - [About normalize.css](http://nicolasgallagher.com/about-normalize-css/)
- CSS Pseudo-classes and Pseudo-elements
  - [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do ](https://css-tricks.com/pseudo-element-roundup/)
  - [Animating pseudo-elements](https://cssanimation.rocks/pseudo-elements/)
  - [Using pseudo-elements with CSS Grid](https://codepen.io/michellebarker/post/using-pseudo-elements-with-css-grid)
  - [How CSS pseudo-classes work, explained with code and lots of diagrams](https://medium.freecodecamp.org/explained-css-pseudo-classes-cef3c3177361)
  - [Meet the Pseudo Class Selectors](https://css-tricks.com/pseudo-class-selectors/)

---

## CSS Layout

CSS page layout techniques allow us to take elements contained in a web page and control where they are positioned relative to their default position in normal layout flow, the other elements around them, their parent container, or the main viewport/window.

<ul>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow">Normal Flow</a>
    </li>
    <li>
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</a>
    </li>
    <li>
        <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">Grids</a>
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats">Floats</a>
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning">Positioning</a>
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">Multiple-column layout</a>
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design">Responsive design</a>
    </li>
</ul>

---

## CSS Preprocessors

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

<a href="http://sass-lang.com/" target="_blank">Sass</a>

<ul>
    <li>
        <a href="https://sass-lang.com/install">Install Sass</a>
    </li>
    <li>
        <a href="https://sass-lang.com/documentation/style-rules">Style Rules</a>
    </li>
    <li>
        <a href="https://sass-lang.com/documentation/variables">Variables</a>
    </li>
    <li>
        <a href="https://sass-lang.com/guide">Partials</a>
    </li>
    <li>
        <a href="https://sass-lang.com/guide">Modules</a>
    </li>
    <li>
        <a href="https://sass-lang.com/guide">Mixins</a>
    </li>
    <li>
        <a href="https://sass-lang.com/guide">Extend/Inheritance</a>
    </li>
    <li>
        <a href="https://sass-lang.com/documentation/operators">Operators</a>
    </li>
    <li>
        <a href="https://sass-lang.com/documentation/interpolation">Interpolation</a>
    </li>
    <li>
        <a href="https://sass-lang.com/documentation/at-rules">At-Rules</a>
    </li>
    <li>
    <a href="https://sass-lang.com/documentation/modules">Build-In Modules</a>
    </li>
    <li>
        <a href="https://sass-lang.com/documentation/js-api">JavaScript API</a>
    </li>
</ul>

<a href="http://lesscss.org/" target="_blank">Less</a>

<ul>
    <li>
        <a href="http://lesscss.org/functions/">Install LESS</a>
    </li>
    <li>
        <a href="http://lesscss.org/#variables">Variables</a>
    </li>
    <li>
        <a href="http://lesscss.org/#mixins">Mixins</a>
    </li>
    <li>
        <a href="http://lesscss.org/#nesting">Nesting</a>
    </li>
    <li>
        <a href="http://lesscss.org/#operations">Operators</a>
    </li>
    <li>
        <a href="http://lesscss.org/#escaping">Escaping</a>
    </li>
    <li>
        <a href="http://lesscss.org/#functions">Functions</a>
    </li>
    <li>
        <a href="http://lesscss.org/##namespaces-and-accessors">Namespaces and Accessors</a>
    </li>
    <li>
        <a href="http://lesscss.org/#maps">Maps</a>
    </li>
    <li>
        <a href="http://lesscss.org/#importing">Importing</a>
    </li>
    <li>
        <a href="http://lesscss.org/#scope">Scope</a>
    </li>
    <li>
        <a href="http://lesscss.org/features/#parent-selectors-feature">Parent Selectors</a>
    </li>
    <li>
        <a href="http://lesscss.org/features/#extend-feature">Extend</a>
    </li>
    <li>
        <a href="http://lesscss.org/features/#merge-feature">Merge</a>
    </li>
    <li>
        <a href="http://lesscss.org/features/#detached-rulesets-feature">Detached Rulesets</a>
    </li>
    <li>
        <a href="http://lesscss.org/tools/">Frameworks Using Less</a>
    </li>
    <li>
        <a href="http://lesscss.org/usage/#api">API</a>
    </li>
</ul>

<a href="http://stylus-lang.com/" target="_blank">Stylus</a>

<ul>
    <li> 
        <a href="//stylus-lang.com/docs/variables.html">Variables</a>
    </li>
    <li>               
        <a href="//stylus-lang.com/docs/interpolation.html">Interpolation</a>
    </li>
    <li>               
        <a href="//stylus-lang.com/docs/operators.html">Operators</a>
    </li>
    <li>                
        <a href="//stylus-lang.com/docs/mixins.html">Mixins</a>
    </li>
    <li>               
        <a href="//stylus-lang.com/docs/functions.html">Functions</a>
    </li>
    <li>                
        <a href="//stylus-lang.com/docs/kwargs.html">Keyword Arguments</a>
    </li>
    <li>                
        <a href="//stylus-lang.com/docs/bifs.html">Built-in Functions</a>
    </li>
    <li>                 
        <a href="//stylus-lang.com/docs/vargs.html">Rest Params</a>
    </li>
    <li>                
        <a href="//stylus-lang.com/docs/comments.html">Comments</a>
    </li>
    <li>              
        <a href="//stylus-lang.com/docs/conditionals.html">Conditionals</a>
    </li>
    <li>            
        <a href="//stylus-lang.com/docs/hashes.html">Hashes</a>
    </li>
    <li>              
        <a href="//stylus-lang.com/docs/iteration.html">Iteration</a>
    </li>
    <li>             
        <a href="//stylus-lang.com/docs/import.html">@import and @require</a>
    </li>
    <li>                
        <a href="//stylus-lang.com/docs/media.html">@media</a>
    </li>
    <li>             
        <a href="//stylus-lang.com/docs/font-face.html">@font-face</a>
    </li>
    <li>            
        <a href="//stylus-lang.com/docs/keyframes.html">@keyframes</a>
    </li>
    <li>             
        <a href="//stylus-lang.com/docs/atrules.html">Other @-rules</a>
    </li>
    <li>           
        <a href="//stylus-lang.com/docs/extend.html">@extend</a>
    </li>
    <li>           
        <a href="//stylus-lang.com/docs/block.html">@block</a>
    </li>
    <li>           
        <a href="//stylus-lang.com/docs/functions.url.html">url()</a>
    </li>
    <li>              
        <a href="//stylus-lang.com/docs/literal.html">CSS Literal</a>
    </li>
    <li>            
        <a href="//stylus-lang.com/docs/css-style.html">CSS Style Syntax</a>
    </li>
    <li>            
        <a href="//stylus-lang.com/docs/escape.html">Char Escaping</a>
    </li>
    <li>            
        <a href="//stylus-lang.com/docs/executable.html">Executable</a>
    </li>
    <li>             
        <a href="//stylus-lang.com/docs/error-reporting.html">Error Reporting</a>
    </li>
    <li>               
        <a href="//stylus-lang.com/docs/middleware.html">Connect Middleware</a>
    </li>
    <li>               
        <a href="//stylus-lang.com/docs/introspection.html">Introspection API</a>
    </li>
    <li>            
        <a href="//stylus-lang.com/docs/js.html">JavaScript API</a>
    </li>
    <li>               
        <a href="//stylus-lang.com/docs/sourcemaps.html">Sourcemaps</a>
    </li>
    <li>
        <a href="http://stylus.github.io/nib/">CSS3 Extensions with Nib</a>
    </li>
</ul>

<a href="http://postcss.org/" target="_blank">PostCSS</a>

<ul> 
    <li>
        <a href="https://github.com/postcss/postcss#usage">Installation &amp; Setup</a>
    </li>
    <li> 
        <a href="http://postcss.parts/">Plugins</a>
    </li> 
    <li>
        <a href="http://api.postcss.org/">API</a>
    </li>
</ul>

---

## CSS Frameworks

A CSS framework is a library allowing for easier, more standards-compliant web design using the Cascading Style Sheets language. Most of these frameworks contain at least a grid. More functional frameworks also come with more features and additional JavaScript based functions, but are mostly design oriented and focused around interactive UI patterns.

<a href="https://getbootstrap.com/">Bootstrap</a>

<ul>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/getting-started/download/">Download</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/layout/overview/">Layout</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/content/typography/">Typography</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/content/tables/">Tables</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/forms/">Forms</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/buttons/">Buttons</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/content/images/">Images</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/dropdowns/">Dropdowns</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/button-group/">Button group</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/navbar/">Navbar</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/input-group/">Input group</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/breadcrumb/">Breadcrumb</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/pagination/">Pagination</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/carousel/">Carousel</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/collapse/">Collapse</a>
    </li>
    <li>
        <a href="https://getbootstrap.com/docs/4.4/components/modal/">Modal</a>
    </li>
    <li>
        <a href="https://icons.getbootstrap.com/">Icons</a>
    </li>
    <li>
        <a href="https://themes.getbootstrap.com/">Themes</a>
    </li>
</ul>

<a href="https://get.foundation/">Foundation</a>

<ul>
    <li>
        <a href="https://get.foundation/sites/docs/installation.html">Installation</a>
    </li>
    <li>
    <a href="https://get.foundation/sites/docs/flex-grid.html">Flex Grid</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/flexbox-utilities.html">Flexbox Utilities</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/button.html">Button</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/button-group.html">Button Group</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/menu.html">Menu</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/accordion.html">Accordion</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/table.html">Tables</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/tabs.html">Tabs</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/forms.html">Forms</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/slider.html">Slider</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/reveal.html">Reveal</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/pagination.html">Pagination</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/breadcrumbs.html">Breadcrumbs</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/abide.html">Plugins</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/motion-ui.html">Library - Motion UI</a>
    </li>
     <li>
        <a href="https://get.foundation/sites/docs/panini.html">Library - Panini</a>
    </li>
    <li>
        <a href="https://get.foundation/sites/docs/style-sherpa.html">Library - Style Sherpa</a>
    </li>
    
</ul>

<a href="https://semantic-ui.com/">Semantic UI</a>

<ul>
    <li>
        <a href="https://semantic-ui.com/introduction/getting-started.html">Installation</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/introduction/integrations.html">Integrations</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/usage/layout.html">Layouts</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/elements/button.html">Button</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/elements/container.html">Container</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/elements/divider.html">Divider</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/elements/header.html">Header</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/elements/loader.html">Loader</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/collections/breadcrumb.html">Breadcrumb</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/collections/form.html">Form</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/collections/grid.html">Grid</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/collections/menu.html">Menu</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/collections/table.html">Table</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/modules/accordion.html">Accordion</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/modules/checkbox.html">Checkbox</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/modules/embed.html">Embed</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/modules/modal.html">Modal</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/modules/progress.html">Progress</a>
    </li>
     <li>
        <a href="https://semantic-ui.com/modules/search.html">Search</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/modules/tab.html">Tab</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/modules/sidebar.html">Sidebar</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/modules/transition.html">Transition</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/behaviors/api.html">API</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/behaviors/form.html">Form Validation</a>
    </li>
    <li>
        <a href="https://semantic-ui.com/behaviors/visibility.html">Visibility</a>
    </li>
</ul>

---

<EditedBy name="Seena James" date="15/04/2020" />
