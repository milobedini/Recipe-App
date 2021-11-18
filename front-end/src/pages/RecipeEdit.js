import axios from 'axios'
import { useState, useEffect } from 'react'
import RecipeForm from '../components/RecipeForm'
import { getAxiosRequestConfig } from '../helpers/api'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/RecipeEdit.css'

const RecipeEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [recipe, setRecipe] = useState({
    name: '',
    image: '',
    ingredients: [],
    categories: [],
    prepTime: '',
    cookTime: '',
    method: [],
    difficulty: 0,
    servings: 0,
    calories: 0,
    allergens: [],
  })

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { data } = await axios.get(`/recipes/${id}`)
        setRecipe({
          name: data.name,
          image: data.image,
          ingredients: data.ingredients.map((ingredient) => ingredient),
          categories: data.categories.map((category) => category),
          prepTime: data.prepTime,
          cookTime: data.cook,
          method: data.method.map((step) => step),
          difficulty: data.difficulty,
          servings: data.servings,
          calories: data.calories,
          allergens: data.allergens.map((allergen) => allergen),
        })
      } catch (error) {
        console.log(error)
      }
    }
    getRecipes()
  }, [id])

  const [errorInfo, setErrorInfo] = useState({})
  const { isError, setIsError } = useState(false)

  useEffect(() => {
    async function fetchRecipe(id) {
      const config = {
        method: 'get',
        url: `/api/recipes/${id}`,
        headers: {},
      }

      const response = await axios(config)
      setRecipe(response.data)
    }
    fetchRecipe(id)
  }, [])

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    // event.preventDefault()
    const config = getAxiosRequestConfig(`recipes/${id}`, recipe, 'put')
    navigate(`/recipes/${id}`)
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
    console.log(recipe)
  }

  const formInputProps = { data: recipe, errorInfo, handleFormChange }

  return (
    <div className="recipe-edit">
      <div className="form">
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-image">
              <h2 className="card-heading">Edit your recipe</h2>
            </div>
          </div>
          <RecipeForm
            className="input-field"
            formInputProps={formInputProps}
            setData={setRecipe}
            data={recipe}
          />
          <div>
            <input className="action" type="submit" value="Edit Recipe" />
          </div>
          {isError ? (
            <div className="error">
              <p>Error, something went wrong. Please try again</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}

export default RecipeEdit
