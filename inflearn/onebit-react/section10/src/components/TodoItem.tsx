import "./TodoItem.css"

export const TotoItem = () => {
    return (
        <div className="TodoItem">
            <input type="checkbox" />
            <div className="content">Todo...</div>
            <div className="date">Date</div>
            <button>삭제</button>
        </div>
    )
}