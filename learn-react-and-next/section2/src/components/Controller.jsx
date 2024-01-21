import useUpdate from "./hooks/useUpdate";

const Controller = ({ onClickButton }) => {

  useUpdate(() => {
    console.log("Controller 변경")
  });
  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-1)
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10)
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100)
        }}>
        -100
      </button>
      <button onClick={() => {
        onClickButton(100)
      }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(10)
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(1)
        }}
      >
        +1
      </button>
    </div>
  )

}

export default Controller
