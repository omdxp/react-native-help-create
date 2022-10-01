// write your general actions here

// this is an example for an action
export const initAction = () => async (dispatch, getState) => {
  dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } })
};
