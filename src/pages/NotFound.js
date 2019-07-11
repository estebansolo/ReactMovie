import React from 'react';
import FontAwesome from 'react-fontawesome';

const NotFound = () => (
	<div className="d-flex flex-column align-items-center mt-5">
		<FontAwesome className="rmdb-fa" name="frown-o" size="5x" />
		<h1 className="mt-3">This page does not exists</h1>
	</div>
);

export default NotFound;
