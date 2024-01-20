import './TodoItem.css';

const TodoItem = ({id, content, createDate, isDone }) => {
  return (
	<div className="TodoItem">
	<input type="checkbox"/>
	<div className="content">{content}</div>
	<div className="date">{new Date(createDate).toLocaleDateString()}</div>
	<button>삭제</button>
	</div>
  )
}

export default TodoItem;
