import React from "react";
import Search from "../components/FirstAid/Search";
import CommonFirstAid from "../components/FirstAid/FirstAidList";

const FirstAidPage: React.FC = () => {
  return (
    <React.Fragment>
      <Search />
      <CommonFirstAid/>
    </React.Fragment>
  );
};

export default FirstAidPage;
