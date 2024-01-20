import { useReducer } from "react";

const reducer = (state, action) =>
		action.type === "DECREASE"
		? state - action.data
		: state + action.data

const B = () => {
	const [count, dispatch] = useReducer(reducer, 0)

	return (
		<div>
			<h4>{count}</h4>
			<div>
				<button
				onClick={
					() => dispatch({
						type: "DECREASE",
						data: 1
					})
				}
				>-</button>
				<button
				onClick={
					() => dispatch({
						type: "INCREASE",
						data: 1
					})
				}
				>+</button>
			</div>
		</div>
	)
}

export default B;
