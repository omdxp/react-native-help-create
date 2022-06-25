---
sidebar_position: 5
---

# Delete Redux

To delete a redux implementation run:

```sh
rnhc delete -r
```

- This will delete the `redux` folder under `src/` with all of its files and subfolders.

- If `redux` does not exist, `rnhc` will prompt:

```sh
src/redux/ does not exist
```

# Reducers

## Delete a reducer

- To delete a reducer run:

```sh
rnhc delete --reducer <reducer-name>
```

- This will delete the existed reducer under `src/redux/reducer/` folder, if not `rnhc` will prompt the following:

```sh
./src/redux/reducers/<reducer-name>/ does not exist
```

- It will also update the `index.js` file under `src/redux/reducer/` folder to remove it from the import list as well as from the `combineReducers` function.

## Delete multiple reducers

- You can even delete multiple reducers at once:

```sh
rnhc delete --reducer <reducer-name-1> <reducer-name-2> ...
```

## Delete all reducers

- To delete all reducers run:

```sh
rnhc delete --reducer
```

# Actions

## Delete an action

- To delete an action run:

```sh
rnhc delete --action <reducer-name> <action-name>
```

- If the reducer does not exist, `rnhc` will prompt the following:

```sh
./src/redux/actions/<reducer-name>/ does not exist
```

- It will also update the necessary files to remove the action from the reducer. And in case of TypeScript projects it will remove the action type in the `src/redux/index.ts`.

## Delete multiple actions

- You can even delete multiple actions for a specific reducer at once:

```sh
rnhc delete --action <reducer-name> <action-name-1> <action-name-2> ...
```

## Delete all actions for a specific reducer

- To delete all actions for a specific reducer run:

```sh
rnhc delete --action <reducer-name>
```
