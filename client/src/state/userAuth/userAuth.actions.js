import {userAuthConstants} from "/userAuth.constants";

export const userAuthActions = {
  signupRequest,
  signupSuccess,
  signupFailure,

  loginRequest,
  loginSuccess,
  loginFailure,
  
  logout
}

const signupRequest = user => ( 
  {
    type: userAuthConstants.SIGNUP_REQUEST,
    user
  }
)

const signupSuccess = user => {
  {
    type: userAuthConstants.SIGNUP_SUCCESS,
    user
  }
}

const signupFailure = error => {
  {
    type: userAuthConstants.SIGNUP_FAILURE,
    error
  }
}

const loginRequest = (email, password) => (
  {
    type: userAuthConstants.LOGIN_REQUEST,
    email,
    password
  }
)

const loginSuccess = (email, password) => (
  {
    type: userAuthConstants.LOGIN_SUCCESS,
    email,
    password
  }
)

const loginSuccess = (error) => (
  {
    type: userAuthConstants.LOGIN_FAILURE,
    error
  }
)

const logout = () => (
  {type: userAuthConstants.LOGOUT}
)