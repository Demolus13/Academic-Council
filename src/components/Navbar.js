import React, {useState} from "react"
import '../styles/Navbar.css';

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  const Toggle = () => {
    setActive(!isActive)
  }

  return (
    <div id="navbar" className={`h-semibold ${isActive ? "active" : ""}`}>
      <ul>
        <li className="navbar-item">Student Academic Council</li>
      </ul>
      <ul>
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/#/council">Council</a></li>
        <li className="navbar-item"><a href="/#/experiences">Experiences</a></li>
        <div className={`hamburger ${isActive ? "active" : ""}`} onClick={Toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </ul>
      <div className={`ham-menu ${isActive ? "active" : ""}`}>
        <div className="ham-container">
          <ul className="ham-subcontainer">
            <li className="ham-item">
              <a href="/" className="ham-link">Home</a>
            </li>
            <li className="ham-item">
              <a href="/council" className="ham-link">Council</a>
            </li>
            <li className="ham-item">
              <a href="/events" className="ham-link">Events</a>
            </li>
            <li className="ham-item">
              <a href="/experiences" className="ham-link">Experiences</a>
            </li>
            <ul>
              <li className="subham-item">
                <a href="/quill" className="ham-link">The Quill</a>
              </li>
              <li className="subham-item">
                <a href="/student-archive" className="ham-link">Student Archive</a>
              </li>
              <li className="subham-item">
                <a href="/alumni-corner" className="ham-link">Alumni Corner</a>
              </li>
              <li className="subham-item">
                <a href="/QnA" className="ham-link">QnA with Faculty</a>
              </li>
            </ul>
          </ul>
          <ul className="ham-subcontainer">
          <li className="ham-item">
              <a href="/calculator" className="ham-link">P/F Calculator</a>
            </li>
            <li className="ham-item">
              <a href="/CRs" className="ham-link">CRs</a>
            </li>
            <li className="ham-item">
              <a href="https://students.iitgn.ac.in/student-acad-council/project-courses/login" className="ham-link" target="blank">Project Courses</a>
            </li>
            <li className="ham-item">
              <a href="/ADH-PAL" className="ham-link">ADH & PAL</a>
            </li>
            <li className="ham-item">
              <a href="/SRCs" className="ham-link">SRCs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`backdrop ${isActive ? "active" : ""}`}></div>
    </div>
  )
}
