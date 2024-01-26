import { useState } from 'react'
import './Button.css'

const Button = () => {
    const [color, setColor] = useState('red')
    const newButtonColor = color === "red" ? "blue" : "red";

    return (
        <div className='red'>
            <button
                className={color}
                onClick={() => setColor(newButtonColor)}
            >
                {newButtonColor}
            </button>
        </div>
    )
}

export default Button;
