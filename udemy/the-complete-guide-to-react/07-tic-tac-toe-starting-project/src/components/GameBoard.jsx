
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  const gameTurns = initialGameBoard;

  for (const turn of turns) {
    const [ square, player ] = turn;
    const { row, col } = square;

    gameTurns[row][col] = player;
  }

  return (
    <ol className="game-board">
      {gameTurns.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
