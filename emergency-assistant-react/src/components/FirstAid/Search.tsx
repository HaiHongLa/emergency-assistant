import React from "react";
import "./Search.css";

const Search: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">First Aid Instructions</h1>
          <p className="lead">
            Search for specific first aid instructions using the search bar
            below.
          </p>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search instructions"
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

export default Search;
