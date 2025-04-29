import chalk from "chalk";

export class Book {

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log(`${this.title} by ${this.author}, published in ${this.year} year`);
  }

  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) return null;
  
    return books.reduce((oldest, current) => {
      return current.year < oldest.year ? current : oldest;
    });
  }

  set title(bookTitle){
    if (typeof bookTitle !== "string" || bookTitle.length === 0) {
    console.log(chalk.red("Invalid title"));
  } else {
    this._title = bookTitle;
  }
}

  get title() {
    return this._title;
  }

  set author(bookAuthor){
    if (typeof bookAuthor !== "string" || bookAuthor.length === 0) {
      console.log(chalk.red("Invalid author"));
    } else {
      this._author = bookAuthor;
    }
  }
  get author() {
    return this._author;
  }

  set year(bookYear){
    if (bookYear <= 0 || bookYear > new Date().getFullYear()) {
      console.log(chalk.red("Invalid year"));
    } else {
      this._year = bookYear;
    }
  } 

  get year() {
    return this._year;
  }
}


