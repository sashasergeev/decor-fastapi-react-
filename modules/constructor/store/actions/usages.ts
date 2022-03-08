import { usagesQuery } from "../../../../queries";

import {
  GET_USAGES,
  APPLY_ITEM,
  SET_ITEM_LENGTH,
  RESET_ITEM,
  GetUsagesI,
  ApplyItemI,
  SetItemLengthI,
  ResetItemI,
} from "../types";
import { Dispatch } from "redux";
import DecorItemInterface from "../../../../api/DecorItemInterface";
import { DocumentNode } from "graphql";
import { ApiType } from "../api";
import { AppState } from "../reducers";
import { DecorUsage } from "../../../../api/ConstructorInterfaces";

export const fetchUsages =
  () =>
  async (
    dispatch: Dispatch<GetUsagesI>,
    getState: () => AppState,
    api: (arg0: DocumentNode) => ApiType
  ) => {
    const { applies } = getState().catalog;
    const data: DecorUsage[] =
      applies && (await api(usagesQuery(applies))).data.usages;
    dispatch({
      type: GET_USAGES,
      payload: data.reduce(
        (obj, e) => ({ ...obj, [e.name]: { ...e, chosen: false } }),
        {}
      ),
    });
  };

export const applyItem =
  (item: DecorItemInterface, usage: string) =>
  (dispatch: Dispatch<ApplyItemI>) => {
    // calculating item's price
    item.price = item.height * item.width * 10;

    dispatch({
      type: APPLY_ITEM,
      payload: item,
      usage,
    });
  };

export const applyItemLength =
  (usage: string, size: number) => (dispatch: Dispatch<SetItemLengthI>) => {
    dispatch({
      type: SET_ITEM_LENGTH,
      usage,
      size: size / 2, // translation to cm
    });
  };

export const resetItem =
  (usage: string) => (dispatch: Dispatch<ResetItemI>) => {
    dispatch({
      type: RESET_ITEM,
      usage,
    });
  };
