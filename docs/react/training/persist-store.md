---
id: persist-store
title: Redux Persist
sidebar_label: Redux Persist
---

import EditedBy from '../../../src/components/EditedBy'

Redux Persist takes your Redux state object and saves it to persisted storage. Then on app launch it retrieves this persisted state and saves it back to redux.

## Quickstart

Persist and rehydrate a redux store.

### Dependencies

```bash
npm install --save redux-persist

- OR -

yarn add redux-persist
```

### Basic Usage

When creating your redux store, pass your createStore function a [persistReducer](#persistreducerconfig-reducer) that wraps your app’s root reducer. Once your store is created, pass it to the [persistStore](#persiststorestore-config-callback) function, which ensures your redux state is saved to persisted storage whenever it changes.

```js
// configureStore.js

import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
```

If you are using React, wrap your root component with PersistGate. This delays the rendering of your app’s UI until your persisted state has been retrieved and saved to redux.

```jsx
import {PersistGate} from 'redux-persist/integration/react';

// ... normal setup, create store and persistor, import components etc.

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};
```

## Customizing what’s Persisted

If you don’t want to persist a part of your state you could put it in the blacklist. The blacklist is added into the config object that we used when setting up our PersistReducer.

```js
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['navigation'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
```

If you want to persist only few parts of your state, you could set up them in whitelist.

```js
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'], // only auth will be persisted
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
```

## The Merge Process

When your app launches, redux sets an initial state. Shortly after this, Redux Persist retrieves your persisted state from storage. Your persisted state then overrides any initial state. The merge process is meant to “just work” automatically for you. However, you can also take manual control of the process. For example, in older versions of Redux Persist it was common to manage the rehydration process by catching the REHYDRATE action in your reducers and then saving the action’s payload to your redux state.

```js
import { REHYDRATE } from 'redux-persist';

const INITIAL_STATE = {
  currentUser: null,
  isLoggingIn: false
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case REHYDRATE:
      return {
        ...state,
        currentUser: action.payload.currentUser
      };

    // ...handle other cases
```

The REHYDRATE action is dispatched by Redux Persist immediately after your persisted state is obtained from storage. If you return a new state object from the REHYDRATE action, this will be your finalized state. As mentioned though, you don’t need to do this anymore unless you need to customize the way your state is rehydrated.

## Nested Persists

Nested persist can be useful for including different storage adapters, code splitting, or deep filtering. For example while blacklist and whitelist only work one level deep, but we can use a nested persist to blacklist a deeper value:

```js
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {authReducer, otherReducer} from './reducers';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['somethingTemporary'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  other: otherReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
```

## API Reference

#### `persistReducer(config, reducer)`

- arguments
  - [**config**](https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27) _object_
    - required config: `key, storage`
    - notable other config: `whitelist, blacklist, version, stateReconciler, debug`
  - **reducer** _function_
    - any reducer will work, typically this would be the top level reducer returned by `combineReducers`
- returns an enhanced reducer

#### `persistStore(store, [config, callback])`

- arguments
  - **store** _redux store_ The store to be persisted.
  - **config** _object_ (typically null)
    - If you want to avoid that the persistence starts immediately after calling `persistStore`, set the option manualPersist. Example: `{ manualPersist: true }` Persistence can then be started at any point with `peristor.persist()`. You usually want to do this if your storage is not ready when the `persistStore` call is made.
  - **callback** _function_ will be called after rehydration is finished.
- returns **persistor** object

#### `persistor object`

- the persistor object is returned by persistStore with the following methods:
  - `.purge()`
    - purges state from disk and returns a promise
  - `.flush()`
    - immediately writes all pending state to disk and returns a promise
  - `.pause()`
    - pauses persistence
  - `.persist()`
    - resumes persistence

<EditedBy name="Tessy Thomas" date="07/05/2020" />
