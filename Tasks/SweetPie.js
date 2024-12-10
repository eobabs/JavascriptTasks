
function getTotalBorrowedBooks(orders) {
    return orders
        .map(order => ({
            day: order.day,
            totalBooks: order.items.reduce((sum, item) => sum + item.quantity, 0)
        }))

}

function getOnlyNumberOfBooks(books) {
    const numberOfBooks = getTotalBorrowedBooks(books);
    let sum = 0;
    for (let i = 0; i < numberOfBooks.length; i++) {
        sum += numberOfBooks[i].totalBooks; ;
    }
    return sum;
}


// function calculateTotalBooks(books) {
//     const numberOfBooks = getOnlyNumberOfBooks(books);
//     let sum = 0
//     for (const values in numberOfBooks) {
//         sum += numberOfBooks[values]
//     }
//     return sum;
// }

// function getDiscountedProducts(products) {
//     const highPricedProducts = products.filter(product => product.price > 50);
//     return highPricedProducts.map(product => {
//         const discountedPrice = product.price * 0.90;
//         return {
//             name: product.name,
//             originalPrice: product.price,
//             discountedPrice: discountedPrice
//         };
//     });
// }

const borrowedBooks = [
    { day: 1, items: [{ books: "Java Text", quantity: 2 }, { books: "Python", quantity: 3 }] },
    {day: 2, items: [{ books: "JavaScript Texts", quantity: 10 }, { books: "Go Lang textbook", quantity: 23 }] },
    { day: 3, items: [{ books: "C Books", quantity: 1 }] },
];
module.exports = {getTotalBorrowedBooks, getOnlyNumberOfBooks};
// module.exports = {calculateTotalBooks};


console.log(getTotalBorrowedBooks(borrowedBooks))
console.log(getOnlyNumberOfBooks(borrowedBooks))
// console.log(calculateTotalBooks(borrowedBooks))