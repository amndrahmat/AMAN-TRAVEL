import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //FUNCTION handleClick ADALAH PERUBAHAN HAMBURGER
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //JIKA LAYAR KURANG DARI 960PX MAKA HAMBURGER DIBUAT DAN TAB HILANG
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* LOGO */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* AMAN BACK PACK STORY
            <i class="fab fa-typo3" /> */}
            <img className="logo" src="./images/logo.png"></img>
          </Link>

          {/* HAMBURGEN ICON */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* TAB  */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/travel"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Travel
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tips" className="nav-links" onClick={closeMobileMenu}>
                Tips
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
