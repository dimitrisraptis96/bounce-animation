import React from "react";
import ReactDOM from "react-dom";
import Loading from "./Loading";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Loading />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
