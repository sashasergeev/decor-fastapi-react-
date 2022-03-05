import {
  SET_SCENE,
  SET_CAMERA_DEFAULT,
  initialSceneI,
  SceneActionTypesAll,
} from "../types";

const initialState: initialSceneI = {
  zoom: false,
  focus: undefined,
  moveBack: false,
};

const sceneReducer = (
  state: initialSceneI = initialState,
  action: SceneActionTypesAll
) => {
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
