import { SET_UI, SET_SCENE, SET_CAMERA_DEFAULT } from "../types";

import { batch } from "react-redux";

export const setFocus = (payload) => (dispatch, getState) => {
  batch(() => {
    dispatch({
      type: SET_UI,
      key: "hideSettings",
      value: true,
    });
    dispatch({
      type: SET_SCENE,
      payload,
    });
  });

  // if for all usages user applied item, it won't open settings.
  const { usage } = getState();
  const isAllApplied = Object.entries(usage).every(([key, val]) => val.chosen);
  setTimeout(() => {
    batch(() => {
      if (!isAllApplied) {
        dispatch({
          type: SET_UI,
          key: "hideSettings",
          value: false,
        });
      }
      dispatch({
        type: SET_SCENE,
        payload: { focus: {}, moveBack: true },
      });
    });
  }, 4500);
};

export const setScene = (payload) => (dispatch) => {
  dispatch({
    type: SET_SCENE,
    payload,
  });
};
export const moveCameraBack = () => (dispatch) => {
  dispatch({
    type: SET_CAMERA_DEFAULT,
  });
};
