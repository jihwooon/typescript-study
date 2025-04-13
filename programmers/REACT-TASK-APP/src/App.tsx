import { useState } from 'react'
import './App.css'
import { appContainer, board } from './App.css'
import BoardList from './components/BoardList/BoardList'
import ListContainer from './components/ListContainer/ListContainer'
import { useTypedSelector } from './hooks/redux'
import ModalEdit from './components/EditModal/EditModal'

function App() {
  const [activeBoardId, setActiveBoardId] = useState("board-0")
  const modalActive = useTypedSelector((state) => state.boards.modalActive)
  
  const boards = useTypedSelector((state) => state.boards.boardArray)

  const getActiveBoard = boards.filter((board) => board.boardId === activeBoardId)[0]

  const lists = getActiveBoard.lists

  return (
    <div className={appContainer}>
      {modalActive ? <ModalEdit/> : null}
      <ModalEdit />
        <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId}/>  

        <div className={board}>
          <ListContainer boardId={getActiveBoard.boardId} lists={lists} />
        </div>
    </div>
  )
}

export default App
