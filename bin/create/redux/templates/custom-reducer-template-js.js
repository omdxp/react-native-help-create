/**
 * @function customReducerTemplateJs
 * @description this function returns the custom reducer template in javascript.
 * @param {string} reducerName - name of reducer.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.customReducerTemplateJs = (reducerName) => `const initialState = { };

export const ${reducerName} = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
`;
