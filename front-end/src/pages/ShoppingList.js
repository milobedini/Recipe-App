import React from "react"

const ShoppingList = ({ items, removeItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <span>{item}</span>
          <button onClick={() => removeItem(item)}>Remove item</button>
        </li>
      ))}
    </ul>
  )
}

export default ShoppingList
