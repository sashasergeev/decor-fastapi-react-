import DecorItemInterface from "../../../../api/DecorItemInterface";
import {
  GET_USAGES,
  APPLY_ITEM,
  SET_ITEM_LENGTH,
  RESET_ITEM,
  initialUsagesStateI,
  UsageActionTypesAll,
} from "../types";

const usageReducer = (
  state: initialUsagesStateI = {},
  action: UsageActionTypesAll
): initialUsagesStateI => {
  switch (action.type) {
    case GET_USAGES:
      return action.payload;
    case APPLY_ITEM:
      return {
        ...state,
        [action.usage]: {
          ...state[action.usage],
          chosen: action.payload,
        },
      };
    case SET_ITEM_LENGTH:
      // const item = {
      //   ...state[action.usage].chosen,
      //   size: action.size,
      // } as DecorItemInterface;
      return {
        ...state,
        [action.usage]: {
          ...state[action.usage],
          chosen: {
            ...state[action.usage].chosen,
            size: action.size,
          } as DecorItemInterface,
        },
      };
    case RESET_ITEM:
      return {
        ...state,
        [action.usage]: {
          ...state[action.usage],
          chosen: false,
        },
      };
    default:
      return state;
  }
};

export default usageReducer;
