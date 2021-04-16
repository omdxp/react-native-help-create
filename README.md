# react-native-help-create

This command line helps you create components, screens and even redux implementaion for your react native project.

# Functionalities

- Support for TypeScript and JavaScript.
- Create components and check if already exists.
- Create screens and check if already exists.
- Create redux implementation and check if already exists.
- Delete components after checking if exists.
- Delete screens after checking if exists.
- Delete redux implemnetation after checking if exists.

## How to install it?

To install it you should type on your shell the following

```
npm i react-native-help-create -g
```

in order to install it globally in your system.

## How to use it?

- You can run this `rnhc --help` to see the available commands.
- By default `rnhc` helps you create components, screens and redux implementation in JavaScript (so `--js` is optional).
- If you want to create in TypeScript you just need to add the option `--ts`.
- You don't need to specify the language option in deletion mode.

---

- To create a component run

```
rnhc create -c <component_name>
```

- to create a screen run

```
rnhc create -s <screen_name>
```

- to create a redux implementation run

```
rnhc create -r <redux_name>
```

---

- to delete a component run

```
rnhc delete -c <component_name>
```

- to delete a screen run

```
rnhc delete -s <screen_name>
```

- to delete a redux implementation run

```
rnhc delete -r <redux_name>
```

---

- Keep in mind that you are at the root of your react native project, the command will check eaither way.

# Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
