import React, { useState, useEffect } from 'react';

import { IMAGE_BASE_URL, BACKDROP_SIZE, API_URL, API_KEY } from '../global/config';
import InfiniteScroll from 'react-infinite-scroll-component';
import HeroImage from '../components/HeroImage';
import Menu from '../components/Menu';
import FourColGrid from '../components/FourColGrid';
import MovieThumb from '../components/MovieThumb';
import Spinner from '../components/Spinner';
import { getImageUrl } from '../global/helpers';

const Home = () => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isError, setIsError ] = useState(false);
	const [ type, setType ] = useState('');
	const [ state, setState ] = useState({
		movies: [],
		heroImage: null,
		currentPage: 0,
		totalPages: 0,
		searchTerm: ''
	});

	const curriedEndpoint = (type) => (loadMore) => (searchTerm) =>
		`${API_URL}${type}?api_key=${API_KEY}&language=en-US&page=${loadMore
			? state.currentPage + 1
			: 1}&query=${searchTerm}`;

	const searchEP = curriedEndpoint(`search/${type}`);
	const popularEP = curriedEndpoint(`${type}/popular`);

	const fetchItems = async (endpoint) => {
		setIsError(false);
		setIsLoading(true);

		try {
			const data = await fetch(endpoint);
			const result = await data.json();
			if (!result.status_code) {
				setState((prev) => ({
					...prev,
					movies: [ ...prev.movies, ...result.results ],
					currentPage: result.page,
					totalPages: result.total_pages
				}));

				setState((prev) => ({
					...prev,
					heroImage: prev.movies[0]
				}));
			}
		} catch (error) {
			setIsError(true);
		}

		setIsLoading(false);
	};

	const changeType = (newType) => {
		setType(newType);
	};

	const updateItems = (loadMore, searchTerm) => {
		if (type !== '') {
			loadMore = loadMore === undefined ? true : loadMore;

			setState((prev) => ({
				...prev,
				movies: !loadMore ? [] : prev.movies,
				searchTerm
			}));

			let endpoint = !searchTerm ? popularEP(loadMore)('') : searchEP(loadMore)(searchTerm);
			fetchItems(endpoint);
		}
	};

	useEffect(() => {
		if (localStorage.getItem('HomeState')) {
			const storageState = JSON.parse(localStorage.getItem('HomeState'));
			setState({ ...storageState });
		} else {
			if (type !== '') fetchItems(popularEP(false)(''));
		}
	}, []);

	useEffect(
		() => {
			localStorage.setItem('HomeState', JSON.stringify(state));
		},
		[ state ]
	);

	useEffect(
		() => {
			let newType = type;
			if (type === '') {
				newType = localStorage.getItem('HomeType') || 'movie';
			}

			localStorage.setItem('HomeType', newType);

			if (type === newType) {
				updateItems(false, state.searchTerm);
			} else {
				setType(newType);
			}
		},
		[ type ]
	);

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
			<div className="container rmdb-home-grid">
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
									image={getImageUrl(element.poster_path)}
								/>
							);
						})}
					</FourColGrid>
				</InfiniteScroll>
				{isLoading ? <Spinner /> : null}
				{isError ? (
					<div className="rmdb-grid">
						<h1 style={{ textAlign: 'center' }}>
							<b>There was a problem with Internet Connection</b>
						</h1>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Home;
