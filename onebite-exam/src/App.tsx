import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log('render', count)

  return (
    <>
      <div>Hello World</div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  )
}

export default App
