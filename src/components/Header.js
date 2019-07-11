import React from 'react';
import { Link } from 'react-router-dom';
import rmdb_logo from '../static/images/rmdb_logo.png';
import tmdb_logo from '../static/images/tmdb_logo.png';

const Header = () => (
	<div className="rmdb-header">
		<div className="container rmdb-header-content">
			<Link to="/">
				<img src={rmdb_logo} alt="RMDB Logo" className="rmdb-logo" />
			</Link>
			<a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
				<img src={tmdb_logo} alt="TMDB Logo" className="rmdb-tmdb-logo" />
			</a>
		</div>
	</div>
);

export default Header;
