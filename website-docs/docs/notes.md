---
sidebar_position: 6
---

# Notes

- To see the available commands for `rnhc` you can run:

```sh
rnhc --help
```

- To see the available positionals and options for a specific command like `create` you can run:

```sh
rnhc create --help
```

- In order to `rnhc` to work, you must be at the root of your React Native project. It will check and if somehow you are not at the root of the project, `rnhc` will prompt:

```
You don't seem to be at the root of a react native project
```

- In `create` command, `rnhc` will create files with the project's used language, so if the project is written with TypeScript, it will write files with TypeScript, the same apply for JavaScript.

- If you are in a JavaScript project and somehow you want to create your component or screen in TypeScript, you can use the `--typescript` or `--ts` option:

```sh
rnhc create -s test-screen --ts
```

- It doesn't matter what case you name your component or screen, `rnhc` will always create a component or screen with the same name, but with the first letter in uppercase, and the folder will be in kebab case. So if you name your component with `test-comp`, it will create a component or screen with the name `TestComp` in the `index.jsx` file under the `./src/components/test-comp/` folder. Check the example below:

```sh
rnhc create -c test-comp
```

```sh
rnhc create -c testComp
```

```sh
rnhc create -c TestComp
```

The above commands produce the same outcome:

```sh
src/
└── components
    └── test-comp
        ├── __tests__
        │   └── index.spec.jsx
        ├── index.jsx
        └── styles.js

```

- You can always overwrite your implementation using the `--overwrite` or `-o` option, for example:

```sh
rnhc create -c test-component -o
```

```sh
rnhc create -s TestScreen -o
```

```sh
rnhc create -r -o
```

```sh
rnhc create --reducer testReducer -o
```

```sh
rnhc create --action testReducer test-action -o
```

- This is helpful when you want to update your navigation files, for example you already have a navigation file in `src/screens/` folder and you want to update it with the new screens you created:

```sh
rnhc create -n stack --overwrite
```

- When creating reducers you should have already a redux implmentation created with `rnhc create -r` so it can work.

- When creating actions, you should have already a redux implementation created with `rnhc create -r` as well as an existed reducer with `rnhc create --reducer <reducer-name>` so it can create actions for that specific reducer.

- Creating and deleting reducers and actions will not just delete files, but also update other files that depends on them under the `src/redux/` folder (Or your specified path for the root of redux folder in `rnhc.config.json`).
