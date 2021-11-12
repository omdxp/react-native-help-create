/**
 * @function screenTemplateJs
 * @description this function returns the default screen template in javascript.
 * @param {string} screenName - name of screen.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.screenTemplateJs = (screenName) => {
  return `import React from 'react';
import { Text, View } from 'react-native';

import {} from '../functions';

const ${screenName} = () => {
  return (
    <View>
      <Text>${screenName} created!</Text>
    </View>
  );
}
export default ${screenName};
`;
};
