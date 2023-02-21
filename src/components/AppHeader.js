import { useState } from 'react'
import Button, { SelectButton } from './Button'
import TodoModal from './TodoModal'

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="flex flex-wrap justify-around w-full">
        <div onClick={() => setModalOpen(true)}>
          <Button type="submit">Add to do</Button>
        </div>
        <SelectButton>
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
