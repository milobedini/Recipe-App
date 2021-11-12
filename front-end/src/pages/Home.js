import React from "react"
import BestRecipeList from "./BestRecipeList"
import NewRecipesList from "./NewRecipesList"

const Home = () => {
  return (
    <>
      <h1> Recipes</h1>
      <image>Picture here with large searchbar</image>
      <h2>Featured Content below:</h2>
      <h3>Most recent recipes</h3>
      <NewRecipesList />
      <h3>Top rated recipes</h3>
      <BestRecipeList />
    </>
  )
}

export default Home
