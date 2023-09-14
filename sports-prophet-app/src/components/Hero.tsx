import React from "react";
import "../styles/components/Hero.scss";

function Hero(props: {
  isHomeHero: boolean;
  title: string;
  content: string;
  showButtons: boolean;
}) {
  return (
    <div
      className={
        props.isHomeHero ? "hero home-padding" : "hero feature-padding"
      }
    >
      <div className="hero-content">
        <h1 className="hero-header">{props.title}</h1>
        <p className="hero-p">{props.content}</p>
        {props.showButtons ? (
          <div className="hero-btns">
            <button className="btn btn-hero-secondary">Get Started</button>
            <button className="btn btn-hero-primary">Predict Now</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Hero;
