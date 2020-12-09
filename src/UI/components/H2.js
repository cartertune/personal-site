import React, { useState } from "react";

export default (props) => {
  const { clickable } = props;
  if (clickable) {
    return (
      <div className="text-overlay-container clickable">
        <h2 className="H2">{props.children}</h2>
        <h2 className="H2 overlay">{props.children}</h2>
      </div>
    );
  }

  return <h2 className="H2">{props.children}</h2>;
};
