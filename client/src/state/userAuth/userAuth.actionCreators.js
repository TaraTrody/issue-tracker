import userAuthActions from './userAuth.actions'
import userServices from '../../services/user.service'

export const userActionCreators = {
  signup,
  login,
  logout
}

const signup = user => (
  
  async dispatch => {
    try {
      dispatch(userAuthActions.signupRequest(user))

      const response = await userServices.signup(user)

      if (response.ok) {
       return dispatch(userAuthActions.signupSuccess(user))
      }

      return dispatch(userAuthActions.signupFailure(response))

    } catch(err) {
        return res.status(400).send(err.message)
    }
  }
)
// consider how this changes with the use of passport
const login = (user) => (

  async dispatch => {
    try {
      dispatch(userAuthActions.loginRequest(user))

      const response = await userServices.login(user)
      if (response.ok) {
        return dispatch(userAuthAction.loginSuccess(user))
      }
      return dispatch(userAuthAction.loginFailure(response))

    } catch(err) {
        return res.status(400).send(err.message)
    }
  }  
)

const logout = () => (
  async dispatch => {
    try {
      const response = userServices.logout();
      if (response.ok) {
        return dispactch(userAuthActions.logout())
      }
    } catch(err) {
        return res.status(400).send(err.message)
    }
  }
)

