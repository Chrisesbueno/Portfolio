import React from 'react'
import { baseAbout, buttons } from '../../constants'
import './about.css'
import { AboutImg, CV } from '../../assets'
import { AboutInfo, Button } from '../../components'

const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title"> {baseAbout.title} </h2>
        <p className='section__subtitle'> {baseAbout.subtitle} </p>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className='about__img' />
            <div className="about__data">
                <AboutInfo />
                <p className="about__description"> {baseAbout.description} </p>
                <Button download={true} link={CV} title={buttons[1].title} icon={buttons[1].icon} />
            </div>
        </div>
    </section>
  )
}

export default About