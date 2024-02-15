import { useRef, useState } from 'react'
import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'

function App() {
  const [data, setData] = useState([])
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data])
  }


  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList dummayList={data} />
    </div>
  )
}

export default App
