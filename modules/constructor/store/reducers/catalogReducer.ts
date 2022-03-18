import { initialCatalogStateI } from "../types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from ".";
import { CategoryI } from "../../../../api/Catalog";
import {
  categoriesByUsageQuery,
  itemsByCategoryQuery,
} from "../../../../queries";
import DecorItemInterface from "../../../../api/DecorItemInterface";

const initialState: initialCatalogStateI = {
  applies: false,
  chosenUsage: false,
  chosenCategory: false,
  categories: [],
  items: [],
};

export const fetchCategories = createAsyncThunk<
  CategoryI[],
  void,
  AsyncThunkConfig
>("catalog/fetchCategories", async (_, { getState, extra: { api } }) => {
  const { applies, chosenUsage } = getState().catalog;
  if (applies && chosenUsage) {
    const categories = (await api(categoriesByUsageQuery(applies, chosenUsage)))
      .data.categories; //as CategoryI[];
    return categories;
  }
});

export const fetchItems = createAsyncThunk<
  DecorItemInterface[],
  void,
  AsyncThunkConfig
>("catalog/fetchItems", async (_, { getState, extra: { api } }) => {
  const { chosenCategory } = getState().catalog;
  if (chosenCategory) {
    const items = (await api(itemsByCategoryQuery(chosenCategory.id))).data
      .categories_by_pk.items;
    return items;
  }
});

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setApplies: (state, action: PayloadAction<string>) => {
      state.applies = action.payload;
      return state;
    },
    setCatalog: (
      state,
      action: PayloadAction<Partial<initialCatalogStateI>>
    ) => {
      state = { ...state, ...action.payload };
      return state;
    },
    clearCatalog: (state) => {
      state.chosenUsage = false;
      state.categories = [];
      state.chosenCategory = false;
      state.items = [];
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      return state;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      return state;
    });
  },
});

export const { setApplies, setCatalog, clearCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;
