import React from 'react';
import PropTypes from 'prop-types';
import './styles/FourColGrid.sass';

const FourColGrid = ({ children, header, loading }) => {
	const renderElements = () =>
		children.map((element, i) => (
			<div key={i} className="rmdb-grid-element">
				{element}
			</div>
		));

	return (
		<div className="rmdb-grid">
			{header && !loading ? <h1>{header}</h1> : null}
			<div className="rmdb-grid-content">{renderElements()}</div>
		</div>
	);
};

FourColGrid.propTypes = {
	header: PropTypes.string,
	loading: PropTypes.bool
};

export default FourColGrid;
