import React, { ChangeEvent, useState } from 'react'
import { FiX } from 'react-icons/fi';
import { useTypedDispatch } from '../../../hooks/redux';
import { addList, addTask } from '../../../store/slices/boardsSlice';
import { v4 } from 'uuid';
import { addLog } from '../../../store/slices/loggerSlice';

type Props = {
  boardId: string;
  listId: string;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>
  list?: boolean
}

const DropDownForm = ({ boardId, list, listId, setIsFormOpen }: Props) => {
  const dispatch = useTypedDispatch();
  const [ text, setText ] = useState('');
  const formPlaceholder = list ? "리스트의 제목을 입력하세요." : "일의 제목을 입력하세요.";

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleButtonClick = () => {
    if (text) {
      if (list) {
        dispatch(
          addList({
           boardId,
           list: { listId: v4(), listName: text, tasks: []} 
          })
        )
      } else {
        dispatch(
          addLog({
            logId: v4(),
            logMessage: `리스트 생성하기: ${text}`,
            logAuthor: "User",
            logTimeStamp: String(Date.now())
          })
        )
      }
    } else {
      dispatch(
        addTask({
          boardId,
          listId,
          task: {
            taskId: v4(),
            taskName: text,
            taskDescription: "",
            taskOwner: "User"
          }
        })
      )

      dispatch(
        addLog({
          logId: v4(),
          logMessage: `일 생성하기: ${text}`,
          logAuthor: "User",
          logTimeStamp: String(Date.now())
        })
      )
    }
  }

  const buttonTitle = list ? "리스트 추가하기" : "일 추가하기"

  return (
    <div>
      <textarea 
        value={text}
        onChange={handleTextChange}
        autoFocus
        placeholder={formPlaceholder}
        onBlur={() => setIsFormOpen}
        />
      <div>
        <button onMouseDown={handleButtonClick}>
          {buttonTitle}
        </button>
        <FiX />
      </div>
    </div>
  )
}

export default DropDownForm
