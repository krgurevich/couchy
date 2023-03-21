import React, { useState } from "react";

// Import CSS
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCouch } from "@fortawesome/fontawesome-free-solid";
import { useUserContext } from "../context/UserContext";
import auth from "../utils/auth";

// Set State for Current Page and Handle Page Change
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useUserContext();
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
          <Link className="links" to="/">
            <li className={currentPage === "/" ? "active" : ""}>Home</li>
          </Link>
          <Link className="links" to="/explore">
            <li className={currentPage === "explore" ? "active" : ""}>
              Explore
            </li>
          </Link>
          <Link className="links" to="/contact">
            <li className={currentPage === "contact" ? "active" : ""}>
              Contact
            </li>
          </Link>
          {!isAuthenticated && (
            <Link className="links" to="/login">
              <li className={currentPage === "login" ? "active" : ""}>Login</li>
            </Link>
          )}
          {isAuthenticated && (
            <Link className="links" to="/portal">
              <li className={currentPage === "portal" ? "active" : ""}>
                {user.username}
              </li>
            </Link>
          )}
          {isAuthenticated && <li onClick={() => auth.logout()}>Logout</li>}
        </ul>
      </nav>
    </>
  );
}
