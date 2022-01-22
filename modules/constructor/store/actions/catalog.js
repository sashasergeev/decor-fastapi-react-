import client from "../../../../apollo-client";
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

export const fetchCategories = () => (dispatch, getState) => {
  const {
    catalog: { applies, chosenUsage },
  } = getState();

  client
    .query({
      query: categoriesByUsageQuery(applies, chosenUsage),
    })
    .then((data) => {
      dispatch({
        type: GET_CATEGORIES,
        payload: data.data.categories,
      });
    });
};

export const fetchItems = () => (dispatch, getState) => {
  const {
    catalog: { chosenCategory },
  } = getState();

  client
    .query({
      query: itemsByCategoryQuery(chosenCategory),
    })
    .then((data) => {
      dispatch({
        type: GET_ITEMS,
        payload: data.data.categories_by_pk.items,
      });
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
