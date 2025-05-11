import chalk from 'chalk';
import { Book } from './Book.js';

export class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this.fileFormat = fileFormat;
	}
	printInfo() {
		console.log(`${this.title} by ${this.author}, published in ${this.year} year, File format: ${this.fileFormat}`);
	}

	set fileFormat(format) {
		if (typeof format !== 'string' || format.length === 0) {
			console.log(chalk.red('Invalid file format'));
		} else {
			this._fileFormat = format;
		}
	}
	get fileFormat() {
		return this._fileFormat;
	}

	static bookFrom(book, fileFormat) {
		if (!(book instanceof Book)) {
			throw new Error('Provided argument is not a Book instance');
		}
		return new EBook(book.title, book.author, book.year, fileFormat);
	}
}
