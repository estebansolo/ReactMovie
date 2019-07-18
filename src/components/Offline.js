import React, { useState, useEffect } from 'react';

const Offline = ({ children }) => {
	const [ online, setOnline ] = useState(navigator ? navigator.onLine : true);

	useEffect(() => {
		if (!window) return;

		window.addEventListener('online', goOnline);
		window.addEventListener('offline', goOffline);

		return () => {
			window.removeEventListener('online', goOnline);
			window.removeEventListener('offline', goOffline);
		};
	});

	const goOnline = () => setOnline(true);
	const goOffline = () => setOnline(false);

	if (online) return null;
	return <div className="rmdb-tmdb-offline">{children}</div>;
};

export default Offline;
