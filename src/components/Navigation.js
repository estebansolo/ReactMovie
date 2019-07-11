import React from 'react';
import { Link } from 'react-router-dom';

export default ({ movie }) => (
	<div className="rmdb-navigation">
		<div className="container rmdb-navigation-content">
			<Link to="/">
				<p>Home</p>
			</Link>
			<p>/</p>
			<p>{movie}</p>
		</div>
	</div>
);
