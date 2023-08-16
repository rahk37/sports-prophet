import React from "react";
import "../../../styles/components/Home/Hero/Hero.scss";

function Hero() {
  return (
    <div className="hero">

      <div className="mountain">
        <div className="mountain-top">
          <div className="mountain-cap-1"></div>
          <div className="mountain-cap-2"></div>
          <div className="mountain-cap-3"></div>
        </div>
      </div>
      <div className="mountain-two">
        <div className="mountain-top">
          <div className="mountain-cap-1"></div>
          <div className="mountain-cap-2"></div>
          <div className="mountain-cap-3"></div>
        </div>
      </div>
      <div className="mountain-three">
        <div className="mountain-top">
          <div className="mountain-cap-1"></div>
          <div className="mountain-cap-2"></div>
          <div className="mountain-cap-3"></div>
        </div>
      </div>
      <div className="cloud"></div>

      <div className="mountain2">
        <div className="mountain-top2">
          <div className="mountain-cap-12"></div>
          <div className="mountain-cap-22"></div>
          <div className="mountain-cap-32"></div>
        </div>
      </div>
      <div className="mountain-two2">
        <div className="mountain-top2">
          <div className="mountain-cap-12"></div>
          <div className="mountain-cap-22"></div>
          <div className="mountain-cap-32"></div>
        </div>
      </div>
      <div className="mountain-three2">
        <div className="mountain-top2">
          <div className="mountain-cap-12"></div>
          <div className="mountain-cap-22"></div>
          <div className="mountain-cap-32"></div>
        </div>
      </div>
      <div className="cloud2"></div>

      <div className="hero-content">
        <h1 className="hero-header">Imagine a Magic Crystal...</h1>
        <p className="hero-p">
          ...that predicts professional sports outcomes with remarkable
          precision. Witness predictions materialize with a simple tap. What's
          so enchanting? It's absolutely free, making predicting game outcomes a
          breeze.
        </p>
        <div className="hero-btns">
          <button className="btn btn-hero-secondary">Get Started</button>
          <button className="btn btn-hero-primary">Predict Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
