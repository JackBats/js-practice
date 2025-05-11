import chalk from 'chalk';

const car1 = {
	brand: 'Toyota',
	model: 'Camry',
	year: 2020,
};

const car2 = {
	brand: 'Honda',
	model: 'Civic',
	year: 2019,
};

const car3 = { ...car1, ...car2 };
