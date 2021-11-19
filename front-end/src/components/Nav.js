import { removeToken, removeUser } from "../helpers/auth"
import { Link, useNavigate } from "react-router-dom"
import {
  ImHome,
  ImBook,
  ImSearch,
  ImInfo,
  ImUser,
  ImCart,
  ImPlus,
  ImUserPlus,
} from "react-icons/im"
import { GoBook, GoSignIn, GoSignOut } from "react-icons/go"
import logo from "../styles/images/Logo.jpg"
import "../styles/Nav.css"

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    removeUser()
    setIsLoggedIn(false)
    navigate("/")
  }
  return (
    <nav className="nav">
      <ul>
        <li>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" size="small" />
            </Link>
          </div>
        </li>
        <li>
          <Link to="/">
            <ImHome />
          </Link>
        </li>
        <li>
          <Link to="/recipes">
            <GoBook />
          </Link>
        </li>
        <li>
          {/* Link to Search */}
          <ImSearch />
        </li>
        <li>
          <Link to="/shopping-list">
            <ImCart />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <ImInfo />
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/recipes/new">
                <ImPlus />
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>
                <GoSignOut />
              </button>
            </li>
            <li>
              <Link to="/profile">
                <ImUser />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <GoSignIn />
              </Link>
            </li>
            <li>
              <Link to="/register">
                <ImUserPlus />
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav
