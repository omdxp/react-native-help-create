# Deleting Files

With `rnhc` you can delete what you already created with [`create` commands](./CREATING_FILES.md).

The following points shows how to deal with deleting your files with the `delete` command.

## Components

1. To delete a component simply run:

```sh
rnhc delete -c <component-name>
```

- This will delete the component with the given name `<component-name>` under the `src/components/` folder.

- If the component does not exist, `rnhc` will prompt the following:

```sh
src/components/<component-name>/ does not exist
```

2. To delete multiple components run:

```sh
rnhc delete -c <component-name-1> <component-name-2> ...
```

- This will delete only the existed components with the given inputs that resides under the `src/components/` folder.

3. To delete one or multiple components that resides in a specific path under the `src/components/` folder, you can run:

```sh
rnhc delete -c <component-name-1> <component-name-2> ... -f <folder-path>
```

- This will delete only the existed components with the given inputs that resides under the `src/components/<folder-path>/` folder.

## Screens

1. To delete a screen simply run:

```sh
rnhc delete -s <screen-name>
```

- This will delete the screen with the given name `<screen-name>` under the `src/screens/` folder.

- If the screen does not exist, `rnhc` will prompt the following:

```sh
src/screens/<screen-name>/ does not exist
```

2. To delete multiple screens run:

```sh
rnhc delete -s <screen-name-1> <screen-name-2> ...
```

- This will delete only the existed screens with the given inputs that resides under the `src/screens/` folder.

3. To delete one or multiple screens that resides in a specific path under the `src/screens/` folder, you can run:

```sh
rnhc delete -s <screen-name-1> <screen-name-2> ... -f <folder-path>
```

- This will delete only the existed screens with the given inputs that resides under the `src/screens/<folder-path>/` folder.

## Navigations

1. To delete a navigation file that resides in `src/screens/` folder simply run:

```sh
rnhc delete -n
```

- This will delete the navigation file if it exists, if not `rnhc` will prompt the following:

```sh
It seems there is no navigation file in src/screens/
```

2. To delete a navigation file that resides in a specific path that resides under `src/screens/` folder you can run:

```sh
rnhc delete -n -f <folder-path>
```

- This will delete the navigation file if it does exist under the `src/screens/<folder-path>/` folder.

## Redux

- To delete a redux implementation run:

```sh
rnhc delete -r
```

- This will delete the `redux` folder under `src/` with all of its files and subfolders.

- If `redux` does not exist, `rnhc` will prompt:

```sh
src/redux/ does not exist
```

- ### Reducers

1 - To delete a reducer run:

```sh
rnhc delete --reducer <reducer-name>
```

- This will delete the existed reducer under `src/redux/reducer/` folder, if not `rnhc` will prompt the following:

```sh
./src/redux/reducers/<reducer-name>/ does not exist
```

- It will also update the `index.js` file under `src/redux/reducer/` folder to remove it from the import list as well as from the `combineReducers` function.

2 - You can even delete multiple reducers at once:

```sh
rnhc delete --reducer <reducer-name-1> <reducer-name-2> ...
```

3 - To delete all reducers run:

```sh
rnhc delete --reducer
```

- ### Actions

1 - To delete an action run:

```sh
rnhc delete --action <reducer-name> <action-name>
```

- If the reducer does not exist, `rnhc` will prompt the following:

```sh
./src/redux/actions/<reducer-name>/ does not exist
```

- It will also update the necessary files to remove the action from the reducer. And in case of TypeScript projects it will remove the action type in the `src/redux/index.ts`.

2 - You can even delete multiple actions for a specific reducer at once:

```sh
rnhc delete --action <reducer-name> <action-name-1> <action-name-2> ...
```

3 - To delete all actions for a specific reducer run:

```sh
rnhc delete --action <reducer-name>
```

## Configuration

- To delete a configuration file run:

```sh
rnhc delete --config
```

- This will delete the `rnhc.config.json` file at the root of the project.

- If `rnhc.config.json` does not exist, `rnhc` will prompt:

```sh
rnhc.config.json does not exist
```
