import { AuthState } from "../../reducers/auth";
import { ThunkResult } from "../..";

export const loginAction = (): ThunkResult<AuthState> => async (dispatch, getState) => {
  dispatch({ type: "AUTH_LOGIN", payload: { } })
}
