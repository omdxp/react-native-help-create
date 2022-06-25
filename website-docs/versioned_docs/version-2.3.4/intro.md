---
sidebar_position: 1
---

# Summary

This command line help you create your React Native project in a easy and useful structure by creating components and screens in separate folders in order to distinguish between them. It also make it easier to create navigations for your screens without writing a single line of code.

The following project structure is used by this command:

```
src
├───components
│   ├───comp-one
│   │       index.jsx
│   │       styles.js
│   │
│   ├───comp-two
│   │       index.jsx
│   │       styles.js
│   │
│   └───folder
│       └───comp-three
│               index.jsx
│               styles.js
│
├───redux
│   │   index.js
│   │
│   ├───actions
│   │   └───general
│   │           index.js
│   │
│   └───reducers
│       │   index.js
│       │
│       └───general
│               index.js
│
└───screens
    │   navigation.jsx
    │
    ├───folder
    │   │   navigation.jsx
    │   │
    │   ├───screen-four
    │   │   │   index.jsx
    │   │   │   styles.js
    │   │   │
    │   │   └───functions
    │   │           index.js
    │   │
    │   └───screen-three
    │       │   index.jsx
    │       │   styles.js
    │       │
    │       └───functions
    │               index.js
    │
    ├───screen-one
    │   │   index.jsx
    │   │   styles.js
    │   │
    │   └───functions
    │           index.js
    │
    └───screen-two
        │   index.jsx
        │   styles.js
        │
        └───functions
                index.js
```

- As you can see above, the `src` folder is the folder that resides at the root of your React Native project and under this folder, you will find the `components` folder which contains all the shared components that are used through out the screen. The `screens` folder contains the app's screens that can uses some of the shared components above it.

- In each component you will find `index.jsx` that contains the components `JSX.Element` syntaxes, and `styles.js` that contains the styles for that component.

- In each screen you will find `index.jsx` that contains the `JSX.Element` syntaxes, and `styles.js` that contains the screen's styles and `functions` folder which will contain the screen's specific functions.

- Each screen can use one of the shared components that are defined in `components` folder, and you can pass the functions to those components hence there is not `functions` folder under a component subfolder.

- For the `screens` part you can find `navigation.jsx` files that shows the relation between the screens that resides in the same folder. For example, the `navigation.jsx` under the `screens` folder represent a stack navigation between `folder` and `screen-one` and `screen-two`. As for the `navigation.jsx` file under the `folder` folder is represent a drawer navigation between `screen-three` and `screen-four`.

- As for the `redux` folder you can see there is `index.js` which contain the redux store, and `actions` and `reducers` folders are next to it so you can find only things that are related to redux in one single place.

- This command line can write code in both JavaScript and TypeScript. By default it will use the used language for your React Native project and of course you can override the used language using one of its options.
