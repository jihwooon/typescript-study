import { useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [submiited, setSubmitted] = useState(false);

  const handleChage = (event) => {
    setEnteredPlayerName(event.target.value);
  };

  const handleClick = () => {
    setSubmitted(true);
  };

  return (
    <section id="player">
      <h2>
        Welcome
        {submiited ? enteredPlayerName : 'unknown entity'}
      </h2>
      <p>
        <input type="text" onChange={handleChage} value={enteredPlayerName} />
        <button type="button" onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
