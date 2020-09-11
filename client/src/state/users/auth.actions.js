export const USER = '[USER]';


export const SIGNUP_USER = `${USER} SIGNUP`
export const LOGIN_USER = `${USER} LOGIN`
export const SET_USER = `${USER} SET`

export const userSignup = ({user}) => (
  {
    type: SIGNUP_USER,
    payload: user,
  }
)

export const userLogin = ({email, password}) => (
  {
    type: LOGIN_USER,
    payload: {email, password}
  }
)

export const setUser = ({user}) => (
  {
    type: SET_USER,
    payload: user
  }
)