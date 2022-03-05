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
  GetCategoriesI,
  initialCatalogStateI,
  GetItemI,
  SetAppliesI,
  SetCatalogI,
  ClearCatalogI,
} from "../types";

import { DocumentNode } from "graphql";
import { Dispatch } from "redux";
import { AppState } from "../reducers";
import { ApiType } from "../api";

export const fetchCategories =
  () =>
  async (
    dispatch: Dispatch<GetCategoriesI>,
    getState: () => AppState,
    api: (arg0: DocumentNode) => ApiType
  ) => {
    const { applies, chosenUsage } = getState().catalog;
    if (applies && chosenUsage) {
      dispatch({
        type: GET_CATEGORIES,
        payload: (await api(categoriesByUsageQuery(applies, chosenUsage))).data
          .categories,
      });
    }
  };

export const fetchItems =
  () =>
  async (
    dispatch: Dispatch<GetItemI>,
    getState: () => AppState,
    api: (arg0: DocumentNode) => ApiType
  ) => {
    const { chosenCategory } = getState().catalog;
    if (chosenCategory) {
      dispatch({
        type: GET_ITEMS,
        payload: (await api(itemsByCategoryQuery(chosenCategory.id))).data
          .categories_by_pk.items,
      });
    }
  };

export const setApplies =
  (element: string) => (dispatch: Dispatch<SetAppliesI>) => {
    dispatch({
      type: SET_APPLIES,
      payload: element,
    });
  };

export const setCatalog =
  (payload: initialCatalogStateI) => (dispatch: Dispatch<SetCatalogI>) => {
    dispatch({
      type: SET_CATALOG,
      payload,
    });
  };

export const clearCatalog = () => (dispatch: Dispatch<ClearCatalogI>) => {
  dispatch({ type: CLEAR_CATALOG });
};
