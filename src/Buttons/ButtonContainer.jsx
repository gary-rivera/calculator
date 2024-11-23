import './ButtonContainer.css';
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

function ButtonContainer({
	algorithm,
	setAlgorithm,
	calculateTotal,
}) {
	return (
		<div className="ButtonContainer">
			{buttonLayout.map((row) => {
				const uniqueId = uuidv4();
				return (
					<ButtonRow
						row={row}
						id={uniqueId}
						key={uniqueId}
						algorithm={algorithm}
						setAlgorithm={setAlgorithm}
						calculateTotal={calculateTotal}
					/>
				);
			})}
		</div>
	);
}

export default ButtonContainer;
