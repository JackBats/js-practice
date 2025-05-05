import chalk from 'chalk';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = array.reduce((acc, curr) => acc + curr, 0);

console.log(chalk.blue('Sum of array elements: ' + sum));
