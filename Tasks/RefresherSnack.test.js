const {extractOlderThanTwentyEight, getTotalSpent, findMostExpensiveItem, getNameAndTotalSpending} = require("./RefresherSnack");


test("Test that users above 28 years are filtered out", ()=>{
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

    let result = extractOlderThanTwentyEight(users);
    let answer = ["Bob", "Charlie"];
    expect(result).toEqual(answer)
})

test("Test that total spending is calculated", () =>{
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
    let result = getTotalSpent(users);
    let answer = [
        {
            id: 1,
            name: 'Alice',
            age: 25,
            purchases: [ { item: 'Laptop', price: 1200 },{ item: 'Phone', price: 800 } ],
            totalSpent: 2000
        },
        {
            id: 2,
            name: 'Bob',
            age: 30,
            purchases: [ { item: 'Tablet', price: 600 }, { item: 'Headphones', price: 200 } ],
            totalSpent: 800
        },
        {
            id: 3,
            name: 'Charlie',
            age: 35,
            purchases: [{ item: 'Monitor', price: 300 }, { item: 'Keyboard', price: 100 }, { item: 'Mouse', price: 50 } ],
            totalSpent: 450
        },
    ];
    expect(result).toEqual(answer)
})

test("Most Expensive Item displayed", () =>{
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
    let result = findMostExpensiveItem(users)
    let answer = { item: 'Laptop', price: 1200 }
    expect(result).toEqual(answer)
})

test("Test that total spending is calculated", () =>{
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
    let result = getNameAndTotalSpending(users);
    let answer = [
        {
            name: 'Alice',
            totalSpent: 2000
        },
        {
            name: 'Bob',
            totalSpent: 800
        },
        {
            name: 'Charlie',
            totalSpent: 450
        },
    ];
    expect(result).toEqual(answer)
})