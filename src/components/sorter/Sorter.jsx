import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sorterTabs } from '../../helper/helper'
import { getSelectedSorter } from '../../redux/action/action'
import SorterSpan from '../sorter-span/SorterSpan'
import './Sorter.scss'

const Sorter = () => {

  const { selected } = useSelector(({ sorter }) => sorter)
  const dispatch = useDispatch()

  const handleSorterClick = ({ target }) => {
    dispatch(getSelectedSorter(target.getAttribute('name')))
  }

  return (
    <>
      {sorterTabs.map((item) => 
        <SorterSpan 
          key={item.id}
          onClick={handleSorterClick}
          name={item.id}
          className={selected === item.id ? 'active' : ''}
        />
      )}
    </>
  )
}

export default memo(Sorter)
