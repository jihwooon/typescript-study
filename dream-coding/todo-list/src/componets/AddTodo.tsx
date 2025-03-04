import { useState, ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "./TodoList";

interface AddTodoProps {
  onAdd: (todo: Todo) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim().length === 0) return;

    const newTodo: Todo = {
      id: uuidv4(),
      text: text.trim(),
      status: 'active'
    };

    onAdd(newTodo);
    setText('');
  };

  const buttonStyle = {
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '4px'
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        placeholder="할 일 추가"
        onChange={handleChange}
      />
      <button
        type="submit"
        style={buttonStyle}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
