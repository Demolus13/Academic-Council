import React from 'react';
import '../styles/Events.css'
import { allEvents } from '../utilities/eventsData';
import { useParams } from 'react-router-dom';

export default function Events() {

  return (
    <>
      {/* Events Section */}
      <div id="events">
        <h1 className="h-extrabold" style={{ color: 'var(--red)', textAlign: "center" }}>Events</h1>
        <h1 className="h-extrabold" style={{ textAlign: "center" }}>Student Academic Council</h1>
        <div className="calendar">
          <div>
            <p className="h-bold" style={{ color: 'black' }}>EVENT TYPE</p>
            <p className="h-bold" style={{ color: 'black', opacity: '0.5' }}>Select Category</p>
          </div>
          <div>
            <p className="h-bold" style={{ color: 'black' }}>ACADEMIC YEAR</p>
            <p className="h-bold" style={{ color: 'black', opacity: '0.5' }}>2023-24</p>
          </div>
          <div className="search">Search</div>
        </div>
        <h1 className="h-extrabold sac" style={{ fontSize: "1.7rem", textAlign: "center" }}>SAC EVENTS</h1>
        <div className="allEvents">
          {Object.keys(allEvents).map(key => (
            <>
              <div className="left-box"><h3 className="h-semibold">{key}</h3></div>
              <div className="right-box">
                {allEvents[key].map((card, index) => (
                  <div key={index}>
                    <div className="event">
                      <div className="fullEvent">
                        <h3 className="h-extrabold" style={{ fontSize: "1.5rem", textAlign: "center" }}>{card.name}</h3>
                        <div className="event-details">
                          <p>{card.summary}</p>
                          <div className="event-know-more">Know More</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

// export function EventsKnownMore() {
//   const { index } = useParams();
//   const l1 = allEvents[0].length
//   const l2 = allEvents[1].length
//   var ind = index % (l1 + l2)
//   var course = allEvents[0][ind]
//   if (ind >= l1) {
//     ind = (ind + l2) % (l1 + l2)
//     course = allEvents[1][ind]
//   }
//   return (
//     <>
//       {/* Known More Section */}
//       <div id="events">
//         <h1 className="h-extrabold" style={{ color: 'var(--red)', textAlign: "center" }}>Student Run Courses</h1>
//         <h1 className="h-extrabold" style={{ textAlign: "center" }}>{course.name}</h1>
//         <div className="course-details">
//         <h3 className="h-semibold" style={{display: course.instructors === "" ? "none" : "block"}}><span className="h-bold">Instructors: </span>{course.instructors}</h3>
//         <h3 className="h-semibold" style={{display: course.FA === "" ? "none" : "block"}}><span className="h-bold">Faculty Advisor: </span>{course.FA}</h3>
//         <h3 className="h-semibold" style={{display: course.mode_venue === "" ? "none" : "block"}}><span className="h-bold">Mode, and Venue: </span>{course.mode_venue}</h3>
//         <h3 className="h-semibold" style={{display: course.about === "" ? "none" : "block"}}><span className="h-bold">About the Course: </span>{course.about}</h3>
//         <h3 className="h-semibold" style={{display: course.prerequisites === "" ? "none" : "block"}}><span className="h-bold">Prerequisites: </span>{course.prerequisites}</h3>
//         <h3 className="h-semibold" style={{display: course.outcomes === "" ? "none" : "block"}}><span className="h-bold">Expected Outcomes: </span>{course.outcomes}</h3>
//         <h3 className="h-semibold" style={{display: course.resources === "" ? "none" : "block"}}><span className="h-bold">Resources: </span>{course.resources}</h3>
//         </div>
//         <div className="allCourses">
//           <h2 className="h-bold">Student Run Courses</h2>
//           <div className="courses-unit">
//             <div className="courses">
//               {allEvents[0].map((course, index) => (
//                 <div className="course" key={index}>
//                   <h3 className="h-extrabold date">{course.mmyyyy}</h3>
//                   <h3 className="h-extrabold name">{course.name}</h3>
//                   <div className="know-more"><h5 className="h-bold" onClick={() => window.open(`#/SRCs/${index}`)}>Know more</h5></div>
//                   <h5 className="instructors h-semibold"><span className="h-extrabold" style={{ color: 'var(--red)' }}>Instructors: </span>{course.instructors}</h5>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <h2 className="h-bold" style={{ marginTop: '4rem' }}>Previous SRCs</h2>
//           <div className="courses-unit">
//             <div className="courses">
//               {allEvents[1].map((course, index) => (
//                 <div className="course" key={index} style={{ backgroundColor: 'transparent' }}>
//                   <h3 className="h-extrabold date" style={{ height: '60px', backgroundColor: 'white', color: 'black', borderBottom: '0px' }}>{course.yyyy}</h3>
//                   <h3 className="h-extrabold name" style={{ color: 'white', backgroundColor: 'var(--red)', borderTopRightRadius: '15px', borderBottom: '0px' }}>{course.name}</h3>
//                   <h4 className="PC-know-more h-extrabold" onClick={() => window.open(`#/SRCs/${index + allEvents[0].length}`)}>Know more</h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
