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
      <div className="home-featured">
        <h3 className="subtitle">Most recent recipes</h3>
        <NewRecipesList />

        <h3 className="subtitle">Top rated recipes</h3>

        <BestRecipeList />

        <h3 className="subtitle">Most liked recipes</h3>
        <MostLikedRecipes />
      </div>
    </div>
  )
}

export default Home
