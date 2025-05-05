import chalk from 'chalk';

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];
const mergedArray = firstArray.concat(secondArray);

console.log(chalk.blue('Merged array: ' + mergedArray));
