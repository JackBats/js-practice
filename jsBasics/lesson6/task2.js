import chalk from "chalk";

function ageValidation1(age) {
    return age >= 18;
}

console.log(chalk.green("Is 25 adult? " + ageValidation1(25)));
console.log(chalk.red("Is 15 adult? " + ageValidation1(15))); 


function ageValidation2(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

const result1 = ageValidation2(25); 
const result2 = ageValidation2(15); 

console.log(chalk.green("Is 25 adult? " + result1));
console.log(chalk.red("Is 15 adult? " + result2));