import { container, description, title } from "./Task.css";

interface Props {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;

}

const Task = ({ taskName, taskDescription }: Props) => {
  return (
    <div className={container}>
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDescription}</div>
    </div>
  )
}

export default Task