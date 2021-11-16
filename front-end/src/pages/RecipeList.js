import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import '../styles/cards.css'
import axios from 'axios'

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function fetchRecipes() {
      const config = {
        method: 'get',
        url: '/api/recipes',
        headers: {},
      }

      const response = await axios(config)
      setRecipes(response.data)
    }
    fetchRecipes()
  }, [])

  return (
    <>
      <div>
        <ul className="card_wrapper">
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <RecipeCard {...recipe} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default RecipeList
