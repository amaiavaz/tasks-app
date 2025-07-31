import { Container } from "../container/Container"
import { TaskList } from "../taskList/TaskList"

export const Main = () => {
  return (
    <main className='flex-1 overflow-auto'>
      <Container>
        <TaskList />
      </Container>
    </main>
  )
}
