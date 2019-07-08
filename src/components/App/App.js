import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../elements/Header/Header';
import NotFound from '../elements/NotFound/NotFound';
import Movie from '../Movie/Movie';

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/:movieId" component={Movie} exact />
				<Route component={NotFound} />
			</Switch>
		</React.Fragment>
	);
};

export default App;
