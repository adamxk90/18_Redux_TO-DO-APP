import { useSelector } from 'react-redux'
import Task from './Task'

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList)
  const sortedTodoList = [...todoList]
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time))
  console.log(sortedTodoList)
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => <Task todo={todo} key={todo.id} />)
        : 'No to do found'}
    </div>
  )
}

export default AppContent
