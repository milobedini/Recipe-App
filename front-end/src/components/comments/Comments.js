import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getAxiosRequestConfig } from '../../helpers/api'
import { useState } from 'react'
import StarRating from './StarRating'

const Comments = () => {
  const [comment, setComment] = useState({
    text: '',
  })

  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const { id } = useParams()

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('handleSubmit')
    try {
      const config = getAxiosRequestConfig(`recipes/${id}/comments`, comment)
      const response = await axios(config).catch(handleError)
      console.log(response)
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
    console.log('Comment', comment)
  }

  const formInputProps = { data: comment, errorInfo, handleFormChange }

  return (
    <section>
      <form className="review" onSubmit={handleSubmit}>
        <h3>Review recipe</h3>
        <input
          name="text"
          type="text"
          value={comment.text}
          placeholder="Tell us what you think"
          onChange={handleFormChange}
          {...formInputProps}
        />
        <div>
          <input type="submit" value="Leave a Review" />
        </div>
        <div className="rating_section">
          <div>
            <h3>How Would You Rate This recipe ?</h3>
          </div>
          <div className="rate_star">
            <div>
              <StarRating />
            </div>
          </div>
        </div>
        {isError ? (
          <div className="error">
            <p>Error. Please try again</p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </section>
  )
}

export default Comments
