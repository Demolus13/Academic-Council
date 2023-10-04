import React, {useState} from "react"
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
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
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/council" className="navbar-item">Council</Link>
        <Link to="/experiences" className="navbar-item">Experiences</Link>

        {/* <li className="navbar-item"><a href="/">Home</a></li> */}

        {/* <li className="navbar-item"><a href="/#/council">Council</a></li>
        <li className="navbar-item"><a href="/#/experiences">Experiences</a></li> */}
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
              <Link to="/" className="ham-link">Home</Link>
            </li>
            <li className="ham-item">
              <Link to="/council" className="ham-link">Council</Link>
            </li>
            <li className="ham-item">
              <Link to="/events" className="ham-link">Events</Link>
            </li>
            <li className="ham-item">
              <Link to="/experiences" className="ham-link">Experiences</Link>
            </li>
            <ul>
              <li className="subham-item">
                <Link to="/quill" className="ham-link">The Quill</Link>
              </li>
              <li className="subham-item">
                <Link to="/student-archive" className="ham-link">Student Archive</Link>
              </li>
              <li className="subham-item">
                <Link to="/alumni-corner" className="ham-link">Alumni Corner</Link>
              </li>
              <li className="subham-item">
                <Link to="/QnA" className="ham-link">QnA with Faculty</Link>
              </li>
            </ul>
          </ul>
          <ul className="ham-subcontainer">
          <li className="ham-item">
              <Link to="/calculator" className="ham-link">P/F Calculator</Link>
            </li>
            <li className="ham-item">
              <Link to="/CRs" className="ham-link">CRs</Link>
            </li>
            <li className="ham-item">
              <Link to="https://students.iitgn.ac.in/student-acad-council/project-courses/login" className="ham-link" target="blank">Project Courses</Link>
            </li>
            <li className="ham-item">
              <Link to="/ADH-PAL" className="ham-link">ADH & PAL</Link>
            </li>
            <li className="ham-item">
              <Link to="/SRCs" className="ham-link">SRCs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`backdrop ${isActive ? "active" : ""}`}></div>
    </div>
  )
}
