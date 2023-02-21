import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleTodo } from '../slices/todoSlice'
import TodoModal from './TodoModal'

function Task({ todo }) {
  const dispatch = useDispatch()
  const [editModal, setEditModal] = useState(false)

  const handleDelete = () => {
    dispatch(deleTodo(todo.id))
    toast.success(`'${todo.title} deleted!'`)
  }
  const handleEdit = () => {
    setEditModal(true)
  }

  return (
    <>
      <div className="flex flex-wrap space-x-3 items-center pb-1.5">
        <div className="pb-1.5">
          <h1
            className={`font-bold text-xl bg-gray-100 ${
              todo.status === 'complete' ? 'line-through' : ''
            }`}
          >
            {todo.title}
          </h1>
          <p className="text-xs">Created {todo.time}</p>
          <p className="text-xs">Status {todo.status}</p>
          <hr />
        </div>
        <div role="button" onClick={handleDelete}>
          <MdDelete />
        </div>
        <div role="button" onClick={handleEdit}>
          <MdEdit />
        </div>
      </div>
      <div className="w-full">
        <TodoModal
          todo={todo}
          type="edit"
          modalOpen={editModal}
          setModalOpen={setEditModal}
        />
      </div>
    </>
  )
}

export default Task
