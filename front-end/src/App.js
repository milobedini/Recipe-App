import "./App.css"

import { useEffect, useState } from "react"
import { getToken } from "./helpers/auth"
// import axios from 'axios'
import RecipeList from "./pages/RecipeList"
import ShoppingListShow from "./pages/ShoppingListShow"



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <>
      <h2> Recipes</h2>
      <div>
        <RecipeList />
        <ShoppingListShow />
      </div>
    </>
  )
}
export default App
