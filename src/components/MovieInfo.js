import React from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../global/config';
import { getImageUrl } from '../global/helpers';
import MovieThumb from './MovieThumb';

const MovieInfo = ({ movie, directors }) => (
	<div
		className="rmdb-movieinfo"
		style={{
			background: movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')` : '#000'
		}}
	>
		<div className="container rmdb-movieinfo-content">
			<div className="rmdb-movieinfo-thumb">
				<MovieThumb image={getImageUrl(movie.poster_path)} clickable={false} />
			</div>
			<div className="rmdb-movieinfo-text">
				<h1>{movie.title || movie.name}</h1>
				<h3>PLOT</h3>
				<p>{movie.overview}</p>
				<h3>IMDB RATING</h3>
				<div className="rmdb-rating">
					<meter min="0" max="100" optimum="100" low="40" high="70" value={movie.vote_average * 10} />
					<p className="rmdb-score">{movie.vote_average}</p>
				</div>
				{directors.length > 1 ? <h3>DIRECTOR</h3> : <h3>DIRECTOR</h3>}
				{directors.map((element, i) => (
					<p key={i} className="rmdb-director">
						{element.name}
					</p>
				))}
			</div>
		</div>
	</div>
);

export default MovieInfo;
