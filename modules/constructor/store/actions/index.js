import client from "../../../../apollo-client";
import {
  categoriesByUsageQuery,
  itemsByCategoryQuery,
  usagesQuery,
} from "../../../../queries";

import {
  GET_USAGES,
  GET_CATEGORIES,
  APPLY_ITEM,
  RESET_ITEM,
  SET_UI,
  SET_CATALOG,
  SET_APPLIES,
  GET_ITEMS,
  CLEAR_CATALOG,
  SET_SCENE,
  SET_CAMERA_DEFAULT,
} from "../types";

// USAGES
export const fetchUsages = (elementOfDecor) => (dispatch) => {
  client
    .query({
      query: usagesQuery(elementOfDecor),
    })
    .then((data) => {
      dispatch({
        type: GET_USAGES,
        payload: data.data.usages.reduce(
          (obj, e) => ({ ...obj, [e.name]: { ...e, chosen: false } }),
          {}
        ),
      });
    });
};

export const applyItem = (item, usage) => (dispatch) => {
  dispatch({
    type: APPLY_ITEM,
    payload: item,
    usage,
  });
};

export const resetItem = (usage) => (dispatch) => {
  dispatch({
    type: RESET_ITEM,
    usage,
  });
};

// CATALOG
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

export const setCatalog = (key, value) => (dispatch) => {
  dispatch({
    type: SET_CATALOG,
    key,
    value,
  });
};

export const clearCatalog = () => (dispatch) => {
  dispatch({ type: CLEAR_CATALOG });
};

// CATALOG UI
export const setUI = (key, value) => (dispatch) => {
  dispatch({
    type: SET_UI,
    key,
    value,
  });
};

// SCENE
export const setFocus = (payload) => (dispatch) => {
  dispatch({
    type: SET_UI,
    key: "hideSettings",
    value: true,
  });

  setTimeout(() => {
    dispatch({
      type: SET_SCENE,
      payload,
    });
  }, 250);

  setTimeout(() => {
    dispatch({
      type: SET_UI,
      key: "hideSettings",
      value: false,
    });
    dispatch({
      type: SET_SCENE,
      payload: { focus: {}, moveBack: true },
    });
  }, 4500);
};

export const setScene = (payload) => (dispatch) => {
  dispatch({
    type: SET_SCENE,
    payload,
  });
};
export const moveCameraBack = () => (dispatch) => {
  dispatch({
    type: SET_CAMERA_DEFAULT,
  });
};
