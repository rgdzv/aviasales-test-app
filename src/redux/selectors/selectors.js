import { createSelector } from "reselect"
import { sortDuration } from "../../helper/helper"

const allTickets = state => state.tickets
const selected = state => state.sorter.selected
const stopsFilter = state => state.filter

const stopsFilterSelector = createSelector(
  [allTickets, stopsFilter],
  (tickets, stops) => {
    return [...tickets.tickets].filter(item => {
      return stops.mainCheckBox ||
      Object.keys({...stops.checkBox}).some(i =>
        stops.checkBox[i] &&
        item.segments[0].stops.length === +i &&
        item.segments[1].stops.length === +i
      )
    })
  }
)

export const sorterSelector = createSelector(
  [stopsFilterSelector, selected],
  (tickets, selec) => {
    return [...tickets].sort((a, b) => {
      return (selec === "Самый дешевый") 
        ? a.price - b.price
        : sortDuration(a) - sortDuration(b)
    }).slice(0,5)
  }
)
