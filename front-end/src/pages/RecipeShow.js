import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/recipeShow.css"
import { FaStar } from "react-icons/fa"
import { ImPencil, ImBin, ImCross } from "react-icons/im"
import Comments from "../components/comments/Comments"
import Likes from "../components/likes/Likes"
import { getToken } from "../helpers/auth"
import DeleteRecipe from "../components/DeleteRecipe"
import { getUser } from "../helpers/auth"
import { getAxiosDeleteRequestConfig } from "../helpers/api"
import { Link, useParams } from "react-router-dom"
import Button from "react-bootstrap/Button"

const RecipeShow = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const name = getUser()
  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [method, setMethod] = useState([])
  const [reviews, setReviews] = useState([])
  const { id } = useParams()

  async function fetchRecipe(id) {
    const config = {
      method: "get",
      url: `/api/recipes/${id}`,
      headers: {},
    }

    const response = await axios(config)
    setRecipe(response.data)
    setIngredients(response.data.ingredients)
    setMethod(response.data.method)
    setReviews(response.data.comments)
  }
  useEffect(() => {
    fetchRecipe(id)
  }, [id])
  const handleClose = async (commentId) => {
    try {
      const config = getAxiosDeleteRequestConfig(
        `/recipes/${id}/comments/${commentId}`
      )
      const response = await axios(config).catch(() => console.log("not cool"))
      console.log(response)
      if (response.status > 199 && response.status < 300) {
        fetchRecipe(id)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="recipe-show">
      <section className="wrapper">
        <div className="top_section">
          <div className="info">
            <h2 className="top_section_text">{recipe.name}</h2>
            <div className="key-info">
              <p className="top_section_text star-rating">
                ⭐️ {recipe.averageRating} ⭐️
              </p>
              <p className="top_section_text">
                Preparation Time: {recipe.prepTime}
              </p>
              <p className="top_section_text">Cook Time: {recipe.cookTime}</p>
              <p className="top_section_text">Servings: {recipe.servings}</p>
              <p className="top_section_text">Calories: {recipe.calories}</p>
            </div>
            <div className="edit-delete">
              <div className="delete">
                <DeleteRecipe
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </div>
              {isLoggedIn ? (
                <button className="edit">
                  <Link to={`/recipes/${id}/edit`}>
                    <ImPencil />
                  </Link>
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="like-container">
              <Likes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </div>
          </div>
          <div>
            <img src={recipe.image} alt={recipe.name} />
          </div>
        </div>
        <div className="ingredients_and_method">
          <div className="recipe_ingredients">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>
                  <p>{ingredient}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="recipe_method">
            <h3>Method</h3>
            <ul>
              {method.map((step) => (
                <li key={step}>
                  <p>{step}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="leave_review_section">
            <div className="leave-review-heading">
              <h3>We would love to know what you think of {recipe.name}?</h3>
            </div>
            <div className="leave_review">
              <Comments refetch={() => fetchRecipe(id)} />
            </div>
            <div className="rating_section">
              <div className="rate_star"></div>
            </div>
          </div>
        </div>
        <div className="recipe_reviews">
          <div className="reviews">
            <h3>Reviews ({reviews.length})</h3>
            <div className="review">
              <ul>
                {reviews.map((review) => {
                  console.log(review)
                  return (
                    <li>
                      <div className="review_table_top">
                        <div className="comment_author">
                          <p>{review.username}</p>
                        </div>
                        <div>
                          <p>
                            {Array(review.rating).fill(
                              <FaStar color="#ffd700" />
                            )}
                            {/* gave this recipe {review.rating}/5 <FaStar /> */}
                          </p>
                        </div>
                        {name === review.username ? (
                          <span onClick={(e) => handleClose(review._id)}>
                            <Button
                              className="delete-button"
                              variant="outline-primary"
                              size="sm"
                            >
                              <ImCross />
                            </Button>
                          </span>
                        ) : null}
                      </div>
                      <p>{review.text}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default RecipeShow
