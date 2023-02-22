import { useSelector } from 'react-redux'
import Task from './Task'

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList)
  const sortedTodoList = [...todoList]
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time))
  const filterStatus = useSelector((state) => state.todo.filterStatus)

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true
    }
    return item.status === filterStatus
  })
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo) => <Task todo={todo} key={todo.id} />)
        : 'No to do found'}
    </div>
  )
}

export default AppContent
