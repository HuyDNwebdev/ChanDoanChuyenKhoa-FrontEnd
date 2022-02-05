import axios from "../axios"

const handleLogin = (email, password) => {
  return axios.post("/api/login", { email, password })
}

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-user?id=${inputId}`)
}

export { handleLogin, getAllUsers }