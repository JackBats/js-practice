import chalk from 'chalk';

let radius = 5;
let area = (Math.PI * Math.pow(radius, 2)).toFixed(2);

console.log('Radius of the circle is: ' + chalk.green(radius));
console.log('Area of the circle with ' + radius + ' is ' + chalk.green(area));
