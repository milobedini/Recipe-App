import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

const RecipeShow = () => {
  const [recipe, setRecipe] = useState([])
  const { id } = useParams

  useEffect(() => {
    const fetchRecipes = async (id) => {
      try {
        const { data } = await axios.get(`api/recipes/${id}`)
        setRecipe(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchRecipes()
  }, [id)

  return (
    <section>
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
