import './TodoItem.css';

const TodoItem = ({id, content, createDate, isDone, onUpdate }) => {
	const onChangeCheckBox = () => {
		onUpdate(id)
	}

  return (
	<div className="TodoItem">
	<input
	  onChange={onChangeCheckBox}
		type="checkbox"
		checked={isDone}
	/>
	<div className="content">{content}</div>
	<div className="date">{new Date(createDate).toLocaleDateString()}</div>
	<button>삭제</button>
	</div>
  )
}

export default TodoItem;
