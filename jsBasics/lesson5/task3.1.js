import chalk from 'chalk';

const number = 7;

for (let i = 1; i <= 10; i++) {
	console.log(chalk.yellow(`${number} `) + `x` + chalk.cyan(` ${i} `) + chalk.cyan(`= ${number * i}`));
}
