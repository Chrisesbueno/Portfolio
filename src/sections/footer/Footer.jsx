import React from 'react'
import { Menu, Social } from '../../components'
import { base } from '../../constants'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">
                {base.nickname}
            </h1>
            <Menu page='footer' />
            <Social page='footer' />
            <p className="footer__copy">Hecho con React.js - Christopher Alvarez</p>
        </div>
    </div>
  )
}

export default Footer