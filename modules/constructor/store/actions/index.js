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

import {
  setApplies,
  fetchUsages,
  setUI,
  clearCatalog,
  setCatalog,
  toggleSettings,
} from ".";

import { batch } from "react-redux";

export const initiateConstructor = (applies) => (dispatch) => {
  dispatch(setApplies(applies));
  dispatch(fetchUsages());
  setTimeout(() => dispatch(setUI("hideSettings", false)), 2000);
};

export const clickOnItem = (applies) => (dispatch) => {
  dispatch(clearCatalog()); // out of batch scope because it was causing an error
  batch(() => {
    dispatch(toggleSettings("onItem"));
    dispatch(setCatalog({ chosenUsage: applies }));
  });
};
