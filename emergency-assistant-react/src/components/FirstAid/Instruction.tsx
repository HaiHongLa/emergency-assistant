import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import axios from "axios";

interface InstructionProps {
  id: string;
}

const Instruction: React.FC<InstructionProps> = ({ id }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/first-aid/getById/${id}`
        );
        const { markdownContent } = response.data.instruction;
        setMarkdownContent(markdownContent);
      } catch (error) {
        console.error("Error fetching instruction:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className="container" style={{ textAlign: "left" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Instruction;
