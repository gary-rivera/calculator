import './Operand.css';

function Operand({ operand, algorithm, setAlgorithm }) {
	function handleClick() {
		setAlgorithm([...algorithm, operand]);
	}

	return (
		<button onClick={handleClick} className="SquareButton">
			{operand}
		</button>
	);
}

export default Operand;
