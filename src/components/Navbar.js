import React, {useState} from "react"
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  const Toggle = () => {
    setActive(!isActive)
  }
  const Links = document.getElementsByClassName("linkEventListener");
  for (let index = 0; index < Links.length; index++) {
    const link = Links[index];
    link.addEventListener("click", () => {
      Toggle();
    });
  }

  return (
    <div id="navbar" className={`h-semibold ${isActive ? "active" : ""}`}>
      <ul>
        <li className="navbar-item"><Link to="/">Student Academic Council</Link></li>
      </ul>
      <ul>
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/council">Council</Link></li>
        <li className="navbar-item"><Link to="/experiences">Experiences</Link></li>
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
              <Link to="/" className="ham-link linkEventListener">Home</Link>
            </li>
            <li className="ham-item">
              <Link to="/council" className="ham-link linkEventListener">Council</Link>
            </li>
            <li className="ham-item">
              <Link to="/events" className="ham-link linkEventListener">Events</Link>
            </li>
            <li className="ham-item">
              <Link to="/experiences" className="ham-link linkEventListener">Experiences</Link>
            </li>
            <ul>
              <li className="subham-item">
                <Link to="/quill" className="ham-link linkEventListener">The Quill</Link>
              </li>
              <li className="subham-item">
                <Link to="/student-archive" className="ham-link linkEventListener">Student Archive</Link>
              </li>
              <li className="subham-item">
                <Link to="/alumni-corner" className="ham-link linkEventListener">Alumni Corner</Link>
              </li>
              <li className="subham-item">
                <Link to="/QnA" className="ham-link linkEventListener">QnA with Faculty</Link>
              </li>
            </ul>
          </ul>
          <ul className="ham-subcontainer">
          <li className="ham-item">
              <Link to="/calculator" className="ham-link linkEventListener">P/F Calculator</Link>
            </li>
            <li className="ham-item">
              <Link to="/CRs" className="ham-link linkEventListener">CRs</Link>
            </li>
            <li className="ham-item">
              <Link to="https://students.iitgn.ac.in/student-acad-council/project-courses/login" className="ham-link linkEventListener" target="blank">Project Courses</Link>
            </li>
            <li className="ham-item">
              <Link to="/ADH-PAL" className="ham-link linkEventListener">ADH & PAL</Link>
            </li>
            <li className="ham-item">
              <Link to="/SRCs" className="ham-link linkEventListener">SRCs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`backdrop ${isActive ? "active" : ""}`}></div>
    </div>
  )
}
