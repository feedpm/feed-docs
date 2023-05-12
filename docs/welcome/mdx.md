---
id: mdx
title: Powered by MDX
---

import EditedBy from '../../src/components/EditedBy'; import Quiz from '../../src/components/Quiz';

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/). You can write **Markdown** alongside your _JSX_!

Below are few examples of JSX and React components within Markdown.

## Inline components

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}> {children} </span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors. `Highlight` component is created within this Markdown file.

## Shared components

We can also get a little creative with it. Below are two examples of the same `Quiz` component with different props. Can you try and answer the following questions?

<Quiz name="quiz1" question="What function allows you to render React content in an HTML page?" answer="ReactDOM.createRoot($dom).render(<App />)" choices={[ 'ReactDOM.start(<App />)', 'ReactDOM.render(<App />)', 'React.render(<App />)', 'React.mount(<App />)', 'React.memo(<App />)', 'ReactDOM.createRoot($dom).render(<App />)' ]} />

<Quiz name="quiz2" question="Which hook is used to create states inside functional components?" answer="React.useState" choices={[ 'ReactDOM.useState', 'ReactDOM.useHookState', 'React.useState', 'React.useHookState' ]} />

<Quiz name="quiz3" question="What are the different ways to share data in React?" answers={[ 'State', 'Prop', 'Context' ]} choices={[ 'State', 'Country', 'District', 'Taluk', 'Context', 'Prop' ]} />

Of course the following `EditedBy` is also a shared component. It takes name and date as props :smile:

<EditedBy name="Vijay dev" date="12/05/2023" />
