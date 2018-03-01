import React from "react";
import { ThemeContext, LangContext } from "./withThemeAndI18n";
import StatefulComponent from "./StatefulComponent";
import StatelessFunctionalComponent from "./StatelessFunctionalComponent";

export default class WithContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      lang: "en"
    };

    this.toggleTheme = this.toggleTheme.bind(this);
    this.toggleLang = this.toggleLang.bind(this);
  }

  toggleTheme() {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
  }

  toggleLang() {
    this.setState(({ lang }) => ({
      lang: lang === "en" ? "cn" : "en"
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <LangContext.Provider value={this.state.lang}>
          <h3>Click the bellow buttons to see the change</h3>
          <button onClick={this.toggleTheme}>switch theme</button>
          <button onClick={this.toggleLang}>switch lang</button>
          <StatefulComponent />
          <StatelessFunctionalComponent />
        </LangContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
