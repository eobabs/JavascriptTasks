const {getTotalBorrowedBooks, getOnlyNumberOfBooks} = require("./SweetPie");
// const {calculateTotalBooks} = require("./SweetPie");

test("test that books are filtered and added each day ", () =>{
    const borrowedBooks = [
        { day: 1, items: [{ books: "Java Text", quantity: 2 }, { books: "Python", quantity: 3 }] },
        {day: 2, items: [{ books: "JavaScript Texts", quantity: 10 }, { books: "Go Lang textbook", quantity: 23 }] },
        { day: 3, items: [{ books: "C Books", quantity: 1 }] },
    ];
    let result = getTotalBorrowedBooks(borrowedBooks)
    let answer = [ { day: 1, totalBooks: 5 }, { day: 2, totalBooks: 33 }, { day: 3, totalBooks: 1 } ];
    expect(result).toEqual(answer)
})


test("test that total books borrowed are counted ", () =>{
    const borrowedBooks = [
        { day: 1, items: [{ books: "Java Text", quantity: 2 }, { books: "Python", quantity: 3 }] },
        {day: 2, items: [{ books: "JavaScript Texts", quantity: 10 }, { books: "Go Lang textbook", quantity: 23 }] },
        { day: 3, items: [{ books: "C Books", quantity: 1 }] },
    ];
    let result = getOnlyNumberOfBooks(borrowedBooks)
    let answer = 39
    expect(result).toEqual(answer)
})
