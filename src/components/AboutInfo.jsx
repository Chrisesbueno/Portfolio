import React from 'react'
import { aboutSpecs } from '../constants'

const AboutInfo = () => {
  return (
    <div className='about__info grid'>
        {aboutSpecs.map(about => (
            <div className="about__box" key={about.id}>
                <i className={`${about.icon} about__icon`}></i>
                <h3 className="about__title">
                    {about.title}
                </h3>
                <p className="about__subtitle">
                    {about.subtitle}
                </p>
            </div>
        ))}
    </div>
  )
}

export default AboutInfo