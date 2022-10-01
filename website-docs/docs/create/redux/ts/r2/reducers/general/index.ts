import { Action } from "../..";

export interface GeneralState {
  message: string;
}

export const general = (
  state: GeneralState = {
    message: "",
  },
  action: Action<GeneralState>,
) => {
  switch (action.type) {
    case "UPDATE_GENERAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
