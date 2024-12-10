const Queues= require("./Queues");

test("test that queue function works", () =>{
    let myQueue = new Queues(5);
    myQueue.enqueue(5);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    let result = myQueue.length();
    let expected = 3
    expect(result).toEqual(expected);
})

test("test that dequeue function works", () =>{
    let myQueue = new Queues(5);
    myQueue.enqueue(5);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    let result = myQueue.length();
    myQueue.dequeue();
    let length = myQueue.length()
    let expected = 2
    expect(length).toEqual(expected);
})

test("test that isEmpty function works", () =>{
    let myQueue = new Queues();
    myQueue.enqueue(5);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    let firstCheck = false
    expect(myQueue.isEmpty()).toBe(firstCheck);
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    let result = myQueue.isEmpty();
    let expected = true
    expect(result).toEqual(expected)
})


test("test that front function works", () =>{
    let myQueue = new Queues(5);
    myQueue.enqueue(5);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    let result = myQueue.front();
    let expected = 5
    expect(result).toEqual(expected);
})