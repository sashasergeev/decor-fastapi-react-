import { SET_SCENE, SET_CAMERA_DEFAULT } from "../types";

const initialState = {
  zoom: false,
  focus: {},
  moveBack: false,
};

const sceneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCENE:
      return { ...state, ...action.payload };
    case SET_CAMERA_DEFAULT:
      return { ...state, moveBack: false };
    default:
      return state;
  }
};

export default sceneReducer;
