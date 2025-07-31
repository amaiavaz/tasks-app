import React from 'react'

export const TaskList = ({tasks}) => {
  return (
    <div>
      <ul className='space-y-6'>
        <li className="w-full max-w-140 mx-auto">
          <div className='w-full text-[1.25rem] bg-indigo-100 px-1.5 py-2.5 border-3 border-indigo-900 rounded-3xl'>
            Task 1
          </div>
        </li>
      </ul>
    </div>
  )
}
