import { SET_UI, SET_SCENE, SET_CAMERA_DEFAULT } from "../types";

export const setFocus = (payload) => (dispatch, getState) => {
  dispatch({
    type: SET_UI,
    key: "hideSettings",
    value: true,
  });

  setTimeout(() => {
    dispatch({
      type: SET_SCENE,
      payload,
    });
  }, 250);

  // if for all usages user applied item, it won't open settings.
  const { usage } = getState();
  const isAllApplied = Object.entries(usage).every(([key, val]) => val.chosen);
  setTimeout(() => {
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
