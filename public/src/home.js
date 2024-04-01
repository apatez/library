function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter(book => book.borrows.some(borrowed => borrowed.returned === false)).length;
  return borrowedBooks;
}


function getMostCommonGenres(books) {
  let result = {};
  const genres = books.forEach((book) => {
      if (result[book.genre]) {
       result[book.genre]++;
      } else {
       result[book.genre] = 1;
      }
   });
  result = Object.entries(result).map(([name, count]) => { 
    return { name, count } });
  return result.sort((genre1, genre2) => genre2.count - genre1.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  let result = {};
  for (const book of books){
    const title = book.title;
    if(result[title]){
      result[title] += book.borrows.length
    } else {
      result[title] = book.borrows.length
    }
  };
  const popularBooks = [];
  for (const title in result) {
    popularBooks.push({ name: title, count: result[title] });
  };
  const final = popularBooks.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
  console.log(final);
  return final;
}
 

function getMostPopularAuthors(books, authors) {
  let result = {};
  for (const book of books) {
    const authorId = book.authorId;
    result[authorId] = book.borrows.length;
  }

  const popularAuthors = [];
  for (const authorId in result) {
    const author = authors.find(author => author.id === Number(authorId));
    if (author) {
      popularAuthors.push({
        name: `${author.name.first} ${author.name.last}`,
        count: result[authorId]
      });
    }
  }
  return popularAuthors.sort((nameA, nameB) => nameB.count - nameA.count).slice(0, 5);
}
  

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
