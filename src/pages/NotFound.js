import React from 'react';
import FontAwesome from 'react-fontawesome';
import './styles/NotFound.sass';

const NotFound = () => (
	<div className="rmdb-not-found">
		<FontAwesome className="rmdb-fa" name="frown-o" size="5x" />
		<h1>This page does not exists</h1>
	</div>
);

export default NotFound;
