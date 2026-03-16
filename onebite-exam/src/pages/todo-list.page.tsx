import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";

const dummyTodo = [
  { id: 1, content: "할 일 1" },
  { id: 2, content: "할 일 2" },
  { id: 3, content: "할 일 3" },
];


export default function TodoListPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <TodoEditor />
      {
        dummyTodo.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))
      }
    </div>
  )
}
