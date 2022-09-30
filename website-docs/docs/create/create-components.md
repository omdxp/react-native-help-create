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
rnhc create -c TestComponent
```

- This command will create the following directory `src/components/test-component/`:

```sh
src/
└── components
    └── test-component
        ├── __tests__
        │   └── index.spec.jsx
        ├── index.jsx
        └── styles.js
```

- Where `index.jsx` represents the React FC component that contains the following:

```jsx
import { Text, View } from "react-native";
import { TestComponentStyles } from "./styles";

const TestComponent = () => {
  return (
    <View>
      <Text>TestComponent component created!</Text>
    </View>
  );
};
export default TestComponent;
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
src/
└── components
    ├── comp-1
    │   ├── __tests__
    │   │   └── index.spec.jsx
    │   ├── index.jsx
    │   └── styles.js
    └── comp-2
        ├── __tests__
        │   └── index.spec.jsx
        ├── index.jsx
        └── styles.js
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
src/
└── components
    └── foo
        └── bar
            ├── comp-1
            │   ├── __tests__
            │   │   └── index.spec.jsx
            │   ├── index.jsx
            │   └── styles.js
            └── comp-2
                ├── __tests__
                │   └── index.spec.jsx
                ├── index.jsx
                └── styles.js
```

## Create a Component in the Atom Design Pattern

You can also create your components in atom design pattern, which is a design pattern that is used to create small and reusable components. You can read more about it [here](https://atomicdesign.bradfrost.com/chapter-2/).

### Create an Atom Component

- To create your atoms simply run:

```sh
rnhc create -c <atom-name> --atom
```

- This will create an atom named after the given name `<atom-name>` under the `src/components/atoms/<atom-name>/` folder.

### Example

```sh
rnhc create -c TestAtom --atom
```

- This command will create the following directory `src/components/atoms/test-atom/`:

```sh
src/
└── components
    └── atoms
        └── test-atom
            ├── __tests__
            │   └── index.spec.jsx
            ├── index.jsx
            └── styles.js
```

### Create a Molecule Component

- To create your molecules simply run:

```sh
rnhc create -c <molecule-name> --molecule
```

- This will create a molecule named after the given name `<molecule-name>` under the `src/components/molecules/<molecule-name>/` folder.

### Example

```sh
rnhc create -c TestMolecule --molecule
```

- This command will create the following directory `src/components/molecules/test-molecule/`:

```sh
src/
└── components
    └── molecules
        └── test-molecule
            ├── __tests__
            │   └── index.spec.jsx
            ├── index.jsx
            └── styles.js
```

### Create an Organism Component

- To create your organisms simply run:

```sh
rnhc create -c <organism-name> --organism
```

- This will create an organism named after the given name `<organism-name>` under the `src/components/organisms/<organism-name>/` folder.

### Example

```sh
rnhc create -c TestOrganism --organism
```

- This command will create the following directory `src/components/organisms/test-organism/`:

```sh
src/
└── components
    └── organisms
        └── test-organism
            ├── __tests__
            │   └── index.spec.jsx
            ├── index.jsx
            └── styles.js
```

## Create a Component in the Atomic Design Pattern in a Specific Folder

- You can also create your components in a specified path that resides under the `src/components/` folder, simply run:

```sh
rnhc create -c <component-name-1> <component-name-2> ... -f <folder-path> --atom
```

- This will create your components under the `src/components/<folder-path>/atoms/` folder.

- The same goes for molecules and organisms.
