import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { getToken } from "../../helpers/auth"

const Likes = ({ isLoggedIn, setIsLoggedIn }) => {
  const [likeNumber, setLikeNumber] = useState(0)
  const [userHasLiked, setUserHasLiked] = useState(false)
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const { id } = useParams()

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }
  useEffect(() => {
    async function fetchLikes(id) {
      const config = {
        method: "get",
        url: `/api/recipes/${id}`,
        headers: {},
      }

      const response = await axios(config)
      setLikeNumber(response.data.likedBy.length)
    }
    fetchLikes(id)
  }, [userHasLiked])

  const handleLike = async (event) => {
    const config = {
      method: "put",
      url: `/api/recipes/${id}/like`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    }
    const response = await axios(config).catch(handleError)
    setUserHasLiked(true)
    console.log(userHasLiked)
    console.log(likeNumber)
    event.preventDefault()
    console.log("handleLike")
    try {
      setIsError(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleUnlike = async (event) => {
    const config = {
      method: "put",
      url: `/api/recipes/${id}/unlike`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    }
    const response = await axios(config).catch(handleError)
    setUserHasLiked(false)
    console.log(userHasLiked)
    console.log(likeNumber)
    event.preventDefault()
    console.log("handleLike")
    try {
      setIsError(false)
    } catch (err) {
      console.log(err)
    }
  }

  if (isLoggedIn) {
    return (
      <div>
        <h2>Like this recipe:</h2>
        {userHasLiked ? (
          <>
            <button onClick={handleUnlike}>Unlike</button>
          </>
        ) : (
          <button onClick={handleLike}>Like</button>
        )}
        <h3>Current like number: {likeNumber}</h3>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div>
        <h2>Please login to like this recipe</h2>
        <h3>Current like number: {likeNumber}</h3>
      </div>
    )
  }
}

export default Likes
