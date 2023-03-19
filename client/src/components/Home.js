import React from "react";

// Import CSS
import "../styles/Home.css";

// Import Profile Image
import home from "../images/home.png";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="home-left-container col-lg-6">
            <p className="home-heading">Still dreaming of your next trip?</p>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src={home} alt="home"></img>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <h1>About Us</h1>
        <p className="home-p">
          Explore unique accommodations with couchy. It can be a spare room, it
          can be a shed, it can even be a couch...
        </p>
        <p className="home-p">
          Couchy brings communities together! It allows people to connect and
          build long lasting relationships whilst pursuing their travel dreams
          and discovering the world around them.
        </p>
      </div>
    </>
  );
}
