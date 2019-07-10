import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie';

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/:type/:id" component={Movie} exact />
				<Route component={NotFound} />
			</Switch>
		</React.Fragment>
	);
};

export default App;
