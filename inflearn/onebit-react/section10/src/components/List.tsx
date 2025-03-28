import './List.css'
import { TotoItem } from './TodoItem'

export const List = () => {
    return (
        <div className="List">
            <h4>Todo List</h4>
            <input placeholder="검색어를 입력하세요." />
            <div className='todos_wrapper'>
              <TotoItem />
              <TotoItem />
              <TotoItem />
            </div>
        </div>
    )
}
