import React from "react";
import { withTheme } from "./withTheme";
import { styles } from "../consts";

@withTheme
export default class StatefulComponent extends React.PureComponent {
  render() {
    const { theme } = this.props;
    return (
      <div style={styles[theme]}>StatefulComponent with theme: {theme}</div>
    );
  }
}
