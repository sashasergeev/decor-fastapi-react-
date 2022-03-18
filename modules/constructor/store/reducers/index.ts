import { combineReducers } from "redux";
import usageReducer from "./usageReducer";
import catalogUIReducer from "./catalogUIReducer";
import catalogReducer from "./catalogReducer";
import sceneReducer from "./sceneReducer";
import { AppDispatch } from "../store";
import { ApiType } from "../api";
import { DocumentNode } from "graphql";

const reducers = combineReducers({
  usage: usageReducer,
  ui: catalogUIReducer,
  catalog: catalogReducer,
  scene: sceneReducer,
});

export type AppState = ReturnType<typeof reducers>;

export type AsyncThunkConfig = {
  state: AppState;
  dispatch: AppDispatch;
  extra: { api: (arg0: DocumentNode) => ApiType };
};

export default reducers;
