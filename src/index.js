import React from "react";
import { render } from "react-dom";
import WithContextDemo from "./withContext";
import WithMultiContextDemo from "./withMultiContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoType: "withContext"
    };

    this.switchDemo = this.switchDemo.bind(this);
  }

  switchDemo(e) {
    this.setState({ demoType: e.target.value });
  }

  render() {
    const Comp =
      this.state.demoType === "withMultiContext"
        ? WithMultiContextDemo
        : WithContextDemo;
    return (
      <div style={{ maxWidth: 760, margin: "50px auto" }}>
        <div>
          <select onChange={this.switchDemo}>
            <option value="withContext">withContext</option>
            <option value="withMultiContext">withMultiContext</option>
          </select>
          <a
            style={{ float: "right" }}
            href="https://codesandbox.io/s/jqkyy1oyv"
          >
            Checkout source code
          </a>
        </div>
        <div style={{ padding: "30px 0" }}>
          <Comp />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
