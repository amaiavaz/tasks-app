import { useState } from "react";

const initialValues = {
  name: "",
  quantity: 0,
  id: "",
  isDone: false
}

export const FormSubtask = ({setShowForm, addSubtask}) => {
  const [newSubtask, setNewSubtask] = useState(initialValues);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewSubtask({...newSubtask, [name]: value});
  }

  const addOne = () => {
    setNewSubtask({...newSubtask, quantity: newSubtask.quantity + 1});
  }

  const substractOne = () => {
    if (newSubtask.quantity > 0) setNewSubtask({...newSubtask, quantity: newSubtask.quantity - 1});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const dataSubtask = {...newSubtask, id: Date.now()};
    addSubtask(dataSubtask);
    setNewSubtask(initialValues);
    console.log(dataSubtask);
  }

  return (
    <form className='mx-auto space-y-5 p-6 bg-indigo-300 w-full max-w-90 rounded-3xl'>
      <div className='flex flex-col items-center gap-1.5 text-[1.15rem]'>
        <label htmlFor="newItem" className='font-bold'>Add an item</label>
        <input
          id='newItem'
          className='bg-amber-50 rounded-2xl p-1' 
          type="text"
          name="name"
          value={newSubtask.name}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col items-center gap-1 text-[1.15rem]'>
        <label htmlFor="quantity" className='font-bold'>Quantity</label>
        <div className='space-x-4'>
          <button 
            className='font-bold text-3xl'
            onClick={substractOne}
            type="button"
          >-</button>
          <input
            id='quantity'
            className='bg-amber-50 w-10 rounded-2xl p-1 text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]'
            type="number"
            min="0"
            name="quantity"
            value={newSubtask.quantity}
            onChange={handleChange}
          />
          <button 
            className='font-bold text-3xl'
            onClick={addOne}
            type="button"
          >+</button>
        </div>
      </div>
      <div className='flex justify-between px-8'>
        <button
          className='btn'
          onClick={() => setShowForm(false)}
          type="button"
        >Cancel</button>
        <button 
          className='btn'
          onClick={onSubmit}
        >Add</button>
      </div>
    </form>
  )
}
