import { removeToken } from "../helpers/auth"
import { Link, useNavigate } from "react-router-dom"
import "../styles/Nav.css"

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    setIsLoggedIn(false)
    navigate.push("/")
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Browse</Link>
        </li>
        <li>{/* Link to Search */}Search</li>
        <li>
          <Link to="/shopping-list">Shopping List</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/recipes/new">Add a Recipe, plus sign.</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav
