import React from "react";
import Instruction from "../components/FirstAid/Instruction";
import { useParams } from "react-router-dom";

interface Params {
  id: string;
}

const InstructionPage: React.FC = () => {
  const params: Params = useParams();
  const instructionId = params.id;
  return (
    <React.Fragment>
      <Instruction id={instructionId} />
    </React.Fragment>
  );
};

export default InstructionPage;
