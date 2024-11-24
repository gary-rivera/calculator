import { useState, useEffect } from 'react';
import './Display.css';

const BgUnderlay = () => (
	<div className="display-underlay">
		{['8', '8', '8', '8', '8', '8', '8', '8'].map((el, i) => (
			<span key={i}>{el}</span>
		))}
	</div>
);
function Display({ total, algorithm }) {
	const [displayText, setDisplayText] = useState(total);

	useEffect(() => {
		if (algorithm.length) setDisplayText(algorithm.join(''));
		else setDisplayText(total);
	}, [total, algorithm]);

	return (
		<div className="Display">
			<BgUnderlay />
			<div className="display-overlay">
				{displayText.length ? (
					displayText.split('').map((el, i) => {
						if (['+', '-', '*', '/'].includes(el)) {
							return (
								<span key={i} className="operator">
									{el}
								</span>
							);
						} else return <span key={i}>{el || 0}</span>;
					})
				) : (
					<span>0</span>
				)}
			</div>
		</div>
	);
}

export default Display;
