import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Football from "./pages/Football";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/football" Component={Football} />
      </Routes>
    </>
  );
}

export default App;
