import { combineReducers } from "redux";
import usageReducer from "./usageReducer";
import catalogUIReducer from "./catalogUIReducer";
import catalogReducer from "./catalogReducer";
import sceneReducer from "./sceneReducer";

const reducers = combineReducers({
  usage: usageReducer,
  ui: catalogUIReducer,
  catalog: catalogReducer,
  scene: sceneReducer,
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
