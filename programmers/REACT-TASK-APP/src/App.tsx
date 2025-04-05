import { useState } from 'react'
import './App.css'
import { appContainer, board, buttons } from './App.css'
import BoardList from './components/BoardList/BoardList'

function App() {
  const [activeBoardId, setActiveBoardId] = useState("board-0")

  return (
    <div className={appContainer}>
      <div className={board}>
        <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId}/>
        Board
      </div>
      <div>
        <button className={buttons}>
          이 게시판 삭제하기
        </button>
      </div>
    </div>
  )
}

export default App
