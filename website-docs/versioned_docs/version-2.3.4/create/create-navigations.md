---
sidebar_position: 4
---

# Create Navigations

Navigations are the relations between chosen screens, those relations can be stack navigation, drawer navigation or tab navigation.

## Create Navigation for specific screens

- To create a navigation between two or more screens, simply run:

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

const routes = [
  {
    name: "screen-1",
    component: Screen1Screen,
  },
  {
    name: "screen-2",
    component: Screen2Screen,
  },
];

export const Navigation = () => {
  return (
    <Navigator>
      {routes.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
```

## Create Navigation for specific screens in a specific folder

- To create a navigation file for screens that resides in a specific path under the `src/screens/` folder, you can run this:

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

import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import { Screen1Screen } from "./screen-1";
import { Screen2Screen } from "./screen-2";

const routes = [
  {
    name: "screen-1",
    component: Screen1Screen,
  },
  {
    name: "screen-2",
    component: Screen2Screen,
  },
];

export const Navigation = () => {
  return (
    <Navigator>
      {routes.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
```

## Create Navigation that depends on other navigations

- To create a navigation that depends on another navigation you can run the same command as this:

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

const routes = [
  {
    name: "folder",
    component: Folder,
  },
  {
    name: "screen-three",
    component: ScreenThreeScreen,
  },
];

export const Navigation = () => {
  return (
    <Navigator>
      {routes.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
```

## Create Navigation for all screens

- To create a navigation file for multiple screens that resides at the root of the `src/screens/` folder, you can run this:

```sh
rnhc create -n <navigation-type>
```

- This will create the navigation file for all existed screens in the `src/screens/` folder.

You can also run this command to create a navigation file for multiple screens that resides in a specific path under the `src/screens/` folder:

```sh
rnhc create -n <navigation-type> -f <folder-path>
```

- This will create the navigation file for all existed screens in the `src/screens/<folder-path>/` folder.

- This also work for the nested navigations.

- All the sub folders should contain the navigation files so it can be added to the navigation file you want to create, for example take this structure:

```sh
src
└───screens
    │   navigation.jsx
    │
    ├───folder
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
    ├───screen-three
    │   │   index.jsx
    │   │   styles.js
    │   │
    │   └───functions
    │           index.js
    │
    └───screen-four
        │   index.jsx
        │   styles.js
        │
        └───functions
                index.js
```

When you try to create a navigation like this:

```sh
rnhc create -n stack
```

It will contain only `screen-three` and `screen-four` because the `src/screens/folder` does not contain a navigation file.

So if you want to create a navigation file for all existed screens in the `src/screens/` folder, you must take in consideration that all subfolders must contain a navigation file first and then you can either update the navigation file or create a new one.

By updating it means overwriting in other words, so you can just do this:

```sh
rnhc create -n stack -o
```
