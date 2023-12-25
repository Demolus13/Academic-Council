import React from 'react';
import '../styles/SRCs.css'
import { allSRCs } from '../utilities/srcsData';
import { useParams } from 'react-router-dom';

export default function SRCs() {

  return (
    <>
      {/* srcs Section */}
      <div id="srcs">
        <h1 className="h-extrabold" style={{ color: 'var(--red)', textAlign: "center" }}>Student Run Courses</h1>
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
                  <div className="know-more"><h5 className="h-bold" onClick={() => window.open(`#/SRCs/${index}`)}>Know more</h5></div>
                  <h5 className="instructors h-semibold"><span className="h-extrabold" style={{ color: 'var(--red)' }}>Instructors: </span>{course.instructors}</h5>
                </div>
              ))}
            </div>
          </div>
          <h2 className="h-bold" style={{ marginTop: '4rem' }}>Previous SRCs</h2>
          <div className="courses-unit">
            <div className="courses">
              {allSRCs[1].map((course, index) => (
                <div className="course" key={index} style={{ backgroundColor: 'transparent' }}>
                  <h3 className="h-extrabold date" style={{ height: '60px', backgroundColor: 'white', color: 'black', borderBottom: '0px' }}>{course.yyyy}</h3>
                  <h3 className="h-extrabold name" style={{ color: 'white', backgroundColor: 'var(--red)', borderTopRightRadius: '15px', borderBottom: '0px' }}>{course.name}</h3>
                  <h4 className="PC-know-more h-extrabold" onClick={() => window.open(`#/SRCs/${index + allSRCs[0].length}`)}>Know more</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function SRCsKnownMore() {
  const { index } = useParams();
  const l1 = allSRCs[0].length
  const l2 = allSRCs[1].length
  var ind = index % (l1 + l2)
  var course = allSRCs[0][ind]
  if (ind >= l1) {
    ind = (ind + l2) % (l1 + l2)
    course = allSRCs[1][ind]
  }
  return (
    <>
      {/* Known More Section */}
      <div id="srcs">
        <h1 className="h-extrabold" style={{ color: 'var(--red)', textAlign: "center" }}>Student Run Courses</h1>
        <h1 className="h-extrabold" style={{ textAlign: "center" }}>{course.name}</h1>
        <div className="course-details">
        <h3 className="h-semibold" style={{display: course.instructors === "" ? "none" : "block"}}><span className="h-bold">Instructors: </span>{course.instructors}</h3>
        <h3 className="h-semibold" style={{display: course.FA === "" ? "none" : "block"}}><span className="h-bold">Faculty Advisor: </span>{course.FA}</h3>
        <h3 className="h-semibold" style={{display: course.mode_venue === "" ? "none" : "block"}}><span className="h-bold">Mode, and Venue: </span>{course.mode_venue}</h3>
        <h3 className="h-semibold" style={{display: course.about === "" ? "none" : "block"}}><span className="h-bold">About the Course: </span>{course.about}</h3>
        <h3 className="h-semibold" style={{display: course.prerequisites === "" ? "none" : "block"}}><span className="h-bold">Prerequisites: </span>{course.prerequisites}</h3>
        <h3 className="h-semibold" style={{display: course.outcomes === "" ? "none" : "block"}}><span className="h-bold">Expected Outcomes: </span>{course.outcomes}</h3>
        <h3 className="h-semibold" style={{display: course.resources === "" ? "none" : "block"}}><span className="h-bold">Resources: </span>{course.resources}</h3>
        </div>
        <div className="allCourses">
          <h2 className="h-bold">Student Run Courses</h2>
          <div className="courses-unit">
            <div className="courses">
              {allSRCs[0].map((course, index) => (
                <div className="course" key={index}>
                  <h3 className="h-extrabold date">{course.mmyyyy}</h3>
                  <h3 className="h-extrabold name">{course.name}</h3>
                  <div className="know-more"><h5 className="h-bold" onClick={() => window.open(`#/SRCs/${index}`)}>Know more</h5></div>
                  <h5 className="instructors h-semibold"><span className="h-extrabold" style={{ color: 'var(--red)' }}>Instructors: </span>{course.instructors}</h5>
                </div>
              ))}
            </div>
          </div>
          <h2 className="h-bold" style={{ marginTop: '4rem' }}>Previous SRCs</h2>
          <div className="courses-unit">
            <div className="courses">
              {allSRCs[1].map((course, index) => (
                <div className="course" key={index} style={{ backgroundColor: 'transparent' }}>
                  <h3 className="h-extrabold date" style={{ height: '60px', backgroundColor: 'white', color: 'black', borderBottom: '0px' }}>{course.yyyy}</h3>
                  <h3 className="h-extrabold name" style={{ color: 'white', backgroundColor: 'var(--red)', borderTopRightRadius: '15px', borderBottom: '0px' }}>{course.name}</h3>
                  <h4 className="PC-know-more h-extrabold" onClick={() => window.open(`#/SRCs/${index + allSRCs[0].length}`)}>Know more</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
