import { useEffect, useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, hasLoaded]);

  const addTask = (elem) => {
    setTasks([...tasks, elem]);
    setIsAdding(false);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <div className="flex flex-col h-dvh">
        <Header 
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
