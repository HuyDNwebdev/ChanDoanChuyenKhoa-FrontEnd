import axios from "../axios"

const handleLogin = (email, password) => {
  return axios.post("/api/login", { email, password })
}

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-user?id=${inputId}`)
}

const createNewUserService = (data) => {
  console.log("Check data from service: ", data)
  return axios.post("/api/create-new-user", data)
}

export { handleLogin, getAllUsers, createNewUserService }
