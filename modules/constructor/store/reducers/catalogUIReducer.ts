import { initialCatalogUII } from "../types";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const initialState: initialCatalogUII = {
  hideSettings: true,
  hideSizeSets: false,
  hideDecSets: false,
  hidePrice: true,
};

const catalogUISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setUI: (state, action: PayloadAction<{ key: string; value: boolean }>) => {
      const { key, value } = action.payload;
      state[key] = value;
      return state;
    },
    toggleSettings: (state, action: PayloadAction<string | boolean>) => {
      const currState = current(state);
      if (!action.payload) {
        if (currState.hideSettings) {
          state["hideSettings"] = false;
          state["hidePrice"] = true;
        } else {
          state["hideSettings"] = true;
        }
      } else {
        state["hideSettings"] = false;
        state["hidePrice"] = true;
      }
      return state;
    },
    togglePrice: (state) => {
      const currState = current(state);
      if (currState.hidePrice) {
        state["hidePrice"] = false;
        state["hideSettings"] = true;
      } else {
        state["hidePrice"] = true;
      }
      return state;
    },
  },
  extraReducers: {
    "scene/setFocus": (state) => {
      state["hideSettings"] = true;
      return state;
    },
  },
});

export const { setUI, togglePrice, toggleSettings } = catalogUISlice.actions;
export default catalogUISlice.reducer;
