import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoDetail from "./TodoDetail";

export interface Todo {
  id: string;
  text: string;
  status: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([{
    id: '1',
    text: '할일 1',
    status: 'active'
  },
  {
    id: '2',
    text: '할일 2',
    status: 'active'
  }])

  const handleAdd = (todo: Todo) => {
    setTodos([...todos, todo]);
  }

  const handleUpdate = (updatedTodo: Todo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  }

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <ul>
        {todos.map((item) => (
          <TodoDetail key={item.id} todo={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}/>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </div>
  );
};

export default TodoList;
