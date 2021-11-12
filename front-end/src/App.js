import './App.css'
// import { useEffect } from 'react'
// import axios from 'axios'
import RecipeList from './pages/RecipeList'
import ShoppingListShow from './pages/ShoppingListShow'



function App() {
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
