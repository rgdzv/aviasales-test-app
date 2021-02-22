import React, { memo } from 'react'
import './Filter.scss'
import CheckBox from '../checkbox/CheckBox'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCheckBox, toggleMainCheckBox } from './../../redux/action/action'
import { checkBoxes } from './../../helper/helper'

const Filter = () => {

  const { mainCheckBox }  = useSelector(({ filter }) => filter)
  const { checkBox } = useSelector(({ filter }) => filter)
  const dispatch = useDispatch()

  const allCheckBoxesChange = () => {
    dispatch(toggleMainCheckBox())
  }

  const checkBoxChange = ({ target : { name, checked } }) => {
    dispatch(toggleCheckBox({
      [name]: checked
    }))
  }

  return (
    <div className="content__filter">
      <div className="content__filter__name">
        Количество пересадок
      </div>
      <div className="content__filter__list">
        <div className="content__filter__list__item">
          <input 
            type="checkbox" 
            id="all" 
            name="Все"
            checked={mainCheckBox} 
            onChange={allCheckBoxesChange}
          />
          <label htmlFor="all">Все</label>
        </div>
        <ul>
          {checkBoxes.map(item => (
            <CheckBox 
              key={item.id}
              id={item.id}
              name={item.id} 
              htmlFor={item.id} 
              label={item.label}
              checked={checkBox[item.id]}
              onChange={checkBoxChange}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default memo(Filter)
