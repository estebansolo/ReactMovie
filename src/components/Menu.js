import React from 'react';
import SearchBar from './SearchBar';
import './styles/Menu.sass';

const Menu = ({ changeType, callback, text, active }) => (
	<div className="rmdb-menu">
		<div className="rmdb-menu-content">
			<div className="rmdb-menu-content-links">
				<button className={`rmdb-menu-link ${active == 'tv' ? 'active' : ''}`} onClick={() => changeType('tv')}>
					Series
				</button>
				<button
					className={`rmdb-menu-link ${active == 'movie' ? 'active' : ''}`}
					onClick={() => changeType('movie')}
				>
					Peliculas
				</button>
			</div>
			<div className="rmdb-menu-content-search">
				<SearchBar callback={callback} text={text} />
			</div>
		</div>
	</div>
);

export default Menu;
