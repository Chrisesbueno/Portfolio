import React from 'react'

const Button = ({link, title, icon, download=false, send=false}, target=false) => {
  return (
    <div>
      {download === true ? (
        <a download='' href={`${link}`} className='button button--flex' target={target} >
          {title}
          <i className={`${icon} icon-social`}></i>
        </a>
      ) : (
        <a href={`${link}`} className='button button--flex' target={target} >
          {title}
          <i className={`${icon} icon-social`}></i>
        </a>
      )}
    </div>
  )
}

export default Button