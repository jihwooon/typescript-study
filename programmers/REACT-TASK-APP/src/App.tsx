import { useState } from 'react'
import './App.css'
import { appContainer } from './App.css'
import BoardList from './components/BoardList/BoardList'

function App() {
  const [activeBoardId, setActiveBoardId] = useState("board-0")

  return (
    <div className={appContainer}>
        <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId}/>  
    </div>
  )
}

export default App
