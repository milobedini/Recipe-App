import React from "react"
import { getToken } from "../helpers/auth"
import { useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { ImBin } from "react-icons/im"

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
    navigate("/recipes")
    try {
      setIsError(false)
    } catch (err) {
      console.log(err)
    }
  }

  if (isLoggedIn) {
    return (
      <div className="delete">
        <button className="delete" onClick={handleDelete}>
          <ImBin />
        </button>
      </div>
    )
  }
  if (!isLoggedIn) {
    return <></>
  }
}

export default DeleteRecipe
