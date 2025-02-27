import { useState } from 'react'
import './App.css'
import Filter from './componets/FilterTodo'
import TodoList from './componets/TodoList'

// TODO APP
// - 전체 리스트 보여주기
// - 아이템 삭제하기
// - 아이템 체크박스
// - 아이템 추가
// - 아이템 필터링
// - 다크모드 지원하기
//
const filters = ['all', 'active', 'completed']

function App() {
  const [filter, setFilter] = useState<string>(filters[0])

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter)
  }

  return (
    <>
      <div>
        <h1>투두 앱 만들기</h1>
        <Filter
          filters={filters}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
        <TodoList filter={filter} />
      </div>
    </>
  )
}

export default App
