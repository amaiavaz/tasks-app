import { Container } from "../container/Container"
import { TaskList } from "../taskList/TaskList"

export const Main = ({tasks, deleteTask}) => {
  return (
    <main className='flex-1 overflow-auto'>
      <Container>
        <TaskList 
          tasks={tasks}
          deleteTask={deleteTask}
        />
      </Container>
    </main>
  )
}
