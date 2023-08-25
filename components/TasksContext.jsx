import { createContext, useContext, useReducer } from "react"

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export default function  TasksProvider({children}){
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

function tasksReducer(tasks, action){
  switch(action.type){
    case 'added' : {
      return [...tasks, {id: action.id, text: action.text, done: false}]
    }
    case 'changed' : {
      return tasks.map(t => {
        if(t.id === action.task.id){
          return action.task;
        } else {
          return t;
        }
      })
    }
    case 'deleted' : {
      return tasks.filter(t => t.id !== action.taskId)
    }
    default : {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export function useTask(){
  return useContext(TasksContext)
}

export function useDispatch(){
  return useContext(TasksDispatchContext);
}

const initialTasks = [
  {id: 0, text: "Memangkas", done: true},
  {id: 1, text: "Belajar react app", done: true},
  {id: 2, text: "belajar next js", done: false},
]