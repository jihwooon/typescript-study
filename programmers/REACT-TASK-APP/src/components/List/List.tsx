import { GrSubtract } from "react-icons/gr";
import { List as IList, Task as ITask } from "../../types"
import ActionButton from "../ActionButton/ActionButton";
import { useTypedDispatch } from "../../hooks/redux";
import { deleteBoard } from "../../store/slices/boardsSlice";
import { addLog } from "../../store/slices/loggerSlice";
import { v4 } from "uuid";
import { setModalActive, setModalData } from "../../store/slices/modalSlice";
import Task from "../Task/Task";

interface Props {
  list: IList;
  boardId: string
}

const List = ({ list, boardId }: Props) => {

  const dispatch = useTypedDispatch()

  const handleListDelete = (listId: string) => {
    dispatch(deleteBoard({boardId, listId}))
    dispatch(addLog({
      logId: v4(),
      logMessage: `리스트 삭제하기 : ${list.listName}`,
      logAuthor: "User",
      logTimeStamp: String(Date.now())
    }))
  }

  const handleTaskChange = (boardId: string, listId: string, taskId: string, task: ITask) => {
    dispatch(setModalActive(true))
    dispatch(setModalData({ boardId, listId, task }))
  }

  return (
    <div>
      <div>
        <div>{list.listName}</div>
        <GrSubtract onClick={() => handleListDelete(list.listId)}/>
      </div> 
      {
        list.tasks.map((task, index) => (
          <div key={task.taskId} onClick={() => handleTaskChange(boardId, list.listId, task.taskId, task)}>
            <Task 
              taskName={task.taskName}
              taskDescription={task.taskDescription}
              boardId={boardId}
              id={task.taskId}
              index={index}
            />
          </div>
        ))
      }
      <ActionButton />
    </div>
  )
}

export default List