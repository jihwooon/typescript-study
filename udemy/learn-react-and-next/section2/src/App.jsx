import { useState, useEffect } from "react"
import Viewer from "./components/Viewer"
import Controller from './components/Controller'
import Even from './components/Even'

import './App.css'
import useUpdate from "./components/hooks/useUpdate"
import useInput from "./components/hooks/useInput"

function App() {
  const [count, setCount] = useState(0)
  const [text, onChangeText] = useInput()

  useUpdate(() => {
    console.log("App 변경")
  });

  /* 마운트 */
  useEffect(() => {
    console.log("마운트")
  }, [])

  const onClickButton = (value) => {
    setCount(count + value)
    console.log(`카운트 : ${count}`);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
