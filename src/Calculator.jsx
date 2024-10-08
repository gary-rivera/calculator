import { useState } from 'react';
import './Calculator.css';
import Display from './Display.jsx';
import PanelSpacer from './PanelSpacer.jsx';
import ButtonContainer from './Buttons/ButtonContainer.jsx';

function Calculator() {
	const [total, setTotal] = useState(0);

	return (
		<div className="Calculator">
			<Display total={total} />
			<PanelSpacer />
			<ButtonContainer total={total} setTotal={setTotal} />
		</div>
	);
}

export default Calculator;
