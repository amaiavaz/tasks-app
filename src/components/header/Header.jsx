import { useState } from "react";
import { Container } from "../container/Container";

export const Header = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState("");

  return (
    <header className="py-4">
      <Container>
        <div className="flex justify-between items-center min-h-10">
          {!isAdding ? 
          <>
            <h1 className="text-2xl font-bold">MyTasks</h1>
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
              onClick={() => setIsAdding(false)}
            ><img src="/close.svg" alt="icon close" /></button>
            <div>
              <input
                className="bg-orange-50"
                type="text"
              />
            </div>
            <button
            ><img src="/check.svg" alt="icon check" /></button>
          </>
          }
        </div>
        <div className="divider"></div>
      </Container>
    </header>
  );
};
