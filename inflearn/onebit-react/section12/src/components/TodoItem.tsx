import { memo } from "react";
import { TodoItem as ITodoItem } from "../models/todo-item.model"
import "./TodoItem.css"

interface Props {
    todo: ITodoItem
    onUpdate: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onUpdate, onDelete } : Props) => {

  const onChangeCheckBox = () => {
    onUpdate(todo.id)
  }

  const onClickButton = () => {
    onDelete(todo.id)
  }

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={todo.isDone} onChange={onChangeCheckBox} />
            <div className="content">{todo.content}</div>
            <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
            <button onClick={onClickButton}>삭제</button>
        </div>
    )
}

export default memo(TodoItem, (prevProps, nextProps) => {
  if (prevProps.todo.id !== nextProps.todo.id) {
    return false
  }
  if (prevProps.todo.isDone !== nextProps.todo.isDone) {
    return false
  }
  if (prevProps.todo.content !== nextProps.todo.content) {
    return false
  }
  if (prevProps.todo.date !== nextProps.todo.date) {
    return false
  }

  return true;
})
