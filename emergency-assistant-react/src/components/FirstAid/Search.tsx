import React, { useState } from "react";
import "./Search.css";

interface FASearchProps {
  onSearchClick: (value: string) => void;
}

const Search: React.FC<FASearchProps> = ({ onSearchClick }) => {
  const [searchValue, setSearchValue] = useState("");

  const FASearchHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSearchClick(searchValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
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
              onChange={handleInputChange}
            />
            <button className="btn btn-primary" onClick={FASearchHandler}>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
