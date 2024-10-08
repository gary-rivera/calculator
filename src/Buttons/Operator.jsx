export const OPERATORS = ['+', '-', '/', '*', '.', '='];

function Operator({ operator }) {
	return <button className="SquareButton">{operator}</button>;
}

export default Operator;
