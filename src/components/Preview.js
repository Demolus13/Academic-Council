import React from 'react'
import '../styles/Preview.css'
import { alumni, quill, qna_prof } from '../utilities/experiencesData';
import { useParams } from 'react-router-dom';

export default function Preview(props) {
  const { index } = useParams();
  return (
    <>
      {/* preview Section */}
      <div id="preview">
        <div id="preview-corner" className={`container-1 ${props.isActive === 0 ? "active" : ""}`}>
          <div className="preview-container">
              <div className="preview-card">
                <div className="preview-bg">
                  <div className="preview-img">
                    <img src={alumni[index].imgSrc} alt="" />
                  </div>
                </div>
                <h3 className="h-medium">{alumni[index].name}</h3>
              </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {alumni[index].name} <br /> <br /> {alumni[index].info}
            </div>
          </div>
        </div>
        <div id="preview-corner" className={`container-1 ${props.isActive === 1 ? "active" : ""}`}>
          <div className="preview-container">
              <div className="preview-card">
                <div className="preview-bg">
                  <div className="preview-img">
                    <img src={quill[index].imgSrc} alt="" />
                  </div>
                </div>
                <h3 className="h-medium">{quill[index].name}</h3>
              </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {quill[index].name} <br /> {quill[index].discipline} <br /> {quill[index].info} <br /> {quill[index].description}
            </div>
          </div>
        </div>
        <div id="preview-corner" className={`container-1 ${props.isActive === 2 ? "active" : ""}`}>
          <div className="preview-container">
              <div className="preview-card">
                <div className="preview-bg">
                  <div className="preview-img">
                    <img src={qna_prof[index].imgSrc} alt="" />
                  </div>
                </div>
                <h3 className="h-medium">{qna_prof[index].name}</h3>
              </div>
          </div>
          <div className="unit">
            <div className="subunit">
              <span>Name:</span> {qna_prof[index].name} <br /> {qna_prof[index].discipline} <br /> {qna_prof[index].info} <br /> <br />{qna_prof[index].description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
