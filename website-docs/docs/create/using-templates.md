---
sidebar_position: 5
---

# Using Templates

You can create your screens and components with your defined templates by following these steps:

1. First thing to do is to create a `.template` folder at the root of your react project.

2. Inside the `.template` folder you can add your template, for example `componentWithUseEffect.tsx` (the file extension doesn't matter so it could be `*.jsx`, `*.js` or `*.tsx`):

```jsx
import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function __COMPONENT__() {
  useEffect(() => {}, []);

  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
}
```

- There is a restriction in naming these templates which is you should not put dots (`.`) between the name, like this (`component.WithUseEffect.jsx`). It should only contain one dot that makes the extension file like we're doing above.

- You should type `__COMPONENT__` in the template file and it will be replaced with the component name you want to create.

3. After creating your template you can use them to create components or screens as the following:

```sh
rnhc create -c <component-name> -t <template-name>
```

```sh
rnhc create -s <screen-name> -t <template-name>
```

- And of course, you can create multiple components or screens with the same template.

### Example

As for our example it can be used like this for the above template:

```sh
rnhc create -c comp -t componentWithUseEffect
```

- This will create `comp` component under `src/components/` folder and the `index.jsx` for this component will contain the same code written in the template.

- For the screen case, the `index.jsx` for that screen will contain the code written in the template.
