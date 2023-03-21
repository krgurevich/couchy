import React, { useState } from "react";
import { useQuery } from "@apollo/client";
// import { Link } from "react-router-dom";

// Import Listing component
import Listing from "./Listing";

// Import CSS
import "../styles/Explore.css";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/fontawesome-free-solid";

import { GET_LISTINGS } from "../utils/queries";

const Explore = () => {
  const { loading, error, data } = useQuery(GET_LISTINGS);
  const listings = data?.getListings || [];
  console.log(listings);
  return (
    <>
      <h2>
        Explore Listings <FontAwesomeIcon icon={faHome} />
      </h2>
      <div className="container">
        <div className="row">
          <div className="card col">
            {listings?.map((item) => (
              <Listing key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
