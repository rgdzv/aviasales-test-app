import { 
  GET_TICKETS_REQUEST, 
  GET_TICKETS_SUCCESS, 
  GET_TICKETS_FAILURE, 
  GET_SEARCH_ID_REQUEST, 
  GET_SEARCH_ID_SUCCESS, 
  GET_SEARCH_ID_FAILURE,
  GET_SELECTED_SORTER,
  TOGGLE_CHECKBOX,
  TOGGLE_MAIN_CHECKBOX
} from '../action-types/action-types'
import axios from 'axios'

export const fetchData = () => {
  return (dispatch) => {
    dispatch(getSearchIDRequest())
    axios
      .get(`https://front-test.beta.aviasales.ru/search`)
      .then((res) => {
        dispatch(getSearchIDSuccess(res.data.searchId))
        dispatch(fetchTickets(res.data.searchId))
      })
      .catch((err) => {
        dispatch(getSearchIDFailure(err.message))
      })
  }
}

const fetchTickets = (searchID) => {
  return (dispatch) => {
    dispatch(getTicketsRequest())
    axios
      .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID}`)
      .then((res) => {
        dispatch(getTicketsSuccess(res.data.tickets))
        if (!res.data.stop) {
          dispatch(fetchTickets(searchID))
        }
      })
      .catch((err) => {
        dispatch(getTicketsFailure(err.message))
        dispatch(fetchTickets(searchID))
      })
  }
}

// Search ID 

const getSearchIDRequest = () => ({
  type: GET_SEARCH_ID_REQUEST
})

const getSearchIDSuccess = (searchID) => ({
  type: GET_SEARCH_ID_SUCCESS,
  searchID
})

const getSearchIDFailure = (error) => ({
  type: GET_SEARCH_ID_FAILURE,
  error
})

// Tickets 

const getTicketsRequest = () => ({
  type: GET_TICKETS_REQUEST
})

const getTicketsSuccess = (tickets) => ({
  type: GET_TICKETS_SUCCESS,
  tickets
})

const getTicketsFailure = (error) => ({
  type: GET_TICKETS_FAILURE,
  error
})

// Sorting

export const getSelectedSorter = (name) => ({
  type: GET_SELECTED_SORTER,
  name
})

// Filter

export const toggleCheckBox = (checked) => ({
  type: TOGGLE_CHECKBOX,
  checked
})

export const toggleMainCheckBox = () => ({
  type: TOGGLE_MAIN_CHECKBOX
})