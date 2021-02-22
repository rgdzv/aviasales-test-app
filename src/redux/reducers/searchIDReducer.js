import { GET_SEARCH_ID_REQUEST, GET_SEARCH_ID_SUCCESS, GET_SEARCH_ID_FAILURE } from '../action-types/action-types'

const initialState = {
  searchID: '',
  isFetching: false,
  error: null
}

export const searchIDReducer = (state = initialState, { type, searchID, error }) => {
  switch (type) {
    case GET_SEARCH_ID_REQUEST:
      return { 
        ...state,
        isFetching: true,
      }
    case GET_SEARCH_ID_SUCCESS:
      return { 
        ...state,
        searchID: searchID,
        isFetching: false,
      }
    case GET_SEARCH_ID_FAILURE:
      return { 
        ...state,
        isFetching: false,
        error: error
      }
    default:
      return state
  }
}