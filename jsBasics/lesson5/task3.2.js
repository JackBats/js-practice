import chalk from 'chalk';

const number = 4;
let i = 1;
while(i<=10){
    console.log(chalk.yellow(`${number} `) +  `x` + chalk.cyan(` ${i} `) + chalk.cyan(`= ${number * i}`));
    i++;
}