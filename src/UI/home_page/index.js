import React from "react";
import CarterTuneText from "../components/CarterTuneText";
import H2 from "../components/H2";

const HomePage = (props) => {
  return (
    <div className="home-page">
      <div className="row h-75">
        <div className="col-8 title-container">
          <CarterTuneText />
        </div>
        <div className="col-4 links-container">
          <H2 clickable>Projects</H2>
          <H2 clickable>Books</H2>
          <H2 clickable>Blog</H2>
          <H2 clickable>About</H2>
        </div>
      </div>
      <div className="hardwood-floor" />
    </div>
  );
};

export default HomePage;
