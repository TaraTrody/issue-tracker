import SET_ALERT from './alert.actions'


const initialState = [];

export const  alertReducer = (alerts = initialState, action) => {
  switch(true) {
    case action.type.includes(SET_ALERT): 
      return [...alerts, action.payload]
    default: 
      return alerts;
  }
}