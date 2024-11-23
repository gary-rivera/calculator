import { MATHEMATICAL_OPERATORS } from '../constants/math';

function Operator({
	operator,
	algorithm,
	setAlgorithm,
}) {
	function handleClick() {
		const previousEl = algorithm[algorithm.length - 1];

		// 	if verify previous click was also an operator, replace it with current operator
		// remove previous operator and replace with current operator
		if (
			MATHEMATICAL_OPERATORS.includes(previousEl) &&
			previousEl !== operator
		) {
			setAlgorithm([...algorithm.slice(0, -1), operator]);
		} else {
			setAlgorithm([...algorithm, operator]);
		}
	}

	return (
		<button className="SquareButton" onClick={handleClick}>
			{operator}
		</button>
	);
}

export default Operator;
