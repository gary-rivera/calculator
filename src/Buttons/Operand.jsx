import './Operand.css';

function Operand({ total, setTotal, operand }) {
	function handleClick() {
		setTotal(total);
	}

	return (
		<button onClick={handleClick} className="SquareButton">
			{operand}
		</button>
	);
}

export default Operand;
