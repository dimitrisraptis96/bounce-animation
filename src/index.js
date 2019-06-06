import React from "react";
import ReactDOM from "react-dom";
import Loading from "./Loading";
import Logo from "./Logo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Loading logo={<Logo />} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
