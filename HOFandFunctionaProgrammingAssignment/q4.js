const ListOfBooks = [
    { title: 'Book 1', author: 'author 1', year: 2005 },
    { title: 'Book 2', author: 'author 2', year: 2015 },
    { title: 'Book 3', author: 'author 3', year: 2008 },
    { title: 'Book 4', author: 'author 4', year: 2012 },
  ];

const list = ListOfBooks .filter(book => book.year >= 2010)
.map(book => ({
  title: book.title,
  author: book.author.toUpperCase(),
}));

console.log(list);