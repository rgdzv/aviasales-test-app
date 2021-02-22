import React, { memo } from 'react'
import './Ticket.scss'
import TicketInfo from '../ticket-info/TicketInfo'
import { finalPrice } from '../../helper/helper'
import PropTypes from 'prop-types'

const Ticket = ({ price, src, segment }) => {

  const formattedPrice = finalPrice(price)
  
  return (
    <div className="content__item__ticket">
      <div className="ticket__header">
        <div className="ticket__header__price">{formattedPrice}</div>
        <img src={`http://pics.avs.io/99/36/${src}.png`} alt={src}/>
      </div>
      {segment.map((segment, index) => (
        <TicketInfo 
          key={index}
          segment={segment}
        />
      ))}
  </div>
  )
}

Ticket.propTypes = {
  price: PropTypes.number,
  src: PropTypes.string,
  segment: PropTypes.array,
}

Ticket.defaultProps = {
  price: 0,
  src: '',
  segment: [],
}

export default memo(Ticket)
