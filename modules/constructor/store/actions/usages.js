import { usagesQuery } from "../../../../queries";

import { GET_USAGES, APPLY_ITEM, SET_ITEM_LENGTH, RESET_ITEM } from "../types";

export const fetchUsages = () => async (dispatch, getState, api) => {
  const { applies } = getState().catalog;
  const data = (await api(usagesQuery(applies))).data.usages;
  dispatch({
    type: GET_USAGES,
    payload: data.reduce(
      (obj, e) => ({ ...obj, [e.name]: { ...e, chosen: false } }),
      {}
    ),
  });
};

export const applyItem = (item, usage) => (dispatch) => {
  // calculating item's price
  item.price = item.height * item.width * 10;

  dispatch({
    type: APPLY_ITEM,
    payload: item,
    usage,
  });
};

export const applyItemLength = (usage, size) => (dispatch) => {
  dispatch({
    type: SET_ITEM_LENGTH,
    usage,
    size: size / 2, // translation to cm
  });
};

export const resetItem = (usage) => (dispatch) => {
  dispatch({
    type: RESET_ITEM,
    usage,
  });
};
