import React from "react";
import CarterTuneText from "./CarterTuneText";

const Page = (props) => {
  const { children } = props;

  return (
    <div className="page">
      <div className="header">
        <div className="container pt-5">
          <CarterTuneText small />
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Page;
