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
