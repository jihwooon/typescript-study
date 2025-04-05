import { ChangeEvent, useState } from "react"
import { FiCheck } from "react-icons/fi"

interface Props {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>  
  inputRef: React.RefObject<HTMLInputElement | null>
}

const SideForm = ({ setIsFormOpen, inputRef }: Props) => {
  const [inputText, setInputText] = useState('1')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }
  
  const handleOnBlur = () => {
    setIsFormOpen(false)
  }

  return (
    <div>
      <input type="text" 
        ref={inputRef}
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck />
    </div>
  )
}

export default SideForm