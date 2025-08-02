import React from 'react'

export const FormSubtask = () => {
  return (
    <form className='mx-auto space-y-5 p-6 bg-indigo-300 w-full max-w-110 rounded-3xl'>
      <div className='flex flex-col items-center gap-1.5 text-[1.10rem]'>
        <label htmlFor="newItem" className='font-bold'>Add an item</label>
        <input
          id='newItem'
          className='bg-amber-50 rounded-2xl' 
          type="text" 
        />
      </div>
      <div className='flex flex-col items-center gap-1 text-[1.10rem]'>
        <label htmlFor="quantity" className='font-bold'>Quantity</label>
        <div className='space-x-4'>
          <button className='font-bold text-2xl'>+</button>
          <input
            id='quantity'
            className='bg-amber-50 w-10 rounded-2xl'
            type="text" 
          />
          <button className='font-bold text-2xl'>-</button>
        </div>
      </div>
      <div className='flex justify-between px-8'>
        <button className='btn'>Add</button>
        <button className='btn'>Cancel</button>
      </div>
    </form>
  )
}
