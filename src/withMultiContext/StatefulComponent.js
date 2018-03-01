import React from "react";
import { withThemeAndI18n } from "./withThemeAndI18n";
import { styles, langs } from "../consts";

@withThemeAndI18n
export default class StatefulComponent extends React.PureComponent {
  render() {
    const { theme, lang } = this.props;
    const langSet = langs[lang];
    return (
      <div style={styles[theme]}>
        StatefulComponent
        <p>with theme: {langSet && langSet[theme]}</p>
        <p>with lang: {lang}</p>
      </div>
    );
  }
}
