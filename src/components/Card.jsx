import React from 'react'
import { baseContact } from '../constants'

const Card = ({title, data, icon}) => {
  return (
    <div className="contact__card">
        <i className={`${icon} contact__card-icon`}></i>
        <h3 className="contact__card-title">{title}</h3>
        <p className="contact__card-data">{data}</p>
        <a href="#contac" className="contact__button">  
            {baseContact.subtitle}{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
    </div>
  )
}

export default Card