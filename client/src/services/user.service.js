import axios from "axios"

export const userServices = {
  signup,
  login,
  logout
}

const signup = user => {
  const options = {
    url: "/api/v1/user/signup",
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: user
  }
  
  axios(options)
}
//consider how this changes with the use of passport. Maybe it shouldn't change. is this the data that passport uses to query the db
const login = () => {
  const options = {
    url: "/api/v1/user/login",
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {
      email,
      password
    }
  }
  axios(options)
}

const logout = () => (
  axios.get("/api/v1/user/logout")
)