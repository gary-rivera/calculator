import { v4 as uuidv4 } from 'uuid';
import Operator from './Operator.jsx';
import Operand from './Operand.jsx';
import { MATHEMATICAL_OPERATORS } from '../constants/math';

function ButtonRow({
	row,
	algorithm,
	setAlgorithm,
	calculateTotal,
}) {
	function isOperator(button) {
		return MATHEMATICAL_OPERATORS.includes(button);
	}

	return (
		<div
			className="ButtonRow"
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexWrap: 'nowrap',
				width: '100%',
			}}
		>
			{row.length &&
				row.map((button) => {
					const uId = uuidv4();
					return isOperator(button) ? (
						<Operator
							operator={button}
							key={uId}
							algorithm={algorithm}
							setAlgorithm={setAlgorithm}
							calculateTotal={calculateTotal}
						/>
					) : (
						<Operand
							operand={button}
							key={uId}
							algorithm={algorithm}
							setAlgorithm={setAlgorithm}
						/>
					);
				})}
		</div>
	);
}

export default ButtonRow;
