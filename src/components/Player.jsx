import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) onChangeName(symbol, playerName);
  };
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={(e) => handleChange(e.target.value)}
      />
    );
  }

  const handleChange = (playerName) => {
    setPlayerName(playerName);
  };

  return (
    <>
      <li className={isActive ? "active" : null}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>

        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
};

export default Player;
