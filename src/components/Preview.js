import React from 'react'
import '../styles/Preview.css'
import { alumni, quill, qna_prof } from '../utilities/experiencesData';
import { useParams } from 'react-router-dom';

export default function Preview(props) {
  const { index } = useParams();
  const alumni_ind = index%alumni.length
  const quill_ind = index%quill.length
  const qna_prof_ind = index%qna_prof.length
  return (
    <>
      {/* preview Section */}
      <div id="preview">
        <div id="preview-corner" className={`container-1 ${props.isActive === 0 ? "active" : ""}`}>
          <div className="preview-container">
              <div className="preview-card">
                <div className="preview-bg">
                  <div className="preview-img">
                    <img src={alumni[alumni_ind].imgSrc} alt="" />
                  </div>
                </div>
                <h3 className="h-medium">{alumni[alumni_ind].name}</h3>
              </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {alumni[alumni_ind].name} <br /> <br /> {alumni[alumni_ind].info}
            </div>
          </div>
        </div>
        <div id="preview-corner" className={`container-1 ${props.isActive === 1 ? "active" : ""}`}>
          <div className="preview-container">
              <div className="preview-card">
                <div className="preview-bg">
                  <div className="preview-img">
                    <img src={quill[quill_ind].imgSrc} alt="" />
                  </div>
                </div>
                <h3 className="h-medium">{quill[quill_ind].name}</h3>
              </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {quill[quill_ind].name} <br /> {quill[quill_ind].discipline} <br /> {quill[quill_ind].info} <br /> {quill[quill_ind].description}
            </div>
          </div>
        </div>
        <div id="preview-corner" className={`container-1 ${props.isActive === 2 ? "active" : ""}`}>
          <div className="preview-container">
              <div className="preview-card">
                <div className="preview-bg">
                  <div className="preview-img">
                    <img src={qna_prof[qna_prof_ind].imgSrc} alt="" />
                  </div>
                </div>
                <h3 className="h-medium">{qna_prof[qna_prof_ind].name}</h3>
              </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {qna_prof[qna_prof_ind].name} <br /> {qna_prof[qna_prof_ind].discipline} <br /> {qna_prof[qna_prof_ind].info} <br /> <br />{qna_prof[qna_prof_ind].description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
