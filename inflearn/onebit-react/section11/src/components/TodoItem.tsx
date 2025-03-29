import { TodoItem as ITodoItem } from "../models/todo-item.model"
import "./TodoItem.css"

interface Props {
    todo: ITodoItem
    onUpdate: (id: number) => void;
    onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onUpdate, onDelete } : Props) => {

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