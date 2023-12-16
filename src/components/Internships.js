import React, { useState } from 'react';
import AcademicData from './AcadIntern';
import IndustryData from './IndustryIntern';

function Internship() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleFetchCSVData1 = () => {
    setActiveComponent(<AcademicData />);
  };

  const handleFetchCSVData2 = () => {
    setActiveComponent(<IndustryData />);
  };
 

  return (
    <div>
      <h1>Databases of Academic & Industrial Internships & Fellowships</h1>
      <button onClick={handleFetchCSVData1}>Academic Internship Data</button>
      <button onClick={handleFetchCSVData2}>Industrial Internship Data</button>
      {activeComponent}
    </div>
  );
}

export default Internship;


