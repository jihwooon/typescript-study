import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
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

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
        ? { ...todo, isDone: !todo.isDone }
        : todo
      )
    );
  }

  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => todo.id !== targetId)
    )
  }

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
