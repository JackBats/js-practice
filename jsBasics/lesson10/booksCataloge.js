import { Book } from './Book.js';
import { EBook } from './EBook.js';
import chalk from 'chalk';

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('1984', 'George Orwell', 1949);

console.log(book1);
book1.title = 'Fake Book Title';
book1.author = 'Fake Author';
book1.year = 2025;
book1.printInfo();

console.log(book2);
book2.title = '';
book2.author = '';
book2.year = -34;
book2.printInfo();

console.log(book3);
book3.title = 345;
book3.author = 3552;
book3.year = 2034;
book3.printInfo();

const ebook1 = new EBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'PDF');
const ebook2 = new EBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'EPUB');
const ebook3 = new EBook('1984', 'George Orwell', 1949, 'MOBI');

console.log(ebook1);
ebook1.title = 'Fake Book Title';
ebook1.author = 'Fake Author';
ebook1.year = 2025;
ebook1.fileFormat = 'ABC';
ebook1.printInfo();

console.log(ebook2);
ebook2.title = '';
ebook2.author = '';
ebook2.year = -45;
ebook2.fileFormat = 546;
ebook2.printInfo();

console.log(ebook3);
ebook3.title = 435;
ebook3.author = 4366;
ebook3.year = 2034;
ebook3.fileFormat = 0;
ebook3.printInfo();

const allBooks = [book1, book2, book3, ebook1, ebook2, ebook3];

const oldestBook = Book.findOldestBook(allBooks);

console.log(chalk.blue('Oldest book:'));
oldestBook.printInfo();

const ebook4 = EBook.bookFrom(book2, 'PDF');
console.log(chalk.blue('EBook from Book:'));
ebook4.printInfo();
