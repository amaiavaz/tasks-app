import { Container } from "../container/Container";

export const Header = ({newTask, handleInput, isAdding, setIsAdding, addTask, cancelTask}) => {
  const maxLength = 20;

  return (
    <header className="py-4">
      <Container>
        <div className="flex justify-between items-start gap-3 min-h-14">
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
              onClick={addTask}
            ><img src="/check.svg" alt="icon check" /></button>
          </>
          }
        </div>
        <div className="divider"></div>
      </Container>
    </header>
  );
};
