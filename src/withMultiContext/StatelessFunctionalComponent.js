import React from "react";
import { withThemeAndI18n } from "./withThemeAndI18n";
import { langs, styles } from "../consts";

const StatelessFunctionalComponent = ({ theme, lang }) => {
  const langSet = langs[lang];
  return (
    <div style={styles[theme]}>
      StatelessFunctionalComponent
      <p>with theme: {langSet && langSet[theme]}</p>
      <p>with lang: {lang}</p>
    </div>
  );
};

export default withThemeAndI18n(StatelessFunctionalComponent);
