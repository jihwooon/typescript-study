import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    return setIsEditing(!isEditing);
  };

  const playerName = <span className="player-name">{name}</span>;
  const inputText = <input type="text" required value={name} />;

  return (
    <li>
      <span className="player-info">
        {isEditing ? inputText : playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
