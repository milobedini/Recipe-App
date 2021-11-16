import { FaHeart, FaStar, FaRegClock } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"
import "../styles/cards.css"

const RecipeCard = ({ name, image, likedBy, _id, cookTime, difficulty }) => {
  const [difficultyDescription, setDifficultyDescription] = useState("")

  // if (difficulty === 1) {
  //   setDifficultyDescription("Easy")
  // }

  return (
    <>
      <div className="ind_card">
        <img src={image} alt={name} />
        <div className="top_row">
          <div className="card_icons">
            <div>
              <p>
                {likedBy.length} <FaHeart />
              </p>
            </div>
            <div>
              <p>
                Rating <FaStar />
              </p>
            </div>
          </div>
          <div className="top_row_right">
            <p>
              <FaRegClock /> {cookTime} mins
            </p>
            <p>difficulty: {difficultyDescription}</p>
          </div>
        </div>
        <div className="title">
          <h3>
            <Link to={`/recipes/${_id}`}>{name}</Link>
          </h3>
        </div>
      </div>
    </>
  )
}

export default RecipeCard
