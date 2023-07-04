import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NearestHospitals.css";

interface Hospital {
  id: string;
  name: string;
  address: string;
  distance: number;
  mapsUrl: string;
  phoneNumber: string;
}

interface HospitalListProps {
  enteredAddress: string;
}

const HospitalList: React.FC<HospitalListProps> = ({ enteredAddress }) => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        let apiUrl = "";

        if (enteredAddress) {
          // Use geocoding to get latitude and longitude of the entered address
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
              enteredAddress
            )}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
          );
          const { results } = response.data;

          if (results.length > 0) {
            const { lat, lng } = results[0].geometry.location;
            setLatitude(lat);
            setLongitude(lng);
            apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/nearest-hospitals/findNearestHospitals/${lat}/${lng}`;
          } else {
            console.error("No results found for the entered address.");
          }
        } else {
          // Use getCurrentPosition if enteredAddress is empty
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
              },
              (error) => {
                console.error("Error getting user's location:", error);
              }
            );
          } else {
            console.error("Geolocation is not supported by this browser.");
          }

          apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/nearest-hospitals/findNearestHospitals/${latitude}/${longitude}`;
        }

        console.log(apiUrl);

        const response = await axios.get(apiUrl);
        setHospitals(response.data);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    };

    fetchHospitals();
  }, [enteredAddress, latitude, longitude]);

  return (
    <div>
      <div className="container">
        <section>
          <div className="hospital-list">
            {hospitals.map((hospital: Hospital, index) => (
              <div className="hospital-card card" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{hospital.name}</h5>
                  <p className="card-text">Location: {hospital.address}</p>
                  <p className="card-text">Telephone: {hospital.phoneNumber}</p>
                  <p className="card-text">
                    Approximate distance: {hospital.distance}
                  </p>
                  <div className="card-buttons">
                    <a
                      href={hospital.mapsUrl}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Map
                    </a>{" "}
                    &nbsp;
                    <a href={`tel:${hospital.phoneNumber}`}>
                      <button className="btn btn-primary">Call</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HospitalList;
