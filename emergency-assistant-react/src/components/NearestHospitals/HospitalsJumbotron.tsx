import React, { useState } from "react";
import "./NearestHospitals.css";

interface JumbotronProps {
  onSearchClick: (value: string) => void;
}

const HospitalsJumbotron: React.FC<JumbotronProps> = ({ onSearchClick }) => {
  const [searchValue, setSearchValue] = useState("");

  const hospitalSearchHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSearchClick(searchValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

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
              onChange={handleInputChange}
            />
            <button className="btn btn-primary" onClick={hospitalSearchHandler}>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HospitalsJumbotron;
