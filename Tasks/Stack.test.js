const Stack= require("./Stack");

test("test that push function works", () =>{
    let myStack = new Stack(3);
    myStack.push(5);
    myStack.push(2);
    let result = myStack.length();
    let expected = 2
    expect(result).toEqual(expected);
})

test("test that pop function works", () =>{
    let myStack = new Stack(3);
    myStack.push(5);
    myStack.push(2);
    myStack.push(3);
    let length = myStack.length()
    myStack.pop();
    let result = myStack.length()
    let expected = 1
    expect(length - result).toEqual(expected);
})

test("test that isEmpty function works", () =>{
    let myStack = new Stack(4);
    myStack.push(5);
    myStack.push(2);
    myStack.push(3);
    myStack.pop();
    myStack.pop();
    myStack.pop();
    let result = myStack.isEmpty();
    let expected = true
    expect(result).toEqual(expected);
})


test("test that peek function works", () =>{
    let myStack = new Stack(4);
    myStack.push(5);
    myStack.push(2);
    myStack.push(3);
    let result = myStack.peek();
    let expected = 3
    expect(result).toEqual(3);
})

// test("Throws exception when size is less than or equal to zero", () => {
//     let size = 0
//     let myStack = () => {
//         new Stack(size)
//     };
//     let errorMessage = "Size must be greater than zero"
//     expect(myStack).toThrowError(errorMessage);
// });