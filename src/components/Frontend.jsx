import React from 'react'
import { baseSkills, skillsFrontend } from '../constants'

const Frontend = () => {
  return (
    <div className='skills__content'>
        <h3 className="skills__title">
            {baseSkills.frontend}
        </h3>
            <div className="skills__group">
                {skillsFrontend.map(skill => (
                    <div className="skills__data" key={skill.id}>
                        <img src={skill.icon} alt="" />
                        <div>
                            <h3 className="skills__name">
                                {skill.title}
                            </h3>
                            <p className="skills__level">
                                {skill.level}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Frontend