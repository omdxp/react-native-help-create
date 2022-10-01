import { Action } from "../..";

export interface AuthState { }

export const auth = (
  state: AuthState = { },
  action: Action<AuthState>,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
