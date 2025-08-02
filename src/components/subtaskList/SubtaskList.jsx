import { useState } from 'react'
import { FormSubtask } from '../form/FormSubtask'

export const SubtaskList = ({setSelectedTaskId}) => {
  const [showForm, setShowForm] = useState(false);
  const [subtasks, setSubtasks] = useState([]);

  const addSubtask = (elem) => {
    setSubtasks([...subtasks, elem]);
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
        <li className='border-b-1 max-w-100 mx-auto'>
          <div className='flex w-full items-center justify-between px-5 py-2'>
            <p className='font-semibold'>limpiar baño</p>
            <div className='flex justify-center gap-6'>
              <p className='font-semibold'>1</p>
              <button className='font-semibold'>OK</button>
              <button
                
              ><img src="/detele.svg" alt="delete" /></button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
