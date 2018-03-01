import React from "react";
import { withMultiContext } from "with-context";

export const ThemeContext = React.createContext("light");
export const LangContext = React.createContext("en");
export const withThemeAndI18n = withMultiContext({
  theme: ThemeContext,
  lang: LangContext
});
