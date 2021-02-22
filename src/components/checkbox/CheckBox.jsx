import React from 'react'
import './CheckBox.scss'
import PropTypes from 'prop-types'

const CheckBox = ({ 
  name, 
  htmlFor, 
  label, 
  onChange, 
  checked, 
  id
}) => {
  return (
    <div className="content__filter__list__item">
      <input 
        type="checkbox" 
        id={id} 
        name={name} 
        checked={checked} 
        onChange={onChange}
      />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  )
}

CheckBox.propTypes = {
  name: PropTypes.number,
  htmlFor: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.number,
  checked: PropTypes.bool
}

CheckBox.defaultProps = {
  name: 0,
  htmlFor: 0,
  label: '',
  onChange: () => {},
  id: 0,
  checked: false
}

export default CheckBox
