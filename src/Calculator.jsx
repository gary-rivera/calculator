import { useState } from 'react';
import './Calculator.css';
import Display from './Display.jsx';
import PanelSpacer from './PanelSpacer.jsx';
import ButtonContainer from './Buttons/ButtonContainer.jsx';
import { MATHEMATICAL_OPERANDS } from './constants/math.js';

function Calculator() {
	const [total, setTotal] = useState(0);
	const [algorithm, setAlgorithm] = useState([]);

	return (
		<div className="Calculator">
			<Display total={total} />
			<Display total={total} algorithm={algorithm} />
			<PanelSpacer />
			<ButtonContainer
				total={total}
				setTotal={setTotal}
				algorithm={algorithm}
				setAlgorithm={setAlgorithm}
			/>
		</div>
	);
}

export default Calculator;
