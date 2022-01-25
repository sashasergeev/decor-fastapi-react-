import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import api from "./api";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk.withExtraArgument(api))
);
