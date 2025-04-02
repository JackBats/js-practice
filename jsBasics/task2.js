import chalk from 'chalk';

let name1 = "Tester";
let name2 = "Toster";

// String concatenation
let greeting1 = "Hello, " + name1 + " and " + name2 + "!";
console.log(chalk.blue(greeting1));

// Template literals
let greeting2 = `Hello, ${name1} and ${name2}!`;
console.log(chalk.yellow(greeting2));