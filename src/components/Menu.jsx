import React from 'react'
import { menu } from '../constants'

const Menu = ({page}) => {
  return (
    <ul className={`${page}__list grid`}>
      {menu.map((element) => (
        <li className={`${page}__item`} key={element.id}>
          <a href={`#${element.link}`} className={`${page}__link`}>
            {element.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Menu