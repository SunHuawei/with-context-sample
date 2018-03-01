import React from "react";
import { ThemeContext } from "./withTheme";
import StatefulComponent from "./StatefulComponent";
import StatelessFunctionalComponent from "./StatelessFunctionalComponent";

export default class WithContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <h3>Click the bellow button to see the change</h3>
        <button onClick={this.toggleTheme}>switch theme</button>
        <StatefulComponent />
        <StatelessFunctionalComponent />
      </ThemeContext.Provider>
    );
  }
}
