---
id: configuring-parameters
title: Configuring Parameters
sidebar_label: Configuring Parameters
---

import EditedBy from '../../../src/components/EditedBy'

Lets see how single and multiple dynamic route parameters are added in a ReactJS project for redirecting using **react-router-dom**.

```jsx
<Route path="/staticRoute/:param1/:param2" componet={DynamicComponent} />
```

Below is an example of a static route that will always be the same, regardless of who the user is or which page they’re coming from. No matter what, whenever they click a link to go to the `Products` page, this route will always be used to get them there, and it will always render the same component.

```jsx
<Route exact path="/products" component={Products} />
```

## Route parameters

Route params are parameters whose values are set dynamically in a page’s URL. This allows a route to render the same component while passing that component the dynamic portion of the URL, so that it can change its data based on the parameter. Examples of URL route params you might recognize include things like IDs for products, books, users etc. At least with React, in order to get the details for the correct item, the dynamic component would need the unique, specific ID of the item supplied, so it could get the correct data to display. Here’s what the `Products` route with dynamic URL parameters looks like.

### Dynamic route URL in React:

```jsx
<Route exact path="/products/:id" component={Products} />
```

The first part of the path, the **"/products/”**, doesn’t change, but the **:id** is a route parameter that is set dynamically — usually from a user’s actions, like clicking on a link or typing on an input field and clicking a search button. This is what changes and it causes the `Products` to be rendered with the ID of the product included. The component then pulls this out of the URL path when it renders to get the details of that particular product to show to a user.

## Accessing dynamic route params in the component

Dynamic route parameter can be assesed inside the component as below.

```jsx
this.props.match.params.id;
```

## More than one route parameters

In our case the component that shows the list of `Products` associated with two dynamic parameters: **:productName** and **:productId**.

```jsx
<Route exact path="/products/:productName/:productId" component={Products} />
```

This is step one of handling a route containing more than one route parameter. The next step is setting the `Product ID`and `Product Name` in the `Products` component.

The `Products` component contains two state objects: **productId** and **productName** both initially set to null. These are the two pieces of state which will be set by a user clicking one of the Products listed in the list.

```jsx
renderRedirect = () => {
  const {productId, productName} = this.state;
  if (productId && productName) {
    return <Redirect to={`/products/${productId}/${productName}`} />;
  }
};
```

Step two is now complete. A particular `Product ID` and the `Product Name`, required by the `Products` component to fetch products which are part of the URL, to display the Product. <EditedBy name="Vipin Sarangadharan" date="09/08/2020" />
