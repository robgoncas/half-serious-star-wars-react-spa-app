import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <div className="container">
        <Link to="/" className="nav-logo">
          <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            width={120} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleNavbar}>
                Spaceships
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pilots" className="nav-link" onClick={toggleNavbar}>
                Pilots
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/films" className="nav-link" onClick={toggleNavbar}>
                Films
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;