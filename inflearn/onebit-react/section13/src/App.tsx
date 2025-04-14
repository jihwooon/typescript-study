import { Link, Route, Routes, useNavigate } from 'react-router'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import { getEmotionImage } from './utils/get-emotion-image'

function App() {
  const nav = useNavigate()

  const onClickButton = () => {
    nav("/new")
  }

  return (
    <>
      <div> 
         <img src={getEmotionImage(1)?.toString()} />
         <img src={getEmotionImage(2)?.toString()} />
         <img src={getEmotionImage(3)?.toString()} />
         <img src={getEmotionImage(4)?.toString()} />
         <img src={getEmotionImage(5)?.toString()} />
      </div>
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
