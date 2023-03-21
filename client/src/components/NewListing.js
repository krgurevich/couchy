import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_LISTING } from "../utils/mutations";

// Import CSS
import "../styles/NewListing.css";

const NewListing = () => {
  const [value, setValue] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [createListingMutation] = useMutation(CREATE_LISTING);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createListingMutation({
      variables: { input: value },
    });
  };
  return (
    <>
      <hr></hr>
      <div className="container">
        <h4>Create New Listing</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value.title}
            onChange={handleChange}
            placeholder="Enter Title"
            name="title"
          />
          <input
            type="text"
            value={value.description}
            onChange={handleChange}
            placeholder="Enter Description"
            name="description"
          />
          <input
            type="text"
            value={value.price}
            onChange={handleChange}
            placeholder="Enter Price"
            name="price"
          />
          <input
            type="text"
            value={value.location}
            onChange={handleChange}
            placeholder="Enter Location"
            name="location"
          />

          <input
            type="file"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewListing;
