import apiActions, { apiActionsCreators } from './api.actions'
import axios from 'axios'

export const apiMiddleware = async ({dispatch}) => (next) => (action) => {
  next(action)

  if (action.type.includes(apiActions.API_REQUEST)) {
    const { method, url, feature} = action.meta
    const data = action.payload
    
    const config = {
      method,
      url,
      data
    }
    try {
      const response = await axios(config)
      dispatch(apiActionsCreators.apiSuccess(response, feature))

    } catch(error) { 
      dispatch(apiActionCreators.apiError(error, feature))
    }



  }

}
