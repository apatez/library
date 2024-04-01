// Helper function
function findById (elements, id) {
  return elements.find((element) => element.id === id);
}

function findAccountById(accounts, id) {
 return findById(accounts, id);
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => nameA.name.last < nameB.name.last ? -1 : 1);
  return accounts;
}

function getTotalNumberOfBorrows({ id }, books) {
  return books.reduce((totalBorrowed, { borrows }) => {
  if (borrows.some((record) => record.id === id)) totalBorrowed++;
  return totalBorrowed;
}, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let checkedOut = books.filter((book) => book.borrows.some(borrow => !borrow.returned && borrow.id === account.id));
  let matchAuthor = checkedOut.forEach(book => book['author'] = authors.find(person => person.id === book.authorId));
  return checkedOut;
}
//return an array of book objects currently checked out by this account
//include author information inside
//object nesting
//filter?

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
