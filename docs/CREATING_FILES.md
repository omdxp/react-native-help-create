# Creating Files

`rnhc` provide you more flexibility and easy to use approach to create your files and folders for your componets, screens navigations and redux implementation.

- By default `rnhc` create files with the project's language, so if the project is written in TypeScript all the created files will be in TypeScript, and the same applies for JavaScript.

- If you want to force the use of a specific language you can add the `--js` or `--ts` options at the end of your `create` commands.

- `rnhc` will not overwrite the existed implementation for all of the `create` commands.

The following points shows how to use the `create` command.

## Components

1. To create your components simply run:

```sh
rnhc create -c <component-name>
```

- This will create a component named after the given name `<component-name>` under the `src/components/<component-name>/` folder.

### Example

```sh
rnhc create -c test-component
```

- This command will create the following directory `src/components/test-component/`:

```sh
src
└───components
    └───test-component
            index.jsx
            styles.js
```

- Where `index.jsx` represents the React FC component that contains the following:

```jsx
import React from "react";
import { Text, View } from "react-native";
import { TestComponentStyles } from "./styles";

export const TestComponent = () => {
  return (
    <View>
      <Text>TestComponent component created!</Text>
    </View>
  );
};
```

- And for the `styles.js` you will see:

```js
import { StyleSheet } from "react-native";

export const TestComponentStyles = StyleSheet.create({});
```

2. To create multiple components simply run:

```sh
rnhc create -c <component-name-1> <component-name-2> ...
```

- This will create multiple components for the given names under the `src/components/` folder.

### Exmaple

```sh
rnhc create -c comp-1 comp-2
```

- This command will create under the `src/components/` folder the following:

```sh
src
└───components
    ├───comp-1
    │       index.jsx
    │       styles.js
    │
    └───comp-2
            index.jsx
            styles.js
```

3. To create one or mutliple components in a specified path that resides under the `src/components/` folder, simply run:

```sh
rnhc create -c <component-name-1> <component-name-2> ... -f <folder-path>
```

- This will create your components under the `src/components/<folder-path>/` folder.

### Example

```sh
rnhc create -c comp-1 comp-2 -f foo/bar
```

- This command will create under the `src/components/` folder the following:

```sh
src
└───components
    └───foo
        └───bar
            ├───comp-1
            │       index.jsx
            │       styles.js
            │
            └───comp-2
                    index.jsx
                    styles.js
```

## Screens

1. To create your screen simply run:

```sh
rnhc create -s <screen-name>
```

- This will create a screen after the given name `screen-name` under the `src/screens/` folder.

### Example

```sh
rnhc create -s test-screen
```

- This will create the following:

```sh
src
└───screens
    └───test-screen
        │   index.jsx
        │   styles.js
        │
        └───functions
                index.js
```

- Where `index.jsx` represent the screen which is nothing but a React FC component that contains the following:

```jsx
import React from "react";
import { Text, View } from "react-native";

import {} from "./functions";
import { TestScreenStyles } from "./styles";

export const TestScreenScreen = () => {
  return (
    <View>
      <Text>TestScreen screen created!</Text>
    </View>
  );
};
```

- As for `styles.js` you will find:

```js
import { StyleSheet } from "react-native";

export const TestScreenStyles = StyleSheet.create({});
```

- And under the `functions` folder you should write your screen's functions and export them in `function/index.js` file, which by default it will contain the following:

```js
// write your TestScreen screen functions here
```

2. To create multiple screens simply run:

```sh
rnhc create -s <screen-name-1> <screen-name-2> ...
```

- This will create multiple screens under the `src/screens/` folder.

### Example

```sh
rnhc create -s screen-1 screen-2
```

- This will create the following:

```sh
src
└───screens
    ├───screen-1
    │   │   index.jsx
    │   │   styles.js
    │   │
    │   └───functions
    │           index.js
    │
    └───screen-2
        │   index.jsx
        │   styles.js
        │
        └───functions
                index.js
```

3. To create one or multiple screens in a specific path that resides under `src/screens/` folder, simply run:

```sh
rnhc create -s <screen-name-1> <screen-name-2> ... -f <folder-path>
```

- This will create your screens under the `src/screens/<folder-path>` folder.

### Example

```sh
rnhc create -s screen-1 screen-2 -f foo/bar
```

- This will create the following:

```sh
src
└───screens
    └───foo
        └───bar
            ├───screen-1
            │   │   index.jsx
            │   │   styles.js
            │   │
            │   └───functions
            │           index.js
            │
            └───screen-2
                │   index.jsx
                │   styles.js
                │
                └───functions
                        index.js
```

## Navigations

Navigations are the relations between chosen screens, those relations can be stack navigation, drawer navigation or tab navigation.

1. To create a navigation between two or more screens, simply run:

```sh
rnhc create -n <navigation-type> <screen-name-1> <screen-name-2> ...
```

- The `<navigation-type>` can be either of these types: `stack` or `drawer` or `tab`.

- The number of given screens should be 2 or more.

- If one of the screens does not exist, `rnhc` will try to create the `navigation.jsx` file that resides next to the existed screens.

- If all screens does not exist, `rhnc` will prompt you the following:

```sh
None of these screens exist
```

### Example

```sh
rnhc create -n stack screen-1 screen-2
```

- This will create a `navigation.jsx` file next to `screen-1` and `screen-2` screens as the following:

```sh
src
└───screens
    │   navigation.jsx
    │
    ├───screen-1
    │   │   index.jsx
    │   │   styles.js
    │   │
    │   └───functions
    │           index.js
    │
    └───screen-2
        │   index.jsx
        │   styles.js
        │
        └───functions
                index.js
```

- The content for the `navigation.jsx` file is as the following:

```jsx
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import { Screen1Screen } from "./screen-1";
import { Screen2Screen } from "./screen-2";

export const Navigation = () => {
  return (
    <Navigator>
      <Screen name="screen-1" component={Screen1Screen} />
      <Screen name="screen-2" component={Screen2Screen} />
    </Navigator>
  );
};
```

2. To create a navigation file for screens that resides in a specific path under the `src/screens/` folder, you can run this:

```sh
rnhc create -n <navigation-type> <screen-name-1> <screen-name-2> ... -f <folder-path>
```

- This will create the `navigation.jsx` file under the `src/screens/<folder-path>/` folder for the screens that resides in the same location.

### Example

```sh
rhnc create -n drawer screen-1 screen-2 -f foo/bar
```

- This will create `navigation.jsx` file under `src/screens/foo/bar/` folder which contains the following:

```jsx
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
const { Navigator, Screen } = createDrawerNavigator();

import { Screen1Screen } from "./screen-1";
import { Screen2Screen } from "./screen-2";

export const Navigation = () => {
  return (
    <Navigator>
      <Screen name="screen-1" component={Screen1Screen} />
      <Screen name="screen-2" component={Screen2Screen} />
    </Navigator>
  );
};
```

3. To create a navigation that depends on another navigation you can run the same command as this:

```sh
rnhc create -n <navigation-type> <screen-name-1> <screen-name-2> ... <another-navigation-folder>
```

- This will create `navigation.jsx` file that resides in the same location for the given inputs.

### Example

In this example, we have the following structure:

```sh
src
└───screens
    ├───folder
    │   │   navigation.jsx
    │   │
    │   ├───screen-one
    │   │   │   index.jsx
    │   │   │   styles.js
    │   │   │
    │   │   └───functions
    │   │           index.js
    │   │
    │   └───screen-two
    │       │   index.jsx
    │       │   styles.js
    │       │
    │       └───functions
    │               index.js
    │
    └───screen-three
        │   index.jsx
        │   styles.js
        │
        └───functions
                index.js
```

Where we have a drawer navigation between `screen-one` and `screen-two` under the `folder` folder. And we want to create a stack navigation between `folder` and `screen-three`. And to show that `rnhc` will continue to run for the existed screens we added in the command line `screen-four` which does not exist as the following:

```sh
rnhc create -n stack folder screen-three screen-four
```

- The command will output the following:

```sh
src/screens/screen-four/ does not exist
src/screens/navigation.jsx created
```

- And it will add a new `navigation.jsx` that resides between `folder` and `screen-three` as the following:

```sh
src
└───screens
    │   navigation.jsx
    │
    ├───folder
    │   │   navigation.jsx
    │   │
    │   ├───screen-one
    │   │   │   index.jsx
    │   │   │   styles.js
    │   │   │
    │   │   └───functions
    │   │           index.js
    │   │
    │   └───screen-two
    │       │   index.jsx
    │       │   styles.js
    │       │
    │       └───functions
    │               index.js
    │
    └───screen-three
        │   index.jsx
        │   styles.js
        │
        └───functions
                index.js
```

- And the content of the new `navigation.jsx` file will be like this:

```jsx
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import { Navigation as Folder } from "./folder/navigation";
import { ScreenThreeScreen } from "./screen-three";

export const Navigation = () => {
  return (
    <Navigator>
      <Screen name="folder" component={Folder} />
      <Screen name="screen-three" component={ScreenThreeScreen} />
    </Navigator>
  );
};
```

## Templates

You can create your screens and components with your defined templates by following these steps:

1. First thing to do is to create a `.template` folder at the root of your react project.

2. Inside the `.template` folder you can add your template, for example `componentWithUseEffect.tsx` (the file extension doesn't matter so it could be `*.jsx`, `*.js` or `*.tsx`):

```jsx
import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Component() {
  useEffect(() => {}, []);

  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
}
```

- There is a restriction in naming these templates which is you should not put dots (`.`) between the name, like this (`component.WithUseEffect.jsx`). It should only contain one dot that makes the extension file like we're doing above.

3. After creating your template you can use them to create components or screens as the following:

```sh
rnhc create -c <component-name> -t <template-name>
```

```sh
rnhc create -s <screen-name> -t <template-name>
```

- And of course, you can create multiple components or screens with the same template.

### Example

As for our example it can be used like this for the above template:

```sh
rnhc create -c comp -t componentWithUseEffect
```

- This will create `comp` component under `src/components/` folder and the `index.jsx` for this component will contain the same code written in the template.

- For the screen case, the `index.jsx` for that screen will contain the code written in the template.

## Redux

- To create a redux implementation run:

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

## Configuration

With the above steps, you can now create a configuration file which will be used by `rnhc` to create your files with your custom config.

- To create a default configuration file run:

```sh
rnhc create --config
```

- This will create a `rnhc.config.json` file at the root of your project. The file will contain the following:

```json
{
  "withStyles": true,
  "withFunctions": true,
  "withProps": true,
  "defaultExports": true,
  "componentsRoot": "./src/components",
  "screensRoot": "./src/screens",
  "reduxRoot": "./src/redux"
}
```

1. `withStyles`: if true, create `styles.js` (or `styles.ts`) file for components and pages, if false, don't create `styles.js` (or `styles.ts`) file, default is true.
2. `withFunctions`: if true, create `functions` folder for pages, if false, don't create `functions` folder, default is true.
3. `withProps`: if true, create props `interface` for components and pages (in TS only), if false, don't create props `interface`, default is true.
4. `defaultExports`: if true, create default export for components and pages, if false, create named export for components and pages, default is true.
5. `componentsRoot`: the root folder for components, default is `./src/components`.
6. `screensRoot`: the root folder for screens, default is `./src/screens`.
7. `reduxRoot`: the root folder for redux, default is `./src/redux`.

- If no configuration file is found or you don't specify some of the configuration, the default configuration will be used.
