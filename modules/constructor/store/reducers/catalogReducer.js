import {
  CLEAR_CATALOG,
  GET_CATEGORIES,
  GET_ITEMS,
  SET_APPLIES,
  SET_CATALOG,
} from "../types";

const initialState = {
  applies: false,
  chosenUsage: false,
  chosenCategory: false,
  categories: [],
  items: [],
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case SET_CATALOG:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_CATALOG:
      return {
        ...state,
        chosenUsage: false,
        categories: [],
        chosenCategory: false,
        items: [],
      };
    case SET_APPLIES:
      return {
        ...state,
        applies: action.payload,
      };

    default:
      return state;
  }
};

export default catalogReducer;
