import './List.css'
import { TodoItem as ITodos } from '../models/todo-item.model'
import { TodoItem } from './TodoItem'

interface Props {
    todos: ITodos[]
}

export const List = ({ todos }: Props) => {
    return (
        <div className="List">
            <h4>Todo List</h4>
            <input placeholder="검색어를 입력하세요." />
            <div className='todos_wrapper'>  
             {
                todos.map((item) => (
                    <TodoItem todo={item}/>
                ))
             }
            </div>
        </div>
    )
}
