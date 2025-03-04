import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoDetail from "./TodoDetail";

export interface Todo {
  id: string;
  text: string;
  status: string;
}

interface Props {
  filter: string;
}

const TodoList = ({ filter }: Props) => {
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

  const filtered = getFilteredItems(todos, filter)

  return (
    <div>
      <ul>
        {filtered.map((item) => (
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

const getFilteredItems = (todos: Todo[], filter: string): Todo[] => {
 if (filter === 'all') {
   return todos;
 }

 return todos.filter((todo) => todo.status === filter)
}
