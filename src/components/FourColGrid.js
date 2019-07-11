import React from 'react';
import PropTypes from 'prop-types';

const FourColGrid = ({ children, header, loading }) => (
	<div className="rmdb-grid">
		{header && !loading ? <h1>{header}</h1> : null}
		<div className="rmdb-grid-content">
			{children.map((element, i) => (
				<div key={i} className="rmdb-grid-element">
					{element}
				</div>
			))}
		</div>
	</div>
);

FourColGrid.propTypes = {
	header: PropTypes.string,
	loading: PropTypes.bool
};

export default FourColGrid;
