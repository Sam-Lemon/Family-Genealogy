import React from "react";
import "../styles/HomePage.css";
import TreeImage from "../imagesSrc/LichenTree.jpg";

function HomePage() {
  return (
    <>
      <h1 className="lavishly-yours">Our Family Trees</h1>
      <div className="img-container">
        <img src={TreeImage} alt="Luscious tree" />
      </div>
    </>
  );
}

export default HomePage;
