import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../helpers/api"
import FormInput from "../components/FormInput"
import "../styles/Register.css"

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    register(data).then(handleSuccessfulRegister).catch(handleError)
  }

  const handleSuccessfulRegister = () => {
    setIsError(false)
    navigate("/login")
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
    console.log(data)
  }
  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <div className="register">
      <div className="form">
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-image">
              <h2 className="card-heading">
                Welcome <small>Register to TasteBook</small>
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
            type="email"
            name="email"
            {...formInputProps}
          />
          <FormInput
            className="input-field"
            type="password"
            name="password"
            {...formInputProps}
          />
          <FormInput
            className="input-field"
            type="password"
            name="passwordConfirmation"
            {...formInputProps}
          />
          <div>
            <input className="action" type="submit" value="Register" />
          </div>
          {isError ? (
            <div className="error">
              <p>Error. Please try again.</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}

export default Register
