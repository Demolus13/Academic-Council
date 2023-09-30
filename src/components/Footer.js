import React from 'react'
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <p className="footer-item h-semibold">Student Academic Council 2023-2024</p>
        <p className="footer-item h-semibold">Indian Institute of Technology Gandhinagar <br/> Palaj, Gandhinagar, Gujarat - 382355</p>
        <div className="footer-item btn">
          <p className="h-semibold">academic.secretary@iitgn.ac.in</p>
        </div>
        <p className="footer-item h-semibold" style={{marginBottom: "0px"}}>Website developed by:</p>
      </div>
        <img src={"../images/IITGN Logo.webp"} alt="IITGN Logo" />
    </div>
  )
}
