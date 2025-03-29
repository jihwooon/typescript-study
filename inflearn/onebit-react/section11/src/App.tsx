import { useRef, useReducer } from "react"
import "./App.css"
import { Header } from "./components/Header"
import { Editor } from "./components/Editor"
import { List } from "./components/List"

const reducer = (state: any, action: any) => {
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state]
    case 'UPDATE':
      return state.map((item) => item.id === action.targetId? {...item, isDone: !item.isDone} : item)
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId)
    default:
      return state;
  }
}

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

  const [todo, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(Math.max(...mockData.map(item => item.id)) + 1)

  const onCreate = (content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current ++,
        idDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId: number) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  }

  const onDelete = (targetId: number) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }

  return (
    <div className="App">
     <Header/>
     <Editor onCreate={onCreate}/>
     <List todos={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
