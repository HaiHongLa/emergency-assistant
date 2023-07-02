import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Instruction: React.FC = (props) => {
  const markdownContent = `
## First Aid Instruction Title

### Text Instructions

1. Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
2. Step 2: Vestibulum eu libero vitae justo sagittis tincidunt.
3. Step 3: Proin commodo augue eu semper ultrices.

### Image

![Instruction Image](path/to/image.jpg)

### Video

[![Instruction Video](path/to/thumbnail.jpg)](https://media.istockphoto.com/id/922348096/photo/blood-drop-character-making-stop-gesture.jpg)

### Additional Information

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Vestibulum eu libero vitae justo sagittis tincidunt.
- Proin commodo augue eu semper ultrices.
`;

  return (
    <div>
      <div className="container" style={{ textAlign: "left" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Instruction;
