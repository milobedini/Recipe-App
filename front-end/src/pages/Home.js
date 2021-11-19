import React from "react"
import BestRecipeList from "./BestRecipeList"
import MostLikedRecipes from "./MostLikedRecipes"
import NewRecipesList from "./NewRecipesList"
import banner from "../styles/images/Tastebook.jpg"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <img src={banner} alt="tastebook banner" />
      </div>
      <h3 className="subtitle">Most recent recipes</h3>
      <NewRecipesList />
      <h3 classname="subtitle">Top rated recipes</h3>
      <BestRecipeList />
      <h3 classname="subtitle">Most liked recipes</h3>
      <MostLikedRecipes />
    </div>
  )
}

export default Home
