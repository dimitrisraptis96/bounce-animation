import React from "react";
import Logo from "./Logo";

import "./loading.css";

function Loading() {
  return (
    <div className="container">
      <Logo className="logo" />
      <div className="shadow" />
    </div>
  );
}

export default Loading;
