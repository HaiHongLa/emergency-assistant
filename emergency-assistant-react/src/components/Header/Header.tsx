import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Emergency and First Aid Assistant
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/first-aid-instructions">
                  First Aid Instructions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nearest-hospitals">
                  Nearest Hospitals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/emergency-contacts">
                  Emergency Contacts
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Login/Signup
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
