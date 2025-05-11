import chalk from 'chalk';

const users = [
	{
		name: 'John',
		age: 30,
		email: 'test@test.com',
	},
	{
		name: 'Jane',
		age: 25,
		email: '',
	},
	{
		name: 'Bob',
		age: 35,
		email: 'bobTester@test.com',
	},
];

for (const { name, age, email } of users) {
	console.log(chalk.blue(`Name: ${name}`), chalk.yellow(`Age: ${age}`), chalk.red(`Email: ${email}`));
}
