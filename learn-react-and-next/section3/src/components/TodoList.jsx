import { useState, useMemo, useContext } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { TodoContext } from '../TodoContext';

const TodoList = () => {
	const { todos, onUpdate, onDelete } = useContext(TodoContext)

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

	const { totalCount, doneCount, nonDoneCount } = useMemo(() => {
		const totalCount = todos.length;
		const doneCount = todos.filter(
			(todo) => todo.isDone
		).length;
		const nonDoneCount = totalCount - doneCount;

		return {
			totalCount,
			doneCount,
			nonDoneCount
		};
	}, [todos])

  return (
	<div className='TodoList'>
	<h4>Todos</h4>
	<div>
		<div>전체 Todo : {totalCount}</div>
		<div>완료 Todo : {doneCount}</div>
		<div>미완료 Todo : {nonDoneCount}</div>
	</div>
	<input value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요'/>
	<div className='todos_wrapper'>
	</div>
		{filterTodos().map((todo, i) => (
			<TodoItem
			key={i} {...todo}
			onUpdate={onUpdate}
			onDelete={onDelete}
			/>
		))}
	</div>
  )
}

export default TodoList;
