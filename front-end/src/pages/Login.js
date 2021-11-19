import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../helpers/api.js"
import { setToken, setUser } from "../helpers/auth.js"
import FormInput from "../components/FormInput"
import "../styles/Login.css"

const Login = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    login(data).then(handleSuccessfulLogin).catch(handleError)
  }

  const handleSuccessfulLogin = ({ token }) => {
    setToken(token)
    setUser(data.username)
    setIsLoggedIn(true)
    setIsError(false)
    navigate("/")
  }

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <div className="container login">
      <div className="form">
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-image">
              <h2 className="card-heading">
                Welcome back <small>Sign in below</small>
              </h2>
            </div>
          </div>
          <FormInput
            className="input-field"
            type="text"
            name="username"
            {...formInputProps}
          />
          <FormInput
            className="input-field"
            type="password"
            name="password"
            {...formInputProps}
          />

          <input className="action" type="submit" value="log In" />

          <div className="card-info">
            <div className="takeToOther">
              <p>Don't have an account?</p>
            </div>
            {/* <input type= value='Register'/> */}
          </div>
          {isError ? (
            <div className="error">
              <p>Error. Please try again</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login
