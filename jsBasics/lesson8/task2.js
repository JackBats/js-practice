import chalk from "chalk";

const array1 = [1, 2, 3, 4, 5];
let result = array1.map(num => num * array1.indexOf(num));

console.log(chalk.blue("Result: " + result));