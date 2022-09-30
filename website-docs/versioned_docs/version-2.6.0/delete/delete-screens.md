---
sidebar_position: 3
---

# Delete Screens

## Delete a Screen

- To delete a screen simply run:

```sh
rnhc delete -s <screen-name>
```

- This will delete the screen with the given name `<screen-name>` under the `src/screens/` folder.

- If the screen does not exist, `rnhc` will prompt the following:

```sh
src/screens/<screen-name>/ does not exist
```

## Delete multiple Screens

- To delete multiple screens run:

```sh
rnhc delete -s <screen-name-1> <screen-name-2> ...
```

- This will delete only the existed screens with the given inputs that resides under the `src/screens/` folder.

## Delete a Screens in a Specific Folder

- To delete one or multiple screens that resides in a specific path under the `src/screens/` folder, you can run:

```sh
rnhc delete -s <screen-name-1> <screen-name-2> ... -f <folder-path>
```

- This will delete only the existed screens with the given inputs that resides under the `src/screens/<folder-path>/` folder.
