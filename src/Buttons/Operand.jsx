import './Operand.css';

function Operand({ operand, algorithm, setAlgorithm }) {
	function handleClick() {
		if (algorithm.length >= 8 || algorithm[0] === 'Err') {
			setAlgorithm(['Err']);
			return;
		}
		setAlgorithm([...algorithm, operand]);
	}

	return (
		<button onClick={handleClick} className="SquareButton">
			{operand}
		</button>
	);
}

export default Operand;
