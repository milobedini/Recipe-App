import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAxiosRequestConfig, register } from '../helpers/api'
import FormInput from '../components/FormInput'

const Register = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
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
        navigate.push('/login')
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
    }
    const formInputProps = { data, errorInfo, handleFormChange }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                
            </form>
        </section>
    )
}

export default Register