import React from 'react'
import './skills.css'
import { baseSkills } from '../../constants'
import { Frontend, Backend } from '../../components'

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">
            {baseSkills.title}
        </h2>
        <p className="section__subtitle">
            {baseSkills.subtitle}
        </p>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills