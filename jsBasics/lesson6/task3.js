import chalk from 'chalk';

function checkOrder(available, ordered) {
	if (ordered === 0) {
		return 'Your order is empty';
	}

	if (ordered > available) {
		return 'Your order is too large, we don’t have enough goods.';
	}

	return 'Your order is accepted';
}

let order1 = checkOrder(10, 0);
let order2 = checkOrder(5, 7);
let order3 = checkOrder(10, 5);

console.log(chalk.yellow(order1));
console.log(chalk.red(order2));
console.log(chalk.green(order3));
