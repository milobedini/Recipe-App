import axios from "axios"
import { useState } from "react"
import RecipeForm from "../components/RecipeForm"
import { getAxiosRequestConfig } from "../helpers/api"

const RecipeAdd = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
    ingredients: [],
    categories: [],
    prepTime: "",
    cookTime: "",
    method: [],
    difficulty: "",
    servings: "",
    calories: "",
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
    event.preventDefault()

    const config = getAxiosRequestConfig("/recipes", data)
    try {
      const response = await axios(config).catch(handleError)
      console.log(response.data)
      setIsError(false)
    } catch (err) {
      console.log(err)
    }
  }
  const handleFormChange = (event) => {
    const { name, value } = event.target.value
    setData({
      ...data,
      [name]: value,
    })
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
