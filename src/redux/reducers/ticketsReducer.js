import { GET_TICKETS_REQUEST, GET_TICKETS_SUCCESS, GET_TICKETS_FAILURE } from '../action-types/action-types'

const initialState = {
  tickets: [],
  isFetching: true,
  error: null
}

export const ticketsReducer = (state = initialState, { type, tickets, error }) => {
  switch (type) {
    case GET_TICKETS_REQUEST:
      return { 
        ...state
      }
    case GET_TICKETS_SUCCESS:
      return { 
        ...state, 
        tickets: [...state.tickets, ...tickets], 
        isFetching: false,
      }
    case GET_TICKETS_FAILURE:
      return { 
        ...state,
        isFetching: false,
        error: error
      }
    default:
      return state
  }
}
