import React from "react";
import { Link } from "react-router-dom";
import H2 from "./H2";
import P from "./P";

const ContentPreviewItem = (props) => {
  const { title, previewUrl, description, url } = props;
  return (
    <a href={url}>
      <div className="content-preview-item d-flex row py-4">
        <div className="preview-container col-6 col-md-4">
          <img src={previewUrl} />
        </div>
        <div className="web col-2" />
        <div className="col-6 d-flex flex-column">
          <H2 clickable>{title}</H2>
          <P>{description}</P>
        </div>
      </div>
    </a>
  );
};

export default ContentPreviewItem;
