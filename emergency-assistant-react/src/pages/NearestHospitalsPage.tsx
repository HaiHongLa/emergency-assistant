import React, { useState } from "react";
import HospitalsJumbotron from "../components/NearestHospitals/HospitalsJumbotron";
import HospitalList from "../components/NearestHospitals/HospitalList";

const NearestHospitalsPage: React.FC = () => {
  const [enteredAddress, setEnteredAddress] = useState("");
  const searchHandler = (data: string) => {
    setEnteredAddress(data);
  };

  return (
    <React.Fragment>
      <HospitalsJumbotron onSearchClick={searchHandler} />
      <HospitalList enteredAddress={enteredAddress} />
    </React.Fragment>
  );
};

export default NearestHospitalsPage;
