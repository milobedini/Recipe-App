import { useState } from "react"

const ShoppingListInput = ({ addItem, addQuantity }) => {
  const [item, setItem] = useState("")
  const [quantity, setQuantity] = useState("")

  const handleItemChange = (event) => {
    setItem(event.target.value)
  }
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("adding", item, quantity)
    addItem(item)
    setItem("")
    addQuantity(quantity)
    setQuantity("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="foods">
        <label htmlFor="item">Item</label>
        <input
          className="sub-input"
          id="item"
          value={item}
          type="text"
          placeholder="e.g. Pint of milk"
          onChange={handleItemChange}
        />
      </div>
      <div className="quantity">
        <label htmlFor="quantity">Quantity</label>
        <input
          className="sub-input"
          id="quantity"
          value={quantity}
          type="number"
          placeholder="1"
          onChange={handleQuantityChange}
        />
        <input className="add-button" type="submit" value="Add ➕" />
      </div>
    </form>
  )
}

export default ShoppingListInput
