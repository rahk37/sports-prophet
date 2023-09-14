import React from "react";
import "../styles/components/Selector.scss";

function Selector() {
  return (
    <div className="selector">
      <h2 className="selector-header">Select a home and an away team:</h2>
      <div className="form-elements">
        <input className="input" placeholder="Home Team" type="text" />
        <input className="input" placeholder="Away Team" type="text" />
        <button className="btn-form">View Results</button>
      </div>
    </div>
  );
}

export default Selector;
