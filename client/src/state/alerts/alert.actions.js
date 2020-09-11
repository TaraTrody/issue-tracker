export const SET_ALERT = 'SET_ALERT'
export const CLEAR_ALERT = 'CLEAR_ALERT'

export const setAlert = ({message, feature}) => (
  {
    type: `${feature} ${SET_ALERT}`,
    payload: message,
    meta: {feature}
  }
)

export const clearAlert = ({alertId, feature}) => (
  {
    type: `${feature} ${CLEAR_ALERT}`,
    payload: notificationId,
    meta: {feature}
  }
)