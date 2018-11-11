import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Register from "./containers/Register/Register";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Register />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
