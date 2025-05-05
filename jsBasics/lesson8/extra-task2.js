import chalk from 'chalk';

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
function sumOfTwoLowest(arr) {
	const copiedList = [...arr];
	const sortedList = copiedList.slice().sort((a, b) => a - b);
	return sortedList[0] + sortedList[1];
}

const sumOfNumbers = sumOfTwoLowest(numbersList);

console.log(chalk.blue('Original list: ' + chalk.yellow(numbersList)));
console.log(chalk.blue('Sum of two lowest numbers: ' + chalk.yellow(sumOfNumbers)));
