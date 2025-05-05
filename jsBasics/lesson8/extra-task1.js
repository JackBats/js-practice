import chalk from 'chalk';

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

function average(array) {
	if (array.length === 0) {
		return 0;
	} else {
		const sum = array.reduce((acc, curr) => acc + curr, 0);
		return sum / array.length;
	}
}

console.log(chalk.blue('Average of numbers: ' + average(numbersList)));
