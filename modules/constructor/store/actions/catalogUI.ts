import { Dispatch } from "redux";
import { AppState } from "../reducers";
import {
  SetUII,
  SET_UI,
  TogglePriceI,
  ToggleSettingsI,
  TOGGLE_PRICE,
  TOGGLE_SETTINGS,
} from "../types";

export const setUI =
  (key: string, value: boolean) => (dispatch: Dispatch<SetUII>) => {
    dispatch({
      type: SET_UI,
      key,
      value,
    });
  };

export const toggleSettings =
  (onItem: string | boolean = false) =>
  (dispatch: Dispatch<ToggleSettingsI>, getState: () => AppState) => {
    const { hideSettings } = getState().ui;
    if (!onItem) {
      dispatch({
        type: TOGGLE_SETTINGS,
        payload: hideSettings
          ? {
              hideSettings: false,
              hidePrice: true,
            }
          : {
              hideSettings: true,
            },
      });
    } else {
      dispatch({
        type: TOGGLE_SETTINGS,
        payload: {
          hideSettings: false,
          hidePrice: true,
        },
      });
    }
  };

export const togglePrice =
  () => (dispatch: Dispatch<TogglePriceI>, getState: () => AppState) => {
    const { hidePrice } = getState().ui;

    dispatch({
      type: TOGGLE_PRICE,
      payload: hidePrice
        ? {
            hidePrice: false,
            hideSettings: true,
          }
        : {
            hidePrice: true,
          },
    });
  };
