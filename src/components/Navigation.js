import React from 'react';
import { Link } from 'react-router-dom';

export default ({ movie, share }) => (
	<div className="rmdb-navigation">
		<div className="container rmdb-navigation-content">
			<div className="rmdb-navigation-content">
				<Link to="/">
					<p>Home</p>
				</Link>
				<p>/</p>
				<p>{movie}</p>
			</div>
			{navigator.share && (
				<div className="">
					<button className="rmdb-navigation-button" onClick={share}>
						Share
					</button>
				</div>
			)}
		</div>
	</div>
);
