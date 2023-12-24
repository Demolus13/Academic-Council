import React from 'react';
import '../styles/SRCs.css'
import { allSRCs } from '../utilities/srcsData';

export default function SRCs() {

  // const nextCouncil = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % l);
  // };

  // const prevCouncil = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + l) % l);
  // };

  // const currentCouncil = allMembers[currentIndex];

  return (
    <>
      {/* srcs Section */}
      <div id="srcs">
        <h1 className="h-extrabold" style={{ color: 'var(--red)' }}>Student Run Courses</h1>
        <p className="h-semibold srcs-initial">In Student Run Courses, students with expertise in a particular field teach to other interested students. These courses do not carry credits but help students pick up valuable skills from their peers.</p>
        <div className="calendar">
          <div>
            <p className="h-bold" style={{ color: 'black' }}>ACADEMIC YEAR</p>
            <p className="h-bold" style={{ color: 'black', opacity: '0.5' }}>2023-24</p>
          </div>
          <div className="search">Search</div>
        </div>
        <div className="allCourses">
          <h2 className="h-bold">Student Run Courses</h2>
          <div className="courses-unit">
          <div className="courses">
          {allSRCs[0].map((course, index) => (
            <div className="course" key={index}>
              <h3 className="h-extrabold date">{course.mmyyyy}</h3>
              <h3 className="h-extrabold name">{course.name}</h3>
              <div className="know-more"><h5 className="h-bold">Know more</h5></div>
              <h5 className="instructors h-semibold"><span className="h-extrabold" style={{color: 'var(--red)'}}>Instructors: </span>{course.instructors}</h5>
            </div>
          ))}
          </div>
          </div>
          <h2 className="h-bold" style={{ marginTop: '4rem' }}>Previous SRCs</h2>
          <div className="courses-unit">
          <div className="courses">
          {allSRCs[1].map((course, index) => (
            <div className="course" key={index} style={{backgroundColor: 'transparent'}}>
              <h3 className="h-extrabold date" style={{height: '60px', backgroundColor: 'white', color: 'black', borderBottom: '0px'}}>{course.yyyy}</h3>
              <h3 className="h-extrabold name" style={{color: 'white', backgroundColor: 'var(--red)', borderTopRightRadius: '15px', borderBottom: '0px'}}>{course.name}</h3>
              <h4 className="PC-know-more h-extrabold">Know more</h4>
            </div>
          ))}
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
