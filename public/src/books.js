function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book)=>book.borrows[0].returned===false);
  const notBorrowed = books.filter((book)=>book.borrows[0].returned===true);
  const result = [];
  result.push(borrowed,notBorrowed);
  return result;
}

/* filter through the books, check if they have been returned or not
insert returned books into one array
insert checked out books into another arrray
then combine both? 
*/


function getBorrowersForBook(book, accounts) {
    const borrowers = book.borrows.map(transaction => {
        const account = accounts.find(acc => acc.id === transaction.id);
        return { ...account, returned: transaction.returned };
    });

    return borrowers.slice(0, 10);
}
// return all the accounts that have borrowed that specific book
//should show that the book was returned


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
