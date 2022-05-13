# Notes

- To see the available commands for `rnhc` you can run:

```sh
rnhc --help
```

- To see the available positionals and options for a specific command like `create` you can run:

```sh
rnhc create --help
```

- In order to `rnhc` to work, you must be at the root of your React Native project. It will check and if somehow you are not at the root of the project, `rnhc` will prompt:

```
You don't seem to be at the root of a react native project
```

- In `create` command, `rnhc` will create files with the project's used language, so if the project is written with TypeScript, it will write files with TypeScript, the same apply for JavaScript.

- If you want to create files with a specific language you can add `--js` or `--ts` options at the end of your `create` command, like this for example:

```sh
rnhc create -s test-screen --ts
```

- It is advisable to give the components and screens names with this case `component-name` and `screen-name`, for example:

```sh
rnhc create -s world-to-react
```

- You can always overwrite your implementation using the `--overwrite` or `-o` option, for example:

```sh
rnhc create -c test-component -o
```

```sh
rnhc create -s test-screen -o
```

```sh
rnhc create -r -o
```

- This is helpful when you want to update your navigation files, for example you already have a navigation file in `src/screens/` folder and you want to update it with the new screens you created:

```sh
rnhc create -n stack * --overwrite
```
