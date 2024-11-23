import { useState } from 'react';
import './Calculator.css';
import Display from './Display.jsx';
import PanelSpacer from './PanelSpacer.jsx';
import ButtonContainer from './Buttons/ButtonContainer.jsx';
import { MATHEMATICAL_OPERANDS } from './constants/math.js';

function Calculator() {
	const [total, setTotal] = useState(0);
	const [algorithm, setAlgorithm] = useState([]);

	const calculateTotal = () => {
		let result = total;
		let number1 = '';
		let operation = '';
		let number2 = '';

		algorithm.forEach((el, i) => {
			const isValidNum = !isNaN(typeof el === 'number' ? el : parseFloat(el));

			if (i === 0 && !isValidNum) return; // TODO: throw error toast?
			else if (isValidNum && !operation.length) {
				// build number1
				number1 += el;
			} else if (isValidNum && operation.length) {
				// build number2
				number2 += el;
			} else {
				// define operator
				operation = el;
			}
		});
		switch (operation) {
			case '+':
				result = parseFloat(number1) + parseFloat(number2);
				break;
			case '-':
				result = parseFloat(number1) - parseFloat(number2);
				break;
			case '*':
				result = parseFloat(number1) * parseFloat(number2);
				break;
			case '/':
				result = parseFloat(number1) / parseFloat(number2);
				break;
			default:
				break;
		}
		console.log('[Calculator][calculateTotal]', {
			number1,
			operation,
			number2,
			result,
		});
		result = result.toString();
		setTotal(result);
		setAlgorithm([result]);
		return result;
	};

	const handleAllClear = () => {
		setTotal(0);
		setAlgorithm([]);
	};

	return (
		<div className="Calculator">
			<Display total={total} algorithm={algorithm} />
			<PanelSpacer />
			<ButtonContainer
				total={total}
				setTotal={setTotal}
				algorithm={algorithm}
				setAlgorithm={setAlgorithm}
				calculateTotal={calculateTotal}
				handleAllClear={handleAllClear}
			/>
		</div>
	);
}

export default Calculator;
