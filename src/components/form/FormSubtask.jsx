import React from 'react'

export const FormSubtask = () => {
  return (
    <form>
      <div>
        <label htmlFor="newItem">Add an item</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
      </div>
    </form>
  )
}
