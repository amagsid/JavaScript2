/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */
 const books = [{
  title: 'The Design of Everyday Things',
  author: 'Don Norman',
  alreadyRead: false
},
{
  title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
},
{
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  alreadyRead: true
}
];

function createBookList(books) {

  let bookList = document.createElement('ul')
  books[0].img = "https://media.s-bol.com/7ov383lj3Rr/550x824.jpg"
  books[1].img = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg"
  books[2].img = "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX396_BO1,204,203,200_.jpg"

  for (let i = 0; i < books.length; i++) {
    let bookP = document.createElement('p');
    let bookItem = document.createElement('li')
    let bookImg = document.createElement('img');
    
    let bookTitleAuthor = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookP.appendChild(bookTitleAuthor);
    bookImg.src = books[i].img;
    bookItem.appendChild(bookP);
    bookItem.appendChild(bookImg);
    bookList.appendChild(bookItem);

  if (books[i].alreadyRead) {
    bookItem.style.backgroundColor = 'green'
  } else {
    bookItem.style.backgroundColor = 'red'
  }

}
  document.body.appendChild(bookList);
}

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);