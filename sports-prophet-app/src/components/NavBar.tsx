import React, {useState} from "react";
import "../styles/components/NavBar.scss";

function NavBar() {
    const [isNavOpen, setOpenNav] = useState(false);

    const openNav = () => {
        setOpenNav(!isNavOpen);
    };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="logo">SportsProphet</div>

      <button className="nav-btn" onClick={openNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
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
    </nav>
  );
}

export default NavBar;
