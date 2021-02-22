import React from 'react'
import './Preloader.scss'
import preloader from './../../img/preloader.gif'

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="preloader"/>
    </div>
  )
}

export default Preloader
