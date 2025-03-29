import { TodoItem as ITodoItem } from "../models/todo-item.model"
import "./TodoItem.css"

interface Props {
    todo: ITodoItem
    onUpdate: (id: number) => void;
}

export const TodoItem = ({ todo, onUpdate } : Props) => {

  const onChangeCheckBox = () => {
    onUpdate(todo.id)
  }

    return (
        <div className="TodoItem">
            <input readOnly type="checkbox" checked={todo.isDone} onChange={onChangeCheckBox} />
            <div className="content">{todo.content}</div>
            <div className="date">{todo.date}</div>
            <button>삭제</button>
        </div>
    )
}