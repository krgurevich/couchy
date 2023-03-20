import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

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
  console.log(data);
  return (
    <>
      <h2>
        Explore Listings <FontAwesomeIcon icon={faHome} />
      </h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            {data?.map((item) => (
              <Listing key={item._id} {...item} />
            ))}
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
