import { useState } from "react";
import { Container } from "../container/Container"
import { TaskList } from "../taskList/TaskList"
import { SubtaskList } from "../subtaskList/SubtaskList";

export const Main = ({tasks, deleteTask}) => {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const selectedTask = tasks.find(task => task.id === selectedTaskId);

  return (
    <main className='flex-1 overflow-auto'>
      <Container>
        {!selectedTaskId ? 
          <TaskList 
            tasks={tasks}
            deleteTask={deleteTask}
            setSelectedTaskId={setSelectedTaskId}
          />
          :
          <SubtaskList
            setSelectedTaskId={setSelectedTaskId}
            task={selectedTask}
          />
        }
      </Container>
    </main>
  )
}
