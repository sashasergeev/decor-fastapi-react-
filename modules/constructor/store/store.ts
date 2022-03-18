import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";
import api from "./api";

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
