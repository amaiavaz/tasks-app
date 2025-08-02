import { useState } from 'react'
import { FormSubtask } from '../form/FormSubtask'

export const SubtaskList = ({setSelectedTaskId, task, updateTask}) => {
  const [showForm, setShowForm] = useState(false);

  const addSubtask = (elem) => {
    const updatedTask = {...task, subtasks: [...task.subtasks, elem]}
    updateTask(updatedTask);
    console.log(updatedTask);
  }

  return (
    <div className='space-y-4'>
      <div className='flex justify-between'>
        <button 
          className='btn'
          onClick={() => setSelectedTaskId(false)}
        >Back</button>
        <button 
          className='btn'
          onClick={() => setShowForm(true)}
        >New item</button>
      </div>
      {showForm &&
        <div className='mx-auto'>
          <FormSubtask 
            setShowForm={setShowForm}
            addSubtask={addSubtask}
          />
        </div>
      }
      <ul className='space-y-3 py-3 mx-auto w-full max-w-110 rounded-3xl bg-[var(--baselight-color)]'>
        {task.subtasks?.map((elem) => {
          return(
            <li
              key={elem.id}
              className='border-b-1 max-w-100 mx-auto'
            >
              <div className='flex w-full items-center justify-between px-5 py-2'>
                <p className='font-semibold'>{elem.name}</p>
                <div className='flex justify-center gap-6'>
                  <p className='font-semibold'>{elem.quantity}</p>
                  <button className='font-semibold'>OK</button>
                  <button
                    
                  ><img src="/detele.svg" alt="delete" /></button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
