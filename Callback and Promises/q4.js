
const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ];
  
  function logTitlesInAlphabeticalOrder(titles) {
    const sortedTitles = titles.sort(); 
    console.log("Book Titles in Alphabetical Order:");
    sortedTitles.forEach((title) => {
      console.log(title);
    });
  }
  

  function getBookTitles(booksList, callback) {
    const bookTitles = booksList.map((book) => book.title);
    callback(bookTitles);
  }

  getBookTitles(books, logTitlesInAlphabeticalOrder);
  