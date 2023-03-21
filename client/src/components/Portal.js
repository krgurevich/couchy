import React from "react";
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/client";
import NewListing from "./NewListing";

// Import Listing component
import Listing from "./Listing";

// Import CSS
import "../styles/Portal.css";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-solid";

// Import CSS

import Auth from "../utils/auth";
import { GET_LISTING_USER } from "../utils/queries";

import {
  // CREATE_LISTING,
  // UPDATE_LISTING,
  DELETE_LISTING,
} from "../utils/mutations";

const Portal = () => {
  const { loading, error, data } = useQuery(GET_LISTING_USER);
  // const [updateListingMutation] = useMutation(UPDATE_LISTING);
  const [deleteListingMutation] = useMutation(DELETE_LISTING);
  const handleDeleteListing = (id) => {
    deleteListingMutation(id);
  };

  return (
    <div className="container">
      <h2> Dashboard</h2>
      {Auth.loggedIn() ? (
        <><h3>
          Welcome!&nbsp;
          <FontAwesomeIcon className="card-attr font-awesome" icon={faUser} />
        </h3><NewListing></NewListing><hr /><div className="container">
            <h4>View All Listings</h4>
            <div className="row">
              <div className="col-6">
                {data?.map((item) => (
                  <>
                    <Listing key={item._id} {...item} />
                    <button type="button" className="btn btn-danger">
                      Update
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteListing(item._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </>
                ))}
              </div>
              <hr></hr>
            </div>
          </div></>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/LoginForm">Login</Link> or <Link to="/SignupForm">Signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Portal;
