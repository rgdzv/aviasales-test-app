import { TOGGLE_CHECKBOX, TOGGLE_MAIN_CHECKBOX } from '../action-types/action-types'

const initialState = {
  mainCheckBox : true,
  checkBox: {
    0: true,
    1: true,
    2: true,
    3: true
  }
}

export const filterReducer = (state = initialState, { type, checked }) => {
  switch (type) {
    case TOGGLE_MAIN_CHECKBOX:
      return { 
        ...state,
        mainCheckBox: !state.mainCheckBox,
        checkBox: Object.keys({...state.checkBox}).reduce((acc, cur) => ({...acc, [cur]: !state.mainCheckBox }), {}) 
      }
    case TOGGLE_CHECKBOX:
      return { 
        ...state,
        checkBox: {...state.checkBox, ...checked},
        mainCheckBox: Object.values({...state.checkBox, ...checked}).every(value => value)
      }
    default:
      return state
  }
}