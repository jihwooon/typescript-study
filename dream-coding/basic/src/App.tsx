import { useState } from 'react';
import './App.css'
import Avatar from './components/Avatar';
import Counter from './components/Counter';
import Profile from './components/Profile';

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount((prev) => prev + 1)

  return (
    <>
      <div className='container'>
        <h2 className='totalcount'>
          Total Count: {count}
        </h2>
        <Counter total={count} onClick={handleClick}/>
        <Counter total={count} onClick={handleClick}/>
      </div>
      <Avatar
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        name="James Kim"
        role="Frontend Developer"
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name="James Kim"
        role="Backend Developer"
        isNew={false}
      />
      <Profile
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name="James Kim"
        role="DevOps Engineer"
        isNew={true}
      />
    </>
  )
}

export default App
