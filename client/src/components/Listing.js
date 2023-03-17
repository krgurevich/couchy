import React from "react";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/fontawesome-free-solid";

const Listing = ({
  _id,
  title,
  description,
  price,
  address,
  amenities,
  photos,
  host,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="card">
      <img className="card-img-top img-fluid" src={photos} alt="Property" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <FontAwesomeIcon className="font-awesome" icon={faHome} /> {address}
        </li>
        <li className="list-group-item">Listing ID: {_id}</li>
        <li className="list-group-item">Price: {price}</li>
        <li className="list-group-item">Amenities: {amenities}</li>
        <li className="list-group-item">Host Name: {host}</li>
        <li className="list-group-item">Listing Created: {createdAt}</li>
        <li className="list-group-item">Listing Updated: {updatedAt}</li>
      </ul>
    </div>
  );
};

export default Listing;
