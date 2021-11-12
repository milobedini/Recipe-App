import { useState } from "react"
import ShoppingList from "./ShoppingList"
import ShoppingListInput from "./ShoppingListInput"

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
    <>
      <ShoppingListInput addItem={addItem} addQuantity={addQuantity} />
      <ShoppingList
        items={items}
        removeItem={removeItem}
        quantities={quantities}
      />
    </>
  )
}
export default ShoppingListShow
