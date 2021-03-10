---
id: contribute
title: Contributing
sidebar_label: Contributing
---

import EditedBy from '../../src/components/EditedBy'

You can skip to [Steps](#sidebarjs), if you already know the basics.

## Docusauras alpha version\*

We have built this portal with the excellent documentation tool called Docusaurus. We are using [version 2-alpha](https://v2.docusaurus.io/). We will merge newer upgrades and fixes release by the Docusaurus team periodically.

In order to contribute, you don't need to understand how Docusaurus works. However, if you are interested in it or wish to start another project, you can start with the [Guides](https://v2.docusaurus.io/docs/creating-pages) sections.

<!-- prettier-ignore -->
:::warning
Please make sure you read the version 2 documentation and not version 1.
:::

## Folders

The docs reside in the `/doc/**/*` folder. In order to avoid duplications, we have grouped the docs inside various folders, which are as listed below:

- `/welcome/*.md` - Welcome and get started
- `/css/*.md` - Cascading Style Sheets
- `/js/*.md` - JavaScript
- `/react/*.md` - React
- `/angular/*.md` - Angular
- `/node/*.md` - Node
- `/react-native/*.md` - React Native

For example, if you wish to add a **coding standard** for React, you can create the file under `/docs/react/coding-standards.md`.

## Sidebar.js

Once you create the doc, you will have to reference it in [`~/sidebar.js`](https://github.com/feedpm/feed-docs/blob/main/sidebars.js), under the correct section. You will also need to follow a few naming conventions and Markdown meta details:

1. You should follow [kebab-case](https://stackoverflow.com/questions/11273282/whats-the-name-for-hyphen-separated-case) for naming the files.
1. Make sure you also use the same name as the id of the doc. That's the YAML details on all doc files, between `---`.
1. Reference the doc's id in `~/sidebar.js` like this: `<folder-name>/<file-name>`.
1. You will have to add the same inside `items` if the doc comes under a subsection.

Here is an example:

```javascript
...
CSS: [
  'css/intro',
  'css/coding-guidelines',
  {
    type: 'category',
    label: 'Trainings',
    items: ['css/understanding-display'],
  },
  {
    type: 'category',
    label: 'Reusable components',
    items: ['css/tailwind'],
  },
  'css/tools',
],
...
```

## Last author

Each doc imports the `<EditedBy name="<author-name>" date="dd/mm/YYYY" />` component and uses it at the end. This component keeps track of the last author.

If you make a change, you will have to update the `name` and `date` with your name and current date. You will also have to do the same when creating a new doc.

## Merge request

You can create a new branch from the `main` to start working on a new change. Once completed, you can raise a merge request against `main`. Please assign your respective approvers.

The approvers will review your changes. If everything is good, they will approve your contribution.

<EditedBy name="Vijay dev" date="24/02/2020" />
