import { useRef, useState } from 'react'
import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import LifeCycle from './Lifecycle'

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

  const onRemove = (targeId) => {
    const newDiaryList = data.filter((it) => it.id !== targeId)
    setData(newDiaryList)
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }

  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <LifeCycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} onEdit={onEdit} dummayList={data} />
    </div>
  )
}

export default App
