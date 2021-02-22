import { GET_SELECTED_SORTER } from '../action-types/action-types'

const initialState = {
  selected: 'Самый дешевый'
}

export const sorterReducer = (state = initialState, { type, name }) => {
  switch (type) {
    case GET_SELECTED_SORTER:
      return { 
        ...state,
        selected: name
      }
    default:
      return state
  }
}