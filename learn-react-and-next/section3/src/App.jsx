import { useReducer, useRef, useCallback } from 'react'
import './App.css'

import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import OptimizedHeaderComponent from './components/Header'

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

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data]
    }
    case "UPDATE": {
      return state.map((it) =>
      it.id === action.data
        ? {...it, isDone : !it.isDone}
        : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.data);
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const isRef = useRef(3)

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id : isRef.current++,
        isDone : false,
        content,
        createDate : new Date().getTime()
      },
    })
  }

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    })
  },[])

  return (
    <div className='App'>
      <OptimizedHeaderComponent />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
