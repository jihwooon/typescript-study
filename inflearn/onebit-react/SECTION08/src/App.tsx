import { useEffect, useRef, useState } from 'react'
import './App.css'
import Viewer from './componets/Viewer';
import Controller from './componets/Controller';
import Even from './componets/Even';

function App() {
  const [count, setCount] = useState<number>(0)
  const [input, setInput] = useState<string>("");

  const isMount = useRef(false)

  useEffect(() => {
    console.log(`${count} ${input}`)
  }, [count, input])

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    console.log('update');
  })

  const handleClick = (value: number) => {
    setCount((prev) => prev + value);
  }

  return (
    <div>
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value)
        }}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <div className="counter-button">
          <Controller onClickButton={handleClick} />
        </div>
      </section>
    </div>
  )
}

export default App
