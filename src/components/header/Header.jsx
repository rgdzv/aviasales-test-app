import React, { memo } from 'react'
import logo from '../../img/logo.png'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <a href="https://github.com/alexzhurov/aviasales_frontend">
        <img src={logo} alt="logo"/>
      </a>
    </div>
  )
}

export default memo(Header)
