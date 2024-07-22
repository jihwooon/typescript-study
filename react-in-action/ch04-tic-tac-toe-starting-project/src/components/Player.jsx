import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    return setIsEditing(true);
  };

  const playerName = <span className="player-name">{name}</span>;
  const inputText = <input type="text" required />;

  return (
    <li>
      <span className="player-info">
        {isEditing ? inputText : playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
