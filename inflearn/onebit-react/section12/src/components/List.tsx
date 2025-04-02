import './List.css'
import { TodoItem as ITodos } from '../models/todo-item.model'
import TodoItem from './TodoItem'
import { useMemo, useState } from 'react'

interface Props {
    todos: ITodos[]
    onUpdate: (id: number) => void;
    onDelete: (id: number) => void;
}

export const List = ({ todos, onUpdate, onDelete }: Props) => {
  const [search, setSearch] =useState("")

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if(search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content
      .toLowerCase()
      .includes(search.toLowerCase())
    );
  }

  const filteredTodos = getFilteredData()

  const { totalCount, doenCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doenCount = todos.filter((todo) => todo.isDone).length;

    const notDoneCount = totalCount - doenCount

    return {
      totalCount,
      doenCount,
      notDoneCount
    }
  }, [todos])

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doenCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        placeholder='검색어를 입력하세요.'
      />
      <div className='todos_wrapper'>
        {filteredTodos.map((item) => (
          <TodoItem key={item.id} todo={item} onUpdate={onUpdate} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  )
}
