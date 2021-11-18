import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import RecipeCard from "../components/RecipeCard"

const MostLikedRecipes = () => {
  const [likedRecipes, setLikedRecipes] = useState([])

  useEffect(() => {
    async function fetchLikedRecipes() {
      const config = {
        method: "get",
        url: "/api/recipes",
        headers: {},
      }

      const response = await axios(config)
      const data = response.data

      let likedSortedData = data.sort((a, b) =>
        b.likedBy.length > a.likedBy.length ? 1 : -1
      )

      let mostLikedFourRecipes = [
        likedSortedData[0],
        likedSortedData[1],
        likedSortedData[2],
        likedSortedData[3],
      ]

      setLikedRecipes(mostLikedFourRecipes)
    }
    fetchLikedRecipes()
  }, [])

  return (
    <div>
      <ul>
        {likedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeCard {...recipe} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MostLikedRecipes
