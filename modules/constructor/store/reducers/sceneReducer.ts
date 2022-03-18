import { initialSceneI } from "../types";

import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from ".";
import { batch } from "react-redux";
import { setUI } from "./catalogUIReducer";

const initialState: initialSceneI = {
  zoom: false,
  focus: undefined,
  moveBack: false,
};

export const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setScene: (state, action: PayloadAction<initialSceneI>) => {
      state = { ...state, ...action.payload };
      return state;
    },
    moveCameraBack: (state) => {
      return { ...state, moveBack: false };
    },
  },
});

export const { setScene, moveCameraBack } = sceneSlice.actions;
export default sceneSlice.reducer;

export const setFocus =
  (payload: initialSceneI) =>
  (dispatch: Dispatch<any>, getState: () => AppState) => {
    batch(() => {
      dispatch(setUI({ key: "hideSettings", value: true }));
      dispatch(sceneSlice.actions.setScene(payload));
    });

    // if for all usages user applied item, it won't open settings.
    const { usage } = getState();
    const isAllApplied = Object.values(usage).every((val) => val.chosen);
    setTimeout(() => {
      batch(() => {
        if (!isAllApplied) {
          dispatch(setUI({ key: "hideSettings", value: false }));
        }
        dispatch(
          sceneSlice.actions.setScene({ focus: undefined, moveBack: true })
        );
      });
    }, 4500);
  };
