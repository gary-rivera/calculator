import { MATHEMATICAL_OPERATORS } from '../constants/math';

function Operator({ operator }) {
	return <button className="SquareButton">{operator}</button>;
}

export default Operator;
