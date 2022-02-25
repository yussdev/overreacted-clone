import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector, toggleThemeAction } from "../../redux/theme";
import { Switch } from "../Switch";

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);
  const toggleTheme = () => dispatch(toggleThemeAction());

  // Changing html[data-theme] value based on store theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div>
      <Switch onChange={toggleTheme} />
    </div>
  );
};
