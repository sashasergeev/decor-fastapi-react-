import { batch } from "react-redux";
import { Dispatch } from "redux";
import {
  clearCatalog,
  fetchUsages,
  setApplies,
  setCatalog,
  setUI,
  toggleSettings,
} from "./actions";
import { AppDispatch } from "./store";

export {
  clearCatalog,
  fetchCategories,
  fetchItems,
  setApplies,
  setCatalog,
} from "./reducers/catalogReducer";
export {
  setUI,
  togglePrice,
  toggleSettings,
} from "./reducers/catalogUIReducer";
export { moveCameraBack, setFocus, setScene } from "./reducers/sceneReducer";
export {
  applyItem,
  applyItemLength,
  fetchUsages,
  resetItem,
} from "./reducers/usageReducer";

export const initiateConstructor =
  (applies: string) => (dispatch: Dispatch<any>) => {
    dispatch(setApplies(applies));
    dispatch(fetchUsages());
    setTimeout(
      () => dispatch(setUI({ key: "hideSettings", value: false })),
      2000
    );
  };

export const clickOnItem = (applies: string) => (dispatch: AppDispatch) => {
  dispatch(clearCatalog()); // out of batch scope because it was causing an error
  batch(() => {
    dispatch(toggleSettings("onItem"));
    dispatch(setCatalog({ chosenUsage: applies }));
  });
  document
    .querySelector("#decorSettings")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};
