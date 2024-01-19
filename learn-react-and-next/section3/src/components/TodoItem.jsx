import './TodoItem.css'

const TodoItem = () => {
  return (
	<div className="TodoItem">
	<input type="checkbox"/>
	<div className="content">React 공부하기</div>
	<div className="date">{new Date().toLocaleDateString()}</div>
	<button>삭제</button>
	</div>
  )
}

export default TodoItem;
