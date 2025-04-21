import chalk from "chalk";

const book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
}

const {title, author} = book;
console.log(chalk.blue("Title: ") + chalk.yellow(title));
console.log(chalk.blue("Author: ") + chalk.yellow(author));