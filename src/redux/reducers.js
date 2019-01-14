// import { combineReducers } from 'redux'
import { UPDATE_VAL, SHOWINFO } from './actions'

const initalState = { value: 'hello react', showInfo: 'current value:' }

const inputApp = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_VAL:
      return { ...state, value: action.text }
    case SHOWINFO:
      return { ...state, showInfo: 'current value:' + state.value }
    default:
      return state
  }
}

export default inputApp
