import { FaHeart, FaStar, FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/cards.css'

const RecipeCard = ({ name, image, likedBy, _id, cookTime }) => {
  return (
    <div className="ind_card">
      <img src={image} alt={name} />
      <div className="top_row">
        <div className="card_icons">
          <div>
            <p>
              20 <FaHeart />
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
        </div>
      </div>
      <div className="title">
        <h3>{name}</h3>
        {/* <Link to={`/recipes/${_id}`}>{name}</Link> */}
      </div>
    </div>
  )
}

export default RecipeCard
