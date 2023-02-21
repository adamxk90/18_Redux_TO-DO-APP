import { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addTodo, editTodo } from '../slices/todoSlice'
import Button from './Button'
import { v4 as uuid } from 'uuid'
import { toast } from 'react-hot-toast'

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('incompelete')
  const dispatch = useDispatch()

  useEffect(() => {
    if (type === 'edit' && todo) {
      setTitle(todo.title)
      setStatus(todo.status)
    } else {
      setTitle('')
      setStatus('incompelete')
    }
  }, [type, todo, modalOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title === '') {
      toast.error('Enter the title!')
      return
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        )
        toast.success('Task Added Successfully')
        setModalOpen(false)
      }

      if (type === 'edit') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            editTodo({
              ...todo,
              title,
              status,
            })
          )
        } else {
          toast.error('No changes Made')
        }
      }
    } else {
      toast.error("Title shouldn't be empty")
    }
  }

  return (
    <>
      {modalOpen && (
        <div className="container pb-3.5	 w-9/12 mx-auto rounded-xl shadow-lg  items-center content-center space-x-4">
          <div
            onClick={() => setModalOpen(false)}
            className="rounded-md p-1 shadow-lg w-min bg-gray-100 hover:bg-red-700"
          >
            <MdOutlineClose />
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="w-full rounded-xl text-gray-600 bg-slate-100 grid "
          >
            <h1 className="font-bold">
              {type === 'edit' ? 'Edit' : 'Add'} Task
            </h1>
            <label htmlFor="title">
              Title
              <div className="pb-3.5">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-3/4 border-2"
                  type="text"
                  id="title"
                />
              </div>
            </label>
            <label htmlFor="status">
              Status
              <div className="pb-3.5">
                <select
                  className="w-3/4 border-2 "
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
            </label>
            <div className="pb-3.5 flex justify-around">
              <div>
                <Button type="submit">
                  {type === 'edit' ? 'Edit' : 'Add'} to do
                </Button>
              </div>
              <div onClick={() => setModalOpen(false)}>
                <Button type="button">Cancel</Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default TodoModal
