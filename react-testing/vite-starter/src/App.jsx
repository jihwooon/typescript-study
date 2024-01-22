import { useState } from 'react'
import './App.css'

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className='red'>
      <button
        className={buttonColor}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
      />
      <label
        htmlFor='disable-button-checkbox'
      >
        Disable button
      </label>
    </div>
  );
}

export default App
