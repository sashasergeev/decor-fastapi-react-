import { SET_UI } from "../types";

export const setUI = (key, value) => (dispatch) => {
  dispatch({
    type: SET_UI,
    key,
    value,
  });
};
