import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "빨래 널기",
    createDate: new Date().getTime(),
  },
  {
    id: 2 ,
    isDone: false,
    content: "세수하기",
    createDate: new Date().getTime(),
  },
]


function App() {
  const [todos, setTodos] = useState(mockData)
  const isRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id : isRef.current++,
      isDone : false,
      content,
      createDate : new Date().getTime()
    }

    setTodos(
      [ ...todos, newTodo]
    )
  }


  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos}/>
    </div>
  )
}

export default App
