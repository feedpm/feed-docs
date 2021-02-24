---
id: coding-guidelines
title: Coding guidelines
sidebar_label: Coding guidelines
---

import EditedBy from '../../src/components/EditedBy'

### Keep components small and function-specific

- A single component should render a specific bit of your page.
- Function-specific components makes maintenance easier.
- Each small component can be reused across the project or multiple projects.
- Components executing general functions can be made available to the community.
- Balance between creating one concise component and creating multiple function-specific components.

### Reusability of components

- Maintaining function-specific componants can improve the reusability of components.
- Skip building a new component if there already exists a component with similar function.
- Reusing components will give consistency across the project.
- Making components modular will increse reusability.
- Your components should be abstract enough, but shouldn’t be overly complex.
- If a component becomes huge, break it into smaller components.

### Consolidate duplicate code

- Keep code brief, concise and precise.
- Avoid duplication – Don’t Repeat Yourself (DRY).
- Check code for patterns and similarities.
- Use mapping to avoid repeating idendical componets.

### Comment only where necessary

- Use descriptive names to avoid need for comments.
- Less comments will keep code visually clutter free.
- Avoid conflict between comment and code.

### Name the component after the function

- Name should be descriptive, easily recognizable and avoid confusion.
- Name should not limit the utility of the component. eg: use Avatar instead of AuthorAvatar.
- Use capitals for component names eg: SelectButton instead of selectbutton.
- Higher order components are prefixed with `with`.
- Hooks are prefixed with `use`.

### All files related to a component should be in a single folder

- Keep stateful data-loading logic separate from your rendering stateless logic.
- If there’s a small component specific to a component, keep the smaller components within same folder.
- Folders help you easily extract code to a new place.
- Keep related files together logically so that you can find them later.

### Destructure Your Props

- This makes your coder cleaner and more maintainable.
- Destructuring define what a component is using and it doesn't force developers to read through the implementation.
- It also gives you the ability to declare default values.

### Fat Arrow Functions

- Concise way of writing functions that do not rebind context (this).
- Ability to return values implicitly in single line.
- Don't use fat arrow functions when you need hoisting.

### Stay Consistent

- Stay consistent with Imports and exports, naming components, hooks & HOC's

<EditedBy name="Firoz Ahmed" date="06/04/2020" />
