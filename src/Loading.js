import React from "react";
import "./loading.css";

function Loading({ logo }) {
  return (
    <div className="container">
      {React.cloneElement(logo, { className: "logo" })}
      <div className="shadow" />
    </div>
  );
}

export default Loading;
