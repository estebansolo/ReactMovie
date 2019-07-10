import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.sass';

const Header = () => (
	<div className="rmdb-header">
		<div className="rmdb-header-content">
			<Link to="/">
				<img src="./images/reactMovie_logo.png" alt="RMDB Logo" className="rmdb-logo" />
			</Link>
			<a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
				<img src="./images/tmdb_logo.png" alt="TMDB Logo" className="rmdb-tmdb-logo" />
			</a>
		</div>
	</div>
);

export default Header;
