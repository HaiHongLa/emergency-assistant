import React from "react";

const EmergencyContacts: React.FC = () => {
  return (
    <div className="container" style={{ textAlign: "left" }}>
      <h1 className="mt-5 text-center">Nationwide Emergency Contact Numbers</h1>
      <ul className="list-group mt-4">
        <li className="list-group-item">
          <strong>Emergency:</strong> 911
        </li>
        <li className="list-group-item">
          <strong>National Poison Control Center:</strong> 1-800-222-1222
        </li>
        <li className="list-group-item">
          <strong>National Suicide Prevention Lifeline:</strong> 1-800-273-TALK
          (1-800-273-8255)
        </li>
        <li className="list-group-item">
          <strong>National Domestic Violence Hotline:</strong> 1-800-799-SAFE
          (1-800-799-7233)
        </li>
      </ul>
    </div>
  );
};

export default EmergencyContacts;
