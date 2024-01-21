import { useCallback, useReducer, useRef, useMemo } from 'react'
import './App.css'

import { TodoDispatchContext, TodoStateContext } from './TodoContext'
import OptimizedHeaderComponent from './components/Header'
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

  const memoizedDispatches = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete
    }
  },[])

  return (
    <div className='App'>
      <OptimizedHeaderComponent />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={memoizedDispatches}
        >
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
