import { removeToken } from "../helpers/auth"
import { Link, useHistory } from "react-router-dom"

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory()

  const handleLogout = () => {
    removeToken()
    setIsLoggedIn(false)
    history.push("/")
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
