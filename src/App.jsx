import { useState } from 'react';
import './App.css';

import Calculator from './Calculator.jsx';

function App() {
	const [refImageRendered, setRefImageRendered] = useState(false);
	return (
		<div className="App">
			<div
				className={`calculators-container ${
					refImageRendered ? 'refImageRendered' : ''
				}`}
			>
				<Calculator />

				<div className="calculator-ref-container">
					<img
						className="calculator-ref-img"
						src="/assets/calculator-reference-image.png"
						alt="Calculator reference"
					/>
				</div>
			</div>
			<div className="render-controller">
				<button onClick={() => setRefImageRendered(!refImageRendered)}>
					{`${refImageRendered ? 'Derender' : 'Render'}`} reference image
				</button>
			</div>
		</div>
	);
}

export default App;
