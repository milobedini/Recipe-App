import { FaHeart, FaStar, FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/cards.css'

const RecipeCard = ({
  name,
  image,
  likedBy,
  _id,
  cookTime,
  difficulty,
  averageRating,
}) => {
  return (
    <>
      <div className="ind_card">
        <Link to={`/recipes/${_id}`}>
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
                  {averageRating} <FaStar />
                </p>
              </div>
            </div>
            <div className="top_row_right">
              <p>
                <FaRegClock /> {cookTime} Mins
              </p>
              <p>Difficulty: {difficulty}</p>
            </div>
          </div>
          <div className="title">
            <h3>{name}</h3>
          </div>
        </Link>
      </div>
    </>
  )
}

export default RecipeCard
