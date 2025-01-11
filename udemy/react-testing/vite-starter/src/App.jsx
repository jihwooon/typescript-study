import { useState } from 'react'
import './App.css'

function App() {
  const [disabled, setDisabled] = useState(false)
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nextColorClass = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";

  return (
    <div className='medium-violet-red'>
      <button
        className={buttonColor}
        onClick={() => setButtonColor(nextColorClass)}
        disabled={disabled}
      >
        Change to {nextColorClass}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onChange={(e) => setDisabled(e.target.checked)}
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
