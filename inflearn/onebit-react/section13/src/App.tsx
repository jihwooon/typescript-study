import { Link, Route, Routes, useNavigate } from 'react-router'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'


function App() {
  const nav = useNavigate()

  const onClickButton = () => {
    nav("/new")
  }

  return (
    <>
      <div style={{
        display : 'flex',
        gap: 40
      }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
       <button onClick={onClickButton}>Nav로 이동하기</button>
      </div>
    <Routes>
       <Route path='/' element={<Home />}/> 
       <Route path='/new' element={<New />}/>
       <Route path='/diary/:id' element={<Diary />}/>
       <Route path='*' element={<Notfound />}/>
    </Routes>
    </>
  )
}

export default App
