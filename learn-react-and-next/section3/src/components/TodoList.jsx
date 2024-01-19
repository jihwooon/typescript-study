import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
	<div className='TodoList'>
	<h4>Todos</h4>
	<input placeholder='검색어를 입력하세요'/>
	<div className='todos_wrapper'>
		<TodoItem />
		<TodoItem />
		<TodoItem />
	</div>

	</div>
  )
}

export default TodoList;
