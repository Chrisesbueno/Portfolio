import React from 'react'
import { qualificationEducation, qualificationExperience } from '../constants'

const Education = ({toggle}) => {
  return (
    <>
    <div className={
        toggle === 1 ? "qualification__content qualification__content-active" 
        : "qualification__content"
    }>
        {qualificationEducation.map(education => (
            education.direction === 'left' ?  (
                <div className="qualification__data" key={education.id}>
                    <div>
                        <h3 className="qualification__title">
                            {education.title}
                        </h3>
                        <p className="qualification__subtitle">
                            {education.subtitle}
                        </p>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> {education.date}
                        </div>
                    </div>
                    
                    {!education.last ? (
                    <div>
                        <span className="qualification__rounder"></span>
                        <div className="qualification__line"></div>
                    </div>
                    ) : (
                    <div>
                        <span className="qualification__rounder"></span>
                    </div>
                    )}
                </div>
            ) : (
                <div className="qualification__data" key={education.id}>
                    <div>
                    </div>
                    {!education.last ? (
                    <div>
                        <span className="qualification__rounder"></span>
                        <div className="qualification__line"></div>
                    </div>
                    ) : (
                    <div>
                        <span className="qualification__rounder"></span>
                    </div>
                    )}
                    <div>
                        <h3 className="qualification__title">
                            {education.title}
                        </h3>
                        <p className="qualification__subtitle">
                            {education.subtitle}
                        </p>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> {education.date}
                        </div>
                    </div>
                </div>
            )
        ))}
    </div>
    <div className={
        toggle === 2 ? "qualification__content qualification__content-active" 
        : "qualification__content"
    }>
        {qualificationExperience.map(experience => (
            experience.direction === 'left' ?  (
                <div className="qualification__data" key={experience.id}>
                    <div>
                        <h3 className="qualification__title">
                            {experience.title}
                        </h3>
                        <p className="qualification__subtitle">
                            {experience.subtitle}
                        </p>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> {experience.date}
                        </div>
                    </div>
                    {!experience.last ? (
                    <div>
                        <span className="qualification__rounder"></span>
                        <div className="qualification__line"></div>
                    </div>
                    ) : (
                    <div>
                        <span className="qualification__rounder"></span>
                    </div>
                    )}
                </div>
            ) : (
                <div className="qualification__data" key={experience.id}>
                    <div>
                    </div>
                    {!experience.last ? (
                    <div>
                        <span className="qualification__rounder"></span>
                        <div className="qualification__line"></div>
                    </div>
                    ) : (
                    <div>
                        <span className="qualification__rounder"></span>
                    </div>
                    )}
                    <div>
                        <h3 className="qualification__title">
                            {experience.title}
                        </h3>
                        <p className="qualification__subtitle">
                            {experience.subtitle}
                        </p>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> {experience.date}
                        </div>
                    </div>
                </div>
            )
        ))}
    </div>
    </>
  )
}

export default Education