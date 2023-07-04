import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FirstAidList.css";

interface FirstAidListProps {
  enteredInstruction: string;
}

interface FirstAidItem {
  id: string;
  firstAidId: string;
  firstAidName: string;
  markdownContent: string;
}

const FirstAidList: React.FC<FirstAidListProps> = ({ enteredInstruction }) => {
  const [instructions, setInstructions] = useState<FirstAidItem[]>([]);

  useEffect(() => {
    fetchInstructions();
  }, [enteredInstruction]);

  const fetchInstructions = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/first-aid/getAll`
      );

      if (enteredInstruction) {
        const filteredInstructions = response.data.filter((instruction: FirstAidItem) =>
          instruction.firstAidName.toLowerCase().includes(enteredInstruction.toLowerCase())
        );
        setInstructions(filteredInstructions);
      } else {
        setInstructions(response.data);
      }
    } catch (error) {
      console.error("Error fetching instructions:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="common-first-aid-title">First Aid Instructions</h2>
      <ul className="instruction-list">
        {instructions.map((instruction) => (
          <li key={instruction.firstAidId} className="instruction-list-item">
            <Link to={`/first-aid-instructions/${instruction.firstAidId}`}>
              {instruction.firstAidName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstAidList;
