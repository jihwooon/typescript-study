import { useRef, useState } from "react"
import "./App.css"
import { Editor } from "./components/Editor"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { TodoItem } from "./models/todo-item.model"

function App() {
  const mockData = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: true,
      content: "TypeScript 학습하기",
      date: new Date().getTime() - 86400000,
    },
    {
      id: 2,
      isDone: false,
      content: "프로젝트 기획서 작성",
      date: new Date().getTime() + 86400000,
    },
    {
      id: 3,
      isDone: false,
      content: "디자인 시스템 검토",
      date: new Date().getTime() - 172800000,
    }
  ]

  const [todo, setTodo] = useState<TodoItem[]>(mockData)
  const idRef = useRef(Math.max(...mockData.map(item => item.id)) + 1)

  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodo([newTodo, ...todo])
  }

  return (
    <div className="App">
     <Header/>
     <Editor onCreate={onCreate}/>
     <List todos={todo}/> 
    </div>
  )
}

export default App
