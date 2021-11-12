import './App.css'
// import { useEffect } from 'react'
// import axios from 'axios'
import RecipeList from './pages/RecipeList'
// import ShoppingListShow from './pages/ShoppingListShow'
// import RecipeShow from './pages/RecipeShow'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
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
