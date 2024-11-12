const {checkExcellentScores, addBonusMark, squareNumbers, getAfternoonClasses, distributeBooks, totalExpenses, getDiscountedProducts, filterHealthyItems, getLetterGrades, summarizeFilteredOrders} = require("./ArrayMethods");

test ("Test that Scores are greater than or equal to 70",() => {
    const numbers = [81, 62, 73, 94, 75, 66, 54, 90, 10, 34];
    let result = checkExcellentScores(numbers);
    let answer = [81, 73, 94, 75, 90];
    expect(result).toEqual(answer);
})

test("add bonus to each score", ()=> {
    const numbers = [85, 92, 78, 88, 95];
    let result = addBonusMark(numbers);
    let answer = [90, 97, 83, 93, 100];
    expect(result).toEqual(answer);
})

test("square each number", ()=> {
    const numbers = [5, 2, 7, 8, 9];
    let result = squareNumbers(numbers);
    let answer = [25, 4, 49, 64, 81];
    expect(result).toEqual(answer);
})

test("test that afternoon classes are returned", ()=>{
    const classTimings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    let result = getAfternoonClasses(classTimings);
    let answer = [ '1:00 PM', '3:00 PM', '5:00 PM' ];
    expect(result).toEqual(answer);
})

test("test that everyone gets a book", ()=>{
    const members = ["Emily", "Jack", "Sophia", "Daniel"]
    const books = ["Chemistry Book", "Geography Book","Java Book", "Psychology Book"]
    let result = distributeBooks(members, books);
    let answer = {Emily: "Chemistry Book",Jack:"Geography Book", Sophia : "Java Book", Daniel: "Psychology Book" }
    expect(result).toEqual(answer);
})

test("test that total expenses is calculated", () =>{
    const expenses = {
        "groceries": 150,
        "dining out": 100,
        "transportation": 50,
        "entertainment": 80
    }
    let result = totalExpenses(expenses);
    let answer = 380
    expect(result).toEqual(answer);
})

test("test that function return discounted prices", ()=>{
    const products = [
        { name: "Laptop", price: 1200 },
        { name: "Phone", price: 600 },
        { name: "Mouse", price: 25 },
        { name: "Monitor", price: 200 }
    ];
    let result = getDiscountedProducts(products);
    let answer = [
            { name: 'Laptop', originalPrice: 1200, discountedPrice: 1080 },
            { name: 'Phone', originalPrice: 600, discountedPrice: 540 },
            { name: 'Monitor', originalPrice: 200, discountedPrice: 180 }
        ];
    expect(result).toEqual(answer);
})

test("test that Amy gets ONLY healthy fruits", ()=>{
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yoghurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
    ];
    const result = filterHealthyItems(shoppingList);
    console.log(result);
    const answer = ["Apples", "Carrots", "Greek Yoghurt"]
    expect(result).toEqual(answer)
})

test ("test that each score produces corresponding grades", () =>{
    const studentScores = [95, 78, 85, 60, 45, 92];
    let result = getLetterGrades(studentScores);
    let answer = [ 'A', 'C', 'B', 'D', 'F', 'A' ]
    expect(result).toEqual(answer);
})

test("test that orders are filtered and summarized ", () =>{
    const orders = [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] },
    ];
    let result = summarizeFilteredOrders(orders)
    let answer = [ { orderId: 1, totalCost: 95 }, { orderId: 3, totalCost: 30 } ]
    expect(result).toEqual(answer)
})