import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilterStatus } from '../slices/todoSlice'
import Button, { SelectButton } from './Button'
import TodoModal from './TodoModal'

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false)
  const filterStatus = useSelector((state) => state.todo.filterStatus)
  const dispatch = useDispatch()
  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value))
  }

  return (
    <>
      <div className="flex flex-wrap justify-around w-full">
        <div onClick={() => setModalOpen(true)}>
          <Button type="submit">Add to do</Button>
        </div>
        <SelectButton
          id="status"
          value={filterStatus}
          updateFilter={updateFilter}
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </SelectButton>
      </div>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  )
}

export default AppHeader
