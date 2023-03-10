import React from "react";

// Import CSS


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
          <a href="https://github.com/krgurevich" title="GitHub">
            <FontAwesomeIcon className="font-awesome" icon={faFacebook} />
          </a>
          <a
            href="https://www.linkedin.com/in/kristinagurevich"
            title="LinkedIn"
          >
            <FontAwesomeIcon className="font-awesome" icon={faInstagram} />
          </a>
          <a
            href="https://stackoverflow.com/users/5128386/kristina-g"
            title="Stackoverflow"
          >
            <FontAwesomeIcon className="font-awesome" icon={faTwitter} />
          </a>
        </div>
        <p className="footer-p">
          &copy; 2023 couchy | All Rights Reserved
        </p>
      </footer>
    </>
  );
}
