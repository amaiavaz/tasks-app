import { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

const initialTask = {
  id: "",
  title: "",
  subtasks: []
}

function App() {
  const [newTask, setNewTask] = useState(initialTask);
  const [tasks, setTasks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const handleInput = (e) => {
    const {value, name} = e.target;
    setNewTask({...newTask, [name]: value});
  }

  const cancelTask = () => {
    setNewTask(initialTask);
    setIsAdding(false);
  }

  const addTask = () => {
    if (newTask.title) {
      setTasks([...tasks, {id: Date.now(), title: newTask.title, subtasks: []}]);
      setNewTask(initialTask);
      setIsAdding(false);
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <div className="flex flex-col h-dvh">
        <Header 
          newTask={newTask}
          handleInput={handleInput}
          cancelTask={cancelTask}
          addTask={addTask}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
        />
        <Main 
          tasks={tasks}
          deleteTask={deleteTask}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
