import { useParams, useHistory, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import RecipeCard from "../components/RecipeCard"
import axios from "axios"

const RecipeShow = () => {
  const [recipe, setRecipe] = useState([])
  const { id } = useParams()

  useEffect(() => {
    async function fetchRecipe(id) {
      const config = {
        method: "get",
        url: `/api/recipes/${id}`,
        headers: {},
      }

      const response = await axios(config)
      setRecipe(response.data)
      console.log(response.data)
    }
    fetchRecipe(id)
  }, [id])

  return (
    <section>
      <h1>{recipe.name}</h1>
      <p>Preparation Time: {recipe.prepTime}</p>
      <p>Average Rating: {recipe.averageRating}</p>
    </section>
  )
}
export default RecipeShow
