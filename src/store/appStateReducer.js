import { ACTION } from "./actions";

export function appStateReducer(state, action) {
  switch (action.type) {
    case ACTION.TOGGLE_SECONDHEADER: {
      return {
        ...state,
        shouldShowSecondHeader: !state.shouldShowSecondHeader,
      };
    }
    case ACTION.SWITCH_TO_TAB: {
      return {
        ...state,
        currentTab: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
