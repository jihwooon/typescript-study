import { useState } from "react";

export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    return setIsEditing((editing) => !editing); // 상태 변경을 함수로 해야 한다.
  };

  const handleChane = (event) => {
    setPlayerName(event.target.value);
  };

  const editablePlayerName = <span className="player-name">{playerName}</span>;
  const inputText = (
    <input type="text" required value={playerName} onChange={handleChane} />
  );

  return (
    <li>
      <span className="player-info">
        {isEditing ? inputText : editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
