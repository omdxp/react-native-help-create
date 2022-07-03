---
sidebar_position: 6
---

# Create Redux

To create a redux implementation run:

```sh
rnhc create -r
```

- This will create a `redux` folder under the `src/` folder containing the following:

```sh
src
└───redux
    │   index.js
    │
    ├───actions
    │   └───general
    │           index.js
    │
    └───reducers
        │   index.js
        │
        └───general
                index.js
```

- Where `index.js` under the `redux` folder contains the redux store definition:

```js
import { applyMiddleware, compose, createStore } from "redux";
import { mainReducer } from "./reducers";

/**
 * the main redux state, with all the reducers
 */
export const mainStore = createStore(
  mainReducer,
  compose(applyMiddleware(thunk))
);

/**
 * Creates a new redux state each time this function is called, this is used only for unit tests, to ensure that we have fresh state on each individual test
 */
export const createMainStore = () => {
  return createStore(mainReducer, compose(applyMiddleware(thunk)));
};
```

- And `actions` folder contains the action for each reducer, as for a example, at first `rnhc` will create a sample reducer and action which is called `general`.

- The `general` action's `index.js` contains:

```js
// write your general actions here

// this is an example for an action
export const init = () => async (dispatch, getState) => {
  dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } });
};
```

- And the `general` reducer's `index.js` contains:

```js
const initialState = { message: "" };

export const general = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_GENERAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
```

- And the `index.js` file under the `reducers` folder contains the following:

```js
import { combineReducers } from "redux";
import { general } from "./general";

export const mainReducer = combineReducers({
  general,
});
```

- In TypeScript, the files will be written as the following:

`redux/index.ts`

```ts
import { applyMiddleware, compose, createStore } from "redux";
import { mainReducer } from "./reducers";

/**
 * the main redux state, with all the reducers
 */
export const mainStore = createStore(
  mainReducer,
  compose(applyMiddleware(thunk))
);

export type StateInterface = ReturnType<typeof mainStore.getState>;

/**
 * list of action types
 */
export type ActionType = "UPDATE_GENERAL";

export interface Action<T> {
  type: ActionType;
  payload: Partial<T>;
}

export type ThunkResult<
  A = Record<string, unknown>,
  E = Record<string, unknown>
> = ThunkAction<void, StateInterface, E, Action<A>>;

export type Dispatch<A> = ThunkDispatch<
  StateInterface,
  Record<string, unknown>,
  Action<A>
>;
```

`redux/actions/general/index.ts`

```ts
import { GeneralState } from "../../reducers/general";
import { ThunkResult } from "../..";

// write your general actions here

// this is an example for an action
export const init =
  (): ThunkResult<GeneralState> => async (dispatch, getState) => {
    dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } });
  };
```

`redux/reducers/general/index.ts`

```ts
import { Action } from "../..";

export interface GeneralState {
  message: string;
}

export const general = (
  state: GeneralState = {
    message: "",
  },
  action: Action<GeneralState>
) => {
  switch (action.type) {
    case "UPDATE_GENERAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
```

`redux/reducers/index.ts`

```ts
import { combineReducers } from "redux";
import { general } from "./general";

export const mainReducer = combineReducers({
  general,
});
```

# Reducers

## Create a reducer

- To create a reducer, you must have a redux implementation then run:

```sh
rnhc create --reducer <reducer-name>
```

### Example

```sh
rnhc create --reducer auth
```

- This will create a `auth` reducer under the `src/redux/reducers/` folder and the `index.js` for this reducer will contain the same code written in the template.

`src/redux/reducers/auth/index.js`

```js
const initialState = {};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
```

- It will also add the reducer to the `index.js` file under the `reducers` folder to use it in the `combineReducers` function.

`src/redux/reducers/index.js`

```js
import { combineReducers } from "redux";
import { auth } from "./auth";
import { general } from "./general";

export const mainReducer = combineReducers({
  auth,
  general,
});
```

- If you don't have a redux implementation create using `rnhc create -r`, this command will prompt:

```sh
Redux implementation does not exist
```

- You can also overwrite the reducer by running:

```sh
rnhc create --reducer <reducer-name> -o
```

## Create multiple reducers

- To create multiple reducers, you must have a redux implementation then run:

```sh
rnhc create --reducer <reducer-name-1> <reducer-name-2> ...
```

- This will also update your `index.js` file under the `reducers` folder to use the reducers you created.

# Actions

## Create an action

- To create an action, you must have a redux implementation as wee as the reducer you want to add an action for it, then run:

```sh
rnhc create --action <reducer-name> <action-name>
```

### Example

- In this example we are going to create an action for the `auth` reducer, so we will run:

```sh
rnhc create --action auth login
```

- This will create a `login` action under the `src/redux/actions/auth/` folder and the `login.js` for this action will contain the same code written in the template.

`src/redux/actions/auth/login.js`

```js
export const loginAction = () => async (dispatch, getState) => {
  dispatch({ type: "AUTH_LOGIN", payload: {} });
};
```

- And it will update the `index.js` file under `src/redux/actions/auth/` to export the action.

`src/redux/actions/auth/index.js`

```js
export { loginAction } from "./login";
```

## Create multiple actions

- To create multiple actions, you must have a redux implementation and existed reducer, then run:

```sh
rnhc create --action <reducer-name> <action-name-1> <action-name-2> ...
```

- If the reducer doesn't exist, you will get an error like this:

```sh
./src/redux/reducers/x does not exist
```

- Keep in mind that this also works for TypeScript projects. Even better when creating an action for a reducer in TypeScript, you will get TypeScript support as well as updating the `ActionType` in the `src/redux/index.ts` file. For example if you create an action for the `auth` reducer, you will get the following:

`src/redux/index.ts`

```ts
import { applyMiddleware, compose, createStore } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";

import { mainReducer } from "./reducers";

/**
 * the main redux state, with all the reducers
 */
export const mainStore = createStore(
  mainReducer,
  compose(applyMiddleware(thunk))
);

/**
 * Creates a new redux state each time this function is called, this is used only for unit tests, to ensure that we have fresh state on each individual test
 */
export const createMainStore = () => {
  return createStore(mainReducer, compose(applyMiddleware(thunk)));
};

export type StateInterface = ReturnType<typeof mainStore.getState>;

/**
 * list of action types
 */
export type ActionType = "AUTH_LOGIN" | "UPDATE_GENERAL";

export interface Action<T> {
  type: ActionType;
  payload: Partial<T>;
}
export type ThunkResult<
  A = Record<string, unknown>,
  E = Record<string, unknown>
> = ThunkAction<void, StateInterface, E, Action<A>>;

export type Dispatch<A> = ThunkDispatch<
  StateInterface,
  Record<string, unknown>,
  Action<A>
>;
```

- It will also update the necessary files that imports and exports modules in order to use the action in the reducer.

- Also another note, if you prefer not using `redux-thunk` you can set that in `rnhc.config.json` file, this will let you create your store and actions without applying the `redux-thunk` middleware (For more details check [configuration section](./using-configuration)).
