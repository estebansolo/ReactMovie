import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../global/config';
import InfiniteScroll from 'react-infinite-scroll-component';
import HeroImage from '../components/HeroImage';
import Menu from '../components/Menu';
import FourColGrid from '../components/FourColGrid';
import MovieThumb from '../components/MovieThumb';
import Spinner from '../components/Spinner';
import { useFetchMovies } from './customHooks';
import './styles/Home.sass';

const Home = () => {
	const [ { state, isLoading, isError, type }, updateItems, changeType ] = useFetchMovies();

	return (
		<div className="rmdb-home">
			<Menu changeType={changeType} active={type} callback={updateItems} text={state.searchTerm} />
			{state.heroImage && !state.searchTerm ? (
				<div>
					<HeroImage
						image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
						title={state.heroImage.original_title || state.heroImage.original_name}
						text={state.heroImage.overview}
					/>
				</div>
			) : null}
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
					<FourColGrid
						header={state.searchTerm ? 'SEARCH RESULT' : `POPULAR ${type.toUpperCase()}S`}
						loading={isLoading}
					>
						{state.movies.map((element, i) => {
							return (
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