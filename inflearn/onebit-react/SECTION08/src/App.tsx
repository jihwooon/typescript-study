import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] =useState<number>(0)

  const handleClick = (value: number) => {
    setCount(count + value);
  }

  return (
    <div>
      <h1>Simple Counter</h1>
      <section>
        <div className="counter-display">
          <p>현재카운트:</p>
          {count}
        </div> 
      </section> 
      <section>
        <div className="counter-button">
          <button onClick={() => handleClick(-1)}>-1</button>
          <button onClick={() => handleClick(-10)}>-10</button>
          <button onClick={() => handleClick(-100)}>-100</button>
          <button onClick={() => handleClick(100)}>+100</button>
          <button onClick={() => handleClick(10)}>+10</button>
          <button onClick={() => handleClick(1)}>+1</button>
        </div>
      </section>
    </div>
  )
}

export default App
