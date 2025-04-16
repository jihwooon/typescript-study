import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import Edit from './pages/Edit'
import { useReducer } from 'react'

type Action = 
  | { type: 'CREATE'; data: DiaryItem }
  | { type: 'UPDATE'; data: DiaryItem }
  | { type: 'DELETE'; targetId: number };

type DiaryItem = {
  id: number;
  content: string;
  emotionId: number;
  createData: number;
};

const mockData: DiaryItem[] = [
  {
    id: 1,
    createData: new Date().getTime(),
    emotionId: 1,
    content: "오늘은 정말 행복한 하루였다."
  },
  {
    id: 2,
    createData: new Date().getTime() - 1 * 24 * 60 * 60 * 1000,
    emotionId: 2,
    content: "조금 우울한 기분이 들었다."
  },
  {
    id: 3,
    createData: new Date().getTime() - 2 * 24 * 60 * 60 * 1000,
    emotionId: 3,
    content: "그저 그런 평범한 하루였다."
  },
  {
    id: 4,
    createData: new Date().getTime() - 3 * 24 * 60 * 60 * 1000,
    emotionId: 5,
    content: "정말 최악의 하루였다."
  }
]

function reducer(state: DiaryItem[], action: Action): DiaryItem[] {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map(item => 
        item.id === action.data.id ? action.data : item
      );
    case 'DELETE':
      return state.filter(item => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  console.log(data)

  return (
    <>
    <Routes>
       <Route path='/' element={<Home />}/> 
       <Route path='/new' element={<New />}/>
       <Route path='/diary/:id' element={<Diary />}/>
       <Route path='/edit/:id' element={<Edit />}/>
       <Route path='*' element={<Notfound />}/>
    </Routes>
    </>
  )
}

export default App
