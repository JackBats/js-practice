import chalk from "chalk";

let array1 = [6, 3, 1, 12, 0, 8];

// copy the array and sort it
let sortedArray = [...array1].sort((a, b) => a - b); 

// remove the first and last elements, calculate the sum of the rest
let result = sortedArray.slice(1, -1).reduce((acc, num) => acc + num, 0);

console.log(chalk.blue("Original array: " + array1));
console.log(chalk.green("Sorted array: " + sortedArray));
console.log(chalk.yellow("Sum of all elements except the largest and smallest: " + result));