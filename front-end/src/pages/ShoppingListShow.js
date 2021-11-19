import { useState } from "react"
import ShoppingList from "./ShoppingList"
import ShoppingListInput from "./ShoppingListInput"
import "../styles/ShoppingList.css"

const ShoppingListShow = () => {
  const [items, setItems] = useState([])
  const [quantities, setQuantities] = useState("")
  const addItem = (item) => {
    setItems([...items, item])
  }

  const removeItem = (item) => {
    setItems(items.filter((x) => x !== item))
  }

  const addQuantity = (quantity) => {
    setQuantities([...quantities, quantity])
  }

  return (
    <div className="shopping-list">
      <header>
        <div className="container">
          <h3 className="header-title">Shopping List Generator</h3>
        </div>
      </header>
      <div className="container main">
        <ShoppingListInput addItem={addItem} addQuantity={addQuantity} />
        <div className="list-results">
          <ShoppingList
            items={items}
            removeItem={removeItem}
            quantities={quantities}
          />
        </div>
      </div>
    </div>
  )
}
export default ShoppingListShow
