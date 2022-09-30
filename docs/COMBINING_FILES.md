# Combining Files

With `rnhc` you can combine your components or screens in a specific path.

The following points shows how to user the `combine` command.

## Components

- To combine components that resides in `src/components/` folder to a specific path that resides under that same folder you can run:

```sh
rnhc combine -c <component-name-1> <component-name-2> ... -f <folder-path>
```

- This will move the existed components for the given inputs to `src/components/<folder-path>/` folder.

- If somehow one of the given components does not exist, `rnhc` will prompt:

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

### Atoms

- To combine atoms that resides in `src/components/atoms/` folder to a specific path that resides under that same folder you can run:

```sh
rnhc combine -c <atom-name-1> <atom-name-2> ... -f <folder-path> --atom
```

- This will move the existed atoms for the given inputs to `src/components/atoms/<folder-path>/` folder.

- If somehow one of the given atoms does not exist, `rnhc` will prompt:

```sh
Check if all of these components exist
```

### Example

In this example, we have `atom-1` and `atom-2` that exists under `src/components/atoms/` folder, and we want to move them to `src/components/atoms/foo/bar/` folder:

```sh
rnhc combine -c atom-1 atom-2 -f foo/bar --atom
```

- The command will outputs the following:

```sh
atom-1 moved to src/components/atoms/foo/bar/
atom-2 moved to src/components/atoms/foo/bar/
```

### Molecules

- To combine molecules that resides in `src/components/molecules/` folder to a specific path that resides under that same folder you can run:

```sh
rnhc combine -c <molecule-name-1> <molecule-name-2> ... -f <folder-path> --molecule
```

- This will move the existed molecules for the given inputs to `src/components/molecules/<folder-path>/` folder.

- If somehow one of the given molecules does not exist, `rnhc` will prompt:

```sh
Check if all of these components exist
```

### Example

In this example, we have `molecule-1` and `molecule-2` that exists under `src/components/molecules/` folder, and we want to move them to `src/components/molecules/foo/bar/` folder:

```sh
rnhc combine -c molecule-1 molecule-2 -f foo/bar --molecule
```

- The command will outputs the following:

```sh
molecule-1 moved to src/components/molecules/foo/bar/
molecule-2 moved to src/components/molecules/foo/bar/
```

### Organisms

- To combine organisms that resides in `src/components/organisms/` folder to a specific path that resides under that same folder you can run:

```sh
rnhc combine -c <organism-name-1> <organism-name-2> ... -f <folder-path> --organism
```

- This will move the existed organisms for the given inputs to `src/components/organisms/<folder-path>/` folder.

- If somehow one of the given organisms does not exist, `rnhc` will prompt:

```sh
Check if all of these components exist
```

### Example

In this example, we have `organism-1` and `organism-2` that exists under `src/components/organisms/` folder, and we want to move them to `src/components/organisms/foo/bar/` folder:

```sh
rnhc combine -c organism-1 organism-2 -f foo/bar --organism
```

- The command will outputs the following:

```sh
organism-1 moved to src/components/organisms/foo/bar/
organism-2 moved to src/components/organisms/foo/bar/
```

## Screens

- To combine screens that resides in `src/screens/` folder to a specific path that resides under that same folder you can run:

```sh
rnhc combine -s <screen-name-1> <screen-name-2> ... -f <folder-path>
```

- This will move the existed screens for the given inputs to `src/screens/<folder-path>/` folder.

- If somehow one of the given screens does not exist, `rnhc` will prompt:

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
