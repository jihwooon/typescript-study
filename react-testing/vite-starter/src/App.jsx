import { useState } from 'react'
import './App.css'
import Button from './components/Button';

function App() {
  const [disabled, setDisabled] = useState(false)
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className='red'>
      <button
        className={buttonColor}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
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
