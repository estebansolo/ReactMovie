import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieThumb = ({ clickable, image, id, type }) => (
	<div className="rmdb-moviethumb">
		{clickable ? (
			<Link className="clickable" to={`/${type}/${id}`}>
				<img src={image} alt="Thumb" />
			</Link>
		) : (
			<img src={image} alt="Thumb" />
		)}
	</div>
);

MovieThumb.propTypes = {
	image: PropTypes.string,
	id: PropTypes.number
};

export default MovieThumb;
