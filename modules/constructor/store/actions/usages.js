import client from "../../../../apollo-client";
import { usagesQuery } from "../../../../queries";

import { GET_USAGES, APPLY_ITEM, RESET_ITEM } from "../types";

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
  item.price = item.height * item.width * 50;

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
