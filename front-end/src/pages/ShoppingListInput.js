import { useState } from "react"

const ShoppingListInput = ({ addItem }) => {
  const [item, setItem] = useState("")

  const handleChange = (event) => {
    setItem(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("adding", item)
    addItem(item)
    setItem("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Item</label>
      <input
        id="item"
        value={item}
        type="text"
        placeholder="e.g. Bread"
        onChange={handleChange}
      />
      <input type="submit" value="Add ➕" />
    </form>
  )
}

export default ShoppingListInput
