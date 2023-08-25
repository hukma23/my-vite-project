import TasksProvider from "../components/TasksContext"
import AddTasks from "../components/AddTasks"

function App() {

  return (
    <TasksProvider>
      <AddTasks />
    </TasksProvider>
  )
}

export default App
