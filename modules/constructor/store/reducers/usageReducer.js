import { GET_USAGES, APPLY_ITEM, RESET_ITEM } from "../types";

const usageReducer = (state = {}, action) => {
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
