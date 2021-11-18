import { useState, useEffect } from "react"
import axios from "axios"
import { getToken } from "../helpers/auth"
import RecipeCard from "../components/RecipeCard"
import "../styles/Profile.css"

const Profile = () => {
  const [userRecipes, setUserRecipes] = useState([])
  const [username, setUsername] = useState("")
  const [likedRecipes, setLikedRecipes] = useState([])

  useEffect(() => {
    async function fetchUserInfo() {
      const config = {
        method: "get",
        url: "/api/profile",
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "application/json",
        },
      }

      const response = await axios(config)
      console.log(response)
      setUserRecipes(response.data.createdRecipes)
      setUsername(response.data.username)
      setLikedRecipes(response.data.likedRecipes)
    }
    fetchUserInfo()
  }, [])
  console.log(userRecipes)

  return (
    <div className="profile">
      <h1>Hi {username}!</h1>
      <h3>Your liked recipes:</h3>
      <div className="user-cards">
        <ul className="card_wrapper">
          {likedRecipes.map((recipe) => (
            <li key={recipe._id}>
              <RecipeCard {...recipe} />
            </li>
          ))}
        </ul>
      </div>

      <h3>Your added recipes:</h3>
      <div className="user-cards">
        <ul className="card_wrapper">
          {userRecipes.map((recipe) => (
            <li key={recipe._id}>
              <RecipeCard {...recipe} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Profile
