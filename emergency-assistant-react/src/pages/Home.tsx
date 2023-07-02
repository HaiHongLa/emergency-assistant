import React from "react";
import Jumbotron from "../components/Homepage/Jumbotron";
import CommonFirstAid from "../components/FirstAid/FirstAidList";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Jumbotron />
      <CommonFirstAid />
    </React.Fragment>
  );
};

export default Home;
