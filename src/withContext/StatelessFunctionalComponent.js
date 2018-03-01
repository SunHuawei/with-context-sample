import React from "react";
import { withTheme } from "./withTheme";
import { styles } from "../consts";

const StatelessFunctionalComponent = ({ theme }) => {
  return (
    <div style={styles[theme]}>
      StatelessFunctionalComponent with theme: {theme}
    </div>
  );
};

export default withTheme(StatelessFunctionalComponent);
