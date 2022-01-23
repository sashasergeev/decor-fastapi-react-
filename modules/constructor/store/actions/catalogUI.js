import { SET_UI, TOGGLE_PRICE, TOGGLE_SETTINGS } from "../types";

export const setUI = (key, value) => (dispatch) => {
  dispatch({
    type: SET_UI,
    key,
    value,
  });
};

export const toggleSettings =
  (onItem = false) =>
  (dispatch, getState) => {
    const { hideSettings } = getState().ui;
    if (!onItem) {
      dispatch({
        type: TOGGLE_SETTINGS,
        payload: hideSettings
          ? {
              hideSettings: false,
              hidePrice: true,
            }
          : {
              hideSettings: true,
            },
      });
    } else {
      dispatch({
        type: TOGGLE_SETTINGS,
        payload: {
          hideSettings: false,
          hidePrice: true,
        },
      });
    }
  };

export const togglePrice = () => (dispatch, getState) => {
  const { hidePrice } = getState().ui;

  dispatch({
    type: TOGGLE_PRICE,
    payload: hidePrice
      ? {
          hidePrice: false,
          hideSettings: true,
        }
      : {
          hidePrice: true,
        },
  });
};
