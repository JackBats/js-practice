import chalk from 'chalk';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const copiedArray = array.filter((num) => num % 2 === 0);

console.log(chalk.blue('Copied array with even numbers: ' + copiedArray));
