# Combining Files

With `rnhc` you can combine your components or screens in a specific path.

The following points shows how to user the `combine` command.

## Components

- To combine components that resides in `src/components/` folder to a specific path that resides under that same folder you can run:

```sh
rnhc combine -c <component-name-1> <component-name-2> ... -f <folder-path>
```

- This will move the existed components for the given inputs to `src/components/<folder-path>/` folder.

- If somehome one of the given components does not exist, `rnhc` will prompt:

```sh
Check if all of these components exist
```

### Example

In this example, we have `comp-1` and `comp-2` that exists under `src/components/` folder, and we want to move them to `src/components/foo/bar/` folder:

```sh
rnhc combine -c comp-1 comp-2 -f foo/bar
```

- The command will outputs the following:

```sh
comp-1 component moved to src/components/foo/bar/
comp-2 component moved to src/components/foo/bar/
```

## Screens

- To combine screens that resides in `src/screens/` folder to a specific path that resides under that same folder you can run:

```sh
rnhc combine -s <screen-name-1> <screen-name-2> ... -f <folder-path>
```

- This will move the existed screens for the given inputs to `src/screens/<folder-path>/` folder.

- If somehome one of the given screens does not exist, `rnhc` will prompt:

```sh
Check if all of these screens exist
```

### Example

In this example, we have `screen-1` and `screen-2` that exists under `src/screens/` folder, and we want to move them to `src/screens/foo/bar/` folder:

```sh
rnhc combine -s screen-1 screen-2 -f foo/bar
```

- The command will outputs the following:

```sh
screen-1 screen moved to src/screens/foo/bar/
screen-2 screen moved to src/screens/foo/bar/
```
