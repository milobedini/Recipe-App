import React from "react"

const ShoppingList = ({ items, removeItem, quantities }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li className="list-item">
          {console.log(quantities)}
          <span>{quantities[index]}x</span>
          <span> {item}</span>
          <button className="list-delete" onClick={() => removeItem(item)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ShoppingList
