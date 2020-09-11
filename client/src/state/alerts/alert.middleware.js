import {
  SET_ALERT,
  setAlert,
  clearAlert
} from './alert.actions'

export const alertMiddleware = () => (next) => (action) => {
  if (action.type.includes(SET_ALERT)) {
    const {payload, meta} = action;
    const id              = new Date().getMilliseconds();
   
    const alert = {
     id,
     message: payload
   }

   next(setAlert({message: alert, feature: meta.feature}))
   
   setInterval(() => {
     next(clearAlert({alertId: id, feature: meta.feature}))
   }, 1000)

  } else {
    next(action)
  }
  
}
