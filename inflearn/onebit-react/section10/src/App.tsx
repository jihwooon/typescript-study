import { useState } from "react"
import "./App.css"
import { Editor } from "./components/Editor"
import { Header } from "./components/Header"
import { List } from "./components/List"

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

  interface Data {
    id: number,
    isDone: boolean,
    content: string,
    date: number,
  }

  const [todo, setTodo] = useState<Data[]>(mockData)

  return (
    <div className="App">
     <Header/>
     <Editor/>
     <List/> 
    </div>
  )
}

export default App
