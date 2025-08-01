import { useState } from "react";
import { Container } from "../container/Container"
import { TaskList } from "../taskList/TaskList"
import { SubtaskList } from "../subtaskList/SubtaskList";

export const Main = ({tasks, deleteTask}) => {
  const [selectedTaskId, setSelectedTaskId] = useState(false);

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
          />
        }
      </Container>
    </main>
  )
}
