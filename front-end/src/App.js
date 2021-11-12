import "./App.css"

import { useEffect, useState } from "react"
import { getToken } from "./helpers/auth"
// import axios from 'axios'
import RecipeList from "./pages/RecipeList"
// import ShoppingListShow from './pages/ShoppingListShow'
// import RecipeShow from './pages/RecipeShow'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingListShow from "./pages/ShoppingListShow"
import RecipeShow from "./pages/RecipeShow"

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
      <BrowserRouter>
        <h2> Recipes</h2>
        <Routes>
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeShow />} />
          {/* <Route path= {`api/shoppinglist} component={ShoppingListShow} /> */}
          {/* <Route path={'api/recipes/:id'} element={RecipeShow} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
