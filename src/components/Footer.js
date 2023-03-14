import React from "react";

// Import CSS
import "../styles/Footer.css";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-social-links">
          <a href="https://facebook.com" title="Facebook">
            <FontAwesomeIcon className="font-awesome" icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/"
            title="Instagram"
          >
            <FontAwesomeIcon className="font-awesome" icon={faInstagram} />
          </a>
          <a
            href="https://www.twitter.com"
            title="Twitter"
          >
            <FontAwesomeIcon className="font-awesome" icon={faTwitter} />
          </a>
        </div>
        <p className="footer-p">
          &copy; 2023 couchy | all rights reserved
        </p>
      </footer>
    </>
  );
}
