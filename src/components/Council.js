import React, { useState } from 'react';
import '../styles/Council.css'
import { allMembers } from '../utilities/councilData'
import { Link } from "react-router-dom";

export default function Council() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const l = allMembers.length

  const nextCouncil = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % l);
  };

  const prevCouncil = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + l) % l);
  };

  const currentCouncil = allMembers[currentIndex];

  return (
    <>
      {/* council Section */}
      <div id="council">
        <h1 className="h-bold">Student Academic Council 20{23 - currentIndex}-20{24 - currentIndex}</h1>
        <div className="switch-council">
          <p className="switch-btn" onClick={prevCouncil}>previous</p>
          <p className="switch-btn" onClick={nextCouncil}>next</p>
        </div>
        <div className="members">
          {currentCouncil.map((cards, index) => (
            <div className="cards" key={index}>
              <div className="img">
                <img src={cards.imgSrc} alt="" />
              </div>
              <h2 className="h-semibold">{cards.name}</h2>
              <p className="council-btn">{cards.position}</p>
              <p>{cards.ug} <br /> Contact no: {cards.contact}</p>
              <div className="links">
                <Link to={cards.linkedin} rel="noreferrer" target="_blank">
                  <img src="https://drive.google.com/uc?export=view&id=14VbiFeYQ3PFaRzNSSP4m3txRIBA2fGC4" alt="" />
                </Link>
                <Link to={cards.www} rel="noreferrer" target="_blank">
                  <img src="https://drive.google.com/uc?export=view&id=1bAXNVRNZ9WFyEYTTOSSFtkknHIrc721t" alt="" />
                </Link>
                <Link to={`mailto:${cards.email}`} rel="noreferrer" target="_blank">
                  <img src="https://drive.google.com/uc?export=view&id=1zPs88eeqf_Y-41a_AoV0nEWBnX0R6Rej" alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
