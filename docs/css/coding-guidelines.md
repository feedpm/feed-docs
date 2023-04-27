---
id: coding-guidelines
title: Coding guidelines
sidebar_label: Coding guidelines
---

import EditedBy from '../../src/components/EditedBy'

### HTML

1. Use semantic HTML: Use HTML elements that clearly describe their meaning and purpose, such as `<header>, <nav>, <main>, <footer>, <article>, <section>`, etc. This helps search engines and screen readers understand your content better and improves accessibility.
2. Use valid HTML: Ensure your HTML code is valid and well-formed by using the appropriate tags, attributes, and values. You can validate your HTML code using tools like the W3C Markup Validation Service.
3. Use indentation and whitespace: Use proper indentation and whitespace to make your code easier to read and understand. This also helps to identify nested elements and their relationships.
4. Avoid inline styles: Avoid using inline styles (style attributes) in your HTML code. Instead, use external stylesheets or internal styles within the `<head>` section of your HTML document.
5. Use lowercase: Use lowercase for all HTML tags, attributes, and attribute values. This is not required by the HTML specification, but it is a widely adopted convention that makes your code easier to read and maintain.

---

### Plan your CSS

Before diving in and writing huge chunks of CSS, plan your styles carefully. What general styles are going to be needed, what different layouts do you need to create, what specific overrides need to be created, and are they reusable? Above all, you need to try to avoid too much overriding. If you keep finding yourself writing styles and then cancelling them again a few rules down, you probably need to rethink your strategy.

---

### Organizing all Elements of the Stylesheet

Organizing the elements of a Stylesheet from top to bottom might not be as easy as it might seem to be. Sometimes, if the designer has the least idea of CSS, they might start organizing the elements by arranging these in the order they would like them to be. However, when it comes to writing CSS code, this might not be a good practice, as it might become difficult for others or yourself to locate the CSS code elements within the stylesheet.

They can be ordered starting from inclusive styles, which include body, H1, p, a and similar ones. These should be followed by a header and a footer.

Below given is an example of how this code structure should be written:

As an example consider the code structure below.

```css
/****** General Styles *********/
body {…}
h1, h2, h3 {..}
p {…}
a {…}


/****** Header Style *********/
#header {…}


/****** Navigation Style *********/
#nav {…}


/****** Footer Style *********/
#footer {…}
```

---

### Use flexible/relative units

For maximum flexibility over the widest possible range of devices, it is a good idea to size containers, padding, etc. using relative units like ems and rems or percentages and viewport units if you want them to vary depending on viewport width.

---

### Don't use resets

For maximum control over CSS across platforms, a lot of people used to use CSS resets to remove every style, before then building things back up themselves. This certainly has its merits, but especially in the modern world, CSS resets can be an overkill, resulting in a lot of extra time spent reimplementing things that weren't completely broken in the first place, like default margins, list styles, etc.

If you really feel like you need to use a reset, consider using [normalize.css by Nicolas Gallagher,](https://necolas.github.io/normalize.css/) which aims to just make things more consistent across browsers, get rid of some default annoyances that we always remove (the margins on `<body>`, for example) and fix a few bugs.

---

### !important

!important is the last resort that is generally used only when you need to override something and there is no other way to do it. Using !important is a bad practice and you should avoid it wherever possible.

```css
.bad-code {
  font-size: 4rem !important;
}
```

---

### CSS comments

Use CSS-style comments to comment code that isn't self-documenting. Also note that you should leave a space between the asterisks and the comment.

```css
/* This is a CSS-style comment */
```

Put your comments on separate lines preceding the code they are referring to, like so:

```css
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

---

### Double quotes around values

Where quotes can or should be included, use them, and use double quotes. For example:

```css
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

---

### Mobile-first media queries

In a stylesheet that contains [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) styles for different target viewport sizes, first include the narrow screen/mobile styling before any other media queries are encountered. Add styling for wider viewport sizes via successive media queries. Following this rule has many advantages that are explained in the [Mobile First](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first) article.

```css
/* Default CSS layout for narrow screens */

@media (min-width: 480px) {
  /* CSS for medium width screens */
}

@media (min-width: 768px) {
  /* CSS for wide screens */
}

@media (min-width: 1024px) {
  /* CSS for really wide screens */
}
```

---

### Selectors

- Don't use ID selectors because they are:
  - less flexible; you can't add more if you discover you need more than one.
  - harder to override because they have higher specificity than classes.

```css
/* Good Approach */
.editorial-summary {
  /* ... */
}
```

```css
/* Bad Approach */
#editorial-summary {
  /* ... */
}
```

- When a rule has multiple selectors, put each selector on a new line. This makes the selector list easier to read and can help to make code lines shorter.

```css
/* Good Approach */
h1,
h2,
h3 {
  font-family: sans-serif;
  text-align: center;
}
```

```css
/* Bad Approach */
h1, h2, h3 {
  font-family: sans-serif;
  text-align: center;
}
```

---

### Space after function parameters

Function parameters should have spaces after their separating commas, but not before:

```css
color: rgb(255, 0, 0);
background-image: linear-gradient(to bottom, red, black);
```

---

### Syntax style

There are a variety of CSS writing styles you can use, but we prefer the expanded style, with the selector/opening brace, close brace, and each declaration on a separate line. This maximizes readability, and again, promotes consistency on MDN Web Docs.

In addition, keep these specifics in mind:

- Include a space between the selector(s) and the opening curly brace.
- Always include a semicolon at the end of the last declaration, even though it isn't strictly necessary.
- Put the closing curly brace on a new line.
- In each declaration, put a space after the separating colon, but not before.
- Use two spaces for code indentation.

```css
/* Good Approach */
p {
  color: white;
  background-color: black;
  padding: 1rem;
}
```

```css
/* Bad Approach */
p { color: white; background-color: black; padding: 1rem; }
```

---

### Value to turn off properties

When turning off borders (and any other properties that can take `0` or `none` as values), use `0` rather than `none`:

```css
border: 0;
```

---

### Shrinking CSS File Size using CSS Compressors

If you feel that there is something wrong while the CSS codes get loaded over the browsers and it seems to be lagging behind in speed, then there is high time you tried to compress the size of the CSS files. A lot of elements, including line breaks, white spaces, and even redundant CSS styles might be interfering with your CSS file and delaying your site from loading quicker. Some of the tools that you can use to get rid of these issues include CSS Compressor or blend it with Minifier to utilize the benefits to its fullest.

---

### Validating your CSS

You can always use the [W3C free CSS validator](https://jigsaw.w3.org/css-validator/) to examine whether your CSS code has been organized and structured appropriately. One of the other benefits of using it is to help you find errors within your stylesheet. This will save you all the time that would be spent on troubleshooting these when you are doing it manually.

---

<EditedBy name="Priya, Ann" updated="Ann" date="24/04/2023" />
