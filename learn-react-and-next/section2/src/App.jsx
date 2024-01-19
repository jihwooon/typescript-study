import { useState, useEffect, useRef } from "react"
import Viewer from "./components/Viewer"
import Controller from './components/Controller'
import Even from './components/Even'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const isMountRef = useRef(false)

  /**
   *  1. 마운트 (탄생)
   *  2. 업데이트 (변화, 리렌더)
   *  3. 언마운트 (죽음) 
   */

  /* 업데이트 */
  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log("업데이트")

  }, [count, text])

  /* 마운트 */
  useEffect(() => {
    console.log("마운트")
  }, [])

  const onClickButton = (value) => {
    setCount(count + value)
    console.log(`카운트 : ${count}`);
  }

  const onClickText = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onClickText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
