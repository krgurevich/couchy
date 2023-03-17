import React from "react";

// Import Listing component
import Listing from "./Listing";

// Import CSS
import "../styles/Explore.css";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/fontawesome-free-solid";

const Explore = () => {
  return (
    <>
      <h2>
        Explore Listings <FontAwesomeIcon icon={faHome} />
      </h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <Listing
              title
              description
              price
              address
              amenities
              photos
              host
              createdAt
              updatedAt
            />
            <button type="button" className="btn btn-danger">
              Contact Host
            </button>
          </div>
          <div className="col-6">
            <Listing
              title
              description
              address
              price
              amenities
              photos
              host
              createdAt
              updatedAt
            />
            <button type="button" className="btn btn-danger">
              Contact Host
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
