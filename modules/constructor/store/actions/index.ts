import {
  setApplies,
  fetchUsages,
  setUI,
  clearCatalog,
  setCatalog,
  toggleSettings,
} from ".";

import { batch } from "react-redux";
import { AppDispatch } from "../store";

export { fetchUsages, applyItem, applyItemLength, resetItem } from "./usages";
export {
  fetchCategories,
  fetchItems,
  setApplies,
  setCatalog,
  clearCatalog,
} from "./catalog";
export { setFocus, setScene, moveCameraBack } from "./scene";
export { setUI, toggleSettings, togglePrice } from "./catalogUI";

export const initiateConstructor =
  (applies: string) => (dispatch: AppDispatch) => {
    dispatch(setApplies(applies));
    dispatch(fetchUsages());
    setTimeout(() => dispatch(setUI("hideSettings", false)), 2000);
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
