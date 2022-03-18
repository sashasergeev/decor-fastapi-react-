import DecorItemInterface from "../../../../api/DecorItemInterface";
import { initialUsagesStateI } from "../types";
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { AsyncThunkConfig } from ".";
import { usagesQuery } from "../../../../queries";
import { DecorUsage } from "../../../../api/ConstructorInterfaces";

const initialState: initialUsagesStateI = {};

export const fetchUsages = createAsyncThunk<
  initialUsagesStateI,
  void,
  AsyncThunkConfig
>("usage/fetchByApplies", async (_, { getState, extra: { api } }) => {
  const { applies } = getState().catalog;
  const data: DecorUsage[] =
    applies && (await api(usagesQuery(applies))).data.usages;
  return data.reduce(
    (obj, e) => ({ ...obj, [e.name]: { ...e, chosen: false } }),
    {}
  );
});

const usageSlice = createSlice({
  name: "usage",
  initialState,
  reducers: {
    applyItem: (
      state,
      {
        payload,
      }: PayloadAction<{ decor: DecorItemInterface; chosenUsage: string }>
    ) => {
      const { decor, chosenUsage } = payload;
      decor.price = decor.height * decor.width * 10;
      state[chosenUsage]["chosen"] = decor;
      return state;
    },
    applyItemLength: (
      state,
      { payload }: PayloadAction<{ usage: string; size: number }>
    ) => {
      const { usage, size } = payload;
      const item = {
        ...(current(state)[usage]["chosen"] as DecorItemInterface),
      };
      item.size = size;
      state[usage].chosen = item;
      return state;
    },
    resetItem: (state, action: PayloadAction<string>) => {
      state[action.payload]["chosen"] = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsages.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { applyItem, applyItemLength, resetItem } = usageSlice.actions;
export default usageSlice.reducer;
