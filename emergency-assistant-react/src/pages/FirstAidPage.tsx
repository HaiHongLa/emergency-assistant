import React, { useState } from "react";
import Search from "../components/FirstAid/Search";
import FirstAidList from "../components/FirstAid/FirstAidList";

const FirstAidPage: React.FC = () => {
  const [enteredInstruction, setEnteredInstruction] = useState("");
  const searchHandler = (data: string) => {   
    setEnteredInstruction(data);
  };
  return (
    <React.Fragment>
      <Search onSearchClick={searchHandler} />
      <FirstAidList enteredInstruction={enteredInstruction} />
    </React.Fragment>
  );
};

export default FirstAidPage;
