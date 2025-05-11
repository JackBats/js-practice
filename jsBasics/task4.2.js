import chalk from 'chalk';

let length = 7.6;
let width = 3.24;
let area = (length * width).toFixed(2);

console.log('Length of the rectangle is: ' + chalk.green(length));
console.log('Width of the rectangle is: ' + chalk.green(width));
console.log('Area of the rectangle with ' + length + ' and ' + width + ' is ' + chalk.green(area));
