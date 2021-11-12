import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchRecipe, getAxiosRequestConfig } from '../helpers/api.js'
import RecipeForm from '../components/RecipeForm.js'

const RecipeEdit = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        image: '',
        ingredients: [],
        categories: [],
        prepTime: '',
        cookTime: '',
        method:[],
        difficulty: '',
        servings: '',
        calories: '',
        allergens: [],
        video: '',
    })
    const [errorInfo, setErrorInfo] = useState({})
    const [isError, setIsError] = useState(false)
    const { id } = useParams()
    
    useEffect(() => {
        fetchRecipe(id).then(setRecipe)
    }, [id])

    const handleError = (error) => {
        if (error.response) {
            setErrorInfo(error.response.data)
            setIsError(true)
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        const config = getAxiosRequestConfig(`/recipes/${id}`, recipe, 'put')

        try {
           const response = await axios(config).catch(handleError)
           console.log(response.data)
           setIsError(false) 
        } catch (err) {
            console.log(err)
        }
    }

    const handleFormChange = (event) => {
        const { name, value } = event.target
        setRecipe({
            ...recipe,
            [name]: value,
        })
    }
    const formInputProps = { data: recipe, errorInfo, handleFormChange }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Edit {recipe.name}</h1>
                <RecipeForm formInputProps={formInputProps} />
                <div>
                    <input type='button' value='Cancel Edit' />
                </div>
                {isError ? (
                    <div className='error'>
                        <p>Error: {errorInfo.message}. Please try again</p>
                    </div>
                ) : (
                    <></>
                )}
            </form>
        </section>
    )
}

export default RecipeEdit