import {
  CatalogUIActionTypesAll,
  initialCatalogUII,
  SET_UI,
  TOGGLE_PRICE,
  TOGGLE_SETTINGS,
} from "../types";

const initialState: initialCatalogUII = {
  hideSettings: true,
  hideSizeSets: false,
  hideDecSets: false,
  hidePrice: true,
};

const catalogUIReducer = (
  state: initialCatalogUII = initialState,
  action: CatalogUIActionTypesAll
) => {
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
