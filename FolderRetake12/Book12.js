class Book {
  // isbn(String) : is a book identifier, for examples, '978-7-888-14362-4', '978-3-16-148410-0'.
  // title (String): is a book title.
  // authors(An array of authors): is book authors. An array contains author objects which each author object stores
  //   - firstname(String): author’s firstname
  //   - lastname(String): author’s lastname
  // For example,  [{ firstname: 'John', lastname: 'Scott' }, { firstname: 'Adam', lastname: 'Kim' } ]
  // ebook(Boolean) : indicates whether book has e-book version or not.

  //constructor(isbn, title, ebook): creates a new book object with the provided parameters: isbn, title and ebook.
  //   - If title parameter is undefined or no value passed, you must set title to 'untitled' as a default function parameter.
  //   - If ebook parameter is undefined or no value passed you must set ebook to false as a default function parameter.
  //   - Your constructor must initial authors property to an empty array ([]) without provided parameter.
  constructor(isbn, title = 'untitled', ebook = false) {
    this.isbn = isbn
    this.title = title
    this.ebook = ebook
    this.authors = []
  }
  //   addAuthor(fn, ln): creates an author object by assigning the firstnameproperty with the provided parameter named fnand the lastnameproperty with the provided parameter named ln. Then adding it to the end of authors array. You must return the new length of the authorsarray.
  addAuthor(fn, ln) {}
  // getFirstAuthor() : returns the first author object of book, if no author then returns undefined.
  getFirstAuthor() {}
  //   getCoAuthors(): returns array of all authors except the first author, if no co-author, returns an empty array ([]).
  getCoAuthors() {}
  //   findAuthor(firstname, lastname): returns the first author object that matches both firstnameand lastnameparameters (case insensitive). If no author matches, undefined is returned.
  findAuthor(firstname, lastname) {}
  // hasEbook() : returns the ebookproperty’ s value.
  hasEbook() {}
}

const bk1 = new Book()
console.log(bk1)
const bk2 = new Book('1-234-567-8', 'Introduction to JavaScript', true)
console.log(bk2)
//object literals
const bk3 = {
  id: 1,
  bookTitle: 'JS Beginner',
  price: 500,
  author: { firstname: 'John', lastname: 'Dee' }
}
console.log(bk3)
const bk4 = {
  isbn: '333-222-444',
  name: 'Advanced JS',
  author: 'Somchai Jaidee'
}
console.log(bk4)
