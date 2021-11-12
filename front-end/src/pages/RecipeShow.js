import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

const RecipeShow = () => {
  const [recipe, setRecipe] = useState([])
  const id = '618d86a57c579256432a6df2'

  useEffect(() => {
    async function fetchRecipes() {
      const config = {
        method: 'get',
        url: `/api/recipes/${id}`,
        headers: {},
      }

      const response = await axios(config)
      setRecipe(response.data)
      console.log(response.data)
    }
    fetchRecipes()
  }, [])

  return (
    <section>
      <p> {recipe.name} hello</p>
      <p>hello</p>
      {/* <h1>{recipe.name}</h1>
      {/* <p>
        <Link to={`/cheeses/${id}/edit`}>Edit this cheese!</Link>
        <button onClick={handleDeleteClick}>Delete this cheese!</button>
        </p> */}
    </section>
  )
}
export default RecipeShow
