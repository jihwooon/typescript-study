import './Button.css';

export default function Button ({ color, text }) {
	const onClick = (e) => {
		alert(e)
	}

	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: color
			}}
			className='button'
		>
			{text}
		</button>
	);
}
