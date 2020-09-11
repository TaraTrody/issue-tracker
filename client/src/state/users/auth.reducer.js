import {SET_USER} from './auth.actions'

const initialState = {}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: 
      return action.payload
    default: 
      return state
  }
  
}