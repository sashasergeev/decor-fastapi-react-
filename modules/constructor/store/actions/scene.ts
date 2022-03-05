import {
  SET_UI,
  SET_SCENE,
  SET_CAMERA_DEFAULT,
  initialSceneI,
  SetSceneI,
  SetUII,
  SetCameraDefaultI,
} from "../types";

import { batch } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../reducers";

export const setFocus =
  (payload: initialSceneI) =>
  (dispatch: Dispatch<SetSceneI | SetUII>, getState: () => AppState) => {
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
    const isAllApplied = Object.values(usage).every((val) => val.chosen);
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
          payload: { focus: undefined, moveBack: true },
        });
      });
    }, 4500);
  };

export const setScene =
  (payload: initialSceneI) => (dispatch: Dispatch<SetSceneI>) => {
    dispatch({
      type: SET_SCENE,
      payload,
    });
  };
export const moveCameraBack = () => (dispatch: Dispatch<SetCameraDefaultI>) => {
  dispatch({
    type: SET_CAMERA_DEFAULT,
  });
};
