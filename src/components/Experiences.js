import React, { useState } from 'react'
import '../styles/Experiences.css'
import { alumni, quill, qna_prof } from '../utilities/experiencesData';
import { Link } from "react-router-dom";
export default function Experiences() {
  const [isActive, setActive] = useState(1);
  const [isAlumni, setAlumni] = useState(0);
  const [isQuill, setQuill] = useState(0);
  const [isQnA, setQnA] = useState(0);
  const container_1 = document.getElementById("alumni-corner");
  const container_2 = document.getElementById("quill");
  const setView = (view) => {
    setActive(view);
  }
  const showAlumni = (view) => {
    setAlumni(view)
    if (container_1){
      container_1.scrollIntoView({ behavior: "smooth" });
    }
  }
  const showQuill = (view) => {
    setQuill(view)
    if (container_2){
      container_2.scrollIntoView({ behavior: "smooth" });
    }
  }
  const showQnA = (view) => {
    setQnA(view)
    if (container_2){
      container_2.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div id="experiences">
        <h1 className="h-bold">EXPERIENCES</h1>
        <p className="h-medium">How was your internship? How did you get selected? What did you work on? What did you like about it the most? How did your contest go? We invite students to share their experiences on the same. <br /> Finally, we publish them here. <br /> <br /> Use this button to share your own experience.</p>
        <button className="btn"><Link className="h-medium" to="https://docs.google.com/forms/d/e/1FAIpQLSeDFZ5RGLYRCUnh2v8baXWK04_DRr-AiDxxwna_SvOgWKXDCQ/viewform" rel="noreferrer" target="_blank">Share your story</Link></button>
        <div className="container h-bold">
          <h3 className={`subunit-1 ${isActive === 1 ? "active" : ""}`} onClick={() => setView(1)}>Alumni Corner</h3>
          <h3 className={`subunit-2 ${isActive === 2 ? "active" : ""}`} onClick={() => setView(2)}>The Quill</h3>
          <h3 className={`subunit-1 ${isActive === 3 ? "active" : ""}`} onClick={() => setView(3)}>Student Archieve</h3>
          <h3 className={`subunit-2 ${isActive === 4 ? "active" : ""}`} onClick={() => setView(4)}>QnA with Faculty</h3>
        </div>
        <form className="search" action="backend.php">
          <input type="text" placeholder="What are you looking for......" />
          <div className="i-search">
            <img src="../Images/search.webp" alt="" />
          </div>
        </form>
        <div id="alumni-corner" className={`container-1 ${isActive === 1 ? "active" : ""}`}>
          <div className="alumni-container">
            <div className="alumni-unit">
              {alumni.map((card, index) => (
                <div className="alumni-card" key={index}>
                  <div className="alumni-bg">
                    <div className="alumni-img">
                      <img src={card.imgSrc} onClick={() => showAlumni(index)} alt="" />
                    </div>
                  </div>
                  <h4 className="h-medium" onClick={() => showAlumni(index)}>{card.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {alumni[isAlumni].name} <br /> <br /> {alumni[isAlumni].info}
            </div>
          </div>
        </div>
        <div id="quill" className={`container-2 h-medium ${isActive === 2 ? "active" : ""}`}>
          <div className="quill-container">
            <div className="quill-unit">
              {quill.map((card, index) => (
                <div className="quill-card" key={index}>
                  <div className="quill-bg">
                    <div className="quill-img">
                      <img src={card.imgSrc} onClick={() => showQuill(index)} alt="" />
                    </div>
                  </div>
                  <h4 className="h-medium" onClick={() => showQuill(index)}>{card.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {quill[isQuill].name} <br /> {quill[isQuill].discipline} <br /> {quill[isQuill].info} <br /> {quill[isQuill].description}
            </div>
          </div>
        </div>
        <div className={`container-3 ${isActive === 3 ? "active" : ""}`}>
          <button className="btn">
            <Link className="h-medium" to="./">Academic Internship series</Link>
          </button>
          <button className="btn">
            <Link className="h-medium" to="./">Invent@IITGN Experiences</Link>
          </button>
          <button className="btn">
            <Link className="h-medium" to="./">Internship Experiences</Link>
          </button>
          <button className="btn">
            <Link className="h-medium" to="./">Conference/Workshop Experiences</Link>
          </button>
          <button className="btn">
            <Link className="h-medium" to="./">Overseas Experiences</Link>
          </button>
        </div>
        <div id="quill" className={`container-2 h-medium ${isActive === 4 ? "active" : ""}`}>
          <div className="quill-container">
            <div className="quill-unit">
              {qna_prof.map((card, index) => (
                <div className="quill-card" key={index}>
                  <div className="quill-bg">
                    <div className="quill-img">
                      <img src={card.imgSrc} onClick={() => showQnA(index)} alt="" />
                    </div>
                  </div>
                  <h4 className="h-medium" onClick={() => showQnA(index)}>{card.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {qna_prof[isQnA].name} <br /> {qna_prof[isQnA].discipline} <br /> {qna_prof[isQnA].info} <br /> <br />{qna_prof[isQnA].description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
