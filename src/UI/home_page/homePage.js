import React from "react";
import CarterTuneText from "../components/CarterTuneText";
import H2 from "../components/H2";
import carter from "../resources/Carter yoga mat (No BG).png";

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
      <div className="row hardwood-floor">
        <div className="col-12 h-100">
          <div className="carter-image-container">
            <img src={carter}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
