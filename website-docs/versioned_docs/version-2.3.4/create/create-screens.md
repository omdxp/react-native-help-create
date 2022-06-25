---
sidebar_position: 3
---

# Create Screens

## Create a Screen

- To create your screen simply run:

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

## Create multiple Screens

- To create multiple screens simply run:

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

## Create Screens in a Specific Folder

- To create one or multiple screens in a specific path that resides under `src/screens/` folder, simply run:

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
