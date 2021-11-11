import React from "react"

const ShoppingList = ({ items, removeItem, quantities }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li>
          {console.log(quantities)}
          <span>{quantities[index]}x</span>
          <span> {item}</span>
          <button onClick={() => removeItem(item)}>Remove item</button>
        </li>
      ))}
    </ul>
  )
}

export default ShoppingList
