import axios from "axios"
import { useState } from "react"
import RecipeForm from "../components/RecipeForm"
import { getAxiosRequestConfig } from "../helpers/api"
import { useNavigate } from "react-router-dom"

const RecipeAdd = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({
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

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    // event.preventDefault()
    navigate("/recipes")
    const config = getAxiosRequestConfig("recipes", data)
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
        <h1>Add your recipe</h1>
        <RecipeForm formInputProps={formInputProps} />
        <div>
          <input type="submit" value="Add Recipe" />
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

export default RecipeAdd
