import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FirstAidList.css";

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

interface FirstAidItem {
    id: string;
    firstAidId: string;
    firstAidName: string;
    markdownContent: string;
}

const CommonFirstAid: React.FC = () => {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    fetchInstructions();
  }, []);

  const fetchInstructions = async () => {
    try {
      console.log(`${process.env.REACT_APP_BACKEND_URL}/api/first-aid/getAll`);

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/first-aid/getAll`
      );
      const filteredData = response.data.filter((item:FirstAidItem) =>
        firstAidInstructions.includes(item.firstAidName)
      );
      setInstructions(filteredData);
    } catch (error) {
      console.error("Error fetching instructions:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="common-first-aid-title">Common First Aid Instructions</h2>
      <ul className="instruction-list">
        {instructions.map((instruction) => (
          <li key={instruction["firstAidId"]} className="instruction-list-item">
            <Link to={`/first-aid-instructions/${instruction["firstAidId"]}`}>
              {instruction["firstAidName"]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommonFirstAid;
