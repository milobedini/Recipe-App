import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../helpers/api.js'
import { setToken } from '../helpers/auth.js'
import FormInput from '../components/FormInput'

const Login = ({ setIsLoggedIn }) => {
    const [data, setData] = useState({
        username:'',
        password:'',
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
        setIsLoggedIn(true)
        setIsError(false)
        navigate('/')
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
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Sign in to TasteBook</h1>
                <FormInput 
                    placeholder='username'
                    type='text'
                    name='username'
                    {...formInputProps}
                />
                <FormInput
                    placeholder='password'
                    type='password'
                    name='password'
                    {...formInputProps}
                />
                <div>
                    <input type='submit' value='log In' />
                </div>
                <div className='takeToOther'>
                    <p>Don't have an account?</p>
                    {/* <input type= value='Register'/> */}
                </div>
                {isError ? (
                    <div className='error'>
                        <p>Error. Please try again</p>
                    </div>
                ) : (
                    <></>
                )}
            </form>
        </section>
    )
}

export default Login