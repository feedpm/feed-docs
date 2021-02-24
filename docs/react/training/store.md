---
id: store-tutorial
title: Store
sidebar_label: Store
---

import EditedBy from '../../../src/components/EditedBy'

## What is store?

A store is basically just a plain JavaScript object that allows components to share state. In a way, we can think of a store as a database which holds all of the application's state.

On the most fundamental level, a store encapsulates state. We can easily model this using a ES6 class:

```js
class Store {
  constructor(initialState) {
    this.state = initialState;
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

const store = new Store({});
export default store;
```

With Flux it is a convention to have multiple stores per application; each store is a singleton object.

It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.

In otherwords, the store can be considered as a singleton object of a Class having the following responsibilities:

- Holds application state;
- Allows access to state via [getState()](#getstate);
- Allows state to be updated via [dispatch(action)](#dispatchaction);
- Registers listeners via [subscribe(listener)](#subscribelistener);
- Handles unregistering of listeners via the function returned by [subscribe(listener)](#subscribelistener).

## Creating Store

To create it, pass your root reducing function to [createStore](#createstorereducer-preloadedstate-enhancer).

```js
import {createStore} from 'redux';
import todoApp from './reducers';
const store = createStore(todoApp);
```

You may optionally specify the initial state as the second argument to [createStore](#createstorereducer-preloadedstate-enhancer). This is useful for hydrating the state of the client to match the state of a Redux application running on the server.

```js
const store = createStore(todoApp, window.STATE_FROM_SERVER);
```

## Subscribing to stores

React components are data-driven. If we update their state using setState, React re-evaluates the component's render function and updates the rendered DOM structure.

Hence we need a way to wire up our components to our global store. In some way, components need to be able to "listen" for state changes that occur in our store:

![Store Architecture](/img/react-stores-readme-store.png 'Store Architecture')

An arbitrary number of components can subscribe to state changes that occur in the store. Components can then react to the state change by updating their own state and thus triggering a re-render.

## Dispatching Actions

The only way to change the state inside store is to dispatch an action on it.

![Dispatch Action](/img/store-dispatch-subscribe.png 'Dispatch Action')

## API reference

### `createStore(reducer, [preloadedState], [enhancer])`

Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.

#### Arguments

**reducer** _(Function)_: A reducing function that returns the next state tree, given the current state tree and an action to handle.

**[preloadedState]** _(any)_: The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.

**[enhancer]** _(Function)_: The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().

### `getState()`

Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.

#### Returns

(any): The current state tree of your application.

### `dispatch(action)`

Dispatches an action. This is the only way to trigger a state change.

The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state. It will be returned from getState() from now on, and the change listeners will immediately be notified.

#### Arguments

**action** _(Object)_: A plain object describing the change that makes sense for your application. Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module.

#### Returns

(Object): The dispatched action.

### `subscribe(listener)`

Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.

To unsubscribe the change listener, invoke the function returned by subscribe.

#### Arguments

**listener** _(Function)_: The callback to be invoked any time an action has been dispatched, and the state tree might have changed. You may call getState() inside this callback to read the current state tree. It is reasonable to expect that the store's reducer is a pure function, so you may compare references to some deep path in the state tree to learn whether its value has changed.

#### Returns

(Function): A function that unsubscribes the change listener.

<EditedBy name="Tessy Thomas" date="07/05/2020" />
