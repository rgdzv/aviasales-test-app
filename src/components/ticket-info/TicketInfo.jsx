import React from 'react'
import './TicketInfo.scss'
import { formatTimeInterval, stopsLengthNameFormat, formatDuration, DEFAULT_TIME_ZONE } from '../../helper/helper'
import PropTypes from 'prop-types'

const TicketInfo = ({ segment }) => {

  const interval = formatTimeInterval(segment.date, segment.duration, DEFAULT_TIME_ZONE)
  const stopsTitle = stopsLengthNameFormat(segment.stops.length)
  const duration = formatDuration(segment.duration)
  const stopsName = segment.stops.length === 0 ? 'Прямой' : segment.stops.join(', ')

  return (
    <div className="ticket__content">
      <div className="ticket__content__block">
        <div className="ticket__content__block__wrapper">
          <div className="ticket__content__block__wrapper__info">
            {segment.origin} – {segment.destination}
          </div>
          <div className="ticket__content__block__wrapper__time">
            {interval} 
          </div>
        </div>
      </div>
      <div className="ticket__content__block">
        <div className="ticket__content__block__wrapper">
          <div className="ticket__content__block__wrapper__info">В пути</div>
          <div className="ticket__content__block__wrapper__time">
            {duration}
          </div>
        </div>
      </div>
      <div className="ticket__content__block">
        <div className="ticket__content__block__wrapper">
          <div className="ticket__content__block__wrapper__info">{stopsTitle}</div>
          <div className="ticket__content__block__wrapper__country">{stopsName}</div>
        </div>
      </div>
    </div>
  )
}

TicketInfo.propTypes = {
  segment: PropTypes.object,
}

TicketInfo.defaultProps = {
  segment: {},
}

export default TicketInfo
