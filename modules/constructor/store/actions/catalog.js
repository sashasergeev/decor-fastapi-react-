import {
  categoriesByUsageQuery,
  itemsByCategoryQuery,
} from "../../../../queries";

import {
  GET_CATEGORIES,
  SET_CATALOG,
  SET_APPLIES,
  GET_ITEMS,
  CLEAR_CATALOG,
} from "../types";

export const fetchCategories = () => async (dispatch, getState, api) => {
  const { applies, chosenUsage } = getState().catalog;
  dispatch({
    type: GET_CATEGORIES,
    payload: (await api(categoriesByUsageQuery(applies, chosenUsage))).data
      .categories,
  });
};

export const fetchItems = () => async (dispatch, getState, api) => {
  const { chosenCategory } = getState().catalog;
  dispatch({
    type: GET_ITEMS,
    payload: (await api(itemsByCategoryQuery(chosenCategory))).data
      .categories_by_pk.items,
  });
};

export const setApplies = (element) => (dispatch) => {
  dispatch({
    type: SET_APPLIES,
    payload: element,
  });
};

export const setCatalog = (payload) => (dispatch) => {
  dispatch({
    type: SET_CATALOG,
    payload,
  });
};

export const clearCatalog = () => (dispatch) => {
  dispatch({ type: CLEAR_CATALOG });
};
