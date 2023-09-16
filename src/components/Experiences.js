import React, {useState} from 'react'
import '../styles/Experiences.css'

export default function Experiences() {
  const [isActive, setActive] = useState(1);
  const setView = (view) => {
    setActive(view)
  }

  return (
    <>
    <div id="experiences">
        <h1 className="h-bold">EXPERIENCES</h1>
        <p className="h-medium">How was your internship? How did you get selected? What did you work on? What did you like about it the most? How did your contest go? We invite students to share their experiences on the same. <br/> Finally, we publish them here. <br/> <br/> Use this button to share your own experience.</p>
        <button className="btn"><a className="h-medium" href="./">Share your story</a></button>
        <div className="container h-bold">
            <h3 className={`subunit-1 ${isActive === 1 ? "active" : ""}`} onClick={() => setView(1)}>Alumni Corner</h3>
            <h3 className={`subunit-2 ${isActive === 2 ? "active" : ""}`} onClick={() => setView(2)}>The Quill</h3>
            <h3 className={`subunit-1 ${isActive === 3 ? "active" : ""}`} onClick={() => setView(3)}>Student Archieve</h3>
            <h3 className={`subunit-2 ${isActive === 4 ? "active" : ""}`} onClick={() => setView(4)}>QnA with Faculty</h3>
        </div>
        <form className="search" action="backend.php">
            <input type="text" placeholder="What are you looking for......"/>
            <div className="i-search">
                <img src="/Images/search.png" alt="" />
            </div>
        </form>
    </div>
    <div className={`container-1 ${isActive === 1 ? "active" : ""}`}>
      <div className="unit">
          <img src="/Images/DD.jpeg" alt="" />
        <div className="subunit">
        <span>Name:</span> Deepak Dhariwal <br/> After completing the eighth semester, I turned my focus toward full-time research apprenticeship in one of the research groups of the institute. Led by Dr Amit Arora, the Advanced Materials Processing Research Group deals with theory, fabrication and characterization of solid-state welding processes. Research ambiance and scientific temper of this group, along with a liberal yet extremely accountable assistance and mentorship inherent in the group proved to be the just the right mix of qualities I needed. Blended with persistence, hard work and honesty, it is my belief that one can make appropriate choices his/her (or their) career as I did and could get outcomes he/she (or they) desire. Today, being a graduate research assistant at Virginia Tech, I am working on modelling of friction-stirred microstructure, making a plan for characterization of precipitate evolution, exposing the dynamics of martensitic transformation to be utilized in making of new-age metallic composites using friction-stirred 3D printing processes. In hindsight, I would like to think that I got the ticket to this small world from the window of AMPRG.
        </div>
      </div>
    </div>
    <div className={`container-2 h-medium ${isActive === 2 ? "active" : ""}`}>
      <div className="unit">
          <img src="/Images/NP.jpeg" alt="" />
        <div className="subunit">
          <span>Name:</span> Nishikant Parmar <br/> Discipline: Computer Science Enginnering <br/> Intuit Interview Experience — SDE Summer Intern (Off-campus)
        </div>
      </div>
      <div className="unit">
          <img src="/Images/PV.jpg" alt="" />
        <div className="subunit">
          <span>Name:</span> Praveen Venkatesh <br/> Discipline: lectrical Engineering with Minor in Robotics <br/> Cracking the MITACS Globalink Research Internship (GRI)
        </div>
      </div>
    </div>
    <div className={`container-3 ${isActive === 3 ? "active" : ""}`}>
    <button className="btn">
      <a className="h-medium" href="./">Academic Internship series</a>
    </button>
    <button className="btn">
      <a className="h-medium" href="./">Invent@IITGN Experiences</a>
    </button>
    <button className="btn">
      <a className="h-medium" href="./">Internship Experiences</a>
    </button>
    <button className="btn">
      <a className="h-medium" href="./">Conference/Workshop Experiences</a>
    </button>
    <button className="btn">
      <a className="h-medium" href="./">Overseas Experiences</a>
    </button>
    </div>
    </>
  )
}
