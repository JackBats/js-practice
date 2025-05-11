import chalk from 'chalk';

const numbersList = [4, 10, 14, 2, 4, 5, 43, 34];

function difference(array) {
	if (array.length < 2) {
		console.log(chalk.red('Array must contain at least 2 elements.'));
	} else {
		const max = Math.max(...array);
		const min = Math.min(...array);
		return max - min;
	}
}
console.log(chalk.blue('Difference between max and min: ' + difference(numbersList)));
