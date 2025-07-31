import { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
    setIsAdding(false);
  }

  return (
    <>
      <div className="flex flex-col h-dvh">
        <Header 
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
        />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
