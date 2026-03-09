import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/sign-in" element={<div>Sign in</div>} />
      <Route path="/sign-up" element={<div>Sign up</div>} />
    </Routes>    
  )
}

export default App
