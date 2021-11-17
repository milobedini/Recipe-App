import axios from "axios"
import { useState, useEffect } from "react"
import RecipeForm from "../components/RecipeForm"
import { getAxiosRequestConfig } from "../helpers/api"
import { useNavigate, useParams } from "react-router-dom"

const RecipeEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    ingredients: [],
    categories: [],
    prepTime: "",
    cookTime: "",
    method: [],
    difficulty: 0,
    servings: 0,
    calories: 0,
    allergens: [],
    video: "",
  })

  const [errorInfo, setErrorInfo] = useState({})
  const { isError, setIsError } = useState(false)

  useEffect(() => {
    async function fetchRecipe(id) {
      const config = {
        method: "get",
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
    const config = getAxiosRequestConfig(`recipes/${id}`, recipe, "put")
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
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Edit your recipe</h1>
        <RecipeForm formInputProps={formInputProps} />
        <div>
          <input type="submit" value="Edit Recipe" />
        </div>
        {isError ? (
          <div className="error">
            <p>Error, something went wrong. Please try again</p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </section>
  )
}

export default RecipeEdit
