import chalk from "chalk";

const numbersList = [1,10,14,2,4,5,43,34];
const copiedList = Array.of(numbersList);
const sortedList = copiedList.slice().sort((a, b) => a - b);

console.log(chalk.blue("Original list: " + chalk.yellow(numbersList)));
console.log(chalk.blue("Copied list: " + chalk.yellow(copiedList)));
console.log(chalk.blue("Sorted list: " + chalk.yellow(sortedList)));  