import { ChangeEvent, useState } from "react"
import { FiCheck } from "react-icons/fi"
import { icon, input, sideForm } from "./SideForm.css"
import { useTypedDispatch } from "../../../hooks/redux"
import { addBoard } from "../../../store/slices/boardsSlice"
import { v4 as uuidv4 } from 'uuid'
import { addLog } from "../../../store/slices/loggerSlice"

interface Props {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>  
  inputRef: React.RefObject<HTMLInputElement | null>
}

const SideForm = ({ setIsFormOpen, inputRef }: Props) => {
  const [inputText, setInputText] = useState('1')
  const dispatch = useTypedDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }
  
  const handleOnBlur = () => {
    setIsFormOpen(false)
  }

  const handleClick = () => {
    if (inputText) {
      dispatch(
        addBoard({board: {boardId: uuidv4(), boardName: inputText, lists:[] }})
      )

      dispatch(
        addLog({
          logId: uuidv4(),
          logMessage: `게시판 등록: ${inputText}`,
          logAuthor: 'User',
          logTimeStamp: String(Date.now())
        })
      )
    }
  }

  return (
    <div className={sideForm}>
      <input type="text" 
        ref={inputRef}
        className={input}
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck className={icon} onMouseDown={handleClick}/>
    </div>
  )
}

export default SideForm