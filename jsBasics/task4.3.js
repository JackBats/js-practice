import chalk from "chalk";

let radius = 5.3;
let height = 10.2;
let volume = (Math.PI * Math.pow(radius, 2) * height).toFixed(2);

console.log("Radius of the cylinder is: " + chalk.green(radius));
console.log("Height of the cylinder is: " + chalk.green(height));
console.log("Volume of the cylinder with " + radius + " and " + height + " is " + chalk.green(volume));