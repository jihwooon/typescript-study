import { useRef, useState } from "react";
import "./Editor.css"

interface Props {
  onCreate: (content: string) => void;
}

export const Editor = ({ onCreate }: Props) => {
    const [content, setContent] = useState("")
    const contentRef = useRef<HTMLInputElement>(null)

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value);
    }

    const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSubmit()
      }
    }

    const onSubmit = () => {
      if(content === "") {
        contentRef.current?.focus()
        return;
      }
      onCreate(content);
      setContent("");
    }

    return (
      <div className="Editor">
        <input 
          ref={contentRef}
          value={content}
          onKeyDown={onKeydown}
          placeholder="새로운 todo.." 
          onChange={onChangeContent}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    )
}
