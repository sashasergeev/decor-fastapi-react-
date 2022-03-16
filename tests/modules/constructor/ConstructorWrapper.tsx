// import { MockedProvider } from "@apollo/react-testing";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import api from "../../../modules/constructor/store/api";
import reducers from "../../../modules/constructor/store/reducers";

export const store = createStore(
  reducers,
  {
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
  applyMiddleware(thunk.withExtraArgument(api))
);

const ConstructorWrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ConstructorWrapper;
