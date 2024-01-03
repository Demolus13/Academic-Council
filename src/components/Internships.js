import React, { useState } from 'react';
import AcademicData from './AcadIntern';
import IndustryData from './IndustryIntern';

function Internship() {
  const [activeComponent, setActiveComponent] = useState(<AcademicData />);

  const handleFetchCSVData1 = () => {
    setActiveComponent(<AcademicData />);
  };

  const handleFetchCSVData2 = () => {
    setActiveComponent(<IndustryData />);
  };


  return (
    <div id="intern">
      <h1 className="h-extrabold" style={{marginBottom: "2rem"}}>Databases of Academic & Industrial Internships & Fellowships</h1>
      <button onClick={handleFetchCSVData1}>Academic Internship Data</button>
      <button onClick={handleFetchCSVData2}>Industrial Internship Data</button>
      {activeComponent}
    </div>
  );
}

export default Internship;


