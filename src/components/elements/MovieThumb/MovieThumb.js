import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieThumb.css';

const MovieThumb = ({ clickable, image, movieId, movieName }) => (
	<div className="rmdb-moviethumb">
		{clickable ? (
			<Link className="clickable" to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
				<img src={image} alt="Movie Thumb" />
			</Link>
		) : (
			<img src={image} alt="Movie Thumb" />
		)}
	</div>
);

MovieThumb.propTypes = {
	image: PropTypes.string,
	movieName: PropTypes.string,
	movieId: PropTypes.number
};

export default MovieThumb;
