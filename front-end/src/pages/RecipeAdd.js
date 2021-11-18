import axios from "axios"
import { useState } from "react"
import RecipeForm from "../components/RecipeForm"
import { getAxiosRequestConfig } from "../helpers/api"
import { useNavigate } from "react-router-dom"
import "../styles/RecipeAdd.css"

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
    <div className="recipe-add">
      <div className="form">
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-image">
              <h2 className="card-heading">Add your recipe below:</h2>
            </div>
          </div>
          <RecipeForm
            className="input-field"
            formInputProps={formInputProps}
            setData={setData}
            data={data}
          />
          <div>
            <input className="action" type="submit" value="Add Recipe" />
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

export default RecipeAdd
