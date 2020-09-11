import {API_REQUEST, apiSuccess, apiError} from './api.actions'
import axios from 'axios'

export const apiMiddleware = async ({dispatch}) => (next) => (action) => {
  next(action)

  if (action.type.includes(API_REQUEST)) {
    const { method, url, feature} = action.meta
    const data = action.payload
    
    const config = {
      method,
      url,
      data
    }
    try {
      const response = await axios(config)
      dispatch(apiSuccess(response, feature))

    } catch(error) { 
      dispatch(apiError(error, feature))
    }
  }
}
