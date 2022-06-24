---
sidebar_position: 3
---

# Combine Screens

- To combine screens that resides in `src/screens/` folder to a specific path that resides under that same folder you can run:

```sh
rnhc combine -s <screen-name-1> <screen-name-2> ... -f <folder-path>
```

- This will move the existed screens for the given inputs to `src/screens/<folder-path>/` folder.

- If somehome one of the given screens does not exist, `rnhc` will prompt:

```sh
Check if all of these screens exist
```

## Example

In this example, we have `screen-1` and `screen-2` that exists under `src/screens/` folder, and we want to move them to `src/screens/foo/bar/` folder:

```sh
rnhc combine -s screen-1 screen-2 -f foo/bar
```

- The command will outputs the following:

```sh
screen-1 screen moved to src/screens/foo/bar/
screen-2 screen moved to src/screens/foo/bar/
```
