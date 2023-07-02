import React from "react";
import "./FirstAidList.css";

const CommonFirstAid: React.FC = () => {
  const firstAidInstructions = [
    "Bleeding Control",
    "CPR (Cardiopulmonary Resuscitation)",
    "Burns",
    "Choking",
    "Fractures",
    "Head Injuries",
    "Heatstroke",
    "Poisoning",
    "Seizures",
    "Shock",
  ];
  return (
    <div className="container">
      <h2 className="common-first-aid-title">Common First Aid Instructions</h2>
      <ul className="instruction-list">
        {firstAidInstructions.map((instruction, index) => (
          <li key={index} className="instruction-list-item">
            {instruction}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommonFirstAid;
