import React from 'react'
import '../styles/Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <p className="footer-item h-semibold">Student Academic Council 2023-2024</p>
        <p className="footer-item h-semibold">Indian Institute of Technology Gandhinagar <br/> Palaj, Gandhinagar, Gujarat - 382355</p>
        <div className="footer-item btn">
          <p className="h-semibold"><Link to={`mailto:academic.secretary@iitgn.ac.in`} rel="noreferrer" target="_blank">academic.secretary@iitgn.ac.in</Link></p>
        </div>
        <p className="footer-item h-semibold" style={{marginBottom: "0px"}}>Website developed by: <br /> Netram Choudhary & Parth Govale</p>
      </div>
        <img src={"https://drive.google.com/uc?export=view&id=1O0QVSfA2_II5lW_VHcuzIgNrqcbGLZCK"} alt="IITGN Logo" />
    </div>
  )
}
