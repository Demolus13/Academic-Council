import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Home.css';
import { Link } from "react-router-dom";
import Teamwork from '../Images/teamwork.svg'
export default function Home(props) {
  return (
    <>
    {/* Home Section */}
    <div id="home">
        <h1 className="h-extrabold">Student Academic Council</h1>
        <p className="h-semibold">IIT Gandhinagar prides itself in the freedom it gives to its students. The Student Academic Council is an extension of that same freedom - to cater to the academic needs of the student body, you need a student body. That's where we come in.</p>
        <button className="btn"><Link className="h-semibold" to="https://drive.google.com/file/d/1Ll_LRWVYvrtu_j0BYQ4cnpYDhD_RoJAX/view?usp=sharing" rel="noreferrer" target="_blank">Objective & Structure 2023-24</Link></button>
    </div>

    {/* Student/Faculty Section */}
    <div id="students_faculty">
      <h1 className="h-extrabold">
        Students/Faculty
      </h1>
      <div className="container">
        <div className="subcontainer">
          <div className="box">
            <img src={Teamwork} alt="" />
          </div>
          <div className="box">
            <h2 className="h-semibold" id='ug'>Under Graduate</h2>
          </div>
          <div className="box">
            <h2 className="h-semibold">{props.ug}</h2>
          </div>
        </div>
        <div className="subcontainer">
          <div className="box">
            <img src={'/Images/team.svg'} alt="" />
          </div>
          <div className="box">
            <h2 className="h-semibold" id='pg'>Post Graduate</h2>
          </div>
          <div className="box">
            <h2 className="h-semibold">{props.pg}</h2>
          </div>
        </div>
        <div className="subcontainer">
          <div className="box">
            <img src={'/Images/teaching.svg'} alt="Not Found" />
          </div>
          <div className="box">
            <h2 className="h-semibold" id='f'>Faculty</h2>
          </div>
          <div className="box">
            <h2 className="h-semibold">{props.f}</h2>
          </div>
        </div>
      </div>
    </div>

    {/* What we do Section */}
    <div id="whatwedo">
        <h1 className="h-extrabold">
        What we do
        </h1>
        <div className="container">
            <div className="box">
                <img src={'/Images/hackathon.svg'}alt="" />
                <h2 className="h-semibold">Events</h2>
                <div className="box-link">
                    <Link className="h-semibold" to="/events">Find out more</Link>
                </div>
            </div>
            <div className="box">
                <img src={'/Images/meeting.svg'} alt="" />
                <h2 className="h-semibold">ADH & PAL</h2>
                <div className="box-link">
                    <Link className="h-semibold" to="/ADH">Find out more</Link>
                </div>
            </div>
            <div className="box">
                <img src={'/Images/calculator.svg'} alt="" />
                <h2 className="h-semibold">P/F Calculator</h2>
                <div className="box-link">
                    <Link className="h-semibold" to="/calculator">Find out more</Link>
                </div>
            </div>
            <div className="box">
                <img src={'/Images/speech.svg'} alt="" />
                <h2 className="h-semibold">CRs</h2>
                <div className="box-link">
                    <Link className="h-semibold" to="/CRs">Find out more</Link>
                </div>
            </div>
            <div className="box">
                <img src={'/Images/online-course.svg'} alt="" />
                <h2 className="h-semibold">SRCs</h2>
                <div className="box-link">
                    <Link className="h-semibold" to="/SRCs">Find out more</Link>
                </div>
            </div>
        </div>
    </div>
    </> 
  )
}

Home.propTypes = {
  ug : PropTypes.number,
  pg : PropTypes.number,
  f : PropTypes.number,
}