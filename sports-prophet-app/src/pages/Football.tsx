import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Selector from "../components/Selector";

function Football() {
  return (
    <>
      <NavBar />
      <Hero
        isHomeHero={false}
        title={"Football Predictor"}
        content={
          "Unleash your inner football oracle and score big with our game-changing predictions."
        }
        showButtons={false}
      />
      <Selector />
    </>
  );
}

export default Football;
