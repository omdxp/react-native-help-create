const initialState = { message: "" };

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
