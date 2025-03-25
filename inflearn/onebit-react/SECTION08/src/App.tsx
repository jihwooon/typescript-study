import { useState } from 'react'
import './App.css'
import Viewer from './componets/Viewer';
import Controller from './componets/Controller';

function App() {
  const [count, setCount] =useState<number>(0)

  const handleClick = (value: number) => {
    setCount(count + value);
  }

  return (
    <div>
      <h1>Simple Counter</h1>
      <section> 
        <Viewer count={count}/>
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
