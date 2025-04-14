import chalk from "chalk";

// Function declaration
function areaOfRectangleDec(width, height) {
    return width * height;
}
const area = areaOfRectangleDec(5, 10);
console.log(chalk.green("Area of rectangle: " + area));

// Expression function
const areaOfRectangleExp = function (width, height) {
    return width * height;
}
const area2 = areaOfRectangleExp(5, 10);
console.log(chalk.blue("Area of rectangle: " + area2));

// Arrow function
const areaOfRectangleArrow = (width, height) => {
    return width * height;
}
const area3 = areaOfRectangleArrow(5, 10);
console.log(chalk.red("Area of rectangle: " + area3));