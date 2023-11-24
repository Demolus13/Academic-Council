import React from 'react'
import '../styles/Council.css'
import { members22 } from '../utilities/councilData'
import { Link } from "react-router-dom";

export default function Council22() {
  return (
    <>
    {/* council Section */}
    <div id="council">
      <h1 className="h-bold">Student Academic Council 2022-2023</h1>
      <div className="members">
      {members22.map((cards, index) => (
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
