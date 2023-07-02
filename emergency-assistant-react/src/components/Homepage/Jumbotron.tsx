import React from "react";
import "./Jumbotron.css"

const Jumbotron: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Emergency and First Aid Assistant</h1>
          <p className="lead">
            Be prepared for emergencies with our comprehensive first aid
            assistant.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Contact nearest healthcare facilities
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
