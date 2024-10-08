import './ButtonContainer.css';
import Operand from './Operand.jsx';
import Operator, { OPERATORS } from './Operator.jsx';
import ButtonRow from './ButtonRow.jsx';
import { v4 as uuidv4 } from 'uuid';

const buttonLayout = [
	['√', '%', 'CE', 'AC'],
	['MC', 'MR', 'M-', 'M+'],
	['7', '8', '9', '+'],
	['4', '5', '6', '-'],
	['1', '2', '3', '/'],
	['.', '0', '=', '*'],
];

function ButtonContainer(total, setTotal) {
	return (
		<div className="ButtonContainer">
			{buttonLayout.map((row) => {
				const uniqueId = uuidv4();
				return <ButtonRow row={row} id={uniqueId} key={uniqueId} />;
			})}
		</div>
	);
}

export default ButtonContainer;

function generateRandomId() {
	const alphabet =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let id = '';
	for (let i = 0; i < 6; i++) {
		const index = Math.floor(Math.random() * alphabet.length);
		id += alphabet[index];
	}
	return id.toString();
}
