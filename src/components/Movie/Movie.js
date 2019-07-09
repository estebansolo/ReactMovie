import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

const Movie = (props) => {
	const [ state, setState ] = useState({
		movie: {},
		directors: [],
		actors: {},
		recommendations: {}
	});
	const [ isLoading, setIsLoading ] = useState(false);
	const [ id, setId ] = useState(props.match.params.id);
	const [ type, setType ] = useState(props.match.params.type);

	useEffect(
		() => {
			setIsLoading(true);

			// Fetch Movie
			fetchMovie(`${type}/${id}`, 'movie');

			// Fetch Actors
			fetchMovie(`${type}/${id}/credits`, 'actors');

			// Fetch Recommendations
			fetchMovie(`${type}/${id}/recommendations`, 'recommendations');

			setIsLoading(false);
		},
		[ id ]
	);

	useEffect(
		() => {
			setType(props.match.params.type);
			setId(props.match.params.id);
		},
		[ props.match.params ]
	);

	const fetchMovie = async (url, key) => {
		try {
			const endpoint = `${API_URL}${url}?api_key=${API_KEY}&language=en-US`;
			let result = await (await fetch(endpoint)).json();

			if (!result.status_code) {
				setState((prev) => ({ ...prev, [key]: result }));
			}
		} catch (error) {
			console.error('There was an error: ', error);
		}
	};

	return (
		<div className="rmdb-movie">
			{state.movie && state.actors.cast && !isLoading ? (
				<div>
					<Navigation movie={state.movie.original_title || state.movie.original_name} />
					<MovieInfo
						movie={state.movie}
						directors={state.actors.crew.filter((member) => member.job === 'Director')}
					/>
					<MovieInfoBar movie={state.movie} />
				</div>
			) : null}
			{state.actors.cast && state.actors.cast.length > 0 ? (
				<div className="rmdb-movie-grid">
					<FourColGrid header={'Main Actors'}>
						{state.actors.cast.slice(0, 12).map((element, i) => <Actor key={i} actor={element} />)}
					</FourColGrid>
				</div>
			) : null}
			{state.recommendations.results && state.recommendations.results.length > 0 ? (
				<div className="rmdb-movie-grid">
					<FourColGrid header={'Recommendations'}>
						{state.recommendations.results
							.slice(0, 4)
							.map((element, i) => (
								<MovieThumb
									key={i}
									clickable={true}
									id={element.id}
									type={type}
									image={
										element.poster_path ? (
											`${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
										) : (
											'./images/no_image.jpg'
										)
									}
								/>
							))}
					</FourColGrid>
				</div>
			) : null}
			{!state.movie && !isLoading ? <h1>No Movie Found!</h1> : null}
			{isLoading ? <Spinner /> : null}
		</div>
	);
};

export default Movie;
