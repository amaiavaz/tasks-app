import { Container } from "../container/Container"
import { TaskList } from "../taskList/TaskList"
import { SubtaskList } from "../subtaskList/SubtaskList";

export const Main = ({tasks, deleteTask, updateTask, selectedTaskId, setSelectedTaskId}) => {
  const selectedTask = tasks.find(task => task.id === selectedTaskId);

  return (
    <main className='flex-1'>
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
            updateTask={updateTask}
          />
        }
      </Container>
    </main>
  )
}
