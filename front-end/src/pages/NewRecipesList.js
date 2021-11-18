import React from "react"
import RecipeCard from "../components/RecipeCard"
import { useState, useEffect } from "react"
import axios from "axios"

const NewRecipesList = () => {
  const [newRecipes, setNewRecipes] = useState([])

  useEffect(() => {
    async function fetchNewRecipes() {
      const config = {
        method: "get",
        url: "/api/recipes",
        headers: {},
      }

      const response = await axios(config)
      const data = response.data
      let dateSortedData = data.sort((a, b) =>
        b.createdAt > a.createdAt ? 1 : -1
      )

      let newestFourRecipes = [
        dateSortedData[0],
        dateSortedData[1],
        dateSortedData[2],
        dateSortedData[3],
      ]

      setNewRecipes(newestFourRecipes)
    }
    fetchNewRecipes()
  }, [])

  return (
    <div className="featured-content">
      <ul>
        {newRecipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeCard {...recipe} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewRecipesList
