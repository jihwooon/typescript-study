export default function Log({ gameTurns }){
  console.log(gameTurns);

  return (
    <ol id="log">
      { gameTurns.map((turn, index) => (
        <li key={index}>{turn}</li>
      ))}
    </ol>
  )
}
