import { GeneralState } from "../../reducers/general";
import { ThunkResult } from "../..";

// write your general actions here

// this is an example for an action
export const initAction = (): ThunkResult<GeneralState> => async (dispatch, getState) => {
  dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } })
};
