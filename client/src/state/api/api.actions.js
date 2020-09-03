export const apiActions = { 
  API_REQUEST: 'API_REQUEST',
  API_SUCCESS: 'API_SUCCESS',
  API_ERROR: 'API_ERROR'
};

export const apiActionsCreators = {
  apiRequest, 
  apiSuccess,
  apiError
}

apiRequest = ({data, method, url, feature}) => (
 {
   type:`${feature} ${apiConstants.API_REQUEST}`,
   payload: data,
   meta: {method, url, feature}
 }
)

apiSuccess = ({response, feature}) => (
  {
    type:`${feature} ${apiConstants.API_SUCCESS}`,
    payload: response,
    meta: {feature}
  }
)

apiError= ({error, feature}) => (
  {
    type: `{feature} ${apiConstants.API_ERROR}`,
    payload: error, 
    meta: {feature}
  }
)