import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useFetchMovies = () => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isError, setIsError ] = useState(false);
	const [ type, setType ] = useState('movie');
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
			const result = await (await fetch(endpoint)).json();
			console.log(result);

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
		} catch (error) {
			setIsError(true);
		}

		setIsLoading(false);
	};

	const changeType = (newType) => {
		setType(newType);
	};

	const updateItems = (loadMore, searchTerm) => {
		loadMore = loadMore === undefined ? true : loadMore;

		setState((prev) => ({
			...prev,
			movies: !loadMore ? [] : prev.movies,
			searchTerm
		}));

		let endpoint = !searchTerm ? popularEP(loadMore)('') : searchEP(loadMore)(searchTerm);
		fetchItems(endpoint);
	};

	//
	useEffect(() => {
		if (localStorage.getItem('HomeState')) {
			const storageState = JSON.parse(localStorage.getItem('HomeState'));
			setType(localStorage.getItem('HomeType'));
			setState({ ...storageState });
		} else {
			fetchItems(popularEP(false)(''));
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
			localStorage.setItem('HomeType', type);
			updateItems(false, state.searchTerm);
		},
		[ type ]
	);

	return [ { state, isLoading, isError, type }, updateItems, changeType ];
};
