import React, { useState } from "react";

// Import CSS
import "../styles/Header.css";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCouch } from "@fortawesome/fontawesome-free-solid";

// Set State for Current Page and Handle Page Change
export default function Header({ currentPage, handlePageChange }) {
  const [isOpen, setIsOpen] = useState(false);
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
          <li
            className={currentPage === "Home" ? "active" : ""}
            onClick={() => {
              handlePageChange("Home");
            }}
          >
            Home
          </li>
          <li
            className={currentPage === "Explore" ? "active" : ""}
            onClick={() => {
              handlePageChange("Explore");
            }}
          >
            Explore
          </li>
          <li
            className={currentPage === "Portal" ? "active" : ""}
            onClick={() => {
              handlePageChange("Portal");
            }}
          >
            Portal
          </li>
          <li
            className={currentPage === "Contact" ? "active" : ""}
            onClick={() => {
              handlePageChange("Contact");
            }}
          >
            Contact
          </li>
          <li
            className={currentPage === "Login" ? "active" : ""}
            onClick={() => {
              handlePageChange("LoginForm");
            }}
          >
            Login
          </li>
          <li
            className={currentPage === "Signup" ? "active" : ""}
            onClick={() => {
              handlePageChange("SignupForm");
            }}
          >
            Signup
          </li>
        </ul>
      </nav>
    </>
  );
}
