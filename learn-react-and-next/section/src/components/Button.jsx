import './Button.css';

export default function Button ({ color, text }) {
	return <button style={{
		backgroundColor: color
	}}className='button'>{text}</button>
}