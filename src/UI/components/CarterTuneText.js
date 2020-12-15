import React from "react";
import classnames from "classnames";
import H1 from "../components/H1";
import { Link } from "react-router-dom";
const CarterTuneText = (props) => {
  const { small } = props;
  const cN = classnames("carter-tune", { small });

  return (
    <Link className={cN} to="/">
      <H1>Carter</H1>
      <H1 className="tune">Tune</H1>
    </Link>
  );
};

export default CarterTuneText;
