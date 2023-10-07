import React from 'react'
import '../styles/Council.css'
import { members } from '../utilities/councilData'
import { Link } from "react-router-dom";

export default function Council() {
  return (
    <>
    {/* council Section */}
    <div id="council">
      <h1 className="h-bold">Student Academic Council 2023-2024</h1>
      <div className="members">
      {members.map((cards, index) => (
        <div className="cards" key={index}>
          <div className="img">
          <img src={cards.imgSrc} alt="" />
          </div>
          <h2 className="h-semibold">{cards.name}</h2>
          <p className="council-btn">{cards.position}</p>
          <p>{cards.ug} <br /> Contact no: {cards.contact}</p>
          <div className="links">
            <Link to={cards.linkedin} rel="noreferrer" target="_blank">
              <img src={require("../Images/linkedin.webp")} alt="" />
            </Link>
            <Link to={cards.www} rel="noreferrer" target="_blank">
              <img src={require("../Images/world-wide-web.webp")} alt="" />
            </Link>
            <Link to={`mailto:${cards.email}`} rel="noreferrer" target="_blank">
              <img src={require("../Images/mail.webp")} alt="" />
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}
