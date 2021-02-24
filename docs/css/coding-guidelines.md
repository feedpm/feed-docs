---
id: coding-guidelines
title: Coding guidelines
sidebar_label: Coding guidelines
---

import EditedBy from '../../src/components/EditedBy'

### Implementing the CSS Reset

The major goal of a reset stylesheet is to reduce incompatibilities across various browsers – it provides general styles, which can be easily edited and styled as per your requirements.One of the common examples of a reset CSS style sheet is normalize.css – which is a modern HTML 5 CSS reset.You have to include this reset CSS style sheet preceding your style definition under the section ‘head’ within your HTML file in order to prevent these from overriding your style definitions that follow.

---

### Comments

Divide your stylesheet into specific sections: i.e. Global styles – (body, paragraphs, lists, etc), Header, Page structure, Headings, Text styles, Navigation, Forms, Comments, and Extras.

```css
/* -----------------------------------*/
/* ---------->>> GLOBAL <<<-----------*/
/* -----------------------------------*/
```

Comments should be used liberally to explain anything that may be unclear at first glance.

```css
.prose p {
  font-size: 1.1666em /* 14px / 12px */;
}

.ie7 .search-form {
  /*
    Force the item to have layout in IE7 by setting display to block.
    See: http://reference.sitepoint.com/css/haslayout
  */
  display: inline-block;
}
```

---

### Organize the Stylesheet with a Top-down Structure

It always makes sense to lay your stylesheet out in a way that allows you to quickly find parts of your code. So, an example stylesheet might be ordered like this:

Generic classes (body, a, p, h1, etc.)

1. header
1. #nav-menu
1. #main-content

---

### Formatting

All CSS documents must use two spaces for indentation and files should have no trailing whitespace. Other formatting rules:

- Use soft-tabs with a two space indent.
- Avoiding inline styling

#### Anatomy of a Ruleset

<!-- prettier-ignore-start -->
```css
/* GOOD */
.foo,.foo--bar,
.baz {
  display: block;
  background-color: green;
  color: red;
}

/* BAD */
.foo,
.foo--bar,
.baz {
  display: block;
  background-color: green;
  color: red;
}
```
<!-- prettier-ignore-end -->

- Related selectors on the same line. Unrelated selectors on new lines.
- A space before our opening brace ( `{` );
- Properties and values on the same line;
- A space after our property–value delimiting colon ( `:` );
- Each declaration on its own new line;
- The opening brace ( `{` ) on the same line as our last selector;
- Our first declaration on a new line after our opening brace ( `{` );
- Our closing brace ( `}` ) on its own new line;
- Each declaration indented by two (2) spaces;
- A trailing semi-colon ( `;` ) on our last declaration.
- Place the closing brace of a ruleset in the same column as the first character of the ruleset.
- Separate each ruleset by a blank line.
- Avoid using tag names in selectors as this prevents re-use in other contexts.
- Also ids should be avoided in selectors as it makes it far too difficult to override later in the cascade.

#### Multi-line CSS

CSS should be written across multiple lines, except in very specific circumstances such as similar rulesets that only carry one declaration each.

<!-- prettier-ignore-start -->
```css
.icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(/img/sprite.svg);
}

.icon--home { background-position: 0 0; }
.icon--person { background-position: -16px 0; }
```
<!-- prettier-ignore-end -->

#### Values

- Always define generic font families like sans-serif or serif.
- Use lowercase and shorthand hex values
- If you use 0 as a value, do not add a unit (px, em, etc.) after it.
- Use single or double quotes consistently. Preference is for double quotes, e.g., content: "".
- Include a space after each comma in comma-separated property or function values.
- It is a bad practice to use !important

---

### Naming

All ids, classes and attributes must be lowercase with hyphens used for separation.

```css
/* GOOD */
.dataset-list {
}

/* BAD */
.datasetlist {
}
.datasetList {
}
.dataset_list {
}
```

#### BEM-like Naming

BEM splits components’ classes into three groups:

- Block: The sole root of the component.
- Element: A component part of the Block.
- Modifier: A variant or extension of the Block.

Elements are delimited with two (2) underscores (\_\_), and Modifiers are delimited by two (2) hyphens (--).

```css
.person {
}
.person__head {
}
.person--tall {
}
```

---

### Mobile-First Responsive Design

The mobile-first approach is a tenet of progressive enhancement. It is the ideology that mobile design, as the hardest, should be done first. Once the mobile design questions are answered, designing for other devices will be easier. What it boils down to is that, the smallest of the designs will have only the essential features.

---

### Basic breakpoints in Responsive Design

```css
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  ...;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  ...;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  ...;
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  ...;
}
```

### Shrink CSS file size with CSS Compressors

It’s really a great idea to shrink the CSS file size as it will remove white spaces, line breaks and remove redundant CSS styles. Through this, you can help browsers to speed up the loading of your CSS codes. Using tools like CSS Compressor and CSS Compressor & Minifier can make this happen.

---

### Validating your CSS

You can always use the [W3C free CSS validator](https://jigsaw.w3.org/css-validator/) to examine whether your CSS code has been organized and structured appropriately. One of the other benefits of using it is to help you find errors within your stylesheet. This will save you all the time that would be spent on troubleshooting these when you are doing it manually.

---

<EditedBy name="Priya Sasidharan" date="20/03/2020" />
