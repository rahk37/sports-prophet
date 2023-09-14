import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <Hero
        isHomeHero={true}
        title={"Imagine Elevated Intel..."}
        content={
          "...that provides you with professional sports outcome predictions with remarkable precision. Witness predictions materialize with a simple tap. What's so enchanting? It's absolutely free, making predicting game outcomes a breeze."
        }
        showButtons={true}
      />
    </>
  );
}

export default Home;
