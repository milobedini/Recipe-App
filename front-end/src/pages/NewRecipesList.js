import React from "react"
import RecipeCard from "../components/RecipeCard"
import RecipeShow from "./RecipeShow"
import { useState, useEffect } from "react"
import { fetchRecipes } from "../helpers/api"
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
      const sortedData = data.sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      )
      const newestThreeRecipes = [sortedData[0], sortedData[1], sortedData[2]]

      setNewRecipes(newestThreeRecipes)
    }
    fetchNewRecipes()
  }, [])

  console.log(newRecipes)

  return (
    <ul>
      {newRecipes.map((recipe) => (
        <li key={recipe._id}>
          <RecipeCard {...recipe} />
        </li>
      ))}
    </ul>
  )
}

export default NewRecipesList
