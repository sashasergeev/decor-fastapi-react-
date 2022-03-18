import { ReactNode } from "react";
import { Provider } from "react-redux";
import api from "../../../modules/constructor/store/api";
import reducers from "../../../modules/constructor/store/reducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: reducers,
  preloadedState: {
    usage: {
      Middle: {
        id: 2,
        name: "Middle",
        chosen: false,
      },
      Top: {
        id: 1,
        name: "Top",
        chosen: false,
      },
      Bottom: {
        id: 3,
        name: "Bottom",
        chosen: false,
      },
    },
    ui: {
      hideDecSets: false,
      hidePrice: true,
      hideSettings: false,
      hideSizeSets: false,
    },
    catalog: {
      applies: "Window",
      categories: [],
      chosenCategory: false,
      items: [],
    },
    scene: { focus: undefined, moveBack: false, zoom: false },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});

const ConstructorWrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ConstructorWrapper;
