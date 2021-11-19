export const getToken = () => {
  return window.localStorage.getItem("token")
}

export const setToken = (token) => {
  window.localStorage.setItem("token", token)
}

export const removeToken = () => {
  window.localStorage.removeItem("token")
}

export const getUser = () => {
  return window.localStorage.getItem("username")
}

export const setUser = (username) => {
  window.localStorage.setItem("username", username)
}

export const removeUser = () => {
  window.localStorage.removeItem("username")
}
