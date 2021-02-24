---
id: tools
title: Tools
sidebar_label: Tools
---

import EditedBy from '../../src/components/EditedBy'

List of tools, libraries, browser extensions, editor packages.

### Browser extensions

#### pagespeed

Analyze the performance of your webpages and get specific suggestions on how to optimize them.

1. image compression, optimization, and scaling
2. minify html,css, and js
3. browser caching
4. etc

[link](https://chrome.google.com/webstore/detail/pagespeed-insights-with-p/lanlbpjbalfkflkhegagflkgcfklnbnh?hl=en)

#### perfect pixel

1. Multiple overlays support
2. Drag-n-drop file upload support
3. Inversion and scaling support

[link](https://chrome.google.com/webstore/detail/perfectpixel-classic-by-w/hdilonnhfofnbinbljfnkcloagjpijgd)

#### pagespeed insights

This extension lets you quickly check the PageSpeed score and also provides you with the link of Insights developer console if you want to dig deeper into stats.

[link](https://chrome.google.com/webstore/detail/google-pagespeed-insights/edbkhhpodjkbgenodomhfoldapghpddk?hl=en)

#### AMP validator

The AMP Validator will check the current page to see if it is an AMP page and then run it through the AMP validator and report if the page passes (green) or fails (red) via the extension icon.

[link](https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc?hl=en)

### Web Developer

- view, add, and delete cookies
- view, edit CSS
- images anf forms can be handle
- HTML, CSS validation
- screen resizing

#### Awesome Screenshot

Capture all or part of any web page as image or video. Add annotations, comments, blur sensitive info, and share with one-click uploads.

[link](https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj?hl=en)

#### Tiny png

This is a website that help as to optimize images without losing image clarity in a large amount

[link](https://tinypng.com/)

#### CSSViewer

CSSViewer is a simple CSS properties viewer for Firefox.

How to use : To enable CSSViewer, simply click the toolbar icon and then hover any element on you want to inspect in current page.

![alt text](/img/css-images/cssviewer.png 'CSS Viewer')

#### Stylebot

Change the appearance of websites instantly.

You pick an element and choose any changes you want to make from the editor. You can change the font, color, margins, visibility and a lot more. You can also write CSS manually. You can see the changes on site site as soon as we make change in Stylebot Editor.

![alt text](/img/css-images/stylebot.png 'stylebot')

#### Page Ruler Redux

Get perfect pixel dimensions and positioning to measure elements on any web page.

[link](https://chrome.google.com/webstore/detail/page-ruler-redux/giejhjebcalaheckengmchjekofhhmal?hl=en)

- Create a ruler to get perfect pixel measurements of web elements.
- Resize the ruler by dragging by mouse or arrow keys.

#### Spectrum

Instantly test your web page with different types of color vision deficiency.

![alt text](/img/css-images/spectrumNormal.png 'Normal')

![alt text](/img/css-images/spectruProtanopia.png 'Protanopia')

![alt text](/img/css-images/spectrumAchromatopsia.png 'Achromatopsia')

### Atom editor packages

#### Linter

Provides a top-level API to its consumer so that they can visualize errors and other types of messages with ease.

<!-- prettier-ignore-start -->
```bash
$ apm install linter

```
<!-- prettier-ignore-end -->

[Reference](https://atom.io/packages/linter)

#### emmet

Emmet expands abbreviations by Tab key only for HTML, CSS, Sass/SCSS and LESS syntaxes.

We can install emmet as normal atom package or through manual installation

<!-- prettier-ignore-start -->
```bash

cd ~/.atom/packages
git clone https://github.com/emmetio/emmet-atom
cd emmet-atom
npm install

```
<!-- prettier-ignore-end -->

[Reference](https://atom.io/packages/emmet)

#### color-picker

Features:

- multi-cursor support
- context detection depending on cursor position
- simple UI depending on colorjoe

[Reference](https://atom.io/packages/color-picker)

#### highlight-selected

Highlight occurrences of a selection within the open editor.

[Reference](https://atom.io/packages/highlight-selected)

#### git-plus

make commits and other git things without the terminal

[Reference](https://atom.io/packages/git-plus)

#### atom-beautify

Beautify HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, SQL, and more in Atom

[Reference](https://atom.io/packages/atom-beautify)

[Other package List](https://atom.io/packages/list)

### VS Code extensions

You can browse and install extensions from within VS Code. Bring up the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of VS Code or the View: Extensions command (Ctrl+Shift+X).

- List installed extensions - Command Palette (Ctrl+Shift+P) or the More Actions (...)

#### Snippets

Code snippets are templates that make it easier to enter repeating code patterns, such as loops or conditional-statements.

[Reference](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

#### Emmet

Emmet support is built right into Visual Studio Code, no extension is required.

[Reference](https://code.visualstudio.com/docs/editor/emmet)

[Gallery](https://code.visualstudio.com/docs/editor/extension-gallery)

### Sublime Text Plugins

Sublime Text is a sophisticated text editor for code, markup and prose.

#### Package Control

Enables the easy installation, download, and update of packages or plugins into Sublime Text.

Steps:

- ctrl+shift+p (will show the command palette and you can select the package from here)
- Install Package

- [Install](https://packagecontrol.io/installation)
- [Reference](https://packagecontrol.io/)

#### Snippets and code style

We can build your own and we have plugins like [Emmet](http://emmet.io/)

#### Emmet

Uses abbreviations that expand to valid HTML tags.

- to build out a navigation you only need to type the following code:

<!-- prettier-ignore-start -->
```css
#page>div.logo+ul#navigation>li*5>a{Item $}

```
<!-- prettier-ignore-end -->

which will expand to:

<!-- prettier-ignore-start -->
```html
<div id="page">
  <div class="logo"></div>
  <ul id="navigation">
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li><a href="">Item 3</a></li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</div>
```
<!-- prettier-ignore-end -->

#### Alignment

Helps to easily align multiple selections, or multi-line selections.

[Reference](https://packagecontrol.io/packages/Alignment)

#### SublimeGit

SublimeGit brings Git into Sublime.

[Reference](https://packagecontrol.io/packages/SublimeGit)

#### GitGutter

Hover on the indicators in the sidebar, to see a diff popup

Features:

- copying the content of the diff state
- reverting the changes back to the state in Git
- jumping to next or previous change

[Reference](https://packagecontrol.io/packages/GitGutter)

#### GitOpenChangedFiles

Open files changed in your current branch

Simply install and run `cmd + option + o` on a Mac, or `ctrl + shift + o` on Windows

### Linters and syntax highlighting

#### SublimeLinter

[Reference](https://packagecontrol.io/packages/SublimeLinter)

#### ChangeQuotes

ChangeQuotes “converts single and double quotes, and and re-escapes quotes within the string,” according to their docs. Once installed, whenever you want to change quotes, make sure your cursor is inside the quoted text. Open the Command Palette to run ChangeQuotes—there is no need to select the text to change quotes.

[Reference](https://packagecontrol.io/packages/ChangeQuotes)

#### SASS

[Reference](https://packagecontrol.io/packages/Sass)

#### Babel

For ES6 JavaScript, with React JSX extensions.

[Reference](https://packagecontrol.io/packages/Babel)

#### SideBarEnhancements

Operations on Sidebar of Files and Folders for Sublime Text.

[Reference](https://packagecontrol.io/packages/SideBarEnhancements)

#### Maybs Quit

Enables a quick panel to confirm quitting Sublime Text.

[Reference](https://packagecontrol.io/packages/Maybs%20Quit)

#### AutoFileName

Completes filenames automatically.

[Reference](https://packagecontrol.io/packages/AutoFileName)

#### View In Browser

Shortcuts - `ctrl+ alt + v`

[Reference](https://www.shopify.in/partners/blog/sublime-text-plugins-2018)

---

### Libraries & Frameworks

These are time saver for web designers

#### Bootstrap

Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.

- Powerful responsive design
- Built-in libraries of resources
- Low learning curve
- Quickly build prototypes

<!-- prettier-ignore-start -->
```bash
$ npm install bootstrap
$ gem install bootstrap -v 4.4.1
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```html
<!-- BootstrapCDN -->

<!-- CSS only -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

```
<!-- prettier-ignore-end -->

[Link](https://getbootstrap.com/)

#### Font Awesome

Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.

<!-- prettier-ignore-start -->
```html
<!-- Example - Camera Image/Icon -->

<i class="fas fa-camera"></i> <!-- this icon's 1) style prefix == fas and 2) icon name == camera -->
<i class="fas fa-camera"></i> <!-- using an <i> element to reference the icon -->
<span class="fas fa-camera"></span> <!-- using a <span> element to reference the icon -->
```
<!-- prettier-ignore-end -->

[Link](https://fontawesome.com/)

#### Animate.css

animate.css is a bunch of cool, fun, and cross-browser animations for you to use in your projects. It is a great framework that lets you add CSS animations. These include bounce, flash, pulse, rubberBand, shake, swing, tada, wobble, jello, heartBeat, bounceIn, etc.

[Github Link](https://github.com/daneden/animate.css) / [animate.css](https://raw.githubusercontent.com/daneden/animate.css/master/animate.css)

#### Foundation

The most advanced responsive front-end framework in the world.

- Create responsive design
- Powerful Email framework - Build responsive emails that look great on any device and all of the major email clients, even Outlook!
- Online webinar training support
- Easy to customize
- Vertical timeline layout
- Responsive HTML templates and UI components

[Link](https://get.foundation/) / [For Sites](https://get.foundation/sites.html) / [For Emails](https://get.foundation/emails.html)

#### Ionic

Free and open source, Ionic offers a library of mobile-optimized HTML, CSS and JS CSS components, gestures, and tools for building highly interactive apps. Built with Sass and optimized for AngularJS.

- New UI components and gestures
- Brand new custom animations API
- New icons, colors, and theming
- Official React & Angular integrations

<!-- prettier-ignore-start -->
```bash
Install
$ npm install -g @ionic/cli

Start
$ ionic start myApp tabs

Run the App
$ cd myApp 
$ ionic serve
```
<!-- prettier-ignore-end -->

[Link](https://ionicframework.com/)

#### Normalize.css

Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

<!-- prettier-ignore-start -->
```bash
$ npm install normalize.css
```
<!-- prettier-ignore-end -->

- Preserves useful defaults, unlike many CSS resets
- Normalizes styles for a wide range of elements
- Corrects bugs and common browser inconsistencies
- Improves usability with subtle modifications
- Explains what code does using detailed comments [Link](http://necolas.github.io/normalize.css/)

### Others - Tools that make the life of designers easier

#### CSS3 Generator

CSS3 Generator makes the task of generating useful cross-browser snippets for a range of CSS3 properties, simple and convenient.This tool covers all vendor prefixes. All you need to do is use the drop-down menu to pick the element of choice, generate code to style it and paste it into your project.

[Link](http://css3generator.com/)

#### CSS LINT

CSS Lint is a tool to help point out problems with your CSS code. It does basic syntax checking as well as applying a set of rules to the code that look for problematic patterns or signs of inefficiency. The rules are all pluggable, so you can easily write your own or omit ones you don't want.

[Link](http://csslint.net/)

#### Code Beautifier

The Code Beautifier is a simple, no frills tool that helps you clean your CSS. Paste or link CSS and just wait for the tool to do its job.

[Link](http://www.codebeautifier.com/)

<EditedBy name="Mahima" updated="Vijay" date="21/05/2020" />
