export const DEFAULT_TIME_ZONE = 'Europe/Moscow'

export const checkBoxes = [
  {id: 0, label: "Без пересадок"},
  {id: 1, label: "1 пересадка"},
  {id: 2, label: "2 пересадки"},
  {id: 3, label: "3 пересадки"}
]

export const sorterTabs = [
  {id:'Самый дешевый'},
  {id:'Самый быстрый'}
]

// Format price

const formattedPrice = new Intl.NumberFormat(["ru-RU"], {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: '0'
})

export const finalPrice = (price) => {
  return formattedPrice.format(price)
}

// Format time

export const getTimeFromDate = (date, timeZone = 'UTC') => {
  const options = {
    timeZone, 
    hour: 'numeric', 
    minute: 'numeric'
  }

  return new Date(date).toLocaleTimeString('ru', options)
}

export const formatDuration = (timeInMin = 0) => {
  const hours = Math.floor(timeInMin / 60)
  const minutes = hours === 0 ? timeInMin : timeInMin - hours * 60

  return `${hours}ч ${minutes}м`
}

export const formatTimeInterval = (dateString, duration, timeZone) => {
  const startTime = Date.parse(dateString)
  const endTime = startTime + (60000 * duration)
  const formatedStartTime = getTimeFromDate(startTime, timeZone)
  const formatedEndTime = getTimeFromDate(endTime, timeZone)

  return `${formatedStartTime} – ${formatedEndTime}`
}

// Stops

export const stopsLengthNameFormat = (amount) => {

  switch (true) {
    case amount === 0:
      return `Без пересадок`

    case amount === 1:
      return `${amount} пересадка`

    case amount > 1 && amount < 5:
      return `${amount} пересадки`

    default:
      return `${amount} пересадок`
  }
}

// Sorting duration

export const sortDuration = (segment) => {
  return segment.segments.reduce((acc, el) => acc + el.duration, 0)
}







