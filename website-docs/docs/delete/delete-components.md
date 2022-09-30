---
sidebar_position: 2
---

# Delete Components

## Delete a Component

- To delete a component simply run:

```sh
rnhc delete -c <component-name>
```

- This will delete the component with the given name `<component-name>` under the `src/components/` folder.

- If the component does not exist, `rnhc` will prompt the following:

```sh
src/components/<component-name>/ does not exist
```

## Delete multiple Components

- To delete multiple components run:

```sh
rnhc delete -c <component-name-1> <component-name-2> ...
```

- This will delete only the existed components with the given inputs that resides under the `src/components/` folder.

## Delete a Components in a Specific Folder

- To delete one or multiple components that resides in a specific path under the `src/components/` folder, you can run:

```sh
rnhc delete -c <component-name-1> <component-name-2> ... -f <folder-path>
```

- This will delete only the existed components with the given inputs that resides under the `src/components/<folder-path>/` folder.

## Delete Atoms

```sh
rnhc delete -c <atom-name> --atom
```

- This will delete the atom with the given name `<atom-name>` under the `src/components/atoms/` folder.

- If the atom does not exist, `rnhc` will prompt the following:

```sh
src/components/atoms/<atom-name>/ does not exist
```

- To delete multiple atoms run:

```sh
rnhc delete -c <atom-name-1> <atom-name-2> ... --atom
```

- This will delete only the existed atoms with the given inputs that resides under the `src/components/atoms/` folder.

- To delete one or multiple atoms that resides in a specific path under the `src/components/` folder, you can run:

```sh
rnhc delete -c <atom-name-1> <atom-name-2> ... -f <folder-path> --atom
```

- This will delete only the existed atoms with the given inputs that resides under the `src/components/<folder-path>/atoms/` folder.

## Delete Molecules

- To delete a molecule simply run:

```sh
rnhc delete -c <molecule-name> --molecule
```

- This will delete the molecule with the given name `<molecule-name>` under the `src/components/molecules/` folder.

- If the molecule does not exist, `rnhc` will prompt the following:

```sh
src/components/molecules/<molecule-name>/ does not exist
```

- To delete multiple molecules run:

```sh
rnhc delete -c <molecule-name-1> <molecule-name-2> ... --molecule
```

- This will delete only the existed molecules with the given inputs that resides under the `src/components/molecules/` folder.

- To delete one or multiple molecules that resides in a specific path under the `src/components/` folder, you can run:

```sh
rnhc delete -c <molecule-name-1> <molecule-name-2> ... -f <folder-path> --molecule
```

- This will delete only the existed molecules with the given inputs that resides under the `src/components/<folder-path>/molecules/` folder.

## Delete Organisms

- To delete an organism simply run:

```sh
rnhc delete -c <organism-name> --organism
```

- This will delete the organism with the given name `<organism-name>` under the `src/components/organisms/` folder.

- If the organism does not exist, `rnhc` will prompt the following:

```sh
src/components/organisms/<organism-name>/ does not exist
```

- To delete multiple organisms run:

```sh
rnhc delete -c <organism-name-1> <organism-name-2> ... --organism
```

- This will delete only the existed organisms with the given inputs that resides under the `src/components/organisms/` folder.

- To delete one or multiple organisms that resides in a specific path under the `src/components/` folder, you can run:

```sh
rnhc delete -c <organism-name-1> <organism-name-2> ... -f <folder-path> --organism
```

- This will delete only the existed organisms with the given inputs that resides under the `src/components/<folder-path>/organisms/` folder.
