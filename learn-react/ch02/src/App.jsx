import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'

const dummayList = [
  {
    id: 1,
    author: '이정환',
    content: '',
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '홍길동',
    content: '',
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '아무개',
    content: '23 K-Digital Training 데브코스 타입스크립트로 함께하는 웹 풀 사이클 개발(React, Node.js) 데브코스 1기 ',
    emotion: 5,
    create_date: new Date().getTime(),
  },
]

function App() {
  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <DiaryEditor />
      <DiaryList dummayList={dummayList} />
    </div>
  )
}

export default App
