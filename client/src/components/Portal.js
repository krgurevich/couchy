import React from "react";

// Import Listing component
import Listing from "./Listing";

// Import CSS
import "../styles/Portal.css";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-solid";

// Import CSS

const Portal = () => {
  return (
    <div className="container-fluid">
      <h2> Dashboard</h2>
      <hr />
      <h3>
        Welcome,{" "}
        <FontAwesomeIcon className="card-attr font-awesome" icon={faUser} />
      </h3>
      <div className="container">
        <button type="button" className="btn btn-danger">
          Create New Listing
        </button>
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
              Update
            </button>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
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
              Update
            </button>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
