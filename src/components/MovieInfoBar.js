import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../global/helpers';

const MovieInfoBar = ({ movie }) => (
	<div className="rmdb-movieinfobar">
		<div className="container rmdb-movieinfobar-content">
			{movie.runtime && (
				<React.Fragment>
					<div className="rmdb-movieinfobar-content-col">
						<FontAwesome className="fa-time" name="clock-o" size="2x" />
						<span className="rmdb-movieinfobar-info">Running time: {calcTime(movie.runtime)}</span>
					</div>
					<div className="rmdb-movieinfobar-content-col">
						<FontAwesome className="fa-budget" name="money" size="2x" />
						<span className="rmdb-movieinfobar-info">Budget: {convertMoney(movie.budget)}</span>
					</div>
					<div className="rmdb-movieinfobar-content-col">
						<FontAwesome className="fa-revenue" name="ticket" size="2x" />
						<span className="rmdb-movieinfobar-info">Revenue: {convertMoney(movie.revenue)}</span>
					</div>
				</React.Fragment>
			)}
			{movie.number_of_episodes && (
				<React.Fragment>
					<div className="rmdb-movieinfobar-content-col">
						<FontAwesome className="fa-time" name="clock-o" size="2x" />
						<span className="rmdb-movieinfobar-info">Number of Episodes: {movie.number_of_episodes}</span>
					</div>
					<div className="rmdb-movieinfobar-content-col">
						<FontAwesome className="fa-budget" name="money" size="2x" />
						<span className="rmdb-movieinfobar-info">Number of Seasons: {movie.number_of_seasons}</span>
					</div>
				</React.Fragment>
			)}
		</div>
	</div>
);

export default MovieInfoBar;
