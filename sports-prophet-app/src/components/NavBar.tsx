import React, { useState } from "react";
import "../styles/components/NavBar.scss";

function NavBar() {
  const [isNavOpen, setOpenNav] = useState(false);

  const openNav = () => {
    setOpenNav(!isNavOpen);
  };

  const userLogin = () => {
    console.log("not implemented yet");
  };

  return (
    <div className="navigation">
      <nav className={`navbar ${isNavOpen ? "open" : ""}`}>
        <div className="logo">SportsProphet</div>

        <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/football">Football</a>
          </li>
          <li>
            <a href="/baskeball">Basketball</a>
          </li>
          <li>
            <a href="/hockey">Hockey</a>
          </li>
          <li>
            <a href="/ufc">UFC</a>
          </li>
        </ul>

        <button className="login-btn" onClick={userLogin}>
          Login
        </button>

        <button
          className="nav-btn"
          onClick={openNav}
        >
          <span className={`bar bar1 ${isNavOpen ? "cross1" : ""}`}></span>
          <span className={`bar bar2 ${isNavOpen ? "cross2" : ""}`}></span>
          <span className={`bar bar3 ${isNavOpen ? "cross3" : ""}`}></span>
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
