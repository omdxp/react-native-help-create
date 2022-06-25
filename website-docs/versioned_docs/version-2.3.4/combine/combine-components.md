---
sidebar_position: 2
---

# Combine Components

- To combine components that resides in `src/components/` folder to a specific path that resides under that same folder you can run:

```sh
rnhc combine -c <component-name-1> <component-name-2> ... -f <folder-path>
```

- This will move the existed components for the given inputs to `src/components/<folder-path>/` folder.

- If somehome one of the given components does not exist, `rnhc` will prompt:

```sh
Check if all of these components exist
```

## Example

In this example, we have `comp-1` and `comp-2` that exists under `src/components/` folder, and we want to move them to `src/components/foo/bar/` folder:

```sh
rnhc combine -c comp-1 comp-2 -f foo/bar
```

- The command will outputs the following:

```sh
comp-1 component moved to src/components/foo/bar/
comp-2 component moved to src/components/foo/bar/
```
