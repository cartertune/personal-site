import React from "react";
import { Link } from "react-router-dom";
import CarterCharacterScene from "../components/3d-components/CarterCharacterScene";
import CarterImage from "../components/CarterImage";
import CarterTuneText from "../components/CarterTuneText";
import H2 from "../components/H2";

const HomePage = (props) => {
  return (
    <div className="home-page">
      <div className="row h-75">
        <div className="col-6 col-lg-8 title-container">
          <CarterTuneText />
        </div>
        <div className="col links-container">
          <Link to="/projects">
            <H2 clickable>Projects</H2>
          </Link>
          <H2 clickable>Books</H2>
          <H2 clickable>Blog</H2>
          <H2 clickable>About</H2>
        </div>
      </div>
      <div className="hardwood-floor">
        <div className="container">
          <div className="row h-100">
            <div className="col-12 h-100">
              <div className="carter-image-container">
                {/* <CarterCharacterScene /> */}
                <CarterImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
