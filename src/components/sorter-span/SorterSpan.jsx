import React from 'react'
import './SorterSpan.scss'
import PropTypes from 'prop-types'

const SorterSpan = ({ name, onClick, className }) => {
  return (
    <span 
      onClick={onClick} 
      className={`content__item__sorting__span ${className}`}
      name={name}
    >
      {name}
    </span>
  )
}

SorterSpan.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

SorterSpan.defaultProps = {
  name: '',
  onClick: () => {},
  className: '',
}

export default SorterSpan
