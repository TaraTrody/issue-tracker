import {USER, SIGNUP_USER, LOGIN_USER, setUser} from './auth.actions'
import {API_ERROR, API_SUCCESS, apiRequest} from '../api/api.actions'
import {setAlert} from '../alerts/alert.actions'


export const userAuthMiddleware = () => (next) => (action) => {
  next(action)

  switch (action.type) {

    case SIGNUP_USER: 
      next(apiRequest({data: action.payload, method: 'POST', url:'/api/v1/user/signup', feature: USER}))
      //TODO: add setLoader action creator
      break;
    
    case `${USER} ${API_SUCCESS}`:
      next(setUser({user: action.payload}))
      //TODO: add setLoader action creator
      break;

    case `${USER} ${API_ERROR}`:
      next(setAlert({error: action.payload, feature: USER}))
      //TODO: add setLoader action creator
      break; 
  }
}
