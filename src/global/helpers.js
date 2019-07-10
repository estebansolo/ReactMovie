import { IMAGE_BASE_URL, POSTER_SIZE } from './config';

// Convert time to hours and minutes
export const calcTime = (time) => {
	const hours = Math.floor(time / 60);
	const mins = time % 60;
	return `${hours}h ${mins}m`;
};

// Convert a number to $ format
export const convertMoney = (money) => {
	var formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0
	});
	return formatter.format(money);
};

export const getImageUrl = (path) => {
	return path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${path}` : './images/no_image.jpg';
};
