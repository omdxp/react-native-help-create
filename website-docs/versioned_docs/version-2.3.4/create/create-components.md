---
sidebar_position: 2
---

# Create Components

## Create a Component

- To create your components simply run:

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

## Create multiple Components

- To create multiple components simply run:

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

## Create a Components in a Specific Folder

- To create one or mutliple components in a specified path that resides under the `src/components/` folder, simply run:

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
