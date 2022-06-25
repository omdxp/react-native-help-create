---
sidebar_position: 4
---

# Delete Navigations

## Delete the root Navigation

- To delete a navigation file that resides in `src/screens/` folder simply run:

```sh
rnhc delete -n
```

- This will delete the navigation file if it exists, if not `rnhc` will prompt the following:

```sh
It seems there is no navigation file in src/screens/
```

## Delete a Navigation in a Specific Folder

- To delete a navigation file that resides in a specific path that resides under `src/screens/` folder you can run:

```sh
rnhc delete -n -f <folder-path>
```

- This will delete the navigation file if it does exist under the `src/screens/<folder-path>/` folder.
