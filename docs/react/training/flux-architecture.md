---
id: flux-architecture
title: Flux architecture
sidebar_label: Flux architecture
---

import EditedBy from '../../../src/components/EditedBy'

## Flux - Introduction

![Flux architecture](/img/flux_architecture.png 'Flux Architecture')

Flux is an architectural pattern proposed by Facebook for building SPAs. It suggests to split the application into the following parts:

- Stores
- Dispatcher
- Views
- Action / Action Creators

### Store

Store manages the state. It can store both domain state and user interface state. Store and state are different concepts. State is the data value. Store is a behavior object that manages state through methods. In the case of managing books: the book list is the state and BookStore manages that list.

A store manages multiple objects. It is the single source of truth in regards to those specific objects. In an application there can be many stores. For example: BookStore, AuthorStore, UserStore.

There are no setter methods on the store. You can only request state change by passing an action to the dispatcher.

A store listens for all actions and decides on which of them to act. This usually means a switch statement. Once the store has made the state changes, it will emit a change event. The store is an event emitter.

Stores don’t take other stores as dependencies.

### Dispatcher

Dispatcher is a single object that broadcasts actions/events to all registered stores. Stores need to register for events when the application starts.

When an action comes in, it will pass that action to all registered stores.

### View

View is the user interface component. It is responsible for rendering the user interface and for handling the user interaction. Views are in a tree structure.

Views listen for store changes and re-render.

Views can be further split in Presentation and Container Views.

Presentation views don’t connect to dispatcher or stores. They communicate only through their own properties.

Container views are connected to stores and dispatcher. They listen for events from stores and provide the data for presentation components. They get the new data using the stores’ public getter methods and then pass that data down the views tree.

Container views dispatch actions in response to user iteration.

### Actions

An action is a plain object that contains all the information necessary to do that action. Actions have a `type` property identifying the action type. They should be immutable.

Actions may come from different places. They may come from views as a result of user interaction. They may come from other places like the initialization code, where data may be taken from a Web API and actions are fired to update the views. Action may come from a timer that requires screen updates.

### Action Creator

The practice is to encapsulate the code, creating actions in functions. These functions that create and dispatch actions are called action creators.

#### Web API Calls

When doing Web API calls to update the user interface, the Web API call will be followed by an action to update the store. When the store is updated it will emit a change event and as result, the view that listens for that event will re-render. Web API calls are made in action creators. We can extract out the code that does the API call in Web API Utils functions.

### Unidirectional data flow

Updating views flow in a single direction:

![unidirectional flow](/img/unidirection-flow.png 'Unidirectional flow')

Views do not modify the data they received. They listen for changes of this data, create actions with new values, but do not update the data. Stores, views and any other action can’t change the state in (other) stores directly. They must send an action through the dispatcher The data flow is shorter in store reads than in writes. The data flow in store writes differs between asynchronous and synchronous actions.

Store Reads

![store read](/img/store-read.png 'Reading from store')

Store Writes in synchronous actions

![store write sync](/img/store-write-sync.png 'Store Writes in synchronous actions')

Store Writes in asynchronous actions

![store write async](/img/store-write-async.png 'Store Writes in asynchronous actions')

<EditedBy name="Sabir" date="22/05/2020" />
