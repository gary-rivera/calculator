import { v4 as uuidv4 } from 'uuid';
import Operator, { OPERATORS } from './Operator.jsx';
import Operand from './Operand.jsx';

function ButtonRow({ row, total, setTotal }) {
	function isOperator(button) {
		return OPERATORS.includes(button);
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
							total={total}
							setTotal={setTotal}
							operator={button}
							key={uId}
						/>
					) : (
						<Operand
							total={total}
							setTotal={setTotal}
							operand={button}
							key={uId}
						/>
					);
				})}
		</div>
	);
}

export default ButtonRow;
