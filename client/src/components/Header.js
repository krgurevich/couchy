import React, { useState } from "react";

// Import CSS
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCouch } from "@fortawesome/fontawesome-free-solid";

// Set State for Current Page and Handle Page Change
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    // Navbar including mobile design functionality
    <>
      <nav className="navbar">
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </span>
        <div className="logo-container">
          <p className="logo">couchy&nbsp;</p>
          <FontAwesomeIcon className="couchy font-awesome" icon={faCouch} />
        </div>
        <ul
          className="main-nav"
          id="js-menu"
          style={{ display: isOpen && "block" }}
        >
          <Link to="/">
            <li className={currentPage === "/" ? "active" : ""}>Home</li>
          </Link>
          <Link to="/explore">
            <li className={currentPage === "explore" ? "active" : ""}>
              Explore
            </li>
          </Link>
          <Link to="/contact">
            <li className={currentPage === "contact" ? "active" : ""}>
              Contact
            </li>
          </Link>
          <Link to="/login">
            <li className={currentPage === "login" ? "active" : ""}>Login</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
