import { combineReducers } from "redux";
import usageReducer from "./usageReducer";
import catalogUIReducer from "./catalogUIReducer";
import catalogReducer from "./catalogReducer";

const reducers = combineReducers({
  usage: usageReducer,
  ui: catalogUIReducer,
  catalog: catalogReducer,
});

export default reducers;
