import React from 'react';
import { API_URL, API_KEY } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

class Movie extends React.Component {
	state = {
		loading: false,
		movie: null,
		actors: null,
		directors: []
	};

	componentDidMount() {
		if (sessionStorage.getItem(this.props.match.params.movieId)) {
			const state = JSON.parse(sessionStorage.getItem(this.props.match.params.movieId));
			this.setState({ ...state });
		} else {
			this.setState({ loading: true });
			// Fetch Movie
			const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
			this.fetchData(endpoint);
		}
	}

	fetchData = async (endpoint) => {
		try {
			let result = await (await fetch(endpoint)).json();
console.log(result)
			if (result.status_code) {
				this.setState({ loading: false });
			} else {
				this.setState({ movie: result });

				// Fetch Actors
				const creditsEndpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
				let creditsResult = await (await fetch(creditsEndpoint)).json();
				const directors = creditsResult.crew.filter((member) => member.job === 'Director');
				this.setState({ directors, actors: creditsResult.cast, loading: false }, () => {
					sessionStorage.setItem(`${this.props.match.params.movieId}`, JSON.stringify(this.state));
				});
			}
		} catch (error) {
			console.error('There was an error: ', error);
		}
	};

	render() {
		return (
			<div className="rmdb-movie">
				{this.state.movie && !this.state.loading ? (
					<div>
						<Navigation movie={this.props.location.movieName} />
						<MovieInfo movie={this.state.movie} directors={this.state.directors} />
						<MovieInfoBar
							time={this.state.movie.runtime}
							budget={this.state.movie.budget}
							revenue={this.state.movie.revenue}
						/>
					</div>
				) : null}
				{this.state.actors ? (
					<div className="rmdb-movie-grid">
						<FourColGrid header={'Actors'}>
							{this.state.actors.map((element, i) => {
								return <Actor key={i} actor={element} />;
							})}
						</FourColGrid>
					</div>
				) : null}
				{!this.state.actors && !this.state.loading ? <h1>No Movie Found!</h1> : null}
				{this.state.loading ? <Spinner /> : null}
			</div>
		);
	}
}

export default Movie;
