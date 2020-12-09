import React, { Fragment } from "react";

export default (props) => {
  return (
    <div className="text-overlay-container">
      <h1 className="H1">{props.children}</h1>
      <h1 className="H1 overlay">{props.children}</h1>
    </div>
  );
};
