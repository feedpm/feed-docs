---
id: lazy-loading
title: Lazy Loading
sidebar_label: Lazy Loading
---

import EditedBy from '../../../src/components/EditedBy'

## What is Lazy Loading

- Lazy Loading is the process of loading some features of your Angular application _only when you navigate to their routes for the first time_.
- This can be useful for **increasing your app performance and decreasing the initial size of the bundle** transmitted to the user's browser.
- By splitting the code into modules, and loading those modules only when needed by the current route, your users get the best of both worlds in terms of a single cohesive application, while only loading the code needed for their current experience.
- By default, **NgModules are eagerly loaded**, which means that as soon as the app loads, so do all the NgModules, whether or not they are immediately necessary.
- For large apps with lots of routes, consider lazy loading—a design pattern that loads NgModules as needed. **Lazy Loading helps keep initial bundle sizes smaller**, which in turn helps decrease load times.

## More about Chunks

- Chunks aren’t part of Angular, they’re a part of **Webpack**, which Angular uses internally to build your application.
- When Webpack transpiles the TypeScript files into JavaScript, it creates “chunks” which might represent parts of files, or full files depending on your build configuration.
- One great example of “chunking” is when using lazy-loaded feature modules. Webpack will create a chunk for each lazily-loaded module. There is a config option called **namedChunks** which allows you to give the generated file names instead of numbers, as is the default.

## Implementation

Create an application by using:

```
ng new customer-app --routing
```

This creates an app called customer-app and the **--routing flag generates a file called app-routing.module.ts**, which is one of the files you need for setting up lazy loading for your feature module. Navigate into the project by issuing the command cd customer-app.

Create a feature module with routing:

```
ng generate module customers --route customer-list --module app.module
```

- where customers is the name of the feature module, and customer-list is the route path for loading the customers component
- The command automatically adds the CustomerComponent to the new feature module.
- The new module is meant to be lazy-loaded, the command does NOT add a reference for the new feature module to the root application's module file, app.module.ts.
- Instead, it adds the declared route, customer-list to the Routes array declared in the module provided as the --module option.

```javascript
//app-routing.module.ts  (automatically generate with command)
const routes: Routes = [
  {
    path: 'customers-list',
    loadChildren: () =>
      import('./customers/customers.module').then(m => m.CustomersModule),
  },
];
```

- The lazy-loading syntax uses loadChildren followed by a function that uses the browser's built-in **import('...')** syntax for dynamic imports.
- The import path is the relative path to the module.

Add another feature module:

```
ng generate module customers --route customer-list --module app.module
```

```javascript
//app-routing.module.ts (automatically generate with command)
const routes: Routes = [
  {
    path: 'customers-list',
    loadChildren: () =>
      import('./customers/customers.module').then(m => m.CustomersModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then(m => m.OrdersModule),
  },
];
```

Set up the UI:

```javascript
//app.component.ts
<button routerLink="/customers-list">Customers</button>
<button routerLink="/orders">Orders</button>
<button routerLink="">Home</button>

<router-outlet></router-outlet>
```

Run the application:

```
ng serve
```

Open the application in the browser with the network developer tool and observe the **main.js** memory.

### Lazy Loading

![alt text](/img/lazy-loading.png 'Lazy Loading')

### Lazy Loading comparison

![alt text](/img/lazy-loading-comparison.png 'Lazy Loading Comparison')

In our current application, since we have implemented lazy loading the customer module and order module get loaded only when it is requested (i.e) only when the customer and order button is clicked.

### Lazy Loading- Loading Customer module on request

Customers-customers-module.js gets loaded only when the customer button is clicked ![alt text](/img/lazy-loading-customer.png 'Lazy Loading Customer module')

### Lazy Loading- Loading Order module on request

orders-orders-module.js gets loaded only when the order button is clicked ![alt text](/img/lazy-loading-order.png 'Lazy Loading Order module')

By using lazy-loading we have broken down the application in different chunks, thus increasing the performance.

### Inside the Feature Module

By using the above commands, the following set of code is automatically generated in the feature module (customers/customers.module.ts)

```javascript
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersComponent} from './customers.component';
@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule, CustomersRoutingModule],
})
export class CustomersModule {}
```

- The customers.module.ts file imports the CustomersRoutingModule and CustomerComponent so the CustomersModule class can have access to them.
- CustomersRoutingModule is then listed in the @NgModule imports array giving CustomersModule access to its own routing module, and CustomerListComponent is in the declarations array, which means CustomerListComponent belongs to the CustomersModule.

The feature module has its own routing module, customers-routing.module.ts. The AppRoutingModule imports the feature module, CustomersModule, and CustomersModule in turn imports the CustomersRoutingModule.

The feature-specific routing module imports its own feature component, (for added 2 components: CustomerListComponent, CustomersDetailsComponent), along with the other JavaScript import statements. It also adds the route to its own component.

```javascript
//customers/customers-routing.module.ts
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CustomersComponent} from './customers.component';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomersDetailsComponent} from './customers-details/customers-details.component';

const routes: Routes = [
  {path: 'list', component: CustomersListComponent},
  {path: 'details', component: CustomersDetailsComponent},
  {path: '', component: CustomersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
```

The third path is set to an empty string. This is because the path in AppRoutingModule is already set to customers, so this route in the CustomersRoutingModule, is already within the customers context. Every route in this routing module is a child route.

### Tips

Loading each piece in such a way will also affect performance as initial navigation will be slower. Luckily Angular provides a way to solve this issue too with **PreloadingStrategy**. We can say Angular to load our main module (main.js) and when it's fully loaded and executed, only after that load other lazy modules in the background, so when users navigate to lazy pages everything will be already downloaded.

```javascript
import {PreloadAllModules, RouterModule} from '@angular/router';
RouterModule.forRoot(
  [
    {
      path: 'second',
      loadChildren: './second/second.module#SecondModule',
    },
  ],
  {preloadingStrategy: PreloadAllModules},
);
```

### Suggested Practice

Consider using as many lazy modules as possible with some preloading strategy. This will keep your main.js small which means faster download and rendering of the main page.

<EditedBy name="Ajay C" updated="Vijay Dev" date="08/04/2020" />
