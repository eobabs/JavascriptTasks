const users = [
    {
        id: 1,
        name: 'Alice',
        age: 25,
        purchases: [ { item: 'Laptop', price: 1200 },{ item: 'Phone', price: 800 } ]
    },
    {
        id: 2,
        name: 'Bob',
        age: 30,
        purchases: [ { item: 'Tablet', price: 600 }, { item: 'Headphones', price: 200 } ]
    },
    {
        id: 3,
        name: 'Charlie',
        age: 35,
        purchases: [{ item: 'Monitor', price: 300 }, { item: 'Keyboard', price: 100 }, { item: 'Mouse', price: 50 } ]
    },
];


const extractOlderThanTwentyEight = function (users) {
    let result = []
    const olderPeople = users.filter(person => person.age > 28);

    olderPeople.forEach((person) => {
        let personName = person.name
        result.push(personName)
    })
    return result
}

function getTotalSpent(users){
    return users.map(person => ({
        id: person.id,
        name: person.name,
        age: person.age,
        purchases: person.purchases,
        totalSpent: person.purchases.reduce((total, item) => total + item.price, 0)
    }))
}

function getNameAndTotalSpending(users){
    return users.map(person => ({
        name: person.name,
        totalSpent: person.purchases.reduce((total, item) => total + item.price, 0)
    }))
}

function findMostExpensiveItem(users) {
    let mostExpensiveItem = null;

    users.forEach(person => {
        person.purchases.forEach(item => {
            if (!mostExpensiveItem || item.price > mostExpensiveItem.price) {
                mostExpensiveItem = item;
            }
        });
    });

    return mostExpensiveItem;
}









module.exports = {extractOlderThanTwentyEight, getTotalSpent, findMostExpensiveItem, getNameAndTotalSpending};


