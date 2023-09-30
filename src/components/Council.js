import React from 'react'
import '../styles/Council.css'
import { members } from '../utilities/councilData'

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
            <a href={cards.linkedin} rel="noreferrer" target="_blank">
              <img src="/Images/linkedin.webp" alt="" />
            </a>
            <a href={cards.www} rel="noreferrer" target="_blank">
              <img src="/Images/world-wide-web.webp" alt="" />
            </a>
            <a href={`mailto:${cards.email}`} rel="noreferrer" target="_blank">
              <img src="/Images/mail.webp" alt="" />
            </a>
          </div>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}
