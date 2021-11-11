import { useState } from "react"
import ShoppingList from "./ShoppingList"
import ShoppingListInput from "./ShoppingListInput"

const ShoppingListShow = () => {
  const [items, setItems] = useState([])
  const addItem = (item) => {
    setItems([...items, item])
  }

  const removeItem = (item) => {
    setItems(items.filter((x) => x !== item))
  }

  return (
    <>
      <ShoppingListInput addItem={addItem} />
      <ShoppingList items={items} removeItem={removeItem} />
    </>
  )
}
export default ShoppingListShow
