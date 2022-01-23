import { SET_UI, TOGGLE_PRICE, TOGGLE_SETTINGS } from "../types";

const initialState = {
  hideSettings: true,
  hideSizeSets: false,
  hideDecSets: false,
  hidePrice: true,
};

const catalogUIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UI:
      return { ...state, [action.key]: action.value };

    case TOGGLE_SETTINGS:
    case TOGGLE_PRICE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default catalogUIReducer;
