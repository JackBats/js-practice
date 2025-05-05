import { Book } from './Book.js';

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
