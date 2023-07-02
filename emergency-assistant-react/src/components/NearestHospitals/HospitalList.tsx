import React from "react";
import "./NearestHospitals.css";

const HospitalList: React.FC = () => {
  return (
    <div>
      <div className="container">
        <section>
          <div className="hospital-list">
            <div className="hospital-card card">
              <div className="card-body">
                <h5 className="card-title">Hospital 1</h5>
                <p className="card-text">Location: Address 1</p>
                <p className="card-text">Telephone: 123-456-7890</p>
                <div className="card-buttons">
                  <button className="btn btn-primary">View on Map</button>&nbsp;
                  <button className="btn btn-primary">Call</button>
                </div>
              </div>
            </div>
            <div className="hospital-card card">
              <div className="card-body">
                <h5 className="card-title">Hospital 2</h5>
                <p className="card-text">Location: Address 2</p>
                <p className="card-text">Telephone: 123-456-7890</p>
                <div className="card-buttons">
                  <button className="btn btn-primary">View on Map</button>&nbsp;
                  <button className="btn btn-primary">Call</button>
                </div>
              </div>
            </div>
            <div className="hospital-card card">
              <div className="card-body">
                <h5 className="card-title">Hospital 3</h5>
                <p className="card-text">Location: Address 3</p>
                <p className="card-text">Telephone: 123-456-7890</p>
                <div className="card-buttons">
                  <button className="btn btn-primary">View on Map</button>&nbsp;
                  <button className="btn btn-primary">Call</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HospitalList;
