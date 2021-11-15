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
import Home from "./pages/Home"
import Nav from "./components/Nav"
import About from "./pages/About"

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
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeShow />} />
            <Route path="/shopping-list" element={<ShoppingListShow />} />
            <Route path="/about" element={<About />} />
            {/* <Route path={'api/recipes/:id'} element={RecipeShow} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}
export default App
