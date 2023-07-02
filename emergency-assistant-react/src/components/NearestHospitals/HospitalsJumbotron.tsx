import React from "react";
import "./NearestHospitals.css";

const HospitalsJumbotron: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="jumbotron hospitals-jumbotron">
          <h1 className="display-4">Contact your nearest hospitals</h1>
          <p className="lead">
            Search for hospitals based on your location below
          </p>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter your location"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HospitalsJumbotron;
