import { SET_UI } from "../types";

const initialState = {
  hideSettings: false,
  hideSizeSets: false,
  hideDecSets: false,
};

const catalogUIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UI:
      return { ...state, [action.key]: action.value };

    default:
      return state;
  }
};

export default catalogUIReducer;
