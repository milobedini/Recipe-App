import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/recipes')
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return <h2> Recipes</h2>
}
export default App
