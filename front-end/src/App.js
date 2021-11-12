import "./App.css"

import { useEffect, useState } from "react"
import { getToken } from "./helpers/auth"
// import axios from 'axios'
<<<<<<< HEAD
import RecipeList from './pages/RecipeList'
// import ShoppingListShow from './pages/ShoppingListShow'
// import RecipeShow from './pages/RecipeShow'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
=======
import RecipeList from "./pages/RecipeList"
import ShoppingListShow from "./pages/ShoppingListShow"


>>>>>>> development

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
          <div>
            <Route path="api/recipes" element={RecipeList} />
            {/* <Route path= {`api/shoppinglist} component={ShoppingListShow} /> */}
            {/* <Route path={'api/recipes/:id'} element={RecipeShow} /> */}
          </div>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
