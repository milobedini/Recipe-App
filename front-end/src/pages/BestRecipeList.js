import { useState, useEffect } from "react"
import axios from "axios"
import RecipeCard from "../components/RecipeCard"

const BestRecipeList = () => {
  const [bestRecipes, setBestRecipes] = useState([])

  useEffect(() => {
    async function fetchNewRecipes() {
      const config = {
        method: "get",
        url: "/api/recipes",
        headers: {},
      }

      const response = await axios(config)
      const data = response.data

      let ratingSortedData = data.sort((a, b) =>
        a.averageRating > b.averageRating ? 1 : -1
      )

      let bestFourRecipes = [
        ratingSortedData[3],
        ratingSortedData[2],
        ratingSortedData[1],
        ratingSortedData[0],
      ]

      setBestRecipes(bestFourRecipes)
    }
    fetchNewRecipes()
  }, [])

  return (
    <div>
      <ul>
        {bestRecipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeCard {...recipe} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BestRecipeList
