// import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../helpers/api'
import FormInput from '../components/FormInput'

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    })
    const[errorInfo ,setErrorInfo] = useState({})
    const[isError, setIsError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        register(data).then(handleSuccessfulRegister).catch(handleError)
    }

    const handleSuccessfulRegister = () => {
        setIsError(false)
        navigate('/login')
    }

    const handleError = (error) => {
        if(error.response) {
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
        <section>
            <form onSubmit={handleSubmit}>
            <h1>Register to TasteBook</h1>
            <FormInput
                placeholder='user123'
                type='text'
                name='username'
                {...formInputProps} 
            />
            <FormInput
                placeholder='email@email.com'
                type='email'
                name='email'
                {...formInputProps}
            />
            <FormInput 
                placeholder='password'
                type='password'
                name='password'
                {...formInputProps}
            />
            <FormInput 
                placeholder='password again'
                type='password'
                name='passwordConfirmation'
                {...formInputProps}
            />
            <div>
                <input type='submit' value='Register' />
            </div>
            {isError? (
                <div className='error'>
                    <p>Error. Please try again.</p>
                </div>
            ) : (
                <></>
            )}
            </form>
        </section>
    )
}

export default Register