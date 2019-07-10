import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.sass';

const Navigation = ({ movie }) => (
	<div className="rmdb-navigation">
		<div className="rmdb-navigation-content">
			<Link to="/">
				<p>Home</p>
			</Link>
			<p>/</p>
			<p>{movie}</p>
		</div>
	</div>
);

export default Navigation;
