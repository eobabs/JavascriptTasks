
array = [81, 62, 73, 94, 75, 66, 54, 90, 10, 34];

const checkExcellentScores = (array)=>{
    let result = array.filter((number) => number >= 70)

    return result;
}

console.log(checkExcellentScores(array));

const addBonusMark = (array)=>{
    return array.map((number) => {
        return number + 5
    });
}
console.log(addBonusMark(array));

const squareNumbers = (array)=>{
    let result;
    result = array.map((number) => {
        let answer;
        answer = number * number;
        return answer
    });
    return result;
}
console.log(squareNumbers(array));


const classTimings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
function getAfternoonClasses(classTimings) {
    let result;
    result = classTimings.filter(time => time.includes("PM") && time !== "12:00 PM");
    return result
}

console.log(getAfternoonClasses(classTimings));

members = ["Emily", "Jack", "Sophia", "Daniel"]
books = ["Chemistry Book", "Geography Book","Java Book", "Psychology Book"]
function distributeBooks(members, array) {
    const booksReceived = {};

    for (const member of members) {
        booksReceived[member] = array[members.indexOf(member)];
    }

    return booksReceived;
}

console.log(distributeBooks(members, books));

const expenses = {
    "groceries": 150,
    "dining out": 100,
    "transportation": 50,
    "entertainment": 80
}

function totalExpenses(Expenses) {
    let sum = 0
    for (const values in Expenses) {
        sum += Expenses[values]
    }
    return sum;
}
console.log(totalExpenses(expenses))

function getDiscountedProducts(products) {
    const highPricedProducts = products.filter(product => product.price > 50);
    return highPricedProducts.map(product => {
        const discountedPrice = product.price * 0.90;
        return {
            name: product.name,
            originalPrice: product.price,
            discountedPrice: discountedPrice
        };
    });
}

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 600 },
    { name: "Mouse", price: 25 },
    { name: "Monitor", price: 200 }
];

console.log(getDiscountedProducts(products));

const filterHealthyItems = function(shoppingList) {
    let result = []
    const healthyItems = shoppingList.filter(item => item.isHealthy);

    healthyItems.forEach((item) => {
        let newItem = item.name
        result.push(newItem);
    });
    return result;
};

const shoppingList = [
    { name: 'Apples', category: 'Fruits', isHealthy: true },
    { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
    { name: 'Carrots', category: 'Vegetables', isHealthy: true },
    { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
    { name: 'Greek Yoghurt', category: 'Dairy', isHealthy: true },
    { name: 'Soda', category: 'Beverages', isHealthy: false }
];

filterHealthyItems(shoppingList);

const getLetterGrades = (scores) => {
    return scores.map(score => {
        if (score >= 90) {
            return 'A';
        } else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    });
};

const studentScores = [95, 78, 85, 60, 45, 92];

console.log(getLetterGrades(studentScores))

const orders = [
    { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
    { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
    { id: 3, items: [{ price: 30, quantity: 1 }] },
];

function summarizeFilteredOrders(orders) {
    return orders
        .map(order => ({
            orderId: order.id,
            totalCost: order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }))
        .filter(order => order.totalCost <= 100);
}

console.log(summarizeFilteredOrders(orders));


module.exports = {checkExcellentScores, addBonusMark, squareNumbers, getAfternoonClasses, distributeBooks, totalExpenses, getDiscountedProducts, filterHealthyItems, getLetterGrades, summarizeFilteredOrders};