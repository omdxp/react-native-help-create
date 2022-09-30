/**
 * @function reducerTemplateJs
 * @description this function returns the default reducer template in javascript.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.reducerTemplateJs = () => `const initialState = { message: "" };

export const general = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "UPDATE_GENERAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
`;
