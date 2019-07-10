import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../global/config';
import Navigation from '../components/Navigation';
import MovieInfo from '../components/MovieInfo';
import MovieThumb from '../components/MovieThumb';
import MovieInfoBar from '../components/MovieInfoBar';
import FourColGrid from '../components/FourColGrid';
import Actor from '../components/Actor';
import Spinner from '../components/Spinner';
import './styles/Movie.sass';

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
			console.log(result);

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
					<Navigation movie={state.movie.title || state.movie.name} />
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
