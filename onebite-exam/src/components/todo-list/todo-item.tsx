import { useDeleteTodo } from "@/store/todos";
import { Button } from "../ui/button";

export default function TodoItem({id, content}: {id: number; content: string}) {
    const deleteTodo = useDeleteTodo()

    const handleDeleteClick = () => {
        deleteTodo(id)
    }

  return (
    <div className="flex justify-between items-center">
      {content}
      <Button variant="destructive" onClick={handleDeleteClick}>
        삭제
      </Button>
    </div>
  );
}
