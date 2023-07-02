import React from "react";
import HospitalsJumbotron from "../components/NearestHospitals/HospitalsJumbotron";
import HospitalList from "../components/NearestHospitals/HospitalList";

const NearestHospitalsPage: React.FC = () => {
  return (
    <React.Fragment>
      <HospitalsJumbotron />
      <HospitalList />
    </React.Fragment>
  );
};

export default NearestHospitalsPage;
