import { AnyAction } from "redux";
import { RootState } from "../store";

const TOGGLE_THEME = "TOGGLE_THEME";

type ThemeState = "light" | "dark";

export const themeReducer = (
  state: ThemeState = "light",
  action: AnyAction
): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export const toggleThemeAction = () => ({
  type: TOGGLE_THEME,
});

export const themeSelector = (state: RootState) => state.theme;
