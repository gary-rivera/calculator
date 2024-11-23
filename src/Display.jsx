import './Display.css';

function Display({ total, algorithm }) {
	return (
		<div className="Display">
			<div className="display-underlay">888888888</div>
			<div className="display-overlay">
				{algorithm.length ? algorithm.join(' ') : total}
			</div>
		</div>
	);
}

export default Display;
