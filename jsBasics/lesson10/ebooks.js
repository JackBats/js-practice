import { Book } from './Book.js';
import { EBook } from './EBook.js';

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
