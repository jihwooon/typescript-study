import { TodoItem as ITodoItem } from "../models/todo-item.model"
import "./TodoItem.css"

interface Props {
    todo: ITodoItem
}

export const TodoItem = ({ todo } : Props) => {
    return (
        <div className="TodoItem">
            <input type="checkbox" />
            <div className="content">{todo.content}</div>
            <div className="date">{todo.date}</div>
            <button>삭제</button>
        </div>
    )
}