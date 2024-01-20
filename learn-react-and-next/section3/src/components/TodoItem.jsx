import { memo, useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoItem.css';

const TodoItem = ({id, content, createDate, isDone  }) => {
	const {onUpdate, onDelete } = useContext(TodoContext)

	const onChangeCheckBox = () => {
		onUpdate(id)
	}

	const onClickDeleteButton = () => {
		onDelete(id)
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
	<button onClick={onClickDeleteButton}>삭제</button>
	</div>
  )
}

export default memo(TodoItem);
