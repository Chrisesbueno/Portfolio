import React from 'react'
import { base } from '../../constants'
import { Menu } from '../../components'
import './header.css'

const Header = () => {
  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header")
    if (this.scrollY > 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  })
  return (
    <div className="header">
        <nav className="nav container">
            <a href="index.html" className='nav__logo'>{base.nickname}</a>
            <div className="nav__menu">
                <Menu page='nav' />
            </div>

            <div className="nav__toggle">
                <i className="uil uil-bars"></i>
                <i className="uil uil-times nav__close"></i>
            </div>
        </nav>
    </div>
  )
}

export default Header