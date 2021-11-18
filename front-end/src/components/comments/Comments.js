import axios from "axios"
import { useParams } from "react-router-dom"
import { getAxiosRequestConfig } from "../../helpers/api"
import { useState } from "react"
import ReactStars from "react-rating-stars-component"

const Comments = ({ refetch }) => {
  const [rating, setRating] = useState(true)
  const [comment, setComment] = useState({
    text: "",
    rating: null,
  })

  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const { id } = useParams()

  const handleClick = (value) => {
    setComment({ ...comment, rating: value })
    console.log(value)
  }

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("handleSubmit")

    if (!comment.rating) {
      alert("Please give a rating")
      return
    }
    try {
      const config = getAxiosRequestConfig(`recipes/${id}/comments`, comment)
      const response = await axios(config).catch(handleError)
      console.log(response)
      console.log(response)
      if (response.status > 199 && response.status < 300) {
        setComment({
          text: "",
          rating: null,
        })
        setRating(false)
        setRating(true)
        refetch()
      }

      setIsError(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormChange = async (e) => {
    const { name, value } = e.target
    setComment({
      ...comment,
      [name]: value,
    })
  }

  const formInputProps = { data: comment, errorInfo, handleFormChange }

  return (
    <section>
      <form className="review" onSubmit={handleSubmit}>
        <input
          className="review-input"
          name="text"
          type="text"
          value={comment.text}
          placeholder="Comments"
          onChange={handleFormChange}
          {...formInputProps}
        />
        <div className="rating_section">
          <div className="rate_star">
            <div>
              {rating ? (
                <ReactStars
                  name="rating"
                  type="number"
                  count={5}
                  onChange={handleClick}
                  size={40}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  {...formInputProps}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div>
          <input className="action" type="submit" value="Submit Review" />
        </div>
        {isError ? (
          <div className="error">
            <p>Error. Please login to leave a review. </p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </section>
  )
}

export default Comments
