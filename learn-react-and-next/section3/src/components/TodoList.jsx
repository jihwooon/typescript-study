import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos }) => {
	const [search, setSearch] = useState("")

	const onChangeSearch = (e) => {
		setSearch(e.target.value);
	}

	const filterTodos = () => {
		if(search === "") {
			return todos;
		}

		return todos.filter((todo) =>
					todo.content
					.toLowerCase()
					.includes(search.toLocaleLowerCase())
		)
	}

  return (
	<div className='TodoList'>
	<h4>Todos</h4>
	<input value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요'/>
	<div className='todos_wrapper'>
	</div>
		{filterTodos().map((todo) => (
			<TodoItem key={todo.id} {...todo}/>
		))}
	</div>
  )
}

export default TodoList;
