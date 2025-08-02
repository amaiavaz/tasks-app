import { useState } from "react";
import { Container } from "../container/Container";

const initialTask = {
  id: "",
  title: "",
  subtasks: []
}

export const Header = ({ isAdding, setIsAdding, addTask, setSelectedTaskId}) => {
  const [newTask, setNewTask] = useState(initialTask);
  const maxLength = 20;

  const handleInput = (e) => {
    const {value, name} = e.target;
    setNewTask({...newTask, [name]: value});
  }

  const onSubmit = () => {
    const dataTask = {id: Date.now(), title: newTask.title, subtasks: []};
    addTask(dataTask);
    setNewTask(initialTask);
  }

  const cancelTask = () => {
    setNewTask(initialTask);
    setIsAdding(false);
  }

  return (
    <header className="py-4">
      <Container>
        <div className="flex justify-between items-start gap-3 min-h-14">
          {!isAdding ? 
          <>
            <h1 
              className="text-2xl font-bold cursor-pointer hover:underline"
              onClick={() => setSelectedTaskId(null)}
            >MyTasks</h1>
            <div>
              <button 
                className="btn"
                onClick={() => setIsAdding(true)}
              >Add</button>
            </div>
          </>
          :
          <>
            <button
              onClick={cancelTask}
            ><img src="/close.svg" alt="icon close" /></button>
            <div className="w-full max-w-100">
              <input
                className="w-full border-2 border-indigo-900 rounded-2xl px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                type="text"
                placeholder="Write a task..."
                onChange={handleInput}
                value={newTask.title}
                name="title"
                maxLength={maxLength}
              />
              <p className="text-sm text-indigo-700 text-right mr-3">{newTask.title.length}/{maxLength}</p>
            </div>
            <button
              onClick={onSubmit}
            ><img src="/check.svg" alt="icon check" /></button>
          </>
          }
        </div>
        <div className="divider"></div>
      </Container>
    </header>
  );
};
