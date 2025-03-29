import { useReducer } from "react";

const reducer = (state: number, action: { type: string; data: number }) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    })
  }

  const onClickMius = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    })
  }

  return <div>
    <h1>{state}</h1>
    <button onClick={onClickPlus}>+</button>
    <button onClick={onClickMius}>-</button>
  </div>
}

export default Exam;
