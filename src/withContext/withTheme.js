import React from "react";
import { withContext } from "with-context";

export const ThemeContext = React.createContext("light");
export const withTheme = withContext(ThemeContext, "theme");
