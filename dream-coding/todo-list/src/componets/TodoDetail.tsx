import { FaRegTrashCan } from "react-icons/fa6";
import { Todo } from "./TodoList";

interface Props {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoDetail = ({ todo, onUpdate, onDelete }: Props) => {
  const { id, text, status } = todo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.checked;

    onUpdate({ ...todo, status: newText ? 'completed' : 'active' });
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label>{text}</label>
      <button onClick={handleDelete}>
        <FaRegTrashCan />
      </button>
    </li>
  );
};

export default TodoDetail;
