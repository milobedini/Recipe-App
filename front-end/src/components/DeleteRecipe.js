import React from "react"
import { getToken } from "../helpers/auth"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const DeleteRecipe = ({ isLoggedIn, setIsLoggedIn }) => {
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleDelete = async (event) => {
    const config = {
      method: "delete",
      url: `/api/recipes/${id}`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    }
    const response = await axios(config).catch(handleError)
    console.log("handle delete")
    event.preventDefault()
    navigate("/recipes")
    try {
      setIsError(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="delete">
      <h3>Delete Recipe</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteRecipe
