import { useState } from 'react';
import './App.css';
import RuioWrapper from 'ruio';

import Calculator from './Calculator.jsx';

function App() {
	const [refImageRendered, setRefImageRendered] = useState(false);
	return (
		<RuioWrapper>
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
							src={`${
								import.meta.env.BASE_URL
							}/assets/calculator-reference-image.png`}
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
		</RuioWrapper>
	);
}

export default App;
