import { useState } from 'react';

import Player from "./components/Player"
import Log from './components/Log'
import GameBoard from "./components/GameBoard";

function App() {
  const [gameTurns, setGameTurns] =useState([]);
  const [activePlayer, setActivePlayers] = useState('X');

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayers(activePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length >= 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer},...prevTurns];

      return updatedTurns
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer == 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer == 'O'}/>
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
