import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import InfiniteScroll from 'react-infinite-scroll-component';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';
import { useFetchMovies } from './customHooks';
import './Home.css';

const Home = () => {
	const [ { state, isLoading, isError }, updateItems ] = useFetchMovies();

	return (
		<div className="rmdb-home">
			{state.heroImage && !state.searchTerm ? (
				<div>
					<HeroImage
						image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
						title={state.heroImage.original_title}
						text={state.heroImage.overview}
					/>
				</div>
			) : null}
			<SearchBar callback={updateItems} text={state.searchTerm} />
			<div className="rmdb-home-grid">
				<InfiniteScroll
					dataLength={state.movies.length}
					next={updateItems}
					hasMore={state.currentPage < state.totalPages}
					endMessage={
						!isLoading && (
							<div className="rmdb-grid">
								<h1 style={{ textAlign: 'center' }}>
									<b>Yay! You have seen it all</b>
								</h1>
							</div>
						)
					}
				>
					<FourColGrid header={state.searchTerm ? 'Search Result' : 'Popular Movies'} loading={isLoading}>
						{state.movies.map((element, i) => {
							return (
								<MovieThumb
									key={i}
									clickable={true}
									movieId={element.id}
									movieName={element.original_title}
									image={
										element.poster_path ? (
											`${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
										) : (
											'./images/no_image.jpg'
										)
									}
								/>
							);
						})}
					</FourColGrid>
				</InfiniteScroll>
				{isLoading ? <Spinner /> : null}
			</div>
		</div>
	);
};

export default Home;
